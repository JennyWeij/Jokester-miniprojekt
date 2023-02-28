import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <JokePageButtons />
      <EmptyTextBox />
    </div>
  )
}


export default JokePage