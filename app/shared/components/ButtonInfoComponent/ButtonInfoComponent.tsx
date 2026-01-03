import { ReactNode } from "react";

export function ButtonInfoComponent(props: { text: string | ReactNode; svg?: ReactNode, icon?:string }) {
  const { text, svg, icon } = props;
  return (
    <div
      className="text-text-color-primary inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6 border border-border-color m-3"
      style={{ opacity: 1, transform: "none" }}
    >
      {icon}
      {svg}
      <span>{text}</span>
    </div>
  );
}
