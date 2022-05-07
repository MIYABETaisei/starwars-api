import Link from "next/link";

function Character(props) {
  return (
    <div className="ease-linear duration-100 w-[calc(100%/4-10px)] my-3 rounded-[10px] overflow-hidden bg-character-color hover:scale-[1.05]">
      <Link href={`/id/${props.character.id}`}>
        <a className="text-white text-center font-bold text-3xl border-b-2 border-blue-300 mb-2 block">
          <img
            className="w-full h-[380px] object-cover object-top"
            src={props.character.image}
            alt={props.character.name}
          />
        </a>
      </Link>
      <Link href={`/id/${props.character.id}`}>
        <a className="text-white font-bold text-2xl block p-3">
          {props.character.name}
        </a>
      </Link>
    </div>
  );
}

export default Character;
