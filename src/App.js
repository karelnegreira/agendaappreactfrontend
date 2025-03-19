
import './App.css';

import {getContacts} from './api/ContactService'
import { useEffect, useState } from 'react';
import Header from "./components/Header";


function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const {data} = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllContacts();
  }, [])

  const toogleModal = (show) => {}

  return (
    <>
      <Header toogleModal={toogleModal} nbrOfContacts={50}/>
    </>
  );
}

export default App;
