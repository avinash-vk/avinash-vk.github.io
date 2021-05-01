import './App.css';

import Introduction from './components/Introduction';
import Description from './components/Description';

function App() {
  return (
    <div className="App">
      <section id="introduction">
          <Introduction />
      </section>
      <section id="description">
          <Description />
      </section>
    </div>
  );
}

export default App;
