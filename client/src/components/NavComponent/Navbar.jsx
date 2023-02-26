import { useDispatch, useSelector } from "react-redux";
import { Badge } from "@mui/material";
import "./Navbar.css"
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../theme";
import { setIsCartOpen } from "../../reduxState/redux";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="main">
      <div className="container"
      >
        <h1
          onClick={() => navigate("/")}
        >
          Game Store
        </h1>
        <div className="icon">
          <SearchOutlined />
          <PersonOutline />
          <Badge
            badgeContent={cart.length}
            color="secondary">
            <ShoppingBagOutlined  onClick={() => dispatch(setIsCartOpen({}))}/>
          </Badge>
          <MenuOutlined />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
