
import { StyledIconButton } from "./styles/button.styled";


const Button = ({children, onOpen}) => {
  return (
<StyledIconButton onClick={onOpen}>
   {children}
</StyledIconButton>
  )
};

export default Button;
