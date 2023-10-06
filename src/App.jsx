import "./App.css"
import {Header} from "./components/Header/header"
import {Generator} from "./components/Generator/generator"
export function App(){
  return(
    <div className="Container">
        <header>
          <Header/>
        </header>
        <main>
          <section className="Generator">
            <Generator/>
          </section>
        </main>
    </div>
  )
}