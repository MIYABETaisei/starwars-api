import CopyRight from "src/components/Footer/CopyRight";
import FooterLinks from "src/components/Footer/Links";
import SocialLinks from "src/components/SocialLinks";

function Footer() {
  return (
    <div className="relative z-20 px-[20px] py-[30px] w-full bg-[url('https://static-mh.content.disney.io/starwars/assets/footer/vader_2-86e8fdb4e26d.jpg')] bg-no-repeat bg-cover">
      <p className="text-center text-lg text-white">FOLLOW STAR WARS</p>
      <div className="w-full flex justify-center mt-[20px]">
        <SocialLinks />
      </div>
      <CopyRight>TM & © Lucasfilm Ltd. All Rights Reserved</CopyRight>
      <FooterLinks />
    </div>
  );
}
export default Footer;
