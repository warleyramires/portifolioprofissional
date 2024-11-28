import Vector1 from "../../assets/images/Vector1.svg";
import Vector2 from "../../assets/images/Vector2.svg";
import Skill from "../skill/Skill";
import "./sectiontwo.css";
import PropTypes from "prop-types";

export default function SectionTwo({id}) {
  return (
    <section id={id} className="section-two">
      <div className="about-box">
        <div className="perfil-info">
          {/*"Aqui vai a imagem "*/}
          <img src="#" alt="" />
          <h2>Warley Ramires</h2>
          <p>Meu nome é Warley Ramires Gonçalves. Sou natural de Salinas/MG.</p>
          <p>
            Atualmente curso Ciência da Computação no IFNMG - Campus Montes
            Claros
          </p>
        </div>

        <div className="skills">
          <h2>Hard Skills</h2>

          <div className="skill-item">
            <Skill
              name="HTML"
              levelImages={[Vector1, Vector1, Vector1, Vector1, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="CSS"
              levelImages={[Vector1, Vector1, Vector1, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="JavaScript"
              levelImages={[Vector1, Vector1, Vector1, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="React"
              levelImages={[Vector1, Vector1, Vector2, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="C/C++"
              levelImages={[Vector1, Vector1, Vector1, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="Java"
              levelImages={[Vector1, Vector1, Vector1, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="Spring Boot"
              levelImages={[Vector1, Vector1, Vector2, Vector2, Vector2]}
            />
          </div>
          <div className="skill-item">
            <Skill
              name="MySQL"
              levelImages={[Vector1, Vector1, Vector1, Vector2, Vector2]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

SectionTwo.propTypes = {
  id: PropTypes.string.isRequired,
};