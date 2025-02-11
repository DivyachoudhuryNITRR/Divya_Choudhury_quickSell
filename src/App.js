import React, { useEffect } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';

import DashBoard from './components/DB/Db';
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllData } from './Actions/Actions';
import Loading from './components/Loading/Loading';
const App = () => {
  const dispatch = useDispatch();
  const { allTickets } = useSelector(state => state.DataReducer);
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])
  return allTickets ? (
    <div style={{ paddingTop: "10px" }} >
      <NavBar />
      <hr style={{ marginTop: "10px" }} />
      <DashBoard />
    </div>
  ) : <Loading />
}
export default App