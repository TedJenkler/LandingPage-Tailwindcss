import './App.css';
import logo from "./images/logo.svg"

function App() {
  return (
    <main>
      <header>
        <nav className='top-0 bg-header-bg my-7 mx-4 flex'><img className='' src={logo} alt='logo' width="104" height="16"/><button>Try It Free</button></nav>
      </header>
    </main>
  );
}

export default App;
