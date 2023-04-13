import './App.css';
import Departments from './components/Departments';
import Header from './components/Header';
import Intro from './components/Intro';
import Visitors from './components/Visitors';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Departments />
      <Visitors />
    </>
  );
}

export default App;
