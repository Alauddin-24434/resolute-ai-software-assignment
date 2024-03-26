
import { ArrowDropDown } from '@mui/icons-material';
import { Storage } from '@mui/icons-material';
import { Folder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import './Mainbody.css'
import { MoreVert } from '@mui/icons-material';
import informationImage from '../../../images/information.png'
const Mainbody = () => {
    return (
        <div className='mainbody'>
            <div className='mainbody_top'>
                <div className='mainbody_top_left ' style={{ fontSize: '16px', fontWeight: "500" }}>
                    Recent Forms
                </div>
                <div className='mainbody_top_right'>
                    <div className='mainbody_top_center' style={{ fontSize: '14px', marginRight: "125px" }}>
                        Owned by anyone
                        <ArrowDropDown />
                    </div>
                    < IconButton>
                        <Storage style={{ fontSize: "16px ", color: "black" }} />
                    </IconButton>
                    < IconButton>
                        <Folder style={{ fontSize: "16px ", color: "black" }} />
                    </IconButton>
                </div>
            </div>

            <div className='mainbody_docs'>

                <div className='doc_card'>
                    <img src={informationImage} alt="doc_image" className='doc_image' />
                    <div className='doc_card_content'>
                        <h5 style={{ fontSize: "12px ", color: "grey" }}>
                            Opened 15 March, 2024
                        </h5>

                        <div className='doc_content'>
                            <div className='content_left'>
                                <Storage style={{ color: "white", fontSize: "12px ", backgroundColor: "#6E2594", padding: "3px", marginRight: "3px", borderRadius: "2px" }} />

                            </div>
                            < MoreVert style={{ fontSize: "14px ", color: "grey" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mainbody;