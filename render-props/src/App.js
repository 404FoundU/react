import './App.css';
import Wrapper from "./Wrapper";
import Counter1 from "./Counter1";

function App() {
  return (
    <div className="App">
<Wrapper render={(count, incCount)=> <Counter1 count={count} incCount={incCount}/>}/>
    </div>
  );
}

export default App;
