import { Card, Box } from 'rebass'
import { useSpring, animated } from 'react-spring'

import ContentDate from './ContentDate'
import Link from './StyledLink'

interface PostCardType {
  id: string,
  date: string,
  title: string,
}

export default ({ id, date, title }: PostCardType) => {
  const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
  const trans = (x, y, s) => `perspective(2000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

  const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 1, tension: 100, friction: 10 } }))

  return (
    <Box
      m={3}
    >
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.to(trans) }}
      >
        <Card
          p={3}
          sx={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderRadius: '10px'
          }}
        >
          <Link
            href="/blog/[id]"
            as={`/blog/${id}`}
            text={title}
          />
          <ContentDate date={date} />
        </Card>
      </animated.div>
    </Box>
  )
}