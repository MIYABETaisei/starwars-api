import Link from "next/link";
import HeaderRight from "src/components/Header/Right";
import SocialLinks from "src/components/SocialLinks";

function Header() {
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
      <HeaderRight />
    </div>
  );
}
export default Header;
