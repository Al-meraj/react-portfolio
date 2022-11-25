import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import SocialIcons from "./components/SocialIcons";
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <SocialIcons/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
