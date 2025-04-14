# PDF Compressor

A browser-based PDF compression tool that allows you to reduce the size of your PDF files without uploading them to any server. All processing happens right in your browser for enhanced privacy and security.

## Features

- Compress PDF files quickly and easily
- Choose from multiple compression levels
- No file size limits
- Client-side processing - your files never leave your device
- Fast and responsive interface

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository or download it as a ZIP
```bash
git clone https://github.com/yourusername/pdf-compressor.git
cd pdf-compressor
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## How to Use

1. Drag and drop your PDF file onto the upload area or click to select a file
2. Choose a compression level:
   - Low: Lower compression, better quality
   - Medium: Balanced compression and quality
   - High: Higher compression, reduced quality
3. Click the "Compress PDF" button
4. Once processing is complete, download your compressed PDF file

## Build for Production

```bash
npm run build
# or
yarn build
```

## Technology Stack

- [Next.js](https://nextjs.org/) - React framework
- [React](https://reactjs.org/) - UI library
- [pdf-lib](https://pdf-lib.js.org/) - PDF manipulation library
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Tailwind CSS](https://tailwindcss.com/) - For styling

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Privacy

Your privacy is important:
- Files are never uploaded to any server
- All processing happens locally in your browser
- No data is collected about your files
