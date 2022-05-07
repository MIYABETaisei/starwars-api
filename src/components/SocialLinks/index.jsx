import Link from "next/link";
import SocialLink from "src/components/SocialLink";

function SocialLinks() {
  return (
    <ul className="flex items-center gap-[20px]">
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_facebook-aec3b685b1a1.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_instagram-be8807d03d5f.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_tumblr-9dbf2f5872a3.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_twitter-bde9a7f5abaa.svg" />
      <SocialLink image="https://static-mh.content.disney.io/starwars/assets/shared/icon_youtube-ed78c6ee1c7d.svg" />
      <ul className="flex h-[28px] items-center pl-[20px] border-l-2 border-[#343434]">
        <li>
          <Link href="https://www.starwars.com/">
            <a className="h-[15px] w-[43px] flex justify-center items-center bg-[#7a7a7a] rounded-[16px] hover:bg-white">
              <img
                className="w-[31px] h-[9px] object-contain"
                src="https://static-mh.content.disney.io/starwars/assets/shared/icon_kids-dc39fc54f6c2.svg"
                alt=""
              />
            </a>
          </Link>
        </li>
      </ul>
    </ul>
  );
}

export default SocialLinks;
