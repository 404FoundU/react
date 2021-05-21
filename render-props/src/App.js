import './App.css';
import Wrapper from "./Wrapper";
import Counter1 from "./Counter1";

function App() {
  return (
    <div className="App">
<Wrapper render={()=> <Counter1/>}/>
    </div>
  );
}

export default App;
