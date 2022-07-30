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

const theme = {
    global: {
        colors: {
        brand: '#809bce',
        background: '#b8e0d2',
        placeholder: '#000000',
        disconnect: '#eb4034',
        connect: '#37eb34',
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
