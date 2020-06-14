import Header from '../components/Header'
import {
  Row, Col
} from 'reactstrap'

export default () => {
  return (
    <>
      <Row className='justify-content-center'>
          <Col md='7'>
            <Header />
          </Col>
      </Row>
    </>
  )
}