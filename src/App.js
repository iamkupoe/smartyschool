import './App.css';
import Login from './components/Login';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
