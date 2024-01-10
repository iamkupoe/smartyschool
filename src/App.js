import './App.css';
import Login from './components/Login';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className='toolsPanel'>
        <Sidebar />
      </div>
      <div className='workspacePanel'>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
