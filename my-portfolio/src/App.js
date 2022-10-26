import Contact from './components/Contact'
import Header from './components/Header'
import Home from './components/Home'
import Main from './components/Main'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>

      <main className="App-main">
        <Main />
      </main>
    </div>
  );
}

export default App;
