import { Box } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from './StyledLink'

interface FooterLinkType {
  icon: any,
  url: string,
  label: string
}

export default ({ icon, url, label }: FooterLinkType) => (
  <Box
    m={1}
  >
    <Link 
      href={url}
      text={<><FontAwesomeIcon icon={icon} width='16' style={{marginBottom: '-.3em', marginRight: '.2em'}}/>{` ${label}`}</>}
      anchorOnly={true}
    />
  </Box>
)