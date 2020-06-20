import { Flex, Box, Text } from 'rebass'

import FooterCopyright from './FooterCopyright'
import FooterLinks from './FooterLinks'

export default () => (
  <Flex
    px={2}
    justifyContent='center'
    fontSize={[2, 1]}
    flexDirection={['column', 'row']}
  >
    <FooterLinks
      width={[1, 1/2]}
    />
    <Box mx='auto' />
    <FooterCopyright 
      width={[1, 1/2]}
    /> 
  </Flex>
)