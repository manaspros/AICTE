import React from "react";
import "./VisionSection.css";

const VisionSection = () => {
    return (
        <div className="vision-container">
            <h2 className="vision-title">VISION OF AICTE IDEA LAB</h2>
            <p className="vision-text">
                The vision of the IDEA Lab at IIIT Naya Raipur is to foster an innovative and entrepreneurial ecosystem that bridges the gap
                between theoretical knowledge and practical application. By providing a dynamic environment for creativity and experimentation,
                the IDEA Lab aims to cultivate a culture of hands-on learning, interdisciplinary collaboration, and problem-solving among students
                and faculty. The lab will be a hub for nurturing innovative ideas and transforming them into viable solutions that address real-world
                challenges, aligning with the principles of the National Education Policy 2020.
            </p>

            <div className="vision-grid">
                <div className="vision-item">
                    <h3 className="vision-subtitle">LOCATION AND AREA</h3>
                    <div className="image-placeholder"></div>
                    <p className="vision-caption">
                        Location of AICTE IDEA Lab at International Institute of Information Technology, Naya Raipur
                    </p>
                </div>

                <div className="vision-item">
                    <h3 className="vision-subtitle">LAYOUT</h3>
                    <div className="image-placeholder"></div>
                    <p className="vision-caption">
                        Layout (Tentative) of AICTE IDEA Lab at International Institute of Information Technology, Naya Raipur
                    </p>
                </div>
            </div>
            <h2 className="vision-title">Activities/ events/ outreach activities</h2>
            <p className="vision-text">
                The IDEA Lab at IIIT Naya Raipur will signifi cantly enhance the learning and development experience for students and staff. Undergraduate andpostgraduate students will benefi t from hands-on projects, internships, and research opportunities, with over 500 UG students engaging in practicalprojects and at least 100 participating in internships annually. PG students will have access to research facilities, supporting around 30 theses and 50interdisciplinary projects each year. Faculty will benefi t through specialized Faculty Development Programs (FDPs), with at least 30 participantsannually, enhancing their skills in advanced tools and technologies, indirectly benefi ting over 200 students. The lab will facilitate collaborative projects,securing at least fi ve research grants annually and fostering ten industry collaborations. By offering a platform for practical application of STEMfundamentals, the lab will empower students to transform theoretical knowledge into real-world solutions, enhancing their employability and innovationcapabilities. Additionally, faculty will have increased opportunities for professional growth and research, driving institutional excellence and contributingto the broader academic and industrial community.
            </p>
            <h2 className="vision-title">Integration of IDEA Lab with existing facilities:</h2>
            <p className="vision-text">
                The IDEA Lab at IIIT Naya Raipur will be seamlessly integrated with current facilities to maximize its impact. It will complement existing robotics, IoT,
                and 3D printing labs, providing additional resources and space for advanced projects. Integration with the library will enhance access to technical
                resources and research materials. Collaboration with the incubation center will facilitate the commercialization of innovative ideas, transitioning them
                into marketable products and startups. The IDEA Lab will utilize collaborative spaces for workshops, seminars, and hackathons, fostering a culture of
                innovation and teamwork. This integration will ensure that the IDEA Lab enhances the overall academic environment, promoting interdisciplinary
                learning and practical application of STEM concepts.
            </p>
        </div>
    );
};

export default VisionSection;
