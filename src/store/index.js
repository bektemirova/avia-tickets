import {configureStore} from "@reduxjs/toolkit";
import flightReducer from "./ticketSlice"

export default configureStore({
  reducer: {
    tickets: flightReducer
  }
})