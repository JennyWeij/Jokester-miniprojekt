import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import Footer from "./Footer";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <EmptyTextBox />
      <JokePageButtons />
      <Footer />
    </div>
  )
}


export default JokePage