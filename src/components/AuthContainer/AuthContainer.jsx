import styles from './AuthContainer.module.css'
import pic from '../../assets/Background.png'
import Logo from '../Logo/Logo'
import OrComponent from '../OrComponent/OrComponent'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

const AuthContainer = () => {

    const handleSignUp = (e) => {
        e.preventDefault(); // остановить поведение формы по умолчанию (отправляет запрос в адресную строку)
        fetch('https://be-social-cxau.onrender.com/api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                email: 'test123@gmail.com',
                password: '123',
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // GET    <- чтение информаци
        // POST   <- создание информации
        // PATCH  <- запись в существую информация  
        // PUT    <- перезапись существующей информации
        // DELETE <- удаление информации
    }

    return (
        <div className={styles.container}>
            <img src={pic} alt="picture" />
            <div>
                <form>
                    <Logo />
                    <input placeholder='Username, or email' type="text" />
                    <input placeholder='Password' type="password" />
                    <PrimaryButton callback={handleSignUp} text='Log in' />
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