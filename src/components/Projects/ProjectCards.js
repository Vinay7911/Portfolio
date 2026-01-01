// import React from "react";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";


// function ProjectCards(props) {
//   return (
//     <Card className="project-card-view">
//       <Card.Img variant="top" src={props.imgPath} alt="card-img" />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//         <Card.Text style={{ textAlign: "justify" }}>
//           {props.description}
//         </Card.Text>
        
//       </Card.Body>
//     </Card>
//   );
// }

// export default ProjectCards;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        {/* 🔹 Bigger Title */}
        <Card.Title style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          {props.title}
        </Card.Title>

        {/* 🔹 Description with larger font */}
        <Card.Text style={{ textAlign: "justify", fontSize: "1rem" }}>
          {props.description}
        </Card.Text>

        {/* ✅ Show Tech Stack as Bigger Badges */}
        {props.techStack && (
          <div style={{ marginTop: "10px" }}>
            {props.techStack.map((tech, index) => (
              <Badge
                key={index}
                pill
                bg="secondary"
                style={{
                  marginRight: "6px",
                  backgroundColor: "#6f42c1",
                  fontSize: "14px",       
                  padding: "6px 12px"    
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* ✅ GitHub button if link is provided */}
        {props.ghLink && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginTop: "12px" }}
          >
            GitHub
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
