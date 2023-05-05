import logo from './logo.svg';
import './App.css';
import { increase, decrease } from './features/count/CountSlice';
import { useSelector, useDispatch } from 'react-redux';
function App() {
  let countValue = useSelector((state)=>state.count.countValue)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <button
      onClick={()=>{
        dispatch(increase())
      }}
      >+</button>
      <p>{countValue}</p>
      <button
      onClick={()=>{
        dispatch(decrease())
      }}
      >-</button>
    </div>
  );
}

export default App;
