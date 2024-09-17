import React, { useState } from "react";
import ProfilePic from '../../assets/Left- Site, Complex.png';
import { ReactComponent as Notifi } from '../../assets/icons/Left- Site, Complex.svg';
import Image1 from '../../assets/image 14.png';
import Image2 from '../../assets/Frame 427320658.png';
import Image3 from '../../assets/Frame 427320659.png';
import Image4 from '../../assets/Frame 427320660.png';
import HDFC from '../../assets/Frame 58.png';
import { ReactComponent as Location } from '../../assets/icons/Icon Set.svg';
import { ReactComponent as Edit } from '../../assets/icons/Vector.svg';
import { ReactComponent as Icon } from '../../assets/icons/nut 2.svg';
import { ReactComponent as Icon1 } from '../../assets/icons/nut 3.svg';
import { ReactComponent as Icon2 } from '../../assets/icons/nut 3-1.svg';
import { ReactComponent as Icon3 } from '../../assets/icons/nut 3-2.svg';
import { ReactComponent as Icon4 } from '../../assets/icons/Frame 427318977.svg';
import { ReactComponent as Overview } from '../../assets/icons/Overview-Icon Set.svg';
import { ReactComponent as IconHelpdesk } from '../../assets/icons/Featured icon.svg';
import { ReactComponent as IconVisitorManagement } from '../../assets/icons/Featured icon-1.svg';
import { ReactComponent as IconWorkPermit } from '../../assets/icons/Featured icon-2.svg';
import { ReactComponent as IconDailyTask } from '../../assets/icons/Featured icon-3.svg';
import { ReactComponent as IconPPM } from '../../assets/icons/Featured icon-4.svg';
import { ReactComponent as IconAssetManagement } from '../../assets/icons/Featured icon-5.svg';
import { ReactComponent as IconGatePass } from '../../assets/icons/Featured icon-6.svg';
import { ReactComponent as IconTraining } from '../../assets/icons/Featured icon-7.svg';
import { ReactComponent as IconSOS } from '../../assets/icons/Featured icon-8.svg';
import { ReactComponent as IconIncident } from '../../assets/icons/Featured icon-9.svg';
import { ReactComponent as IconInfo } from '../../assets/icons/tooltip.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/Icon Set-2.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/Icon Set-1.svg';
import { ReactComponent as LocationIcon } from '../../assets/icons/Frame 81.svg';


