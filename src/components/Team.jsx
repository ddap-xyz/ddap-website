import React from "react";

const Team = () => {
  // Placeholder data with three properties: headshot, name, and title
  const teamMembers = [
    {
      headshot:
        "/polaroids/Jennifer Lee - President.png",
      name: "Jennifer Lee",
      title: "President",
      id: "pic1",
    },
    {
     headshot: "/polaroids/Isabella Tedesco - Vice President.JPG",
      name: "Isabella Tedesco",
      title: "Vice President",
      id: "pic2",
    },
    {
      headshot: "/polaroids/Keyaa Kapadia - Event Organizer.JPG",
      name: "Keyaa Kapadia",
      title: "Event Organizer",
      id: "pic3",
    },
    {
      headshot: "/polaroids/Veronica Loza - Media Director.JPEG",
      name: "Veronica Loza",
      title: "Media Director",
      id: "pic4",
    },
    {
      //headshot:"/polaroids/Minkyung Cho - Developer.png",
      name: "Spriha Reddy",
      title: "Treasurer",
      id: "pic5",
    },
    {
      //headshot: "/polaroids/charis pao.png",
      name: "Emily Yao",
      title: "Media Director",
      id: "pic6",
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
