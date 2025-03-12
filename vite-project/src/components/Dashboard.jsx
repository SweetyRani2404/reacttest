import React, { useState } from "react";
import UserCard from "./UserCard";

const Dashboard = () => {
    const [users] = useState([
      { name: "Sweety Rani", email: "sweety@gmail.com", age: 19 },
      { name: "Aman Singh", email: "amansingh@gmail.com", age: 20 },
      { name: "Raj Ayush", email: "rajayush@gmail.com", age: 21 },
      { name: "Rajesh Kumar", email: "rajeshkumar@gmail.com", age: 22 },
      { name: "Alisha Singh", email: "alishasingh@gmail.com", age: 23 },
    ]);
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">User Dashboard</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {users.map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
        </div>
      </div>
    );
  };

export default Dashboard;