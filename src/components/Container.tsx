import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`mx-auto max-w-screen-2xl  ${className || ""}`}>
      {children}
    </div>
  );
};

export default Container;
