import './App.css';
import Notes from './components/core/NotesPage';
import Header from './components/shared/Header';

function App() {
  return (
    <div className="App">
      {/* header page import */}
      <Header/> 
           {/* Notes page import */}
      <Notes/>
    </div>
  );
}

export default App;
