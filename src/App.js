import './App.css';

import Introduction from './sections/Introduction';
import Description from './sections/Description';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Conclusion from './sections/Conclusion'

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
      <section id="projects">
          <Projects />
      </section>
      <section id="conclusion">
          <Conclusion />
      </section>
    </div>
  );
}

export default App;
