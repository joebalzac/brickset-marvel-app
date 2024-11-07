import { Sets } from "../hooks/useSets";

interface Props {
  set: Sets;
}

const SetCard = ({ set }: Props) => {
  return (
    <>
      <div className="bg-slate-900">
        <div className="flex flex-col">
          <h2>{set.name}</h2>
          <img className="w-full" src={set.image.thumbnailURL} alt={set.name} />
          <h3>{set.pieces}</h3>
          <h4>{set.subtheme}</h4>
        </div>
      </div>
      {console.log("Set:", set)}
      {console.log("Set image data:", set.image)}
    </>
  );
};

export default SetCard;
