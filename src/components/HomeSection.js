import React from 'react';
import '../App.css';
import firefoxLogo from '../media/images/firefox_logoTxt.png';
import gLogo from '../media/images/google_g_logo.png';
import LinkBoxes from './LinkBoxes';

const HomeSection = () => {
    
    return(
        <div className="homeSection">

            <div className="centreElement">
                <img src={firefoxLogo} id="firefoxLogo"></img>
                
                <div id="fauxSearchBarBox">
                    <img src={gLogo} title="Search with Google" id="gLogo"></img>
                   
                    <input className="searchBar" type="text" title="searchBar"></input>
                    <p id="searchBarText">Search with Google or enter address</p>
                    
                </div>

                

            </div>
            

        </div>
        
    )
 

};

export default HomeSection;