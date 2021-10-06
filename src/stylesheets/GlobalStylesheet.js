import { createGlobalStyle } from "styled-components"

const GlobalStylesheet = createGlobalStyle`
    :root {
        --appBackgroundColor: #F9F9F9;
        --panelBackgroundColor: #FFFFFF;
        --panelSelectedBackgroundColor: #EFEFEF;
        --textColor: #898989;
        --noteBackgroundColor: #FFFFA5;
    }

    body {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        border: 0;
        position: relative;
    }

    ul {
        margin: 0;
        padding: 0;
        border: 0;
    }

    @keyframes loadingAnim {
        from {
            transform: rotate(0deg);
        } 
        to {
            transform: rotate(360deg);
        }
    }
`

export default GlobalStylesheet