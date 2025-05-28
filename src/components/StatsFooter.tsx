
const StatsFooter = () => {
  const stats = [
    { value: "2.5K+", label: "Active Students" },
    { value: "15+", label: "Partner Universities" },
    { value: "95%", label: "Satisfaction Rate" }
  ];

  return (
    <div className="w-full py-8 border-t border-sage/20 bg-gradient-to-r from-cream to-beige-light/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl md:text-3xl font-playfair font-bold text-forest mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsFooter;
