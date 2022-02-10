import React from 'react';
import { Flex } from './styles/Flex.styled';
import { StyledNavBar } from './styles/Header.styled';

const NavBar = () => {
  return (
     <StyledNavBar>
         <Flex direction={"column"} gap={"7px"}>
         <li><a>Inicio</a></li>
         <li><a>Platos</a></li>
         <li><a>Menu</a></li>
         <li><a>Comentarios</a></li>
         <li><a>Ordenes</a></li>
    </Flex>
     </StyledNavBar>

     
  )
};

export default NavBar;
