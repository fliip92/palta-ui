import * as React from 'react';
import { multiply, Box, Text, Palta, Button } from 'react-native-palta-ui';
export default function App() {
    const [result, setResult] = React.useState();
    React.useEffect(() => {
        multiply(3, 7).then(setResult);
    }, []);
    return (React.createElement(Palta, null,
        React.createElement(Box, { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", bg: "backgrounds.primary", margin: 10 },
            React.createElement(Text, { color: "black", variant: "large" },
                "Result: ",
                result),
            React.createElement(Text, { color: "black", variant: "medium" },
                "Result: ",
                result),
            React.createElement(Text, { color: "black", variant: "small" },
                "Result: ",
                result),
            React.createElement(Text, { color: "black", variant: "micro", textAlign: "right" }, "asdasdasd asdasd"),
            React.createElement(Box, { borderBottomLeftRadius: 10, borderTopRightRadius: 10, padding: 10, bg: "red.500", shadowColor: 'black', shadowOffset: {
                    height: 3,
                    width: 1,
                }, shadowRadius: 2, shadowOpacity: 1 },
                React.createElement(Text, { color: "white", variant: "micro", fontWeight: "300" },
                    "Result: ",
                    result)),
            React.createElement(Box, { marginTop: 10, width: 1 },
                React.createElement(Button, { variant: "solid", colorScheme: "green" }, "button"),
                React.createElement(Box, { height: 10 }),
                React.createElement(Button, { variant: "outline", colorScheme: "green" }, "button"),
                React.createElement(Box, { height: 10 }),
                React.createElement(Button, { variant: "solid", colorScheme: "blue" }, "button"),
                React.createElement(Box, { height: 10 }),
                React.createElement(Button, { variant: "solid", colorScheme: "grey" }, "button"),
                React.createElement(Box, { height: 10 }),
                React.createElement(Button, { variant: "solid", colorScheme: "red" }, "button")))));
}
