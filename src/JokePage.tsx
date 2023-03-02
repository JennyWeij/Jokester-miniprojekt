import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function JokePage () {
  return (
    <div> 
      <Footer /> 
      <BackgroundImage />
      <Header />
      <ErrorBoundary>
        <EmptyTextBox category="programming" />
        </ErrorBoundary>
      <JokePageButtons />
    </div>
  )
}


export default JokePage