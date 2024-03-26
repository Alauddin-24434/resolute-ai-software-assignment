import { IconButton } from '@mui/material';

import './Template.css'

import MenuIcon from '@mui/icons-material/Menu';
import { MoreVert, UnfoldMoreDouble } from '@mui/icons-material';
import blankImage from '../../../images/blank.jpeg'
import partyImage from '../../../images/party.png'
import informationImage from '../../../images/information.png'
const Template = () => {
    return (
        <div className='template_section'>
            <div className='template_top'>
                <div className='template_left'>
                    <span style={{ fontSize: "16px", color: '#202124' }}>Start new form</span>
                </div>
                <div className='template_right'>
                    <div className='gallery_button'>
                        Template gallery
                        <UnfoldMoreDouble />
                    </div>
                    <div>
                        <IconButton>
                        < MoreVert />
                        </IconButton>
                    </div>
                </div>
            </div>
            <div className='template_body'>
                <div className='card'>
                    <img src={blankImage} alt="blankImage"  className='card_image' />
                    <span className='card_title'>Blank</span>
                </div>
                <div className='card'>
                    <img src={partyImage} alt="partyImage" className='card_image' />
                    <span className='card_title'>Party Invite</span>
                </div>
                <div className='card'>
                    <img src={informationImage} alt="informationImage" className='card_image' />
                    <span className='card_title'>Contact Information</span>
                </div>
            </div>
        </div>
    );
};

export default Template;