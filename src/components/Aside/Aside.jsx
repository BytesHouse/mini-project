import SelectorButton from '../SelectorButton/SelectorButton';
import style from './Aside.module.css'
import icon from '../../assets/icon-1.svg'
import icon2 from '../../assets/icon-2.svg'
import icon3 from '../../assets/icon-3.svg'
import icon4 from '../../assets/icon-4.svg'
import icon5 from '../../assets/icon-5.svg'
import icon6 from '../../assets/icon-6.svg'
import Logo from '../Logo/Logo'
import user from '../../assets/user.png'
// import SearchMenu from '../SearchMenu/SearchMenu';

const Aside = () => {
    return (
        <aside className={style.aside}>
            <Logo />
            <SelectorButton icon={icon} text='Home' />
            <SelectorButton icon={icon2} text='Search' />
            <SelectorButton icon={icon3} text='Explore' />
            <SelectorButton icon={icon4} text='Messages' />
            <SelectorButton icon={icon5} text='Notification' />
            <SelectorButton icon={icon6} text='Create' />
            <SelectorButton icon={user} text='Profile' />
            {/* <SearchMenu /> */}
            <div>2</div>
        </aside>
    )
}



export default Aside;