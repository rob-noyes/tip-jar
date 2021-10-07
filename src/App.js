import './App.css';
import Header from './components/Header';
import TipContent from './components/TipContent';

function App() {
  return (
    <div className=" bg-teal h-screen font-space flex justify-center flex-col items-center">
      <Header />
      <TipContent />
    </div>
  );
}

export default App;
