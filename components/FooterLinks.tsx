import { Flex, Box } from 'rebass'
import FooterLink from './FooterLink'

const links = [
  {
    icon: ['fab', 'linkedin'],
    url: 'https://www.linkedin.com/in/connor-hawley',
    label: 'connor-hawley'
  },
  {
    icon: ['fab', 'github'],
    url: 'https://github.com/connor-hawley',
    label: 'connor-hawley'
  }, 
  {
    icon: 'envelope',
    url: 'mailto:connor.hawley4@gmail.com',
    label: 'connor.hawley4@gmail.com'
  },
]

export default props => {
  const linkComponents = links.map((link, idx) => (
    <FooterLink 
      key={idx}
      {...link} 
    />
  ))

  return (
    <Flex
      flexDirection='column'
      p={2}
      {...props}
    >
      {linkComponents}
    </Flex>
  )
}