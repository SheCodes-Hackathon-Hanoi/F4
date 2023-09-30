import './App.css';
import Drawer from './component/Drawer'
import Header from './component/Header'
import MainSection from './component/MainSection';

function App() {
  return (
    <div className="App">
      <Drawer/>
      <Header/>
      <MainSection/>
    </div>
  );
}

export default App;
