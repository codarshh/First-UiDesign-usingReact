// import React from "react";
// import Navbar from "./Navbar";
// import Left from "./Left";

// const PageFormat = ({ children }) => {
//   return (
//     <div className="min-h-[100vh] bg-[#212529]">
//       <Navbar />
//       <div className="flex">

//         <div className="w-[250px] flex-shrink-0">
//           <Left />
//         </div>
//         <div className="flex-1 p-6 overflow-auto">
//           {children}
//         </div>

//       </div>

//     </div>
//   );
// };

// export default PageFormat;


import React from "react";
import Navbar from "./Navbar";
import Left from "./Left";

const PageFormat = ({ children }) => {
  return (
    <div className="h-screen flex bg-[#212529] overflow-hidden">

      <div className="w-[14%] min-w-[280px]">
        <Left />
      </div>

      <div className="w-[86%] flex flex-col ">

        <Navbar />
        <div className="flex-1 p-6 overflow-hidden">
          {children}
        </div>

      </div>

    </div>
  );
};

export default PageFormat;