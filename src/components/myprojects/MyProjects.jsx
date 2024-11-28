import { useState } from "react";
import "./myprojects.css";
import PropTypes from "prop-types";

export default function MyProjects({id}) {
  const [selectedButton, setSelectedButton] = useState("Todos");

  const handleButtonClick = (buttonname) => {
    setSelectedButton(buttonname);
  };

  const projetosFront = [
    {
      projeto: "Projeto 1",
      status: "EM BREVE",
      url: "",
    },
    {
      projeto: "Projeto 2",
      status: "EM BREVE",
      url: "",
    },
    {
      projeto: "Projeto 3",
      status: "EM BREVE",
      url: "",
    },
    {
      projeto: "Projeto 4",
      status: "EM BREVE",
      url: "",
    },
    {
      projeto: "Projeto 5",
      status: "EM BREVE",
      url: "",
    },
    {
      projeto: "Projeto 6",
      status: "EM BREVE",
      url: "",
    },
  ];

  return (
    <section id={id} className="section-three">
      <div className="projects-info">
        <div className="text-tittle">
          <h2>Meu Portifólio</h2>
          <p>Estes são alguns dos trabalho e projetos que já realizei</p>
        </div>

        <div className="buttons">
          <button
            className={selectedButton === "Todos" ? "selected" : "unselected"}
            onClick={() => handleButtonClick("Todos")}
          >
            Todos
          </button>
          <button
            className={
              selectedButton === "Front-end" ? "selected" : "unselected"
            }
            onClick={() => handleButtonClick("Front-end")}
          >
            Front-end
          </button>
          <button
            className={
              selectedButton === "Back-end" ? "selected" : "unselected"
            }
            onClick={() => handleButtonClick("Back-end")}
          >
            Back-end
          </button>
        </div>

        <div className="projects-box">
          {projetosFront.map((front, index) => (
            <div key={index} className="card">
              <h3>{front.projeto}</h3>
              <span className="coming-soon">{front.status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

MyProjects.propTypes = {
  id: PropTypes.string.isRequired,
};