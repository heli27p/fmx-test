import React from "react";
import { NavLink } from "react-router-dom";

function ProfileMenuBar() {
    return (
        <div className="profilemenubar">
            <div className="company">
                <h1>Punctualiti</h1>
            </div>

            <nav>
                <h3 style={{ color: 'lightgrey' }}>STAKEHOLDERS</h3>

                <ul className="profile-menu-items">
                    <li>
                        <NavLink to="/profile/sites" className={({ isActive }) => isActive ? "active" : ""}>
                            <h3>Sites</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/users" className={({ isActive }) => isActive ? "active" : ""}>
                            <h3>Users</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile/externalusers" className={({ isActive }) => isActive ? "active" : ""}>
                            <h3>External Users</h3>
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <div className="profile-section">
                <h2>ABC</h2>
                <h4>abc@gmail.com</h4>
            </div>
        </div>
    );
}

export default ProfileMenuBar;