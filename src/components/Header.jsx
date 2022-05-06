import Link from "next/link";
import { useState } from "react";

function Header() {
  const [text, setText] = useState("");
  return (
    <div className="flex justify-center w-full fixed z-20 h-[200px] top-0 left-0 bg-[url('https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars@2x-815223a7aade.jpg')]">
      <Link href="/">
        <a className="">
          <img
            className="h-[180px] invert brightness-0"
            src="https://download.logo.wine/logo/Star_Wars/Star_Wars-Logo.wine.png"
            alt=""
          />
        </a>
      </Link>
    </div>
  );
}
export default Header;
