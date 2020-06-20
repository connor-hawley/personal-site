import { Box } from 'rebass'
import { useSpring, animated } from 'react-spring'

export default props => {
  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={animation}>
      <Box
        fontSize={[4, 3]}
        px={2}
        py={3}
        {...props}
      />
    </animated.div>
  )
}