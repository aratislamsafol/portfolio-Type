type MenuItemOption = {
    key?: string;
    value?: string[] | [];
}

export type MenuItem = {
    label: string;
    to: string;
    optionsTo?: string[];
    options?: MenuItemOption[];
}
