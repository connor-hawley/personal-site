import { Flex } from 'rebass'

export default props => (
  <Flex
    justifyContent='center'
  >
    <Flex
      flexDirection='column'
      width={[1, 1 / 2, 1 / 2]}
      minHeight='100vh'
      {...props}
    />
  </Flex>
)