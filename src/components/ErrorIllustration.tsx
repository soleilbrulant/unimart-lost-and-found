
import { ShoppingCart, Laptop, Cable, Book } from 'lucide-react';

const ErrorIllustration = () => {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-radial from-pastel-green/30 via-pastel-peach/20 to-transparent rounded-full"></div>
      
      {/* Main laptop illustration */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Laptop base */}
          <div className="w-64 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-lg"></div>
          
          {/* Laptop screen */}
          <div className="w-60 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-4 border-gray-300 -mt-1 relative overflow-hidden">
            {/* Blue error screen */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-600 flex flex-col items-center justify-center text-white p-4">
              <div className="text-6xl mb-2">:(</div>
              <div className="text-sm text-center">
                <div className="mb-1">Oops! Something went wrong</div>
                <div className="text-xs opacity-80">Error 404</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating elements around laptop */}
        <div className="absolute -top-8 -right-8">
          <div className="animate-float">
            <ShoppingCart className="w-8 h-8 text-coral transform rotate-12" />
          </div>
        </div>
        
        <div className="absolute -bottom-4 -left-8">
          <div className="animate-float" style={{ animationDelay: '1s' }}>
            <Cable className="w-6 h-6 text-sage transform -rotate-45" />
          </div>
        </div>
        
        <div className="absolute top-12 -left-12">
          <div className="animate-glitch">
            <Book className="w-7 h-7 text-forest transform rotate-6" />
          </div>
        </div>
        
        {/* UniMart logo floating */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="animate-float" style={{ animationDelay: '0.5s' }}>
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-sage to-pastel-green flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">U</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorIllustration;
