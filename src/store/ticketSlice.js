import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";


export const flightAPI = createAsyncThunk("tickets/flightAPI", async function (_, {rejectWithValue}) {
  try {
    const response = await fetch("http://localhost:3001/flights")
    if (!response.ok) {
      throw new Error("Something went wrong")
    }

    const data = await response.json()


    const filteredData = data.reduce((acc, fly) => {

      if (fly.flight.carrier.uid == "LO") {
        acc.lo.push(fly)
      }
      if (fly.flight.carrier.uid == "SU1") {
        acc.flot.push(fly)
      }
      return acc
    }, {lo: [], flot: []})
    //console.log(filteredData)
    return filteredData
  } catch (error) {
    return rejectWithValue(error.message)
  }

})


const ticketSlice = createSlice({
  name: "tickets",
  initialState: {
    flights: [],
    status: null,
    error: null
  },
  reducers: {
    getData() {},
    filterData() {},
    sortData() {},
    findData() {}
  },
  extraReducers: {
    [flightAPI.pending]: (state) => {
      state.status = "loading";
      state.error = null
    },
    [flightAPI.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.flights = action.payload;
    },
    [flightAPI.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload
    },
  }
})

export const {getData} = ticketSlice.actions
export default ticketSlice.reducer