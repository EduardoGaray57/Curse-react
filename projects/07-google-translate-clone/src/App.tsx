import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col,Button } from 'react-bootstrap'

import './App.css'
import { useStore } from './hooks/useStore'
import { AUTO_LANGUAGE } from './constants'
import { ArrowsIcon } from './Components/Icons'
import { LanguageSelector } from './Components/LanguageSelector'

function App() {
  const {fromLanguage, toLanguage, interchangeLanguages, setFromLanguage, setToLanguage} = useStore()
  return (
    <Container fluid>
      <h1>Google Translate</h1>

      <Row>
        <Col>
          <LanguageSelector onchange={setFromLanguage}/>
        </Col>
        <Col>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguages}>
            <ArrowsIcon/>
          </Button>
        </Col>
        <Col>
          <LanguageSelector onchange={setToLanguage}/>
        </Col>
      </Row>
    </Container>
  )
}

export default App
