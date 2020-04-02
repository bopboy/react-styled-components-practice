import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
  width:512px;
  margin:0 auto;
  margin-top:4rem;
  border:1px solid black;
  padding:1rem;
`;

const palette = {
  blue: '#228be6',
  gray: '#496057',
  pink: '#f06595'
}

const ButtonGroup = styled.div`
  & + & { margin-top:1rem;}
`

function App() {
  const [dialog, setDialog] = useState(false);
  const onClick = () => {
    setDialog(true);
  }
  const onConfirm = () => {
    console.log('yes');
    setDialog(false);
  }
  const onCancel = () => {
    console.log('no');
    setDialog(false);
  }
  return (
    <ThemeProvider theme={{ palette }}>
      <AppBlock>
        <ButtonGroup>
          <Button size="large">BUTTON</Button>
          <Button color="gray">BUTTON</Button>
          <Button size="small" color="pink">BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline>BUTTON</Button>
          <Button color="gray" outline>BUTTON</Button>
          <Button size="small" color="pink" outline>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button size="large" outline fullWidth>BUTTON</Button>
          <Button color="gray" fullWidth>BUTTON</Button>
          <Button size="large" color="pink" outline fullWidth>BUTTON</Button>
        </ButtonGroup>
        <ButtonGroup>
          <Button color="pink" size="large" onClick={onClick}>삭제</Button>
        </ButtonGroup>
        <Dialog
          title="데이터 삭제" confirmText="YES"
          onCancel={onCancel} onConfirm={onConfirm}
          cancelText="NO" visible={dialog}>
          Really?
        </Dialog>
      </AppBlock>
    </ThemeProvider>
  );
}

export default App;
