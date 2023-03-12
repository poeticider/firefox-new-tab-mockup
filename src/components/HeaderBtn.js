import React from 'react';
import settingsCog from '../media/images/settings_cog.png';
import '../App.css';

const HeaderBtn = () => {
    
    return(
        <span className="siteHeader">
            <img src={settingsCog} id="settingsCog"></img>
        </span>
    )
 

};

export default HeaderBtn;