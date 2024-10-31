import style from './SearchMenu.module.css'
import user from '../../assets/Container.png'

const SearchMenu = () => {
    return (
        <div className={style.search}>
            <span className={style.heading}>Search</span>
            <div className={style.wrapper}>
                <input className={style.input} type="text" placeholder='Search' />
                <button className={style.xButton}>X</button>
            </div>
            <span className={style.subHeading}>Recent</span>
            <ul className={style.list}>
                <li>
                    <img src={user} />
                    <span>sashaa</span>
                </li>
            </ul>
        </div>
    )
}

export default SearchMenu;