function Sites() {
    const [activeTab, setActiveTab] = useState("overview");
    const [selectedModules, setSelectedModules] = useState({});

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCheckboxChange = (moduleName) => {
        setSelectedModules({
            ...selectedModules,
            [moduleName]: !selectedModules[moduleName],
        });
    };

    const handleSubmit = () => {
        const selected = Object.keys(selectedModules).filter((key) => selectedModules[key]);
        const submissionData = {
            siteName: "HDFC",
            selectedModules: selected,
        };
        console.log("Submitted Data:", submissionData);
        setSelectedModules({});
    };


    return (
        <div className="sites-container">
            <header className="header">
                <div className="site-name">HDFC</div>
                <div className="icons">
                    <div className="notification-icon">
                        <Notifi />
                    </div>
                    <div className="profile-icon">
                        <img src={ProfilePic} alt="Profile" className="profile-pic" />
                    </div>
                </div>
            </header>
            <div className="card">
                <div className="image-gallery">
                    <img src={Image1} alt="Image 1" />
                    <img src={Image2} alt="Image 2" />
                    <img src={Image3} alt="Image 3" />
                    <img src={Image4} alt="Image 4" />
                </div>
                <div className="company-details">
                    <div className="left-box">

                        <div className="logo">
                            <img src={HDFC} alt="HDFC Logo" />
                        </div>

                        <div className="text">
                            <h1>HDFC</h1>
                            <p>Housing Development Finance Corporation</p>
                            <div className="status">
                                <p>Client</p>
                            </div>
                            <div className="location">
                                <Location />
                                <p>India, USA, South Africa, Canada, Australia</p>
                            </div>
                        </div>
                    </div>


                    <div className="right-box">
                        <button className="edit">
                            <Edit />
                            Edit Profile
                        </button>

                        <div className="company-icons">
                            <Icon />
                            <Icon1 />
                            <Icon2 />
                            <Icon3 />
                            <Icon4 />
                        </div>
                    </div>
                </div>
            </div>

            <div className="tabs">
                <button
                    className={`tab ${activeTab === "overview" ? "active" : ""}`}
                    onClick={() => handleTabClick("overview")}
                >
                    Overview
                </button>
                <button
                    className={`tab ${activeTab === "modules" ? "active" : ""}`}
                    onClick={() => handleTabClick("modules")}
                >
                    Modules
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "overview" ? (
                    <div className="overview-tab">
                        <div className="overview-content">
                            <div className="overview-stats">
                                <div className="stat-item">
                                    <Overview />
                                    <div className="stat-info">
                                        <div className="stat-label">Total Area</div>
                                        <div className="stat-value">1200 Sq Ft</div>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Overview />
                                    <div className="stat-info">
                                        <div className="stat-label">Total Buildings</div>
                                        <div className="stat-value">10</div>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Overview />
                                    <div className="stat-info">
                                        <div className="stat-label">Total Users</div>
                                        <div className="stat-value">5000+</div>
                                    </div>
                                </div>
                                <div className="stat-item">
                                    <Overview />
                                    <div className="stat-info">
                                        <div className="stat-label">Total Vendors</div>
                                        <div className="stat-value">55</div>
                                    </div>
                                </div>
                            </div>
                            <div className="overview-action">
                                <h3>Setup Site Infrastructure</h3>
                                <p>Setup Site Infrastructure</p>
                                <button className="setup-btn">Setup Now →</button>
                            </div>
                        </div>
                        <div className="contact-card">
                            <h3>Point Of Contact</h3>
                            <div className="contact-info">
                                <img src={ProfilePic} alt="Contact" className="contact-pic" />
                                <div className="contact-details">
                                    <h4>Prakash Raj</h4>
                                    <p>Site Admin</p>
                                </div>
                            </div>
                            <div className="contact-methods">
                                <div className="contact-method">
                                    <EmailIcon />
                                    <p>Prakashraj@fmx.com</p>
                                </div>
                                <div className="contact-method">
                                    <PhoneIcon />
                                    <p>+91 9000900091</p>
                                </div>
                            </div>
                            <div className="contact-address">
                                <LocationIcon />
                                <p>11th & 12th Floor, Raheja Towers, above Yautcha restaurant, G Block BKC, Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="modules-tab">
                        <div className="module-list">
                            {[
                                { name: "Helpdesk", icon: <IconHelpdesk /> },
                                { name: "Visitor Management", icon: <IconVisitorManagement /> },
                                { name: "Work Permit", icon: <IconWorkPermit /> },
                                { name: "Daily Task", icon: <IconDailyTask /> },
                                { name: "PPM", icon: <IconPPM /> },
                                { name: "Asset Management", icon: <IconAssetManagement /> },
                                { name: "Gate Pass", icon: <IconGatePass /> },
                                { name: "Training", icon: <IconTraining /> },
                                { name: "SOS", icon: <IconSOS /> },
                                { name: "Incident", icon: <IconIncident /> },
                            ].map((module) => (
                                <div key={module.name}
                                    className={`module-card ${selectedModules[module.name] ? "checked" : ""}`}
                                >
                                    <div className="checkbox-container">
                                        <input
                                            type="checkbox"
                                            id={module.name}
                                            className="checkbox-circle"
                                            checked={!!selectedModules[module.name]}
                                            onChange={() => handleCheckboxChange(module.name)}
                                        />
                                    </div>
                                    <label htmlFor={module.name} className="module-card-content">
                                        <div className="left-section">
                                            <div className="module-icon">{module.icon}</div>
                                            <span className="module-name">{module.name}</span>
                                        </div>
                                        <div className="info-icon-container">
                                            <IconInfo />
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <button className="submit-btn" onClick={handleSubmit}>
                            Submit
                        </button>
                    </div>

                )}
            </div>
        </div>

    );
}

export default Sites;