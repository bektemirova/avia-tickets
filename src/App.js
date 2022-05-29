import {useEffect} from 'react';
import {flightAPI} from "./store/ticketSlice"
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import TicketList from './components/TicketList';
import LeftSide from './components/leftSideBar/LeftSide';

function App() {
  const dispatch = useDispatch()
  const {status, error} = useSelector(state => state.tickets)
  useEffect(() => {
    dispatch(flightAPI())
  }, [dispatch])
  return (


    <div className="App">

      <LeftSide />
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Sorry, an error: {error}</h2>}
      <TicketList />

    </div>

  );
}

export default App;
