
import { Cat, Mouse, CircleDot, SquareDot } from 'lucide-react';

const BackgroundIcons = () => {
  const icons = [
    { Icon: Cat, position: "top-20 left-16", delay: "0s", size: "w-6 h-6" },
    { Icon: Mouse, position: "top-32 right-20", delay: "1s", size: "w-5 h-5" },
    { Icon: CircleDot, position: "top-48 left-32", delay: "2s", size: "w-4 h-4" },
    { Icon: SquareDot, position: "bottom-32 right-16", delay: "1.5s", size: "w-5 h-5" },
    { Icon: Cat, position: "bottom-48 left-20", delay: "0.5s", size: "w-4 h-4" },
    { Icon: Mouse, position: "top-64 right-32", delay: "2.5s", size: "w-6 h-6" },
    { Icon: CircleDot, position: "bottom-20 right-32", delay: "3s", size: "w-5 h-5" },
    { Icon: SquareDot, position: "top-40 left-8", delay: "1.8s", size: "w-4 h-4" },
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
