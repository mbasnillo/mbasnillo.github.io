import React from 'react';
import styled from 'styled-components';

const MenuContainer = styled.button`
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
`;

const Menu = () => {
    return (
        <>
            <MenuContainer className="menu-container">
                <MenuLabel>About Me</MenuLabel>
            </MenuContainer>
            <MenuContainer className="menu-container">
                <MenuLabel>Resume</MenuLabel>
            </MenuContainer>
            <MenuContainer className="menu-container">
                <MenuLabel>LinkedIn</MenuLabel>
            </MenuContainer>
        </>
    );
};

export default Menu;