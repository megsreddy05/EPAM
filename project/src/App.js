import React, { useState } from "react";
import "./App.css";

const friends = [
  {
    name: "Meghana",
    image: "/meghana.jpg",
    info: "Roll No: 2210030369, Role: Frontend development",
  },
 
];

function App() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container">
      {friends.map((friend, index) => (
        <div
          className="image-wrapper"
          key={index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img src={friend.image} alt={friend.name} className="friend-image" />
          {hoveredIndex === index && (
            <div className="info-popup">
              <h3>{friend.name}</h3>
              <p>{friend.info}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;