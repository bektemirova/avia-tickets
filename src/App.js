import {useEffect} from 'react';
import {flightAPI} from "./store/ticketSlice"
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import TicketList from './components/TicketList';
import LeftSide from './components/leftSideBar/LeftSide';
import {Routes, Route} from "react-router-dom"
import FormList from './components/registration-form/FormList';

function App() {
  const dispatch = useDispatch()
  const {status, error} = useSelector(state => state.tickets)
  useEffect(() => {
    dispatch(flightAPI())
  }, [dispatch])
  return (


    <div >
      {status === "loading" && <h2>Loading...</h2>}
      {error && <h2>Sorry, an error: {error}</h2>}

      <Routes>
        <Route path="/" element={<FormList />} />

        <Route path="/tickets" element={<TicketList />} />

      </Routes>




    </div>

  );
}

export default App;
