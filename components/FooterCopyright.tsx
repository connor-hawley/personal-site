import { Text } from 'rebass'

export default props => {
  const date = new Date()

  return (
    <Text
      p={2}
      fontSize={[3, 2]}
      alignSelf='flex-end'
      {...props}
      textAlign={['left', 'right']}
    >
      © Connor Hawley 2019 - {date.getFullYear()}
    </Text>
  )
}

