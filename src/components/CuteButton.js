import "./CuteButton.css"

const CuteButton = (props) => (
    <button {...props} onClick={(e) => props.onClick(e)} className="cute-button"></button>
);

export default CuteButton;