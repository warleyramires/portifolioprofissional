import PropTypes from 'prop-types';

export default function Skill({ name, levelImages }) {
    return (
        <div className="skill">
            <p style={{fontSize:"1.8rem"}}>{name}</p>
            <div className="level-skill">
                {levelImages.map((src, index) => (
                    <img key={index} src={src} alt="skill level" />
                ))}
            </div>
        </div>
    );
}

Skill.propTypes = {
    name: PropTypes.string.isRequired,
    levelImages: PropTypes.arrayOf(PropTypes.string).isRequired,
};
