import React from 'react';
import '../App.css';
import facebookIcon from '../media/images/shortcut_icons/facebook.png';
import dropboxIcon from '../media/images/shortcut_icons/dropbox.png'
import githubIcon from '../media/images/shortcut_icons/github.png';
import gmailIcon from '../media/images/shortcut_icons/gmail.png';
import instagramIcon from '../media/images/shortcut_icons/instagram.png';
import linkedinIcon from '../media/images/shortcut_icons/linkedin.png';
import reactIcon from '../media/images/shortcut_icons/react_logo.png';
import twitterIcon from '../media/images/shortcut_icons/twitter.png';

//TODO: USE PROPS TO DISPLAY IMAGES


function IconImg({pic}) {
    // pic = facebookIcon;
    return (
      <img
          src={pic}
          className="imgIcons"
      />
    );
  }



const LinkBoxes = (props) => {
    
    return(   

        <div className="linkBoxesParent">
            
            <div className="boxElement">
                <IconImg 
                pic={facebookIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={dropboxIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                    <IconImg 
                    pic={githubIcon}
                    src={props.pic}
                    />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={gmailIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={instagramIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={linkedinIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={reactIcon}
                src={props.pic}
                />
            </div>

            <div className="boxElement">
                <IconImg 
                pic={twitterIcon}
                src={props.pic}
                />
            </div>

        </div>
    )
};

export default LinkBoxes;