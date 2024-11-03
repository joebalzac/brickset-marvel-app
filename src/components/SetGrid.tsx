import { Sets } from "../hooks/useSets";
import { Textarea } from "@headlessui/react";
import SetCardContainer from "./SetCardContainer";
import SetCardSkeleton from "./SetCardSkeleton";
import SetCard from "./SetCard";

interface SetGridProps {
  sets: Sets[] | undefined;
  error: string | null;
  isLoading?: boolean;
}

const SetGrid = ({ sets, error, isLoading }: SetGridProps) => {
  const skeletons = [...Array(10).keys()];

  if (error) return <Textarea>{error}</Textarea>;

  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {isLoading
          ? skeletons.map((skeleton) => (
              <SetCardContainer key={skeleton}>
                <SetCardSkeleton />
              </SetCardContainer>
            ))
          : sets?.map((set) => (
              <SetCardContainer key={set.setId}>
                <SetCard set={set} />
              </SetCardContainer>
            ))}
      </div>
    </>
  );
};

export default SetGrid;
