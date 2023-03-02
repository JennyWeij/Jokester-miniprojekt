import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function GeneralJokesPage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <EmptyTextBox category="general" />
      <JokePageButtons />
    </div>
  )
}


export default GeneralJokesPage