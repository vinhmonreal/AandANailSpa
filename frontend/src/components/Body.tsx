

import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import { MyNavBar } from './NavBar';

interface BodyProps {
  navbar: boolean;  
  children: JSX.Element | JSX.Element[];
}

export default function Body({ navbar,children }: BodyProps) {
  return (
    <Container>
        <Stack direction="horizontal">
            {navbar && <MyNavBar/>}
        </Stack>
            {children}
 
    </Container>
  );
}

