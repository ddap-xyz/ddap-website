import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [
    {
     headshot: "/polaroids/Isabella Tedesco - Internal Logistics Lead.png",
      name: "Isabella Tedesco",
      title: "Internal Logistics Lead",
      id: "pic1",
    },
    {
      headshot: "/polaroids/Keyaa Kapadia - Media Lead.png",
      name: "Keyaa Kapadia",
      title: "Media Lead",
      id: "pic2",
    },
    {
      headshot: "/polaroids/Veronica Loza - Design Lead.png",
      name: "Veronica Loza",
      title: "Design Lead",
      id: "pic3",
    },
    {
      //headshot:"/polaroids/Minkyung Cho - Developer.png",
      name: "Spriha Reddy",
      title: "Outreach Lead",
      id: "pic4",
    },
    
  ];

  return (
    <div id="team">
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member-profile">
          <img
            src={member.headshot}
            alt={`Headshot of ${member.name}`}
            className="team-member-headshot"
            id={member.id}
          />
          <div className="team-member-name">{member.name}</div>
          <div className="team-member-title">{member.title}</div>
        </div>
      ))}
    </div>
  );
};

export default Team;
