import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";
import Header from "./Header";
import JokePageButtons from "./JokePageButtons";


function GeneralJokesPage () {
  return (
    <div> 
      <BackgroundImage />
      <Header />
      <ErrorBoundary>
        <EmptyTextBox category="general" />
      </ErrorBoundary>
      <JokePageButtons />
      <Footer />
    </div>
  )
}


export default GeneralJokesPage