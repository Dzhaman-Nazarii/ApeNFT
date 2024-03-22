import css from './Hero.module.css'

import heroImage from '../../images/heroImages/hero_ape_mobile-min.png'
import heroImage2x from '../../images/heroImages/hero_ape_mobile@2x-min.png'

const Hero = () => {
    return <section className={css.hero_section}>
        <p className={css.hero_text}>diD yOu seE iT?</p>
        <h1 className={css.hero_title}>Yacht apes</h1>
        <p className={css.hero_text}>Apes aRe eveRywhere</p>
        <picture>
        <source
          media="(max-width: 480px)"
          srcSet={`${heroImage} 1x, ${heroImage2x} 2x`}
        />
        <img src={heroImage} alt="Мавпа в окулярах"></img>
      </picture>
        <button type='button' className={css.hero_button}>Meet apes</button>
        <div className={css.hero_collection}>
        <p className={css.hero_collection_text}>Yacht Ape is a collection of unique digital apes that you can own in NFT format</p>
        </div>
    </section>
}

export default Hero