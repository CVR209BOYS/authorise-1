import { useContext } from "react";
import Select from "react-select";
import { MenuContext } from "../../MenuContext";

function Filters({
  genres,
  setGenres,
  languages,
  setLanguages,
  ratingRange,
  setRatingRange,
}) {
  const { categoryList, languageList } = useContext(MenuContext);

  const ratingRangeList = [
    { value: 4, label: "4+" },
    { value: 3, label: "3+" },
    { value: 2, label: "2+" },
    { value: 1, label: "1+" },
  ];

  //   const languageL = languagesList.map((language) => [
  //     { value: language.toLowerCase(), label: language.toLowerCase() },
  //     ...languageList,
  //   ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 pt-6">
      <div className="col-span-1">
        <div className="text-[20px] font-mono font-semibold">Genres</div>
        <div>
          <Select value={genres} onChange={setGenres} options={categoryList} />
        </div>
      </div>
      <div className="col-span-1">
        <div className="text-[20px] font-mono font-semibold">Languages</div>
        <div>
          <Select
            value={languages}
            onChange={setLanguages}
            options={languageList}
          />
        </div>
      </div>
      <div className="col-span-1">
        <div className="text-[20px] font-mono font-semibold">Rating</div>
        <div>
          <Select
            value={ratingRange}
            onChange={setRatingRange}
            options={ratingRangeList}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
