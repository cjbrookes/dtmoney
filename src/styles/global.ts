import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --red: #E52E4D;
    --green: #33CC95;
    --blue: #5429CC;

    --blue-light: #6933FF;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --background: #F0F2F5;
    --shape: #FFFFFF;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// Standard desktop font size = 16px
// reduce to 15px for smaller screen size:

html {
    @media (max-width: 1080px) {
        font-size: 93.75%;
    }

// reduce to 14px for even smaller screen size:
    @media (max-width: 720px) {
        font-size: 87.5%;
    }
}

// "REM" = automatically change font size to screen size

body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}
`