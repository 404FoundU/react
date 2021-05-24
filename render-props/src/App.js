import './App.css';
import Wrapper from "./Wrapper";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";

function App() {
    return (
        <div className="App">
            <Wrapper render={(count, incCount) => {
                return <div>
                    <Counter1 count={count} incCount={incCount}/>
                </div>
            }}/>
            <Wrapper render={(count, incCount) => {
            return <div>
                <Counter2 count={count} incCount={incCount}/>
            </div>
        }}/>
        </div>
    );
}

export default App;
