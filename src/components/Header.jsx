import Link from "next/link";
import { useCallback, useState } from "react";
import SocialLinks from "src/components/SocialLinks";

function Header() {
  const [text, setText] = useState("");
  return (
    <div className="relative z-10">
      <div className="">
        <SocialLinks />
      </div>
      <Link href="/">
        <a>
          <img
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </a>
      </Link>
      <div className="bg-white">
        <div className="">
          <input
            className="border-[2px] border-black"
            type="text"
            placeholder="Search Star Wars"
            onChange={(e) => setText(e.target.value)}
          />
          <img
            src="https://static-mh.content.disney.io/starwars/assets/navigation/icon_search-957a123fdb62.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Header;
