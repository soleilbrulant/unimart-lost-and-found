
const ErrorIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-radial from-pastel-green/30 via-pastel-peach/20 to-transparent rounded-full"></div>
      
      {/* Main laptop illustration */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Halo above laptop */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-4 rounded-full border-4 border-yellow-300 opacity-80 animate-pulse"></div>
          </div>
          
          {/* Laptop base */}
          <div className="w-64 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-lg"></div>
          
          {/* Laptop screen */}
          <div className="w-60 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-4 border-gray-300 -mt-1 relative overflow-hidden">
            {/* Dead screen with X eyes */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center text-white p-4">
              <div className="text-4xl mb-2 text-red-400">✕ ✕</div>
              <div className="text-lg mb-1 text-gray-300">💀</div>
              <div className="text-xs text-center text-gray-400">
                <div className="mb-1">System has died</div>
                <div className="text-xs opacity-60">RIP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorIllustration;
