// components/post/UpdatePostButton.tsx
import classNames from 'classnames';
import { useFormik, useFormikContext } from 'formik';
import Link from 'next/link';
import React from 'react'

type func = React.Dispatch<React.SetStateAction<{
  title: string;
  opening: string;
  gender: string;
  urgency: string;
  jobTitle: string;
  detail: string;
  location: string;
  mode: string;
  duration: string;
  jobLocation: string;
}>>;

type funcStr = React.Dispatch<React.SetStateAction<string>>;
type gType = {
  title: string;
  opening: string;
  gender: string;
  urgency: string;
  jobTitle: string;
  detail: string;
  location: string;
  mode: string;
  duration: string;
  jobLocation: string;
}

const SaveButton = ({page, setTab, global, enable, label, objCheck}:{page:string, setTab:funcStr, global:gType,enable:boolean, label:string,objCheck:string[]}) => {
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
          // @ts-ignore
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
        })
      } >
        {label}
        {/* <Link href={url} shallow={true}>
              <a>{isSubmit ? "Submit" : "Next"}</a>
            </Link> */}
      </button>
    </div>
  )
}

export default SaveButton