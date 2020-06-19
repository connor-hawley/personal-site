import { Flex, Card } from 'rebass'
import Text from './shared/Text'
import { useSpring, animated } from 'react-spring'

export default () => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div
      style={animation}>
      <Flex
        flexDirection='column'
        justifyContent='center'
        px={2}
        py={5}>
        <Text>
          Hi, I'm Connor Hawley. Thanks for visiting my site!
        </Text>
        <Card>
          <Text>
            This digital space is where I release my thoughts into the world.
          </Text>
          <Text>
            I've recently been interested in: software design, distributed systems, statistics, and meta-learning.
          </Text>
          <Text>
            For career specific information, please check out my <a href='https://www.linkedin.com/in/connor-hawley'>LinkedIn</a>.
          </Text>
        </Card>
      </Flex>
    </animated.div>

  )
}