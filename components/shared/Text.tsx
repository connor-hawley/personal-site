import { Text as Base } from 'rebass'
import styled from 'styled-components'

const CustomText = (props) => (
  <Base
    {...props}
    py={2}
    fontSize={[2, 2, 3]}
  />
)

const StyledText = styled(CustomText)`
`;

export default (props) => (<StyledText {...props}/>)