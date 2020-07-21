import { Box } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Link from './StyledLink'

type FooterLink = {
  icon: any;
  url: string;
  label: string;
}

export default ({ icon, url, label }: FooterLink) => (
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