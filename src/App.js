import Header from "./Header";
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Fakeapi from "./Fakeapi";
import View from "./View";

function App() {


  return (
    <div className="text-center">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/fake-api" element={<Fakeapi />} />
        <Route path="/view" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
