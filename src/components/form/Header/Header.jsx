import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';
import formimage from "../../../images/formimage.png"
import { Apps } from '@mui/icons-material';
import "./Header.css"
const Header = () => {
    return (
        <div className="header">
            <div className="header_info">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <img className='form_image' src={formimage} alt="form_image" />
            </div>
            <div className="header_search">
              <span className='search_icon'>  <Search /></span>
                <input type="text" name="search" placeholder='Search' id="search" />
            </div>
            <div className="header_right">
                <IconButton>
                < Apps></Apps>
                </IconButton>
             
                <img src={formimage} className='header_profile' alt="profile" />
            </div>
        </div>
    );
};

export default Header;