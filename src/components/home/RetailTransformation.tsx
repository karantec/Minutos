import React from 'react';

// Custom SVG icons instead of lucide-react
const ShoppingBagIcon = () => (
<<<<<<< HEAD
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
=======
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
>>>>>>> origin/master
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
);

const ShoppingCartIcon = () => (
<<<<<<< HEAD
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
=======
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
>>>>>>> origin/master
    <circle cx="9" cy="21" r="1"></circle>
    <circle cx="20" cy="21" r="1"></circle>
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
  </svg>
);

const ZapIcon = () => (
<<<<<<< HEAD
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
=======
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
>>>>>>> origin/master
  </svg>
);

const RetailTransformation = () => {
  const stages = [
    { 
      name: "Traditional Stores", 
      icon: <ShoppingBagIcon />,
      iconClass: "text-gray-700",
      description: "Brick-and-mortar retail experience"
    },
    { 
      name: "E-Commerce", 
      icon: <ShoppingCartIcon />,
      iconClass: "text-blue-600",
      description: "Online shopping with day/week delivery"
    },
    { 
      name: "Q-Commerce", 
      icon: <ZapIcon />,
      iconClass: "text-green-600",
      description: "Sub-hour deliveries reshaping consumer habits"
    }
  ];

  return (
<<<<<<< HEAD
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
=======
    <section className="bg-gradient-to-r from-red-50 to-blue-50 py-12 overflow-hidden">
      <div className="container mx-auto px-4 overflow-x-hidden">
>>>>>>> origin/master
        <h2 className="text-2xl font-bold text-center mb-12 text-red-700">
          Retail Transformation Timeline
        </h2>
        
<<<<<<< HEAD
        {/* Timeline Progress Bar */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-gray-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>
          
          <div className="relative flex justify-between">
            {stages.map((stage, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg z-10 ${stage.iconClass}`}>
                  {stage.icon}
                </div>
                <p className="mt-4 font-bold text-center">{stage.name}</p>
=======
        {/* Timeline Progress Bar - with improved responsive layout */}
        <div className="relative max-w-4xl mx-auto mb-16 px-4">
          {/* Hidden on small screens, visible on medium and up */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-gray-200 transform -translate-y-1/2"></div>
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-2 bg-gradient-to-r from-gray-500 via-blue-500 to-green-500 transform -translate-y-1/2"></div>
          
          {/* Visible on small screens, hidden on medium and up */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 w-2 bg-gray-200 transform -translate-x-1/2"></div>
          <div className="md:hidden absolute top-0 h-full w-2 bg-gradient-to-b from-gray-500 via-blue-500 to-green-500 transform -translate-x-1/2 left-1/2"></div>
          
          {/* Responsive layout that changes from vertical to horizontal based on screen size */}
          <div className="relative flex flex-col md:flex-row md:justify-between space-y-12 md:space-y-0">
            {stages.map((stage, index) => (
              <div key={index} className="flex md:flex-col items-center">
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center shadow-lg z-10 ${stage.iconClass}`}>
                  {stage.icon}
                </div>
                <p className="ml-4 md:ml-0 md:mt-4 font-bold text-sm md:text-base text-left md:text-center">
                  {stage.name}
                </p>
>>>>>>> origin/master
              </div>
            ))}
          </div>
        </div>
<<<<<<< HEAD
        
        
        
=======
>>>>>>> origin/master
      </div>
    </section>
  );
};

export default RetailTransformation;