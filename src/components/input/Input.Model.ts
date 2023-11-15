export type InputProps ={
    type: "text"| "radio" |"search" |"checkbox"| "number"| "date"| "file" | "color" |"email" |"password" | "textarea";
    placeholder?:string;
    value?: string; 
    className?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// <Input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange}/>