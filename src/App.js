import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Image from './components/Image';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Header />
        <Main />
        <Image />
        <Footer />
      </div>
    </div>
  );
}

export default App;
