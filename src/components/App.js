import logo from '../assets/logo.png';
import '../styles/App.scss';
import Banner from './Banner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner>
			    <img src={logo} className="Kasa-logo" alt="logo" />
			</Banner>
      </header>
    </div>
  );
}

export default App;
