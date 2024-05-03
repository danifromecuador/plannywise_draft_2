import { useEffect } from 'react';
import { Store } from '../src/store/store';
import './App.css';

const App = () => {
  const store = Store();
  console.log(store.CowSlice.seconds);

  useEffect(() => {
    const intervalId = setInterval(() => {
      store.CowSlice.setTime()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])



  return (
    <div className="App">
      Hello Dani!
      {store.BearSlice.bears}
      {store.CowSlice.seconds}
      <button onClick={() => store.CowSlice.setTime()}>Update</button>
    </div>
  );
};

export default App;
