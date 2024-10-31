/* eslint-disable react/prop-types */
import style from './PrimaryButton.module.css'
const PrimaryButton = (props) => {
    return (
        <button className={style.primaryButton}>{props.text}</button>
    )
}

export default PrimaryButton;