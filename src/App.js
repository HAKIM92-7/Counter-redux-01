import './App.css';
import Counter from './components/Counter'
import {useSelector , useDispatch} from 'react-redux'
import {changeVisibility} from './redux/actions/actions'
function App() {

const isVisible = useSelector(state => state.isVisible)
const dispatch = useDispatch()


  return (

    <div className="App">


  <button   onClick={()=> dispatch(changeVisibility())}    >{isVisible ? "Hide counter" : "Show counter"}</button>

{
  isVisible ?
    <Counter/> : "" 
    
    
    }
    </div>
  );
}

export default App;
