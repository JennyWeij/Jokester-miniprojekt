import './App.css'
import "./assets/fonts/fonts.css"
import BackgroundImage from './BackgroundImage'
import CategoryButton from './CategoryButton'
import Footer from './Footer'
import Header from './Header'

function App() {

  return (
    <div>
       <BackgroundImage />
       <Header />
       <CategoryButton />
       {/* <TextBox />
       <StartButton /> */}
       <Footer />
    </div>
  )
}

export default App
