import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [

    {
      headshot: "/polaroids/Veronica Loza President.jpg",
      name: "Veronica Loza",
      title: "President",
      id: "pic1",
    },
    {
      headshot: "/polaroids/Keyaa Kapadia - Media Lead.png",
      name: "Keyaa Kapadia",
      title: "Media Lead",
      id: "pic2",
    },
    {
      headshot: "/polaroids/Spriha Reddy - Outreach Lead.png",
      name: "Spriha Reddy",
      title: "Outreach Lead",
      id: "pic3",
    },
    {
      headshot: "/polaroids/Greg Lippert - Design Associate.jpg",
      name: "Greg Lippert",
      title: "Design Associate",
      id: "pic4",
    },
    {
      headshot: "/polaroids/Hanna Kim - Event Organizer.jpg",
      name: "Hannah Kim",
      title: "Event Organizer",
      id: "pic5",
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
