import React, { useState,useMemo } from "react";
import { nthPrime } from "../helper/helper";

// useMemo is a React hook that lets you cache of the results of a calculations between re-renders

const Demo = () => {
  const [text, setText] = useState("");
  const [isDarkTheme, setIsDarkTheme] = useState(false);

 const prime = useMemo(() => nthPrime(text), [text]);

  return (
    <div className={"w-96 h-96 m-4 border border-black" + (isDarkTheme && " bg-gray-900 border-white text-white")}>
     
      <div>
        <button 
        className="m-10 p-2 bg-green-200 text-black"
        onClick={()=>{
            setIsDarkTheme(!isDarkTheme)
        }}>Toggle</button>
      </div>

      <div>
      <input
        className="w-72 border border-black px-2 m-2"
        type="number"
        value={text}
        placeholder="input"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
   </div>

      <div>
        <h1 className="ml-2 mt-4 font-bold text-2xl">nth Prime : {prime}</h1>
      </div>

    </div>
  );
};

export default Demo;
