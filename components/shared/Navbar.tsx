import {
  Navbar as BaseNavbar
} from 'reactstrap'
import styled from 'styled-components'

const Navbar = styled(BaseNavbar)`
  background: ${props => props.theme.colors.snow_white}
`;

export default props => ( <Navbar {...props} />)