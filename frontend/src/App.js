import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';

const handleSearchSubmit = (e) => {
  e.preventDefault();
  console.log(e.target[0].value);
}

const App = () => {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search handleSubmit={handleSearchSubmit}/>
    </div>
  );
}

export default App;
