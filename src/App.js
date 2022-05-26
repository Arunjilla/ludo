import logo from './logo.svg';
import './App.css';
import Text from './Textbox';
import Incefun from './Incefun'
import Inceclass  from './Inceclass';
import Api from './Api';
function App() {
  return (
    <div className="App">
       {/* <Incefun/>  */}
      <Api/> 
       <Inceclass/>  
    
      <Text/>
    </div>
  );
}

export default App;
