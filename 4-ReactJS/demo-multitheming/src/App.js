import './App.css';
import Header  from './components/header';
import Main  from './components/main';
import Footer  from './components/footer';
import ThemeWrapper from './components/theme-wrapper';

function App() {
  return (
    <div className="app">
      <ThemeWrapper>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeWrapper>
    </div>
  );
}

export default App;
