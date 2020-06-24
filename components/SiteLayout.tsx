import { Flex, Box } from 'rebass'

import SiteContainer from './SiteContainer'
import Navbar from './Navbar'
import ContentContainer from './ContentContainer'
import Footer from './Footer'

export default props => (
  <SiteContainer>
    <Navbar />
    <main>
      <ContentContainer
        {...props}
      />
    </main>
    <Box my='auto' />
    <footer>
      <Footer />
    </footer>
  </SiteContainer>
)