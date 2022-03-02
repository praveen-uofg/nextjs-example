import { createTheme, responsiveFontSizes } from "@mui/material/styles";


let theme = createTheme({
    palette: {
        type: 'light',
        primary: {
          main: '#0c69b5',
        },
        secondary: {
          main: '#f50057',
        },
        text: {
            primary: '#232323',
            secondary: '#ffffff',
            disabled: '#6d6e71',
            hint: '#f8f8f8',
            lightGrey: '#cccccc',
            grey: '#797979',
        },
        common: {
            black: '#232323',
            lightBlack: '#232323',
            white: '#ffffff',
            grey: '#797979',
            lightGrey: '#f8f8f8',
            blue: '#2196f3',
            backgroundGrey: '#f3f3f3',
            textLightGrey: '#6B6B6B',
            backgroundLightPurple: '#a4508b',
            backgroundDarkPurple: '#5f0a87',
            linkBlue: '#0645AD',
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
        fontStretch: 'normal',
        fontStyle: 'normal',
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
        fontWeightHeavy: 900,
        h1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 300,
            fontSize: '6rem',
            lineHeight: 1.167,
            letterSpacing: '-0.01562em',
        },
        h2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 300,
            fontSize: '3rem',
            lineHeight: 0.9,
            letterSpacing: '-0.00833em',
        },
        h3: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '2.5rem',
            lineHeight: 1.167,
            letterSpacing: '0em',
        },
        h4: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '2.125rem',
            lineHeight: 1.235,
            letterSpacing: '0.00735em',
        },
        h5: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            fontSize: '1.5rem',
            lineHeight: 1.334,
            letterSpacing: '0em',
        },
        h6: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            fontSize: '1.25rem',
            lineHeight: 1.4,
            letterSpacing: '0.0075em',
        },
        subtitle1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.2,
            letterSpacing: '0.00938em',
        },
        subtitle2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.57,
            letterSpacing: '0.00714em',
        },
        body1: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.5,
            letterSpacing: '0.00938em',
        },
        body2: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '1rem',
            lineHeight: 1.43,
            letterSpacing: '0.01071em',
        },

        button: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 500,
            fontSize: '0.875rem',
            lineHeight: 1.75,
            letterSpacing: '0.02857em',
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 300,
            fontSize: '0.75rem',
            lineHeight: 1.66,
            letterSpacing: '0.03333em',
        },
        overline: {
            fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
            fontWeight: 400,
            fontSize: '0.75rem',
            lineHeight: 2.66,
            letterSpacing: '0.08333em',
            textTransform: 'uppercase',
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;