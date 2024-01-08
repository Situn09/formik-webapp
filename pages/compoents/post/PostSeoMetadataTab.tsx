import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import UpdatePostButton from './UpdatePostButton'

const PostSeoMetadataTab = () => {
  const [enable, setEnable] = useState(false);
  const initialValues = {
    slug: "",
    // headline: "",
    title: "",
    opening: "",
    gender: "",
    urgency:"",
    content:
      "",
    seo: {
      title: "",
      description:
        "",
    },
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={(values, helpers) => {
        helpers.setSubmitting(true);
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
          <span>Interview Mode</span>
        </label>
        <Field as="select" name="mode" type="text" className="input input-bordered" placeholder="title" >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </Field>
      
        <label className='label text-accent'>
          <span>Interview Duration</span>
        </label>
        <Field as="select" name="duration" type="text" className="input input-bordered" placeholder="description" >
          <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </Field>

        <label className='label text-accent'>
          <span>Job Location</span>
        </label>
        <Field name="location" type="text" className="input input-bordered" placeholder="description" />
        {/* <UpdatePostButton url={ undefined} enable={ enable} isSubmit={true}/> */}
        </div>
        </Formik>
    </div>
  )
}
export default PostSeoMetadataTab