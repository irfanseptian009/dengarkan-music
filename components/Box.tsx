import { twMerge } from "tailwind-merge";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ 
  children,
  className
 }) => {
  return ( 
    <div 
      className={twMerge(
        `
		bg-gradient-to-b 
        from-indigo-900
        bg-black
        rounded-lg 
        h-fit 
        w-full
        `, 
        className
      )}>
      {children}
    </div>
  );
}
 
export default Box;