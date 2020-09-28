import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg';
import './App.css';
import Homepage from './components/Homepage';
import DndTest from './components/DndTest';


const AppWrapper = styled.div`
    display:flex;
    justify-content:center;
  
`;
const Container = styled.div`
`;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }
  render() {
    return (


      <AppWrapper>
        <Container>
          <DndTest></DndTest>
        </Container>
      </AppWrapper>

    );
  }
}

export default App;
