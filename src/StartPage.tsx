import "./assets/fonts/fonts.css"
import BackgroundImage from "./BackgroundImage"
import ErrorBoundary from "./ErrorBoundary"
import Footer from "./Footer"
import Header from "./Header"
import StartButton from "./StartButton"
import TextBox from "./TextBox"

function StartPage() {

  return (
    <div>
      <Footer />
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
      <BackgroundImage />
      <StartButton />
      <TextBox />

    </div>
  )
}

export default StartPage
