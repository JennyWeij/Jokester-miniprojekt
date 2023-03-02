import "./assets/fonts/fonts.css"
import BackgroundImage from "./BackgroundImage"
import Footer from "./Footer"
import Header from "./Header"
import StartButton from "./StartButton"
import TextBox from "./TextBox"

function StartPage() {

  return (
    <div>
      <Footer />
      <TextBox />
      <BackgroundImage />
       <Header />
      <StartButton />

    </div>
  )
}

export default StartPage
