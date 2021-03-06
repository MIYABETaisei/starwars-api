import Head from "next/head";
import { useCallback, useState } from "react";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import Character from "src/components/Character";

export default function Characters() {
  const { data, error } = useSWR(
    "https://akabab.github.io/starwars-api/api/all.json",
    fetcher
  );
  const [value, setValue] = useState(12);

  const handleShowMore = useCallback(() => {
    setValue(value + 12);
  }, [value]);

  return (
    <div className="bg-starwars-color">
      <Head>
        <title>Star Wars Characters | StarWars.com</title>
      </Head>
      <div className="bg-starwars-color flex flex-col mt-[170px] pb-[60px] pt-[20px] mx-auto justify-center w-[calc(100%-400px)]">
        <div className="z-10 bg-starwars-color w-full flex justify-between items-start flex-wrap">
          {data
            ?.filter((character) => character.id !== 28 && character.id !== 77)
            ?.map(
              (character, index) =>
                index < value && (
                  <Character
                    character={character}
                    key={character.id}
                  ></Character>
                )
            )}
        </div>
        {value < data?.length && (
          <button
            className="group relative mt-4 box-border ease-linear duration-100 text-white/[.4] font-bold py-2 rounded-sm mx-auto block hover:text-white"
            onClick={handleShowMore}
          >
            <span className="ease-linear duration-100 w-[40%] h-[2px] block absolute left-[50%] bottom-0 translate-x-[-50%] bg-transparent group-hover:w-full group-hover:bg-white"></span>
            SHOW MORE
          </button>
        )}
      </div>
      <div className="z-0 w-[200px] h-screen fixed left-0 top-0 block bg-repeat-y bg-[url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsL-fd4661a3ccea.jpg')]"></div>
      <div className="z-0 w-[200px] h-screen fixed right-0 top-0 block bg-repeat-y bg-[url('https://static-mh.content.disney.io/starwars/assets/background/bg_starsR-655c85e404d4.jpg')]"></div>
    </div>
  );
}
