import {
  NavItem as BaseNavItem
} from 'reactstrap'
import styled from 'styled-components'

const NavItem = styled(BaseNavItem)`
  margin: .5rem 1rem
`;

export default props => (<NavItem {...props} />)