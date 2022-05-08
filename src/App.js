import { useState } from "react";

import "./App.css";
import Card from "./components/card.component";
import Toggle from "./components/toggle.component";

function App() {
  const [query, setQuery] = useState("");
  const [user, setUser] = useState(null);

  const onHandleChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const onHandleSubmit = async (event) => {
    // event.preventDefault();
    if (!query) return;
    console.log(`https://api.github.com/users/${query}`);

    const response = await fetch(`https://api.github.com/users/${query}`);
    const data = await response.json();
    setUser(data);

    console.log(["submit", data]);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-8/12 px-16">
        <div className="flex item-center justify-between py-2">
          <h1 className="text-2xl text-gray-800 dark:text-white">devfinder</h1>
          <Toggle />
        </div>

        <div className="relative mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={onHandleChange}
            placeholder="Search GitHub username..."
          />
          <button
            onClick={onHandleSubmit}
            className="absolute right-1 top-1 bg-blue-500 hover:bg-blue-700 dark:bg-purple-700 dark:hover:bg-purple-800 focus:ring-4 text-white font-bold py-2 px-4 rounded"
          >
            Search
          </button>
        </div>

        {(!!user) ? <Card user={user} /> : <span className="text-gray-500 dark:text-gray-400">Type a developer username in the input..</span>}
      </div>
    </div>
  );
}

export default App;
