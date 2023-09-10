import { Navbar } from "./Component/Navbar";
import { FiSearch } from 'react-icons/fi'
import { AiFillCloseCircle, AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from "react";
import { collection, getDoc, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from "./config/Firebase";
import { ContactCard } from "./Component/Contactcard";
import { AddandUpdate } from "./Component/AddandUpdate";
import { UseDiscluse } from "./hook/UseDiscluse";
import { ToastContainer } from 'react-toastify';





function App() {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contact')
        onSnapshot(contactsRef, (snapshot) => {
          const contactdata = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setContacts(contactdata)
          return contactdata
        })


      } catch (error) {
        console.log(error);
      }
    }
    getContacts()
  }, [])
  // ////////////////////////////modal
  const { onOpen, open, setOpen, onClose } = UseDiscluse()
  //////////////////////////search///////////

  const SerchFilterContact = (e) => {
    const value = e.target.value;

    const getContacts = async () => {
      try {
        const contactsRef = collection(db, 'contact')
        onSnapshot(contactsRef, (snapshot) => {
          const contactdata = snapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })

          const filterContact = contactdata.filter(x => x.name.slice(0, 2).toLowerCase().includes(value.toLowerCase()))

          setContacts(filterContact)
          return filterContact
        })


      } catch (error) {
        console.log(error);
      }
    }
    getContacts()

  }



  // /////////plus btn
  const PlusClick = () => {
    onOpen()
  }




  return (
    <>
      <div className="App max-w-[370px] mx-auto   ">
        <div className="sticky top-0  bg-opacity-70 bg-slate-600 rounded-md p-2">
          <Navbar className='' />
          <div className="flex gap-2 ">
            <div className="flex items-center  relative flex-grow" >
              <FiSearch className="text-4xl text-white absolute pl-1 " />
              <input onChange={SerchFilterContact} type="text" className="pl-10 outline-none p-3 text-white rounded-md bg-transparent border h-10 flex-grow" />
            </div>
            <AiFillPlusCircle onClick={PlusClick} className="text-5xl cursor-pointer text-white" />
          </div>
        </div>

        <div className="max-h-[80vh] ">
          {
            contacts.map(item => (
              <ContactCard item={item} key={item.id} />
            ))
          }
        </div>
      </div>
      {/* /////////////////////// */}
      <AddandUpdate onClose={onClose} open={open} setOpen={setOpen} children={'sssjsjsjjsj'} />
      {/* /toast */}
      <ToastContainer />
    </>
  );
}

export default App;
