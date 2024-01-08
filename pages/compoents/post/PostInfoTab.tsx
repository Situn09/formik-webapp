// components/post/PostInfoTab.tsx
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import UpdatePostButton from './UpdatePostButton'
import * as Yup from "yup";

export const infoSchema = Yup.object({
  title: Yup.string().min(2).max(25).required("Please enter your title"),
  opening: Yup.string().required("Please enter your job opening position"),
  gender: Yup.string().required("Please select your gneder"),
  urgency: Yup.string().required("Please select your urgency level")
  // name: Yup.string().min(2).max(25).required("Please enter your name"),
  // email: Yup.string().email().required("Please enter your email"),
  // password: Yup.string().min(6).required("Please enter your password"),
  // confirm_password: Yup.string()
  //   .required()
  //   .oneOf([Yup.ref("password"), null], "Password must match"),
});


const PostInfoTab = ({setTab}) => {
  const initialValues = {
    title: "",
    opening: "",
    gender: "",
    urgency:"",
  };
  const [enable, setEnable] = useState(false);
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={(values, helpers) => {
        helpers.setSubmitting(true);
        setEnable(true);
        console.log("onSubmit", values);
        //you should call backend api here. 
        //setTimoue to simulate api call
        setTimeout(() => {
          helpers.setSubmitting(false);
          helpers.resetForm({ values })
        }, 2000);
      }}>
      <div className="form-control">
        <label className='label text-accent'>
          <span>Requisition Title</span>
        </label>
        <Field name="title" type="text" className="input input-bordered" placeholder="write your title" />

        <label className='label text-accent'>
          <span>Numbers of Openings</span>
        </label>
        <Field name="opening" type="text" className="input input-bordered" placeholder="tell your opening position" />

        <label className='label text-accent'>
          <span>Gender</span>
        </label>
        <Field name="gender" as='select' type="text" className="input input-bordered" placeholder="choose your gender" >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non Binary</option>
        </Field>

        <label className='label text-accent'>
          <span>Urgency</span>
        </label>
        <Field name="urgency" as='select' type="text" className="input input-bordered" placeholder="choose your requirment" >
          <option value="urgent">Urgent</option>
          <option value="immediate">Immediate Join</option>
          <option value="relaxed">Relaxed </option>
        </Field>
          <UpdatePostButton page={"second"} setTab={setTab} enable={enable} isSubmit={ false} />
        </div>
        </Formik>
    </div>
  )
}
export default PostInfoTab