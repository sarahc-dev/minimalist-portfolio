import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        /* Colors */
        --clr-rgb-dark: 51, 50, 61;
        --clr-dark: rgb(51, 50, 61);
        --clr-white: rgb(255, 255, 255);
        --clr-background: rgb(250, 250, 250);
        --clr-text-field: rgb(234, 234, 235);
        --clr-button: rgb(32, 58, 76);
        --clr-highlight: rgb(95, 180, 162);
        --clr-error: rgb(244, 48, 47);

        /* Font families */
        --ff-heading: 'Ibarra Real Nova', serif;
        --ff-main: 'Public Sans', sans-serif;
    }

    *, 
    *::before,
    *::after {
        box-sizing: border-box;
    } 

    body, h1, h2, h3, p {
        margin: 0;
    }

    html:focus-within {
        scroll-behavior: smooth;
    }

    img {
        max-width: 100%;
        display: block;
    }

    input,
    button {
        font: inherit;
    }

    button {
        border: none;
        padding: 0;
    }

    body {
        background-color: var(--clr-background);
        color: rgba(var(--clr-rgb-dark), 0.8);
        font-family: var(--ff-main);
        font-size: 1rem;
        line-height: 1.875rem;
        text-rendering: optimizeSpeed; 
    }

    #root {
        min-height: 100vh;
        display: flex;
        flex-direction: column;    
        justify-content: flex-start;  
    }

    h1, h2, h3 {
        font-family: var(--ff-heading);
        color: var(--clr-dark);
        line-height: 2.625rem;
    }

    h1, h2 {
        font-size: 2.5rem;
        font-weight: 700;
        letter-spacing: -0.357143px
    }

    h3 {
        font-size: 2rem;
        font-weight: 400;
        letter-spacing: -0.285714px;
    }

    main {
        padding-inline: 2rem;
        max-width: 35rem;
        margin-inline: auto;
        margin-bottom: auto;
    }

    .sr-only {
        position: absolute; 
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px; 
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
    }

    @media (min-width: 700px) {
        main {
            padding-inline: 2.5rem;
            max-width: 63rem;
        }
        
        .active {
            color: var(--clr-highlight) !important;
        }
    }

    @media (min-width: 1200px) {
        main {
            padding-inline: 10.3125rem;
            max-width: 94rem;
        }

        .hero h1 {
            font-size: 3.125rem;
            letter-spacing: -0.446429px;
            line-height: 3.125rem;
        }
    }

    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }
  
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;

export default GlobalStyle;
