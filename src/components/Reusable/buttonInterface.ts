export interface ButtonProps {
    text: string;
    width?: number;
    height?: number;
    bgColor:string;
    color?:string
    onCLick?: () => void
    padding?: string
}