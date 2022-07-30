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
    Layer,
    Tag
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
            brand: '#e09f3e',
            background: '#fff3b0',
            placeholder: '#000000',
            items: '#335c67',
            tag: '#540b0e'
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
                "name": "Sprite",
                "strike": true,
                "child": true,
                "slave": false
            }, {
                "name": "7-Up",
                "strike": false,
                "child": true,
                "slave": true
            }, {
                "name": "Jarritos",
                "strike": false,
                "child": false,
                "slave": false
            }
        ]

        return (
            <Box>
                {products.map( (obj, i) => {
                    return <Box direction='row' round='medium' background='items' margin={{horizontal: "medium", vertical: "medium"}} pad={{horizontal: "medium", vertical: "medium"}}>
                        <Box pad={{horizontal: "medium", vertical: "small"}}>
                            <Text>{obj["name"]}</Text>
                        </Box>
                        {obj["strike"]?<Box round='large' background='tag' margin={{horizontal: "medium"}} pad={{horizontal: "medium", vertical: "small"}}>
                            <Text>Active Strike</Text>
                        </Box>:<></>}
                        {obj["child"]?<Box round='large' background='tag' margin={{horizontal: "medium"}} pad={{horizontal: "medium", vertical: "small"}}>
                            <Text>Child Labor</Text>
                        </Box>:<></>}
                        {obj["slave"]?<Box round='large' background='tag' margin={{horizontal: "medium"}} pad={{horizontal: "medium", vertical: "small"}}>
                            <Text>Forced Labor</Text>
                        </Box>:<></>}
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

                <Box pad={{horizontal: "medium", top: "large"}}>
                    {InputBox()}
                </Box>

                <Box pad={{horizontal: "medium", vertical: "medium"}}>
                    {ProductList()}
                </Box>
            </Layer>
        </Grommet>
    )
}

export default ListPage;
