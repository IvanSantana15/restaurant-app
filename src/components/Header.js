import { Logo, StyledHeader, StyledIconContainer } from "./styles/Header.styled";
import { FaBars, FaHeart, FaSearch, FaShoppingCart, FaUtensils } from 'react-icons/fa'
import { Flex } from "./styles/Flex.styled";
import NavBar from "./NavBar";
import { StyledIconButton } from "./styles/button.styled";
import { useEffect, useState } from "react";
import Button from "./Button";
import SearchBars from "./SearchBars";
import useOpen from "../Hooks/useOpen";

const Header = () => {
  const [openMenu, setOpenMenu]= useState(false)
  const [isOpenMenu,,onOpenMenu]= useOpen()
  const [isOpenSearch,onCloseSearch,onOpenSearch]= useOpen()

 
  return (
    <StyledHeader>
      <Flex justify={"space-between"}>
        <Logo>
          <FaUtensils style={{ color: "#46f2c8", fontSize: "1.4rem" }} />
          <span>Resapp</span>
        </Logo>
        {
          isOpenMenu  &&
          <NavBar />
          
        }
        {
          isOpenSearch &&
          <SearchBars onClose={onCloseSearch}/>
        }

        
        
        <StyledIconContainer>

          <Button 
          children={<FaShoppingCart style={{ color: "#2596be", fontSize: "1.4rem" }}/>}
         
          />

          <Button 
          children={<FaHeart style={{ color: "#2596be", fontSize: "1.4rem" }}/>} 
        
          />
          <Button 
          children={<FaSearch style={{ color: "#2596be", fontSize: "1.4rem" }} />}
          onOpen={onOpenSearch}
          />

          <Button 
          children={<FaBars style={{ color: "#2596be", fontSize: "1.4rem" }} />} 
          onOpen={onOpenMenu}
          />
          



          {/* <StyledIconButton>
            <FaShoppingCart style={{ color: "#2596be", fontSize: "1.4rem" }} />
          </StyledIconButton>

          <StyledIconButton>
            <FaHeart style={{ color: "#2596be", fontSize: "1.4rem" }} />
          </StyledIconButton>

          <StyledIconButton>
            <FaSearch style={{ color: "#2596be", fontSize: "1.4rem" }} />
          </StyledIconButton>

          <StyledIconButton onClick={()=> {console.log("hola")}} setOpenMenu={setOpenMenu}>
            <FaBars style={{ color: "#2596be", fontSize: "1.4rem" }} />
          </StyledIconButton> */}

        </StyledIconContainer>
      </Flex>
    </StyledHeader>
  )
};

export default Header;
