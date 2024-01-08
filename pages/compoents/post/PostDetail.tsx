// components/post/PostDetail.tsx
import { Formik } from "formik";
import React from "react";
import PostDetailTabs from "./PostDetailTabs";


const PostDetail = () => {
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
  //   <Formik
  //     initialValues={initialValues}
  //     onSubmit={(values, helpers) => {
  //       helpers.setSubmitting(true);
  //       console.log("onSubmit", values);
  //       //you should call backend api here. 
  //       //setTimoue to simulate api call
  //       setTimeout(() => {
  //         helpers.setSubmitting(false);
  //         helpers.resetForm({ values })
  //       }, 2000);
  //     }}
  //  >
      <div className="container">
        <h1 className="text-2xl font-bold my-2">Create Candidate Requisition </h1>
        <PostDetailTabs />
      </div>
  );
};
export default PostDetail;

