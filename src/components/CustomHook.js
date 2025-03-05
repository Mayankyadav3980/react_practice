import { useState } from "react";


    export const useDarkMode = (initialTheme) => {
        const [ct, setcT] = useState(initialTheme);
        localStorage.setItem("theme", ct);
        const currtheme = localStorage.getItem("theme");
            if(currtheme === 'dark')
            document.getElementById('root').classList.add('darkTheme');

        const setTheme = () => {
            const newTheme = currtheme === "light" ? "dark" : "light";
            
              if (newTheme !== "dark")
                document.getElementById("root").classList.remove("darkTheme");
              else
                 document.getElementById("root").classList.add("darkTheme");
                
            localStorage.setItem("theme",newTheme );
            setcT(newTheme);
        }

        return [ currtheme, setTheme];
    }
