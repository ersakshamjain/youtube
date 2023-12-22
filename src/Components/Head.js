import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/search.Slice";

const Head = () => {
  const [searchQuery, setSearchQuary] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestions] = useState(false);

  const cacheSearch = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    //API CALL
    // console.log(searchQuery);

    // make an api call after ever key press
    // but if the difference between 2 APIS calls is <200ms
    // decline the APi call
    const timer = setTimeout(() => {
      if (cacheSearch[searchQuery]) {
        setSuggestions(cacheSearch[searchQuery]);
      } else {
        getSearchSugestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugestions = async () => {
    console.log("API_CALL - " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 p-5 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="Menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="Youtube"
            src="https://www.levychurchofchrist.org/wp-content/uploads/2019/12/transparent-background-youtube-logo-4-1024x256.png"
          />
        </a>
      </div>

      <div className="flex col-span-10 ml-16 px-10">
        <div>
          <input
            className="bg-gray-50 w-[37rem] border border-gray-400 p-2 rounded-l-full"
            placeholder="Search here"
            type="text"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuary(e.target.value);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="px-5 py-3 border border-gray-400 p-2 rounded-r-full bg-gray-200">
            <img
              alt="search"
              className="h-4 w-4"
              src="https://emojipedia.org/_next/static/media/search-dark.51fa5582.svg"
            />
          </button>
        </div>

        {showSuggestion && (
          <div className="fixed mt-14 bg-white shadow-lg rounded-lg  px-2 w-[37rem] border-gray-100">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="py-2 px-3 shadow-sm hover:bg-gray-200 rounded-lg"
                  onClick={() => setSearchQuary(item)}
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
