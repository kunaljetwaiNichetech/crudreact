
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import Display2 from './components/Disp/Display2';
import Disply from './components/Disp/Disply';
import Formadd from './components/FormToadd/Formadd';
import Edit from './components/EditData/Edit';

function App() {
  return (
    <div className="App">
      <h1>Crud Oprations</h1>
      {/* <Disply/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Display2/>} ></Route>
          <Route path='/form' element={<Formadd/>} ></Route>
          <Route path='/Edit/:id' element={<Edit/>} ></Route>
          
        </Routes>
      </Router>
      {/* <Formadd/> */}
    </div>
  );
}

export default App;
