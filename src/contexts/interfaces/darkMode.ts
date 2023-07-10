export interface DarkModeContextValue {
    darkMode: boolean
    setDarkMode:React.Dispatch<React.SetStateAction<boolean>>
}


export const initialContextValue: DarkModeContextValue = {
    darkMode:false,
    setDarkMode:() => {}
};