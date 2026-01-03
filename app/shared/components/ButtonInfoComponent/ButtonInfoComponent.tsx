import { ReactNode } from "react";

export function ButtonInfoComponent(props: { text: string; svg: ReactNode }) {
  const { text, svg } = props;
  return (
    <div
      className="text-text-color-primary inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-primary text-sm font-medium mb-6 bg-background-muted border border-border-color m-3"
      style={{ opacity: 1, transform: "none" }}
    >
      {svg}
      <span>{text}</span>
    </div>
  );
}
