import { useState } from "react";

function HeaderSearch() {
  const [text, setText] = useState("");
  return (
    <div className="w-[248px] bg-headerRight-color relative flex items-center px-[10px] opacity-70 h-[40px] justify-between ease-linear duration-100 focus-within:opacity-100">
      <input
        className="bg-transparent outline-none border-none font-medium text-lg text-white placeholder:opacity-100 placeholder:text-gray"
        placeholder="Search Star Wars"
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <img
        className="object-contain h-[20px]"
        src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
        alt=""
      />
    </div>
  );
}
export default HeaderSearch;
