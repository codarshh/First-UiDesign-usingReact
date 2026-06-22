import React from "react";

const Card = ({ number, label, icon, bgColor }) => {
  return (
    <div className="card-cont flex flex-col">
    <div className={`w-[280px] text-white rounded overflow-hidden flex flex-col ${bgColor}`}>
      <div className="flex items-start justify-between p-5">
        <div>
          <h2 className="text-4xl font-bold">{number}</h2>
          <p className="mt-1 text-base h-12">{label}</p>
        </div>

        <div className="text-6xl opacity-20">
          {icon}
        </div>
      </div>

      <a
        href="#"
        className="mt-auto text-center py-2 bg-black/10 hover:bg-black/20 transition"
      >
        More Info →
      </a>
    </div>
    </div>
  );
};

export default Card;