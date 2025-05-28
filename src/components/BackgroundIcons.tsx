
import { Cat, CircleDot, SquareDot } from 'lucide-react';

const BackgroundIcons = () => {
  const icons = [
    { Icon: Cat, position: "top-20 left-16", delay: "0s", size: "w-6 h-6" },
    { Icon: Cat, position: "top-32 right-20", delay: "1s", size: "w-8 h-8" },
    { Icon: CircleDot, position: "top-48 left-32", delay: "2s", size: "w-4 h-4" },
    { Icon: SquareDot, position: "bottom-32 right-16", delay: "1.5s", size: "w-5 h-5" },
    { Icon: Cat, position: "bottom-48 left-20", delay: "0.5s", size: "w-4 h-4" },
    { Icon: Cat, position: "top-64 right-32", delay: "2.5s", size: "w-6 h-6" },
    { Icon: CircleDot, position: "bottom-20 right-32", delay: "3s", size: "w-5 h-5" },
    { Icon: SquareDot, position: "top-40 left-8", delay: "1.8s", size: "w-4 h-4" },
    { Icon: Cat, position: "top-16 right-8", delay: "2.2s", size: "w-5 h-5" },
    { Icon: CircleDot, position: "bottom-16 left-12", delay: "0.8s", size: "w-6 h-6" },
    { Icon: Cat, position: "top-80 left-40", delay: "3.5s", size: "w-7 h-7" },
    { Icon: SquareDot, position: "bottom-40 right-8", delay: "1.2s", size: "w-4 h-4" },
    { Icon: Cat, position: "top-96 right-24", delay: "4s", size: "w-5 h-5" },
    { Icon: CircleDot, position: "bottom-64 left-8", delay: "0.3s", size: "w-5 h-5" },
    { Icon: Cat, position: "top-24 left-48", delay: "3.8s", size: "w-6 h-6" },
    { Icon: SquareDot, position: "bottom-80 right-40", delay: "2.8s", size: "w-4 h-4" },
    { Icon: Cat, position: "top-72 left-16", delay: "1.6s", size: "w-8 h-8" },
    { Icon: CircleDot, position: "bottom-56 right-48", delay: "4.2s", size: "w-5 h-5" },
    { Icon: Cat, position: "top-88 right-12", delay: "0.9s", size: "w-6 h-6" },
    { Icon: SquareDot, position: "bottom-24 left-32", delay: "3.2s", size: "w-4 h-4" },
    { Icon: Cat, position: "top-56 left-8", delay: "2.9s", size: "w-7 h-7" },
    { Icon: CircleDot, position: "bottom-72 right-20", delay: "1.4s", size: "w-5 h-5" },
    { Icon: Cat, position: "top-104 left-24", delay: "4.5s", size: "w-5 h-5" },
    { Icon: SquareDot, position: "bottom-88 left-40", delay: "0.6s", size: "w-6 h-6" },
    { Icon: Cat, position: "top-8 right-40", delay: "3.6s", size: "w-4 h-4" },
    { Icon: CircleDot, position: "bottom-8 right-8", delay: "2.1s", size: "w-5 h-5" },
    { Icon: Cat, position: "top-112 right-36", delay: "1.1s", size: "w-6 h-6" },
    { Icon: SquareDot, position: "bottom-96 left-16", delay: "4.8s", size: "w-4 h-4" },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} text-sage/20 animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <item.Icon className={item.size} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
