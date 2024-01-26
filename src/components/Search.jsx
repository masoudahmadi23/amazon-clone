import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

import { useNavigate, createSearchParams } from "react-router-dom";

import { callApi } from "../utils/CallApi";

function Search() {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();

    navigate({
      pathname: "search",
      search: `${createSearchParams({
        category: `${category}`,
        searchTerm: `${searchTerm}`,
      })}`,
    });

    setSearchTerm("");
    setCategory("All");
  };

  const getSuggestions = () => {
    callApi("/data/suggestions.json").then((suggestionsResult) =>
      setSuggestions(suggestionsResult)
    );
  };

  useEffect(() => {
    getSuggestions();
  }, []);

  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclone-yellow rounded">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-[0.65rem] bg-gray-300 border text-black text-xs"
        >
          <option value="All">All</option>
          <option value="Deals">Deals</option>
          <option value="Amazon">Amazon</option>
          <option value="Fashion">Fashion</option>
          <option value="Computers">Computers</option>
          <option value="Home">Home</option>
          <option value="Mobiles">Mobiles</option>
        </select>
        <input
          type="text"
          className="flex grow items-center h-[100%] rounded-l text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={onHandleSubmit} className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] stroke-slate-900 m-auto" />
        </button>
      </div>
      {suggestions && (
        <div className="bg-white text-black absolute z-40 w-full">
          {suggestions
            .filter((suggestion) => {
              const currentSearchTerm = searchTerm.toLowerCase();
              const title = suggestion.title.toLowerCase();
              return (
                currentSearchTerm &&
                title.startsWith(currentSearchTerm) &&
                title !== currentSearchTerm
              );
            })
            .slice(0, 10)
            .map((suggestion) => {
              return (
                <div
                  key={suggestion.id}
                  onClick={() => setSearchTerm(suggestion.title)}
                >
                  {suggestion.title}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
}

export default Search;
