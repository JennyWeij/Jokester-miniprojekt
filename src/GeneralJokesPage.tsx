import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Header from "./Header";


function GeneralJokesPage () {
  return (
    <div> 
      <BackgroundImage />
      <Header />
      <ErrorBoundary>
        <EmptyTextBox category="general" />
      </ErrorBoundary>
    </div>
  )
}


export default GeneralJokesPage