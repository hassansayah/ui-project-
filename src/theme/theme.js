import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    "typography": {
        "fontFamily": "\"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
        "fontSize": 14,
        "h1": {
            "fontSize": "6rem"
        },
        "h2": {
            "fontSize": "3.75rem"
        }
    },
    "palette": {
        "tonalOffset": 0.2,
        "background": {
            "default": "#FFF",
            "emphasis": "#E8EAF6",
            "secondary": "#C5CAE9",
            "header": "#121037"
        },
        "text": {
            "primary": "#1A237E",
            "secondary": "#5C6BC0",
            "hint": "#9FA8DA"
        },
        "primary": {
            "main": "#304FFE",
            "light": "#536DFE",
            "dark": "#1A237E"
        },
        "secondary": {
            "main": "#FFAB00",
            "light": "#ffd740",
            "dark": "#ff8f00"
        },
        "contrastThreshold": 1.8
    },
    "breakpoints": {
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 960,
            "lg": 1900,
            "xl": 1920
        }
    },
    "shadows": [
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none",
        "none"
    ]
});

export default theme;

