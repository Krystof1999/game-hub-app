import { ReactNode } from "react";

interface Props {
  header: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ header, children }: Props) => {
  return (
    <div>
      <h1 className=" font-semibold text-gray-400">{header}</h1>
      <div>{children}</div>
    </div>
  );
};

export default DefinitionItem;
