import React from "react";
import "./CommitteeMembers.css";

const members = [
    {
        name: "DR. SRINIVASA K G",
        dept: "Data Science & Artificial Intelligence",
    },
    {
        name: "DR. SHAILESH KHAPRE",
        dept: "Data Science & Artificial Intelligence",
    },
    {
        name: "DR. LAKHINDAR MURMU",
        dept: "Electronics and Communication",
    },
];

const CommitteeMembers = () => {
    return (
        <div className="committee-container">
            <h2 className="committee-title">COMMITTEE MEMBERS</h2>
            <div className="committee-grid">
                {members.map((member, index) => (
                    <div key={index} className="committee-item">
                        <div className="image-placeholder"></div>
                        <h3 className="member-name">{member.name}</h3>
                        <p className="member-dept">
                            <strong>Dept -</strong> {member.dept}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommitteeMembers;
