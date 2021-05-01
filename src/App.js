import './App.css';

import Introduction from './components/Introduction';
import Description from './components/Description';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <section id="introduction">
          <Introduction />
      </section>
      <section id="description">
          <Description />
      </section>
      <section id="experience">
          <Experience />
      </section>
    </div>
  );
}

export default App;
