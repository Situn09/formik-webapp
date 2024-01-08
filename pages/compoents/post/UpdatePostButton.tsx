// components/post/UpdatePostButton.tsx
import classNames from 'classnames';
import { useFormik, useFormikContext } from 'formik';
import Link from 'next/link';
import React from 'react'

const SaveButton = ({page, setTab, global, enable, label, objCheck}) => {
  const { values, dirty, isSubmitting } = useFormikContext();
  // const { a, b, c } = useFormik({validateOnChange});
  return (
    <div className=' bottom-4 right-4' style={{padding:"5px", margin:"5px"}}>
      <button type="submit" onClick={() => {
        if (label == "Previous") {
          setTab(page);
          return;
        }
        let flag = true;
        for (const obj of objCheck) {
          if (!global[obj]) {
            flag = false;
            break;
          }
        }
        if (flag) {
          if (label == "Submit") {
            alert("success")
          }
          setTab(page);
        }
      }}  className={
        classNames({
          'btn btn-primary': true,
          'loading': isSubmitting,
        })
      } disabled={isSubmitting}>
        {label}
        {/* <Link href={url} shallow={true}>
              <a>{isSubmit ? "Submit" : "Next"}</a>
            </Link> */}
      </button>
    </div>
  )
}

export default SaveButton