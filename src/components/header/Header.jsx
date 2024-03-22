import css from './Header.module.css'

import madeByApesLogo from '../../images/icons/madeByApes.svg'
import discordLogo from '../../images/icons/discordLogo.svg'
import dockerLogo from '../../images/icons/dockerLogo.svg'
import spacexLogo from '../../images/icons/spacexLogo.svg'

const Header = () => {
    return <header>
            <a href="/">
                <img className={css.header_icon} src={madeByApesLogo} alt='madeByApesLogo' />
            </a>
            <ul className={css.header_social_list}>
                <li className={css.header_social_item}>
                    <button className={css.header_social_button}>Menu</button>
                </li>
                <li className={css.header_social_item}>
                    <a href="https://discord.com/">
                        <img className={css.header_item} src={discordLogo} alt='discordLogo' />
                    </a>
                </li>
                <li className={css.header_social_item}>
                    <a href="https://www.docker.com/">
                        <img className={css.header_item} src={dockerLogo} alt='dockerLogo' />
                    </a>
                </li>
                <li className={css.header_social_item}>
                    <a href="https://www.spacex.com/">
                        <img className={css.header_item} src={spacexLogo} alt='spacexLogo' />
                    </a>
                </li>
            </ul>
    </header>
}

export default Header