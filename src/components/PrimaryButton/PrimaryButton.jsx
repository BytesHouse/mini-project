import style from './PrimaryButton.module.css'
const PrimaryButton = (props) => {
    return (
        <button onClick={props.callback} className={style.primaryButton}>{props.text}</button>
    )
}

export default PrimaryButton;