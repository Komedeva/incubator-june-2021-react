import {useState} from "react";
import {ThemeProvider} from "redux"
import {whiteTheme, darkTheme, Themes} from "./GetThemes";

function GetThemes(){
    const [theme, setTheme]= useState("light")
    return(
        <ThemeProvider theme={themes[theme]}>
            <Splash theme={theme} setTheme={setTheme}/>

        </ThemeProvider>
    );
}
export {GetThemes};
<div className >
</div>