import React,{ useState,useEffect }  from "react";
import { NavLink } from "react-router-dom";
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import CloseIcon from '@material-ui/icons/Close';
import '../css/Navbar.css'

function Navbar() {
//const [showbtn, setshowbtn] = useState(false)
const [click, setclick] = useState(false)

const handleClick=()=>{ setclick(!click)}
const closeMobilemenu=()=>{setclick(!click)}

// const showButton = () => {
//   if ( window.innerWidth < 768) {
//     setshowbtn(false);
//   }else{setshowbtn(true);}
// };

// useEffect(() => {
//   showButton();
// }, []);
// window.addEventListener("resize", showButton);
  return (
    <div className="navbar  ">
      <div className="navbar-div ">
        <div className="logo mx-3">
              P
        </div>
         <div className="nav-btn" onClick={handleClick}>
        {click?<CloseIcon className="nav-icon"/> :<FormatAlignRightIcon className="nav-icon"/>}
        </div> 
       
        <div className={click? "navbar_menu active":"navbar_menu"}>
          <div className="nav_item ">
            <NavLink exact to="/" className=" px-3" activeClassName="nav_active" onClick={closeMobilemenu}>
              Home
            </NavLink>
          </div>

          <div className="nav_item ">
            <NavLink to="/About" className=" px-3" activeClassName="nav_active" onClick={closeMobilemenu}>
              About
            </NavLink>
          </div>

          <div className="nav_item ">
            <NavLink to="/Projects" className=" px-3" activeClassName="nav_active" onClick={closeMobilemenu}>
              Projects
            </NavLink>
          </div>
          <div className="nav_item ">
            <NavLink to="/Works" className=" px-3" activeClassName="nav_active"  onClick={closeMobilemenu}>
             Works
            </NavLink>
          </div>
          <div className="nav_item ">
            <NavLink to="/Contact" className=" px-3" activeClassName="nav_active" onClick={closeMobilemenu}>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
