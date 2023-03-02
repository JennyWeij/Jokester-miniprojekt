import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <EmptyTextBox category="programming" />
      <JokePageButtons />
      {/* <Footer /> */}
    </div>
  )
}


export default JokePage