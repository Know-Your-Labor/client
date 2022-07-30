import { useEffect, useRef, ReactNode } from "react";
import useState from 'react-usestateref';
import {
    Box,
    Button,
    Heading,
    Grommet,
    TextInput,
    Text,
    BoxExtendedProps,
    Nav,
    Layer
} from 'grommet';
import {
    Notes,
    Github,
    Wifi,
    WifiNone,
    MapLocation
} from 'grommet-icons';

/*
dark red: 540b0e
light red: 9e2a2b
dark yellow: e09f3e
light yellow: fff3b0
*/
const theme = {
    global: {
        colors: {
            brand: '#9e2a2b',
            background: '#e09f3e',
            placeholder: '#000000',
            disconnect: '#fff3b0',
        },
        font: {
            size: '18px',
            height: '20px',
        },
    },
};

function DetailPage() {

    return (
        <Grommet theme={theme}>
        </Grommet>
    )
}

export default DetailPage;
