import React from 'react';
import './App.css';

import styled from 'styled-components';

import ProfileImage from './images/profile-pic.png';

import AboutMe from './components/AboutMe';

const MainContainer = styled.div`
  height: 100%;
  margin: 0 auto;
`;

const HeaderContainer = styled.div`
  width: 250px;
  height: auto;
  margin: 0 auto;
`;

const HeaderImage = styled.img`
  width: 100%;
  border-radius: 50%;
  margin-top: 50px;
`;

const HeaderTitle = styled.h1`
  font-size: 36px;
  text-align: center;
`;

const MenuContainer = styled.div`
`;

const MenuButton = styled.button`
  width: 300px;
  height: auto;
  background: rgba(54,139,193,0.75);
  margin: 10px auto;
  padding: 10px;
  display: block;
  border: none;
  cursor: pointer;
`;

const MenuLabel = styled.span`
  font-size: 20px;
  font-weight: 500;
  color: #fff;
`;

function App() {

  return (
    <>
      <MainContainer>
        <HeaderContainer className="header-img-container">
          <HeaderImage src={ProfileImage}></HeaderImage>
          <HeaderTitle>Hi, I'm Miles.</HeaderTitle>
        </HeaderContainer>
        
        <MenuContainer className="menu-container">
          <MenuButton>
            <MenuLabel>About Me</MenuLabel>
          </MenuButton>
          <MenuButton>
            <MenuLabel>Resume</MenuLabel>
          </MenuButton>
          <MenuButton>
            <MenuLabel>LinkedIn</MenuLabel>
          </MenuButton>
        </MenuContainer>
      </MainContainer>
    </>
  );
}

export default App;
