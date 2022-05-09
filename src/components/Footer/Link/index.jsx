function FooterLink(props) {
  return (
    <a
      className="py-0.5 px-[10px] border-r-2 border-white block"
      href={props.url}
      target="_blank"
      rel="noreferrer"
    >
      {props.text}
    </a>
  );
}

export default FooterLink;
