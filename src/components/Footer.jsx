import SocialLinks from "src/components/SocialLinks";

function Footer() {
  return (
    <div className="relative z-20 px-[20px] py-[30px] w-full bg-[url('https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg')] bg-no-repeat bg-cover">
      <p className="text-center text-lg text-white">FOLLOW STAR WARS</p>
      <div className="w-full flex justify-center mt-[20px]">
        <SocialLinks />
      </div>
      <p className="text-sm text-white text-center mt-[25px]">
        TM & © Lucasfilm Ltd. All Rights Reserved
      </p>
      <div className="flex w-full text-white flex-wrap mt-[20px]">
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Terms of Use
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Additional Content Information
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Privacy Policy
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Children's Online Privacy Policy
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Your California Privacy Rights
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Star Wars at shopDisney
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Star Wars Helpdesk
        </a>
        <a
          className="py-0.5 px-[10px] border-r-2 border-white block"
          href="/"
          target="_blank"
        >
          Interest-Based Ads
        </a>
        <a className="py-0.5 px-[10px] block" href="/" target="_blank">
          Do Not Sell My Info
        </a>
      </div>
    </div>
  );
}
export default Footer;
