import React from "react";

const WelcomeBanner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-600">
        Welcome to Grocerific
      </h1>
    </div>
  );
};

export default WelcomeBanner;
