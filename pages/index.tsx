import Header from '../components/Header'
import About from '../components/About'
import { Box, Flex } from 'rebass' 

export default () => {
  return (
    <>
      <Flex 
        justifyContent='center'>
        <Box 
          width={[1/2, 1, 1/2]}
          px={2}>
          <Header />
          <About />
        </Box>
      </Flex>
    </>
  )
}