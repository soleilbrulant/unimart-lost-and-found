
const ErrorIllustration = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background gradient circle */}
      <div className="absolute inset-0 bg-gradient-radial from-pastel-green/30 via-pastel-peach/20 to-transparent rounded-full"></div>
      
      {/* Main illustration */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative">
          {/* Laptop base */}
          <div className="w-72 h-5 bg-gradient-to-r from-gray-300 to-gray-400 rounded-lg shadow-lg"></div>
          
          {/* Laptop screen */}
          <div className="w-64 h-44 bg-gradient-to-br from-gray-800 to-gray-900 rounded-t-lg border-4 border-gray-300 -mt-1 relative overflow-hidden">
            {/* Screen with garbled text */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center text-white p-4">
              <div className="text-xs text-green-400 font-mono mb-2 text-center leading-tight">
                <div>ERROR: System.exe has stopped working</div>
                <div className="text-red-400">Fatal exception 0xC0000005</div>
                <div className="text-yellow-400">Memory access violation</div>
                <div className="text-blue-400 animate-pulse">░░█▓▒░ CRASH ░▒▓█░░</div>
              </div>
              <div className="text-2xl font-bold text-red-500 mt-2 animate-glitch">404</div>
            </div>
          </div>
          
          {/* Big cute panda sitting on keyboard */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-10">
            <div className="relative">
              {/* Panda body */}
              <div className="w-20 h-16 bg-gradient-to-b from-gray-100 to-white rounded-full relative shadow-lg">
                {/* Panda belly */}
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-white rounded-full"></div>
                
                {/* Panda head */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-14 h-12 bg-gradient-to-b from-gray-100 to-white rounded-full">
                  {/* Panda ears (black) */}
                  <div className="absolute -top-3 left-1 w-4 h-4 bg-black rounded-full"></div>
                  <div className="absolute -top-3 right-1 w-4 h-4 bg-black rounded-full"></div>
                  
                  {/* Inner ears (pink) */}
                  <div className="absolute -top-2 left-2 w-2 h-2 bg-pink-300 rounded-full"></div>
                  <div className="absolute -top-2 right-2 w-2 h-2 bg-pink-300 rounded-full"></div>
                  
                  {/* Eye patches (black) */}
                  <div className="absolute top-2 left-1.5 w-3 h-4 bg-black rounded-full transform rotate-12"></div>
                  <div className="absolute top-2 right-1.5 w-3 h-4 bg-black rounded-full transform -rotate-12"></div>
                  
                  {/* Eyes (white with black pupils) */}
                  <div className="absolute top-3 left-2.5 w-2 h-2 bg-white rounded-full">
                    <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-3 right-2.5 w-2 h-2 bg-white rounded-full">
                    <div className="absolute top-0.5 right-0.5 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  
                  {/* Nose */}
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 w-1.5 h-1 bg-black rounded-full"></div>
                  
                  {/* Mouth */}
                  <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-3 h-1 border-b-2 border-black rounded-full"></div>
                </div>
                
                {/* Panda arms */}
                <div className="absolute top-2 -left-2 w-4 h-6 bg-black rounded-full transform rotate-12"></div>
                <div className="absolute top-2 -right-2 w-4 h-6 bg-black rounded-full transform -rotate-12"></div>
                
                {/* Panda legs */}
                <div className="absolute -bottom-2 left-2 w-3 h-4 bg-black rounded-full"></div>
                <div className="absolute -bottom-2 right-2 w-3 h-4 bg-black rounded-full"></div>
                
                {/* Cute blush */}
                <div className="absolute top-1 left-0 w-2 h-1 bg-pink-200 rounded-full opacity-60"></div>
                <div className="absolute top-1 right-0 w-2 h-1 bg-pink-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorIllustration;
