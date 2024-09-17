import React from "react";
import { Outlet } from 'react-router-dom';
import './Profile/Profile.css';
import ProfileMenuBar from "./Profile/ProfileMenuBar";

function ProfilePage() {
    return (
        <div className='profile-container'>
            <ProfileMenuBar />
            <div className='profile-content'>
                <Outlet />
            </div>
        </div>
    );
}

export default ProfilePage;