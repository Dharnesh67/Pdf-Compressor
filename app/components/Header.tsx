export default function Header() {
  return (
    <header className="w-full py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            PDF Compressor
          </h1>
          <p className="mt-2 text-lg text-gray-600 max-w-2xl">
            Reduce the size of your PDF files online without losing quality
          </p>
        </div>
      </div>
    </header>
  );
} 