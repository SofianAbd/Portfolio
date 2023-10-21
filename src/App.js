import Header from './components/header';
import './App.css';
import StarrySky from './components/starrysky';
import Main from './components/main';
import Intro from './components/intro';
import Projects from './components/projects';

function App() {
  return (
    <div className="App">
      <StarrySky />
      <Header />
      <Main />
      <Intro/>
      <Projects/>
    </div>
  );
}

export default App;
