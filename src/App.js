import './App.css';
import Buttons from './components/Buttons'
import SearchForm from './components/SearchForm'
import Stories from './components/Stories';

function App() {
  return (
    <div className="App">
      <SearchForm />
      <br />
      <Buttons />
      <Stories />
      {/* <Buttons /> */}
    </div>
  );
}

export default App;
