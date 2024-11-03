import { Sets } from "../hooks/useSets";

interface Props {
  set: Sets;
}

const SetCard = ({ set }: Props) => {
  return (
    <>
      <div>
        <div>
          <h2>{set.name}</h2>
          {/* <img src={set.image.thumbnailUrl} /> */}
          <h3>{set.pieces}</h3>
          <h4>{set.subtheme}</h4>
        </div>
      </div>
      {console.log("Set:", set)}
    </>
  );
};

export default SetCard;
