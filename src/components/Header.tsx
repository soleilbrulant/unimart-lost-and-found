
import { User, ArrowLeft } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full bg-cream/80 backdrop-blur-sm border-b border-sage/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center cursor-pointer transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#ADC7AC] to-[#E4BFA7] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <h1 className="text-2xl font-playfair font-semibold text-black">UniMart</h1>
          </div>
        </div>
        
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-pastel-peach flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow duration-200">
          <User className="w-5 h-5 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
