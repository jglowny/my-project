import { createTheme } from '@mui/material/styles';
import { red, blueGrey, cyan, pink } from '@mui/material/colors';

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: pink['A200'],
        },
        secondary: {
            main: cyan['A400'],
        },
        background: {
            default: blueGrey['800'],
            paper: blueGrey['700'],
        },
    },
});

export default lightTheme;
