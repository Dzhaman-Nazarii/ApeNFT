import css from './Header.module.css'

import madeByApesLogo from '../../images/icons/madeByApes.svg'
import discordLogo from '../../images/icons/discordLogo.svg'
import dockerLogo from '../../images/icons/dockerLogo.svg'
import spacexLogo from '../../images/icons/spacexLogo.svg'

const Header = () => {
    return <header>
            <a href="/">
                <img className={css.header_apes_icon} src={madeByApesLogo} alt='madeByApesLogo' />
            </a>
            <ul className={css.header_list}>
                <li className={css.header_item}>
                    <button className={css.header_menu}>Menu</button>
                </li>
                <li className={css.header_item}>
                    <img className={css.header_social_icon} src={discordLogo} alt='discordLogo' />
                </li>
                <li className={css.header_item}>
                    <img className={css.header_social_icon} src={dockerLogo} alt='dockerLogo' />
                </li>
                <li className={css.header_item}>
                    <img className={css.header_social_icon} src={spacexLogo} alt='spacexLogo' />
                </li>
            </ul>
    </header>
}

export default Header