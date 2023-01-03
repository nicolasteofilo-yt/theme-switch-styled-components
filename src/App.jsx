import styled from "styled-components";
import GitHubProfileCard from "./components/GitHubProfileCard";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Container>
      <GitHubProfileCard username="torvalds" />
    </Container>
  );
}

export default App;
