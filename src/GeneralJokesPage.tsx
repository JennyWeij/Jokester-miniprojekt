import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function GeneralJokesPage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <ErrorBoundary>
        <EmptyTextBox category="general" />
      </ErrorBoundary>
      <JokePageButtons />
    </div>
  )
}


export default GeneralJokesPage