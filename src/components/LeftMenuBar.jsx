import React from "react";
import Logo from '../assets/Frame 316.png';
import ProfilePic from '../assets/Avatars.png';
import { ReactComponent as HomeIcon } from '../assets/icons/Primary Nav.svg';
import { ReactComponent as BillingIcon } from '../assets/icons/Primary Nav-1.svg';
import { ReactComponent as ProfileIcon } from '../assets/icons/Primary Nav-2.svg';
import { ReactComponent as Settings } from '../assets/icons/Menu.svg';
import { ReactComponent as Info } from '../assets/icons/Menu-1.svg';

function LeftMenuBar() {
    return (
        <div className="leftmenubar">
            <div className="logo-div">
                <img src={Logo} alt="Logo" className="logo" />
            </div>

            <nav>
                <ul className="menu-items">
                    <li>
                        <a href="/home">
                            <HomeIcon className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="/billing">
                            <BillingIcon className="icon" />
                        </a>
                    </li>
                    <li>
                        <a href="/profile/sites">
                            <ProfileIcon className="icon" />
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="profile-section">
                <ul className="menu-items">
                    <li>
                        <Settings className="icon" />
                    </li>
                    <li>
                        <Info className="icon" />
                    </li>
                    <li>
                        <img src={ProfilePic} alt="Profile" className="profile-pic" />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default LeftMenuBar;