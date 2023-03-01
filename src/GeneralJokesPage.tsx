import BackgroundImage from "./BackgroundImage";
import EmptyTextBoxGeneral from "./EmptyTextBoxGeneral";
import Header from "./Header";


function GeneralJokesPage () {
  return (
    <div> 
      <Header />
      <BackgroundImage />
      <EmptyTextBoxGeneral /> 
      {/* Behövs två knappar för att komma till ProgrammingJokes och en för GeneralJokes? */}
    </div>
  )
}


export default GeneralJokesPage