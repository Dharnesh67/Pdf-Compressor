'use client';

import { CompressionLevel } from '../utils/pdfCompressor';

interface CompressionSettingsProps {
  compressionLevel: CompressionLevel;
  setCompressionLevel: (level: CompressionLevel) => void;
  isProcessing: boolean;
  onCompress: () => void;
}

export default function CompressionSettings({
  compressionLevel,
  setCompressionLevel,
  isProcessing,
  onCompress
}: CompressionSettingsProps) {
  return (
    <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Compression Settings</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Compression Level
          </label>
          <div className="grid grid-cols-3 gap-2">
            <button
              type="button"
              onClick={() => setCompressionLevel('low')}
              className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                compressionLevel === 'low'
                  ? 'bg-blue-100 border border-blue-500 text-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Low
            </button>
            <button
              type="button"
              onClick={() => setCompressionLevel('medium')}
              className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                compressionLevel === 'medium'
                  ? 'bg-blue-100 border border-blue-500 text-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Medium
            </button>
            <button
              type="button"
              onClick={() => setCompressionLevel('high')}
              className={`py-2 px-4 rounded-md text-sm font-medium transition ${
                compressionLevel === 'high'
                  ? 'bg-blue-100 border border-blue-500 text-blue-700'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              High
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            {compressionLevel === 'low' && 'Lower compression, better quality'}
            {compressionLevel === 'medium' && 'Balanced compression and quality'}
            {compressionLevel === 'high' && 'Higher compression, reduced quality'}
          </p>
        </div>
        
        <button
          type="button"
          onClick={onCompress}
          disabled={isProcessing}
          className={`w-full py-2 px-4 rounded-md text-white font-medium transition ${
            isProcessing
              ? 'bg-blue-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isProcessing ? 'Compressing...' : 'Compress PDF'}
        </button>
      </div>
    </div>
  );
} 