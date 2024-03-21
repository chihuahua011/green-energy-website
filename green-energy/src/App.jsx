import './App.scss';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Hero></Hero>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
}

export default App;
