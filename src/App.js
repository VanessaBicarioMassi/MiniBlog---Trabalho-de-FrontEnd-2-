import React from 'react';
import Post from './components/Post'
import styled from 'styled-components';

const Header = styled.header`
  background-color: #282c34;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

function App() {
  return (
    <>
      <Header>MiniBlog</Header>
      <h1>Posts</h1>
      <Post></Post>
      <footer></footer>
    </>
  );
}

export default App;
