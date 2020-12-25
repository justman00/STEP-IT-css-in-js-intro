import './App.css';
import Header, { StyledButton } from './components/header/Header';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const StyledContainer = styled.div`
  background: red;
`

function App() {
  return (
    <StyledContainer className="App">
      <Header color="red" />
      <div class="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
      <Alert color="primary">A simple primary alert—check it out!</Alert>
      <StyledButton rounded>inside app</StyledButton>
    </StyledContainer>
  );
}

export default App;
