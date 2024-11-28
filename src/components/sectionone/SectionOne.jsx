import './sectionone.css'
import Git from '../../assets/images/Git.svg'
import Linkedin from '../../assets/images/Linkedin.svg'
import Instagram from '../../assets/images/Instagram.svg'
import Home from '../../assets/images/Home_art 1.svg'
export default function SectionOne() {
    
  return (
    <section className="section-one">
      <div className="box-left">
        <div className="text-paragraph">
            <p>Olá pessoal,</p>
            <strong>Eu sou um Desenvolvedor Web</strong>
            <p>Seja bem-vindo ao meu portifólio</p>
        </div>

        <button>Saiba mais sobre mim</button>

        <div className="icons-links">
            <a href="https://github.com/warleyramires" target='_black'><img src={Git} alt="Logo GitHub"/></a>
            <a href="https://www.linkedin.com/in/warley-ramires/" target='_black'><img src={Linkedin} alt="Logo Linkedin"/></a>
            <a href="https://www.instagram.com/wuhramires/" target='_black'><img src={Instagram} alt="Logo Instragram"/></a>

        </div>

      </div>

      <div className="box-right">
        <img src={Home} alt="Developer" />
      </div>
    </section>
  );
}
