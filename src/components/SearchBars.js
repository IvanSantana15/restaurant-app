import { FaTimes , FaSearch} from "react-icons/fa";
import Button from "./Button";
import { StyledSearchBars } from "./styles/Header.styled";


const SearchBars = ({onClose}) => {
  return (
        <StyledSearchBars>
            <Button  children={<FaTimes/>} onOpen={onClose}/>
            <input type={"text"} placeholder="Buscar un plato" autoFocus={true}/>
            <div>
                <FaSearch style={{ color: "#2596be", fontSize: "1.4rem" }} />
            </div>
        </StyledSearchBars>
  )
};

export default SearchBars;
