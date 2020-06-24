import { Flex } from 'rebass'
import Head from './SiteHead'

export default props => (
  <>
    <Head />
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
  </>
)