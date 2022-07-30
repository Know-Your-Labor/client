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
            background: '#fff3b0',
            placeholder: '#000000',
            disconnect: '#fff3b0',
        },
        font: {
            size: '18px',
            height: '20px',
        },
    },
};

const AppBar = (props: JSX.IntrinsicAttributes & BoxExtendedProps & { children?: ReactNode; }) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
);

function ListPage() {

    const [input, setInput] = useState<string>();

    const InputBox = () => {
        const handleKeyDown = (event: { key: string; }) => {
          if (event.key === 'Enter') {
            // TODO: apply filter
          }
        }
      
        return (
          <TextInput
            key="input"
            placeholder="Search for a product"
            value={input}
            onChange={event => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
          />
        );
    }

    const ProductList = () => {

        var products = [
            {
                "name": "Product 1"
            }, {
                "name": "Product 2"
            }
        ]

        return (
            <Box>
                {products.map( (obj, i) => {
                    return <Box pad={{horizontal: "medium", vertical: "large"}}>
                        <Text>{obj["name"]}</Text>
                    </Box>
                })}
            </Box>
        )
    }

    return (
        <Grommet theme={theme}>
            <Layer full={true} modal={false} animate={false} background='background'>
                <AppBar>
                    <Heading level='3'>Know Your Labor</Heading>
                    <Nav direction='row'>
                        <Button tip='source code' alignSelf='end' icon={<Github />} onClick={() => window.location.href = "https://github.com/know-your-labor"}/>
                    </Nav>
                </AppBar>

                <Box pad={{horizontal: "medium", vertical: "large"}}>
                    {InputBox()}
                </Box>

                <Box pad={{horizontal: "medium", vertical: "large"}}>
                    {ProductList()}
                </Box>
            </Layer>
        </Grommet>
    )
}

export default ListPage;
