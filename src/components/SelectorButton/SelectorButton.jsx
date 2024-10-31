import style from './SelectorButton.module.css'

const SelectorButton = (props) => {
    return (
        <button className={style.selector}>
            <img src={props.icon} />
            {props.text}
        </button>
    )
}

export default SelectorButton;