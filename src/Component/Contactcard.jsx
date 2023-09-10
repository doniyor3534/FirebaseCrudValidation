import { deleteDoc, doc } from 'firebase/firestore'
import { BsPersonCircle } from 'react-icons/bs'
import { RiDeleteBin5Line, RiEdit2Line } from 'react-icons/ri'
import { db } from '../config/Firebase'
import { UseDiscluse } from '../hook/UseDiscluse'
import { AddandUpdate } from './AddandUpdate'
import { toast } from 'react-toastify'



export const ContactCard=({item})=>{
// //////////modal
const {onOpen,open,setOpen,onClose} = UseDiscluse()


const deleteContact= async(id)=>{
  toast("Deleted Contact saccessfuly",{
    position:'top-center',
    theme:'colored',
    type:'error'
  });
    try {
         await deleteDoc(doc(db,'contact',id))
    } catch (error) {
       console.log(error);
    }
}

    return (
        <>
           <div className="p-2 bg-amber-300 my-2 rounded-md border-none flex items-center justify-between" key={item.id}>
            <div className="flex items-center gap-3">
              <BsPersonCircle className=" text-4xl cursor-pointer text-orange" />
              <div className=" text-start">
                <h1 className="text-2xl">{item.name.slice(0,15)}</h1>
                <h5>{item.email.slice(0,30)}</h5>
              </div>
            </div>
            <div className="flex text-3xl gap-2">
              <RiEdit2Line onClick={onOpen} className=" cursor-pointer" />
              <RiDeleteBin5Line onClick={()=>deleteContact(item.id)} className=" cursor-pointer text-Purple" />
            </div>
          </div>
          <AddandUpdate isUpdate contact={item} onClose={onClose} open={open} setOpen={setOpen} children={'sssjsjsjjsj'}  />
        </>
    )
}