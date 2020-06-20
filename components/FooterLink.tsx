import { Box } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface FooterLinkType {
  icon: any,
  url: string,
  label: string
}

export default ({ icon, url, label }: FooterLinkType) => (
  <Box
    m={1}
  >
    <a href={url}>
      <FontAwesomeIcon icon={icon} />{` ${label}`}
    </a>
  </Box>
)