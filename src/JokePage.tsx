import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";


import ErrorBoundary from "./ErrorBoundary";
import Footer from "./Footer";

import Header from "./Header";


function JokePage () {
  return (
    <div> 
      <Footer /> 
      <BackgroundImage />





      <Header />
      <ErrorBoundary>
        <EmptyTextBox category="programming" />
        </ErrorBoundary>


    </div>
  )
}


export default JokePage