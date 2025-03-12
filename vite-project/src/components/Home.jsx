import React from "react";

const Home = () => {
  return (
    <div 
      className="flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("pexels-jplenio-1103970.jpg")',
      }}
    >
      <h1 className="text-3xl font-bold text-white bg-black bg-opacity-50 p-4 rounded">Welcome to User Dashboard</h1>
    </div>
  );
};

export default Home;