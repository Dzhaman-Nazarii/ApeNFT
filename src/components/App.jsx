import css from './App.module.css'

import Header from "./header/Header"
import Hero from "./hero/Hero"
import About from './about/About'

const App = () => {
  return <>
    <div className={css.app_container}>
      <Header/>
      <Hero/>
    </div>
    <About/>
  </>
}

export default App