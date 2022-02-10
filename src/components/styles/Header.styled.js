import styled from "styled-components";

export const StyledHeader = styled.header`
min-width: 100%;
padding:1rem 0.5rem;
box-shadow: 0 5px 7px -7px #333333;

`
export const Logo = styled.div`


&> span{
    color: ${({theme})=> theme.colors.secondColor};
    font-size: 1.5rem;
}
`

export const StyledNavBar = styled.nav`
position: absolute;
left:0;
top:5rem;
width: 100%;


text-align: center;

&> div > li{
    background: #4444;
    width: calc(100% - 0.7rem);
    padding: 10px;
    list-style: none;
    border-radius: 5px;

    &>a{
        color: #333333;
        
    }

    &:hover{
        background: ${({theme:{colors}})=> colors.secondColor};
    }

}

`
export const StyledIconContainer = styled.div`

&> button{
    position: relative;
    margin-right: 5px;
    
}
`

export const StyledSearchBars = styled.div`
    position: absolute;
    top: 5rem;
    left: 0;
    min-width: 100%;
    background: #4444;
    padding: 2rem 0.5rem;

    &> input{
        
        width: calc(100% - 3rem);
        height: 1.8rem;
        border-top:none ;
        border-right:none ;
        border-left:none ;
        background: none;
        
        font-weight: 600;
        outline: none;
    }

    &> button{
        position: absolute;
        right: 0;
        top: 0;
        background: none;
        font-size: 1.5rem;
        cursor: pointer;

        &:hover{
            color: red;
        }
    }

    &> div{
        position:absolute;
        right: 60px;
       top: 35px;
       cursor: pointer;

      
    }
    
`