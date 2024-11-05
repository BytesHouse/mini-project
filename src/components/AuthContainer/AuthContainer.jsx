import styles from './AuthContainer.module.css'
import pic from '../../assets/Background.png'
import Logo from '../Logo/Logo'
import OrComponent from '../OrComponent/OrComponent'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const AuthContainer = () => {
    
    return (
        <div className={styles.container}>
            <img src={pic} alt="picture" />
            <div>
                <form>
                    <Logo />
                    <input placeholder='Username, or email' type="text" />
                    <input placeholder='Password' type="password" />
                    <PrimaryButton text='Log in' />
                    <OrComponent />
                    <span>Forgot password?</span>
                </form>
                <div className={styles.signup}>
                    <p>Dont have an account?<span>Sign Up</span></p>
                </div>
            </div>
        </div>
    )
}

// react-router-dom

export default AuthContainer;