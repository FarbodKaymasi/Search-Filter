import JSONDATA from "./MOCK_DATA.json";
import './App.css';
import { useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="mt-8 w-64 h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300"
      />
      <div className="flex flex-wrap justify-center mt-8">
        {JSONDATA.filter((val) => {
          if (searchTerm === "") {
            return val;
          } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
          }
        }).map((val, key) => (
          <div key={key} className="m-4 p-4 bg-white border rounded-md shadow-md">
            <p className="text-lg font-semibold">{val.first_name}</p>
            <p className="text-gray-500">{val.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

