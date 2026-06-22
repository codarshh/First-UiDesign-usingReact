// import React from "react";
// import Card from "./Card";
// import PageFormat from "./PageFormat";

// const Section1 = () => {
//   return (
//     <PageFormat>
//       <div className="mb-6">
//         <h1 className="text-5xl text-white font-light">
//           Dashboard
//         </h1>
//       </div>

//       <div className="grid grid-cols-4 gap-6">

//         <Card
//           number="150"
//           label="New Orders"
//           icon="🛒"
//           bgColor="bg-blue-600"
//         />

//         <Card
//           number="53%"
//           label="Bounce Rate"
//           icon="📊"
//           bgColor="bg-green-600"
//         />

//         <Card
//           number="44"
//           label="User Registrations"
//           icon="👤"
//           bgColor="bg-yellow-500"
//         />

//         <Card
//           number="65"
//           label="Unique Visitors"
//           icon="📈"
//           bgColor="bg-red-500"
//         />

//       </div>

//     </PageFormat>
//   );
// };

// export default Section1;




import React from "react";
import Card from "./Card";
import PageFormat from "./PageFormat";
import ImageContainer from "./ImageContainer";

const Section1 = () => {
  return (
    <PageFormat>

      <h1 className="text-4xl text-white mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-4 gap-6">
        <Card
          number="150"
          label="New Orders"
          icon="🛒"
          bgColor="bg-blue-500"
        />

        <Card
          number="53%"
          label="Bounce Rate"
          icon="📊"
          bgColor="bg-green-500"
        />

        <Card
          number="44"
          label="User Registrations"
          icon="👤"
          bgColor="bg-yellow-500"
        />

        <Card
          number="65"
          label="Unique Visitors"
          icon="📈"
          bgColor="bg-red-500"
        />
      </div>

      <ImageContainer />

    </PageFormat>
  );
};

export default Section1;