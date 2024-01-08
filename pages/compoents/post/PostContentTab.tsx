// components/post/PostInfoTab.tsx
import { Field, Formik } from 'formik'
import React, { useState } from 'react'
import UpdatePostButton from './UpdatePostButton'


const PostContentTab = () => {

  const [enable, setEnable] = useState(false);
  const initialValues = {
    title: "",
    detail: "",
    location: "",
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
          <span>Job Title</span>
        </label>
        <Field  name="title" className="input input-bordered" placeholder="Enter Job Title" />

        <label className='label text-accent'>
          <span>Job Detail</span>
        </label>
        <Field  name="detail" className="input input-bordered" placeholder="Enter Job Detail" />

        <label className='label text-accent'>
          <span>Job Location</span>
        </label>
        <Field  name="location" className="input input-bordered" placeholder="Enter Job Location" />
        {/* //<UpdatePostButton  enable={enable} isSubmit={false}/>  url={`/cms/post/hello-world/seo`} */}
        </div>
        </Formik>
    </div>
  )
}
export default PostContentTab