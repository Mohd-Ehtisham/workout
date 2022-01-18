import './App.css';
import "aos/dist/aos.css"
import Header from './Components/Header';
import Membership from './Components/Membership';
import Nav from './Components/Nav';
import Index from './Components/Plans/Index';

function App() {
  return (
    <div className="container-fluid bg-color-dark">
      <div className="container">
          <Nav/>
          <Header/>
          <Index/>
          <Membership/>
      </div>
    </div>
  );
}

export default App;