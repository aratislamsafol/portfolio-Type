export type ButtonProps ={
    type: "button"| "reset"| "submit";
    children: string;
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}