import { Flex, Box } from 'rebass'

import NavItem from './NavItem'
import Divider from './Divider'

const paths = [
  'about', 'blog'
]

export default () => {
  const NavItems = paths.map((path, idx) => {

    let link = `/${path}`
    if (idx === 0) {
      link = '/'
    }

    return (
      <NavItem
        key={idx}
        text={path.charAt(0).toUpperCase() + path.slice(1)}
        link={link}
      />
    )
  })

  return (
    <>
      <Flex
        px={2}
        alignItems={['flex-start', 'center']}
        fontSize={[4, 3]}
        flexDirection={['column', 'row']}
      >
        <NavItem
          text='Connor Hawley'
          link='/'
        />
        <Box mx='auto' />
        {NavItems}
      </Flex>
      <Divider />
    </>
  )
}