import BackgroundImage from "./BackgroundImage";
import BackToMenuButton from "./BackToMenuButton";
import EmptyTextBox from "./EmptyTextBox";
import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";
import Header from "./Header";


function GeneralJokesPage () {
  return (
    <div> 
      <BackgroundImage />
      <Header />
      <ErrorBoundary>
        <EmptyTextBox category="general" />
      </ErrorBoundary>
      <BackToMenuButton />
      <Footer />

    </div>
  )
}


export default GeneralJokesPage