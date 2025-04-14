'use client';

import { useState } from 'react';
import Header from './components/Header';
import FileUpload from './components/FileUpload';
import CompressionSettings from './components/CompressionSettings';
import FileDetails from './components/FileDetails';
import { compressPDF, CompressionLevel } from './utils/pdfCompressor';
import { downloadFile } from './utils/fileHelpers';

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [compressedData, setCompressedData] = useState<Uint8Array | null>(null);
  const [compressionLevel, setCompressionLevel] = useState<CompressionLevel>('medium');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isProcessed, setIsProcessed] = useState(false);
  const [originalSize, setOriginalSize] = useState<number | null>(null);
  const [compressedSize, setCompressedSize] = useState<number | null>(null);
  const [sizeReduction, setSizeReduction] = useState<number | null>(null);

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setOriginalSize(selectedFile.size);
    setIsProcessed(false);
    setCompressedData(null);
  };

  const handleCompress = async () => {
    if (!file) return;

    setIsProcessing(true);

    try {
      const result = await compressPDF(file, compressionLevel);
      
      setCompressedData(result.data);
      setCompressedSize(result.data.byteLength);
      setSizeReduction(result.sizeReduction);
      setIsProcessed(true);
    } catch (error) {
      console.error('Error compressing PDF:', error);
      alert('An error occurred while compressing the PDF. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!file || !compressedData) return;
    
    const fileName = file.name.replace('.pdf', '') + '-compressed.pdf';
    downloadFile(compressedData, fileName);
  };

  const handleReset = () => {
    setFile(null);
    setCompressedData(null);
    setIsProcessed(false);
    setOriginalSize(null);
    setCompressedSize(null);
    setSizeReduction(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {!file && (
              <FileUpload onFileSelect={handleFileSelect} />
            )}
            
            {file && (
              <div className="grid md:grid-cols-2 gap-8">
                <FileDetails 
                  file={file}
                  originalSize={originalSize}
                  compressedSize={compressedSize}
                  sizeReduction={sizeReduction}
                  onReset={handleReset}
                  onDownload={handleDownload}
                  isProcessed={isProcessed}
                />
                
                {!isProcessed && (
                  <CompressionSettings
                    compressionLevel={compressionLevel}
                    setCompressionLevel={setCompressionLevel}
                    isProcessing={isProcessing}
                    onCompress={handleCompress}
                  />
                )}
              </div>
            )}
            
            <div className="mt-12 text-center text-sm text-gray-500">
              <p>Your files remain private and secure. Processing happens in your browser.</p>
              <p className="mt-1">No files are uploaded to any server.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
