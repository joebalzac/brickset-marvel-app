import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const SetCardContainer = ({ children }: Props) => {
  return (
    <div style={{ overflow: "hidden", borderRadius: "10px" }}>{children}</div>
  );
};

export default SetCardContainer;
