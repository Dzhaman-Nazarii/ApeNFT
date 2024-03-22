import css from './App.module.css'

import Header from "./header/Header"
import Hero from "./hero/Hero"

const App = () => {
  return <>
    <div className={css.app_container}>
      <Header/>
      <Hero/>
    </div>
  </>
}

export default App