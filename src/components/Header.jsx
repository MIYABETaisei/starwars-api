import Link from "next/link";
import { useState } from "react";
import SocialLinks from "src/components/SocialLinks";

function Header() {
  const [text, setText] = useState("");
  return (
    <div className="px-[30px] flex justify-between items-center w-full fixed z-20 h-[170px] top-0 left-0 bg-[url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg')]">
      <div className="h-full pt-[30px]">
        <SocialLinks />
      </div>
      <Link href="/">
        <a className="">
          <img
            className="h-[180px] invert brightness-0"
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </a>
      </Link>
      <div className="h-full pt-[30px]">
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
        <div className="w-full mt-[10px] text-headerAction-color flex items-center justify-end">
          <button className="bg-transparent font-bold border-none text-lg cursor-pointer ease-linear duration-200 tracking-[2px] hover:text-[#ccc]">
            LOG IN
          </button>
          <span className="text-[#343434] text-base font-medium tracking-[2px]">
            //
          </span>
          <button className="bg-transparent font-bold border-none text-lg cursor-pointer ease-linear duration-200 tracking-[2px] hover:text-[#ccc]">
            LOG OUT
          </button>
        </div>
      </div>
    </div>
  );
}
export default Header;
