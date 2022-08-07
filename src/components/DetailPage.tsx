import { useEffect, useRef, ReactNode } from "react";
import useState from 'react-usestateref';
import { useParams } from "react-router-dom";

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
    PageHeader,
    Anchor,
    Paragraph
} from 'grommet';
import {
    Notes,
    Github,
    Wifi,
    WifiNone,
    MapLocation,
    Medium
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
            tag: '#540b0e',
        },
        font: {
            size: '18px',
            height: '20px',
        },
        hover: {
            background: {
                color: 'tag'
            },
        },
        focus: {
            border: {
                color: 'brand'
            }
        }
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

function DetailPage() {

    const [details, setDetails] = useState<{
        name: string,
        section1: string,
        section2: string,
        url: string
    }>();
    const [controversies, setControversies] = useState([]);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetch("http://localhost:3001/detail?id="+id)
          .then(res => res.json())
          .then(
            (result) => {
                setDetails(result[0]);
            },
            (error) => {
                setError(error);
            }
        );

        fetch("http://localhost:3001/controversies?id="+id)
          .then(res => res.json())
          .then(
            (result) => {
                setControversies(result);
            },
            (error) => {
                setError(error);
            }
        );
    }, []);


    const ControversiesList = () => {

        return (
            <Box overflow='scroll'>
                {controversies.map( (obj, i) => {
                    return <Box flex='grow' direction='column' margin={{horizontal: "medium", vertical: "medium"}} pad={{horizontal: "medium", vertical: "large"}}>
                        <Heading>{obj['title']}</Heading>
                        <Paragraph fill={true}>{obj['text']}</Paragraph>
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

                <Box>
                    <PageHeader margin={{horizontal: "medium", vertical: "small"}}
                        title={details? details["name"]: "Loading"}
                        subtitle={details? details["section1"] + ": " + details["section2"]: "Loading"}
                        parent={<Anchor label="View Data Source" href={details? 'https://en.wikipedia.org'+details["url"]: '#'} />}
                    />


                    <Box overflow='scroll'>
                        {ControversiesList()}
                    </Box>
                </Box>
            </Layer>
        </Grommet>
    )
}

export default DetailPage;
