import React from "react";

const UserCard = ({ name, email, age }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 w-64">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-600">Email: {email}</p>
        <p className="text-gray-600">Age: {age}</p>
      </div>
    );
  };

export default UserCard;
  