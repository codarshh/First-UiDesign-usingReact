import React from "react";
import graphImage from "../../assets/graph-img.png";
import worldImage from "../../assets/worldMap-img.png";

const ImageContainer = () => {
  return (
    <div className="img-main flex gap-5 mt-[20px] ">
      <div className="graph h-[400px]">
        <img src={graphImage} alt="Graph" className="h-[390px]"/>
      </div>

      <div className="worldmap h-[400px]">
        <img src={worldImage} alt="World map" className="h-[390px]"/>
      </div>
    </div>
  );
};

export default ImageContainer;
