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
    StatusGood
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
            brand: '#335c67',
            background: '#fff3b0',
            placeholder: '#000000',
            items: '#e09f3e',
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
    const [searchFilter, setSearchFilter] = useState<string>();
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/list?page=0&filter=" + searchFilter)
          .then(res => res.json())
          .then(
            (result) => {
                setProducts(result);
            },
            (error) => {
                setError(error);
            }
        )
    }, [searchFilter]);

    useEffect(() => {
        fetch("http://localhost:3001/list?page=0&filter=")
          .then(res => res.json())
          .then(
            (result) => {
                setProducts(result);
            },
            (error) => {
                setError(error);
            }
        )
    }, []);

    const InputBox = () => {
        const handleKeyDown = (event: { key: string; }) => {
          if (event.key === 'Enter') {
            setSearchFilter(input);
          }
        }
      
        return (
          <TextInput
            key="input"
            placeholder="Search for a product"
            value={input}
            onChange={event => {
                setInput(event.target.value);
                setSearchFilter(input);
            }}
            onKeyDown={handleKeyDown}
          />
        );
    }

    const ProductList = () => {

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
                        {!obj["strike"] && !obj["child"] && !obj["slave"]?<Box round='large' margin={{horizontal: "medium"}} pad={{horizontal: "medium", vertical: "small"}}>
                            <StatusGood />
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
