
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import ErrorIllustration from "../components/ErrorIllustration";
import StatsFooter from "../components/StatsFooter";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pastel-green/10 to-pastel-peach/10 flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main illustration */}
          <div className="mb-12">
            <ErrorIllustration />
          </div>
          
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-forest mb-6 leading-tight">
            Oops! Looks like you're a little lost.
          </h1>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl text-gray-600 font-inter mb-12 max-w-2xl mx-auto leading-relaxed">
            This page doesn't exist or was moved. Let's get you back on track.
          </p>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => navigate('/')}
              className="btn-primary shadow-lg"
            >
              Back to Home
            </button>
            <button 
              onClick={() => navigate('/shop')}
              className="btn-secondary"
            >
              Start Shopping
            </button>
          </div>
          
        </div>
      </main>
      
      <StatsFooter />
    </div>
  );
};

export default NotFound;
