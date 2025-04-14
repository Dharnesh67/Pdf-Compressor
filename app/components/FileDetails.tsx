'use client';

import { formatFileSize } from '../utils/fileHelpers';

interface FileDetailsProps {
  file: File | null;
  compressedSize: number | null;
  originalSize: number | null;
  sizeReduction: number | null;
  onReset: () => void;
  onDownload: () => void;
  isProcessed: boolean;
}

export default function FileDetails({
  file,
  compressedSize,
  originalSize,
  sizeReduction,
  onReset,
  onDownload,
  isProcessed
}: FileDetailsProps) {
  if (!file) return null;

  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">File Details</h2>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 text-red-500 mr-2 mt-0.5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" 
              clipRule="evenodd" 
            />
          </svg>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate">
              {file.name}
            </p>
            <p className="text-sm text-gray-500">
              {formatFileSize(file.size)}
            </p>
          </div>
        </div>
        
        {isProcessed && (
          <>
            <div className="border-t border-gray-200 pt-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Original Size</p>
                  <p className="text-sm font-medium">
                    {originalSize !== null ? formatFileSize(originalSize) : '-'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Compressed Size</p>
                  <p className="text-sm font-medium">
                    {compressedSize !== null ? formatFileSize(compressedSize) : '-'}
                  </p>
                </div>
              </div>
              
              <div className="mt-4">
                <p className="text-sm text-gray-500">Reduction</p>
                <div className="flex items-center">
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${sizeReduction || 0}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {sizeReduction?.toFixed(1)}%
                  </span>
                </div>
              </div>
              
              <div className="flex space-x-3 mt-4">
                <button
                  type="button"
                  onClick={onDownload}
                  className="flex-1 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                >
                  Download
                </button>
                <button
                  type="button"
                  onClick={onReset}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                >
                  Reset
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
} 