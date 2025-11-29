const Card = ({
  title,
  description,
  bgColor = "lightblue",
  onClick,
  width = "400px",
  height = "400px",
}: {
  title: string;
  description: string;
  bgColor: string;
  onClick: () => void;
  width: string;
  height: string;
}) => {
  return (
    <div
      className="flex justify-center items-center flex-col rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer m-0 p-8 shadow-xl hover:shadow-2xl border border-white/10 backdrop-blur-sm"
      style={{ 
        backgroundColor: bgColor, 
        width, 
        height,
        boxShadow: "0 10px 40px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)"
      }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight">
          {title}
        </h3>
        <p className="text-gray-700 text-base leading-relaxed font-medium">
          {description}
        </p>
        <div className="mt-4 px-6 py-2 bg-white/30 rounded-full text-sm font-semibold text-gray-800 backdrop-blur-sm">
          Click to explore →
        </div>
      </div>
    </div>
  );
};

export default Card;
