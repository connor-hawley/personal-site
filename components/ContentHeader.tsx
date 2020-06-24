import { Heading } from 'rebass'

export default props => (
  <header>
    <Heading
      px={1}
      py={3}
      fontSize={[5, 4]}
      as='h1'
      {...props}
    />
  </header>
)