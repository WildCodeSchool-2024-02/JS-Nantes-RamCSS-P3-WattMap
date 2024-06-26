import PropTypes from 'prop-types';

export default function Link({ link, classBtn, text, icon }) {
    return (
        <a href={link} className={`btn ${classBtn}`}>{icon}{text}</a>
    )
}
// Specifies the default values for props:
Link.defaultProps = {
    classBtn: '',
    icon: ''
};

Link.propTypes = {
    link: PropTypes.string.isRequired,
    classBtn: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string,
}