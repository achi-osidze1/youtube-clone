import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Content from './components/content/Content';
import Video from './components/video/Video';

function App() {
  return (
    <div className="App">
      <Container>
        <Video/>
        <Content/>
      </Container>
      <style>
        {'body { background-color: #121212; }'}
      </style>
    </div>
  );
}

export default App;
