
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream via-pastel-green/5 to-pastel-peach/5">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-forest mb-6">
            Your Campus
            <br />
            <span className="text-sage">Marketplace</span>
            <br />
            <span className="text-coral">Reimagined</span>
          </h1>
          
          <p className="text-xl text-gray-600 font-inter mb-12 max-w-2xl mx-auto">
            Discover unbeatable deals, connect with fellow students, and make campus life more affordable with UniMart.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="btn-primary">
              Sign Up Free
            </button>
            <button 
              onClick={() => navigate('/404-demo')}
              className="btn-secondary"
            >
              View 404 Demo
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
            <div>
              <div className="text-3xl font-playfair font-bold text-forest mb-1">2.5K+</div>
              <div className="text-sm text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-forest mb-1">15+</div>
              <div className="text-sm text-gray-600">Partner Universities</div>
            </div>
            <div>
              <div className="text-3xl font-playfair font-bold text-forest mb-1">95%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
