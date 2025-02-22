import React from "react";
import "./Header.css";
import header from "../assets/header.jpg";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Header = () => {
    return (
        <div className="header-container">
            <div className="container">
                <div className="alignLeft">
                    <div className="topStrip">
                        <ul className="leftLink">
                            <li><a href="https://www.iiitnr.ac.in/hi" title="Sitemap">Hindi site</a></li>
                        </ul>
                    </div>
                </div>
                <div className="alignRight">
                    <div className="topStrip">
                        <ul className="rightLinks">
                            <li><a href="#contentwrapper" title="Skip to Main Content">Skip to Main Content</a></li>
                            <li><a href="/content/screen-reader-access">Screen Reader Access</a></li>
                            <li className="fontResize">
                                <div id="accessControl" className="textResizeWrapper">
                                    <input type="button" value="A" title="Normal Font Size" className="fontScaler large" />
                                    <input type="button" value="A+" title="Increase Font Size" className="fontScaler largest" />
                                    <button className="contrastChanger normal" title="Standard View">
                                        <img src="https://www.iiitnr.ac.in/sites/all/themes/iiit/images/a-light.gif" alt="Standard View" />
                                    </button>
                                    <button className="contrastChanger wob" title="High Contrast View">
                                        <img src="https://www.iiitnr.ac.in/sites/all/themes/iiit/images/a-dark.gif" alt="High Contrast View" />
                                    </button>
                                </div>
                            </li>
                        </ul>
                        <div className="socialMedia">
                            <ul>
                                <li>
                                    <a href="https://www.facebook.com/iiitnr21/" title="Facebook" target="_blank" rel="noopener noreferrer">
                                        <Facebook size={20} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://twitter.com/IIITNayaRaipur" title="Twitter" target="_blank" rel="noopener noreferrer">
                                        <Twitter size={20} />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/school/13267953" title="Linkedin" target="_blank" rel="noopener noreferrer">
                                        <Linkedin size={20} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header-image-container">
                <img src={header} alt="IIIT Header" className="header-image" />
            </div>
            <div className="colored-space"></div>
            <div className="main-title">
                AICTE IDEA LAB @ International Institute of Information Technology, Naya Raipur
            </div>
        </div>
    );
};

export default Header;
