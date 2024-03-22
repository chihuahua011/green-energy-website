import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Reviews from './components/Reviews/Reviews';
import About from './components/About/About';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Reviews></Reviews>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
