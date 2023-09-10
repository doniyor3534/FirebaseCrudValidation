import React from 'react'
import ModalContact from './MContact'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/Firebase'
import { toast } from 'react-toastify'
import * as Yup from 'yup';




export const AddandUpdate = ({ onClose, open, setOpen ,isUpdate,contact}) => {
  ////////////addd
  const Addcontact = async (value) => {
    onClose()
    try {
      const ContactRef = collection(db, 'contact')
      await addDoc(ContactRef, value)
    } catch (error) {
      console.log(error);
    }
    toast("Add Contact saccessfuly",{
      position:'top-center',
      theme:'colored',
      type:'success'
    });
  }
  ////////////Update
  const Updatecontact = async (value,id) => {
    onClose()
    try {
      const ContactRef = doc(db, 'contact',id)
      await updateDoc(ContactRef, value)
    } catch (error) {
      console.log(error);
    }
    toast("Add Contact saccessfuly",{
      position:'top-center',
      theme:'colored',
      type:'success'
    });
  }

  // ////////////validation (Yup)
  const ValidationObgect = Yup.object().shape({
    name:Yup.string().required('name is required'),
    email:Yup.string().email('email invalid').required('email is Required')
  })


    return (
        <ModalContact onClose={onClose} open={open} setOpen={setOpen}>

            <Formik
             validationSchema={ValidationObgect}
            initialValues={contact? {
                  name:contact.name,
                  email:contact.email
            }:{
                 name:'',
                 email:''
            }} 
              onSubmit={(value)=>{
                isUpdate?
                Updatecontact(value,contact.id)
                :Addcontact(value)}}
            >
                <Form className='flex flex-col'>
                    <label htmlFor="name " className='text-xl' >Name</label>
                    <Field type="text" name='name' id='name' placeholder='name...' className='p-2 border my-2' />
                    <div className="text-red-600">
                       <ErrorMessage name='name'/>
                    </div>
                    <label htmlFor="email" className='text-xl' >  Email</label>
                     <Field type="email" name='email' id='email' placeholder='email...' className='p-2 border my-2' />
                     <div className="text-red-600">
                       <ErrorMessage name='email'/>
                    </div>
                    <button type    ='submit'  className='button my-3 max-w-[200px] bg-blue-600 px-3 py-1 text-lg text-slate-50' >{isUpdate?'Update':'Add'} Contact</button>
                </Form>
            </Formik>



        </ModalContact>
    )
}
