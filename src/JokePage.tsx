import BackgroundImage from "./BackgroundImage";
import EmptyTextBox from "./EmptyTextBox";
import Header from "./Header";


function JokePage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />

        <EmptyTextBox category="programming" />
      {/* <Footer /> */}
    </div>
  )
}


export default JokePage