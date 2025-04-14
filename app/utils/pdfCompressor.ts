import { PDFDocument } from 'pdf-lib';

export type CompressionLevel = 'low' | 'medium' | 'high';

interface CompressedPDF {
  data: Uint8Array;
  sizeReduction: number;
}

/**
 * Compress a PDF file
 * @param file The PDF file to compress
 * @param compressionLevel The compression level to use
 * @returns The compressed PDF file and size reduction percentage
 */
export async function compressPDF(
  file: File,
  compressionLevel: CompressionLevel
): Promise<CompressedPDF> {
  // Read the PDF file
  const fileBuffer = await file.arrayBuffer();
  const originalSize = fileBuffer.byteLength;
  
  // Load the PDF
  const pdfDoc = await PDFDocument.load(fileBuffer);
  
  // Compression options based on level
  const options = {
    low: { quality: 0.9 },
    medium: { quality: 0.7 },
    high: { quality: 0.5 }
  };
  
  // Create a new PDF document
  const newPdfDoc = await PDFDocument.create();
  
  // Copy pages from the original document to the new one
  const pages = pdfDoc.getPages();
  for (let i = 0; i < pages.length; i++) {
    const [copiedPage] = await newPdfDoc.copyPages(pdfDoc, [i]);
    newPdfDoc.addPage(copiedPage);
  }
  
  // Save with compression settings
  const compressedPdf = await newPdfDoc.save({
    useObjectStreams: true,
    addDefaultPage: false,
    ...options[compressionLevel]
  });
  
  // Calculate size reduction
  const newSize = compressedPdf.byteLength;
  const sizeReduction = ((originalSize - newSize) / originalSize) * 100;
  
  return {
    data: compressedPdf,
    sizeReduction
  };
} 