import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <ErrorBoundary>
        <EmptyTextBox category="programming" />
        </ErrorBoundary>
      <JokePageButtons />
      {/* <Footer /> */}
    </div>
  )
}


export default JokePage