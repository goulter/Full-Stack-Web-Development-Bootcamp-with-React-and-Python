import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Search from './components/search';

const App = () => {
  return (
    <div className="App">
      <Header title="Images Gallery"/>
      <Search />
    </div>
  );
}

export default App;
