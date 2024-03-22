import css from './About.module.css'

import cross from '../../images/icons/cross.svg';
import AboutApeImage from '../../images/aboutImages/about_ape_mobile-min.png';
import AboutApeImage2x from '../../images/aboutImages/about_ape_mobile@2x-min.png'

const About = () => {
    return <section className={css.about_section}>
        <div className={css.about_content}>
            <h2 className={css.about_title}>a Story that started with <span className={css.about_title_span}>one simple <br /> ape</span> </h2>
            <p className={css.about_description_first}>WHO GOT FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE YACHT</p>
            <img className={css.about_cross} src={cross} alt="cross" />
            <p className={css.about_description_second}>EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED BY USERS</p>
            <picture>
                <source 
                    media="(max-width: 480px)"
                    srcSet={`${AboutApeImage}1x , ${AboutApeImage2x} 2x}`}
                />
                <img src={AboutApeImage} alt="ape" />
            </picture>
        </div>
    </section>
}

export default About