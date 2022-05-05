function Character(props) {
  return (
    <div className="w-1/3 my-2">
      <h1 className="text-white text-center font-bold text-3xl">
        {props.character.name}
      </h1>
    </div>
  );
}

export default Character;
