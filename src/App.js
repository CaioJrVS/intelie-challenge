import logo from './logo.svg';
import './App.css';
import ChartPlotter from './containers/ChartPlotter/ChartPlotter.';

function App() {

  /*
    The main component is GraphPlotter
    I prefered to let the main functionality on GraphPlotter
    So I can have more flexibility on the future, maybe when routing
  */

  return (
    <div className="App">
      <ChartPlotter />
    </div>
  );
}

export default App;
