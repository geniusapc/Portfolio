import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import Bash from "./Bash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import binaryFall from "./binaryFall";

const folders = [
  { id: 1, name: "About", tagId: "technology-folder", link: "#About" },
  { id: 2, name: "Contact", tagId: "Contact-folder", link: "#contact" },
  { id: 3, name: "Projects", tagId: "Projects-folder", link: "#projects" },
  {
    id: 4,
    name: "Certification",
    tagId: "certification-folder",
    link: "#certifications",
  },
  { id: 5, name: "Skills", tagId: "technology-folder", link: "#skills" },
];

export default function Home() {
  useEffect(() => {
    binaryFall();
  }, []);

  return (
    <div id="home">
      <div className="folders">
        {folders.map((e) => (
          <Link className="folder-wrapper" to={e.link} key={e.id} id={e.tagId}>
            <FontAwesomeIcon
              className="folder"
              transform={{ rotate: 270 }}
              flip="horizontal"
              icon={faFolderOpen}
            />
            <div className="folderName">{e.name}</div>
          </Link>
        ))}
      </div>
      <canvas id="binary-fall"></canvas>
      <div id="bash-section">
        <Bash />
      </div>
    </div>
  );
}
