import FooterLink from "src/components/Footer/Link";

function FooterLinks() {
  return (
    <div className="flex w-full text-white flex-wrap mt-[20px]">
      <FooterLink url="/" text="Terms of Use" />
      <FooterLink url="/" text="Additional Content Information" />
      <FooterLink url="/" text="Privacy Policy" />
      <FooterLink url="/" text="Children's Online Privacy Policy" />
      <FooterLink url="/" text="Your California Privacy Rights" />
      <FooterLink url="/" text="Star Wars at shopDisney" />
      <FooterLink url="/" text="Star Wars Helpdesk" />
      <FooterLink url="/" text="Interest-Based Ads" />
      <FooterLink url="/" text=" Do Not Sell My Info" />
    </div>
  );
}

export default FooterLinks;
