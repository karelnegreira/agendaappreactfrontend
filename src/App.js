
import './App.css';


import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ContactList from './components/ContactList'
import { getContacts } from './api/ContactService'
import Header from "./components/Header";

function App() {
  const [data, setData] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  const getAllContacts = async (page = 0, size = 10) => {
    try {
      setCurrentPage(page);
      const { data } = await getContacts(page, size);
      setData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllContacts();
  }, [])

  const toogleModal = (show) => { console.log("I was clicked") }

  return (
    <>
      <Header toogleModal={toogleModal} nbrOfContacts={data.totalElements} />
      <main className='main'>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to={'/contacts'} />} />
            <Route path="/contacts" elements={<ContactList data={data} currentPage={currentPage} getAllContacts={getAllContacts} />} />

          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
