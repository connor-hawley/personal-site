import Link from 'next/link'
import { Flex, Box, Text } from 'rebass'

export default () => {
  return (
    <Flex
      px={2}
      alignItems='center'
      color='text_primary'
      fontSize={4}
      style={{
        'border-style': 'solid',
        'border-width': '0px 0px 1px 0px'
      }}
    >
      <Text 
        p={2} 
        fontWeight='bold'
        color='gray'>
        <Link href='/'>
          <a>Connor Hawley</a>
        </Link>
      </Text>
      <Box mx='auto' />
      <Box
        p={3}
      >
        <Link href='/'>
          <a>About</a>
        </Link>
      </Box>
      <Box
        p={3}>
        <Link href='/posts'>
          <a>Blog</a>
        </Link>
      </Box>
    </Flex>
  )
}