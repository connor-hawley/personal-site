import { Text } from 'rebass'

interface ContentDateType {
  date: string
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export default ({ date }: ContentDateType) => {
  const standardDate = new Date(date)

  return (
    <Text
      p={1}
    >
      {`${standardDate.getDate()} ${months[standardDate.getMonth()]}, ${standardDate.getFullYear()}`}
    </Text>
  )
}