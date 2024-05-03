import './App.css';
import ProdList from './components/ProdList';

function App() {
  const scrollToFooter = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="App">
      <header className='header' onClick={scrollToFooter}>
        <h1>e-store</h1>
        <button>scroll to footer</button>
      </header>

      <ProdList />
      <footer>
        footer
      </footer>
    </div>
  );
}

export default App;