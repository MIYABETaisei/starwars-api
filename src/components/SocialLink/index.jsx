import Link from "next/link";

function SocialLink(props) {
  return (
    <div className="">
      <Link href="https://www.starwars.com/">
        <a className="h-[21px] w-[21px] group block">
          <img
            className="mx-auto h-[21px] object-contain group-hover:invert group-hover:brightness-0"
            src={props.image}
            alt=""
          />
        </a>
      </Link>
    </div>
  );
}
export default SocialLink;
