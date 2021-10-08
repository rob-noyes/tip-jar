import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TipContent from './components/TipContent';

function App() {
  return (
    <div className=" bg-teal font-space flex justify-center flex-col items-center min-h-screen lg:h-screen">
      <Header />
      <TipContent />
      <Footer />
    </div>
  );
}

export default App;
