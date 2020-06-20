import { useSpring, animated } from 'react-spring'

export default props => {

  const animation = useSpring({ opacity: 1, from: { opacity: 0 } })

  return 
    <animated.div
      style={animation}
      {...props}
    />
}