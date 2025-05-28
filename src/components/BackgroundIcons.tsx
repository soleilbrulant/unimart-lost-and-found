
import { Clock, Laptop, Pencil, CircleDot, SquareDot } from 'lucide-react';

const BackgroundIcons = () => {
  // Generate many icons with random positions
  const generateIcons = () => {
    const iconTypes = [Clock, Laptop, Pencil, CircleDot, SquareDot];
    const positions = [];
    
    // Create a dense grid of positions
    for (let top = 4; top <= 120; top += 8) {
      for (let left = 4; left <= 64; left += 12) {
        positions.push(`top-${top} left-${left}`);
      }
      for (let right = 4; right <= 64; right += 12) {
        positions.push(`top-${top} right-${right}`);
      }
    }
    
    for (let bottom = 4; bottom <= 120; bottom += 8) {
      for (let left = 4; left <= 64; left += 12) {
        positions.push(`bottom-${bottom} left-${left}`);
      }
      for (let right = 4; right <= 64; right += 12) {
        positions.push(`bottom-${bottom} right-${right}`);
      }
    }
    
    const sizes = ["w-3 h-3", "w-4 h-4", "w-5 h-5", "w-6 h-6"];
    const delays = ["0s", "0.5s", "1s", "1.5s", "2s", "2.5s", "3s", "3.5s", "4s", "4.5s"];
    
    return positions.slice(0, 80).map((position, index) => ({
      Icon: iconTypes[index % iconTypes.length],
      position,
      delay: delays[index % delays.length],
      size: sizes[index % sizes.length]
    }));
  };

  const icons = generateIcons();

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {icons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} text-sage/15 animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <item.Icon className={item.size} />
        </div>
      ))}
    </div>
  );
};

export default BackgroundIcons;
