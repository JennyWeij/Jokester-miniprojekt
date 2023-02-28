import './App.css'
import "./assets/fonts/fonts.css"

import BackgroundImage from './BackgroundImage'
import EmptyTextBox from './EmptyTextBox'
import Footer from './Footer'
import Header from './Header'
import JokePageButtons from './JokePageButtons'



function App() {

  return (
    <div>
       <BackgroundImage />
       <Header />
      <JokePageButtons />
       <Footer />

    <EmptyTextBox />

    </div>
  )
}

export default App
