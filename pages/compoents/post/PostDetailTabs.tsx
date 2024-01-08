import React, {useMemo, useState} from 'react'
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from 'next/router';
import * as Yup from "yup";
// import PostContentTab from './PostContentTab';
// import PostInfoTab from './PostInfoTab';
// import PostSeoMetadataTab from './PostSeoMetadataTab';
import UpdatePostButton from './UpdatePostButton';
import { ErrorMessage, Field, Formik } from 'formik';

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

const First = ({ global, setGlobal , setTab }:{global:any, setGlobal:func, setTab:funcStr})=> {
  const infoSchema = Yup.object({
    title: Yup.string().min(2).max(25).required("Please enter your title"),
    opening: Yup.string().required("Please enter your job opening position"),
    gender: Yup.string().required("Please select your gender"),
    urgency: Yup.string().required("Please select your urgency level")
    // name: Yup.string().min(2).max(25).required("Please enter your name"),
    // email: Yup.string().email().required("Please enter your email"),
    // password: Yup.string().min(6).required("Please enter your password"),
    // confirm_password: Yup.string()
    //   .required()
    //   .oneOf([Yup.ref("password"), null], "Password must match"),
  });
  const initialValues = {
    title: "",
    opening: "",
    gender: "",
    urgency:"",
  };
  const [enable, setEnable] = useState(false);
  return (
    <div>
      <Formik initialValues={initialValues} validationSchema={infoSchema} onSubmit={(values, helpers) => {
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
          <Field name="title" type="text" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,title:(e.target as HTMLInputElement).value}) }} placeholder="write your title" />

        <label className='label text-accent'>
          <span>Numbers of Openings</span>
        </label>
        <Field name="opening" type="text" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,opening:(e.target as HTMLInputElement).value}) }} placeholder="tell your opening position" />

        <label className='label text-accent'>
          <span>Gender</span>
        </label>
          <Field name="gender" as='select' value={ global.gender} type="text" className="input input-bordered" onChange={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global, gender:(e.target as HTMLInputElement).value}) }} placeholder="choose your gender" >
          
            <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="non-binary">Non Binary</option>
        </Field>

        <label className='label text-accent'>
          <span>Urgency</span>
        </label>
        <Field name="urgency" as='select' value={ global.urgency} type="text" className="input input-bordered" onChange={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global, urgency:(e.target as HTMLInputElement).value}) }} placeholder="choose your requirment" >
          <option value="urgent">Urgent</option>
          <option value="immediate">Immediate Join</option>
          <option value="relaxed">Relaxed </option>
        </Field>
          <UpdatePostButton page={"second"} global={global} setTab={setTab} enable={enable} label="Next" objCheck={["title", "opening", "gender", "urgency"]} />
        </div>
        </Formik>
    </div>
  )
}

const Second = ({global, setGlobal, setTab}:{global:any, setGlobal:func, setTab:funcStr}) => {

  const [enable, setEnable] = useState(false);
  const initialValues = {
    title: "",
    detail: "",
    jobLocation: "",
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
        <Field  name="title" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,jobTitle:(e.target as HTMLInputElement).value}) }} placeholder="Enter Job Title" />

        <label className='label text-accent'>
          <span>Job Detail</span>
        </label>
        <Field  name="detail" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,detail:(e.target as HTMLInputElement).value}) }} placeholder="Enter Job Detail" />

        <label className='label text-accent'>
          <span>Job Location</span>
        </label>
        <Field  name="jobLocation" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,jobLocation:(e.target as HTMLInputElement).value}) }} placeholder="Enter Job Location" />
          <div style={{ display: "flex" }}>
            <div>
        <UpdatePostButton page={"first"} setTab={setTab} global={global} enable={enable} label="Previous" objCheck={["title", "detail", "jobLocation"]} />
        </div>
          <UpdatePostButton page={"last"} setTab={setTab} global={global} enable={enable} label="Next" objCheck={["title", "detail", "jobLocation"]} />
          </div>
        </div>
        </Formik>
    </div>
  )
}

const Last = ({global, setGlobal, setTab}:{global:any, setGlobal:func, setTab:funcStr}) => {
  const [enable, setEnable] = useState(false);
  const initialValues = {
    mode: "",
    duration: "",
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
          <span>Interview Mode</span>
        </label>
        <Field as="select" name="mode" type="text" className="input input-bordered" onChange={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,mode:(e.target as HTMLInputElement).value}) }} placeholder="title" >
          <option value="online">Online</option>
          <option value="offline">Offline</option>
        </Field>
      
        <label className='label text-accent'>
          <span>Interview Duration</span>
        </label>
        <Field as="select" name="duration" type="text" className="input input-bordered" onChange={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,duration:(e.target as HTMLInputElement).value}) }} placeholder="description" >
        
            <option value="short">Short</option>
          <option value="medium">Medium</option>
          <option value="long">Long</option>
        </Field>

        <label className='label text-accent'>
          <span>Interview Location</span>
        </label>
        <Field name="location" type="text" className="input input-bordered" onKeyUp={(e:React.KeyboardEvent<HTMLInputElement>) => { setGlobal({...global,location:(e.target as HTMLInputElement).value}) }} placeholder="description" />
        <div style={{display:"flex"}}>
        <UpdatePostButton page={"second"} global={global} setTab={setTab} enable={enable} label="Previous" objCheck={["mode", "location", "duration"]}/>
          <UpdatePostButton page={"last"} global={global} setTab={setTab} enable={enable} label="Submit" objCheck={["mode", "location", "duration"]}/>
          </div>
        </div>
        </Formik>
    </div>
  )
}

const PostDetailTabs = () => {
  // const router = useRouter();
  // const params = Array.isArray(router.query.slug)
  //   ? (router.query.slug as string[])
  //   : [];
  // const [slug, currentTab = ""] = params;
  // const tabInfo = [
  //   { url: `/cms/post/`, text: "Requisition Details", activeMatcher: "" },
  //   { url: `/cms/post/content`, text: "Job Details", activeMatcher: "content" },
  //   { url: `/cms/post/seo`, text: "Interview Settings", activeMatcher: "seo" }
  // ]
  // const TabComponent = useMemo(() => {
  //   switch (currentTab) {
  //     case "content": return <PostContentTab />;
  //     case "seo": return <PostSeoMetadataTab />;
  //     default:
  //       return <PostInfoTab />
  //   }
  // }, [currentTab])
  // return (
  //   <div>
  //     <div className="tabs">
  //       {
  //         ...
  //       }
  //     </div>
  //     {TabComponent}
  //   </div>
  // )
  const [tab, setTab] = useState("first");
  const [global, setGlobal] = useState({
    title: "",
    opening: "",
    gender: "",
    urgency: "",
    jobTitle: "",
    detail: "",
    location: "",
    mode: "",
    duration: "",
    jobLocation: "",
  });

  return (
    <div>
      <div className="tabs">
        {/* {
          tabInfo.map((tab, index) => {
            return <Link key={index} shallow={true}>
              <a className={classNames({
                "tab tab-bordered": true,
                "tab-active": tab.activeMatcher === currentTab,
              })}>{tab.text}</a>
            </Link>
          })
        } */}
        <a className={classNames({
                "tab tab-bordered": true,
                "tab-active": tab=="first",
        })}>Requisition Details</a>
        <a className={classNames({
                "tab tab-bordered": true,
                "tab-active": tab=="second",
        })}>Job Details</a>
        <a className={classNames({
                "tab tab-bordered": true,
                "tab-active": tab=="last",
              })}>Interview Settings</a>
      </div>
      {/* {TabComponent} */}
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <div style={{ width:"70%" }}>
      {tab=="first"?<First global={global} setGlobal={setGlobal} setTab={setTab} />:<></>}
      {tab=="second"?<Second global={global} setGlobal={setGlobal} setTab={setTab} />:<></>}
          {tab == "last" ? <Last global={global} setGlobal={setGlobal} setTab={setTab} /> : <></>}
          </div>
        {/* <UpdatePostButton/> */}
        <div style={{ width: "30%", height: "100%", backgroundColor:"#e9e9e9", padding: "10px",
    margin: "10px" }}>
          <div style={{display:"flex", justifyContent:"space-between", backgroundColor: "#ffff", padding: "5px", margin: "5px"}}>
            <div style={{}}> {global.title}</div>
            <div style={{}}>Opening: {global.opening}</div>
          </div>
          <div style={{ backgroundColor: "#ffff", padding: "5px", margin: "5px"}}>
            <div style={{fontWeight:"700", paddingBottom:"5px"}}>Requisition Detail</div>
              <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
                  <div style={{}}>
                    <div  style={{}}>Urgency</div>
                    <div style={{}}>{ global.urgency}</div>
                  </div>
                  <div style={{}}>
                    <div  style={{}}>Gender</div>
                    <div style={{}}>{ global.gender}</div>
                  </div>
              </div>
          </div>
          <div style={{backgroundColor: "#ffff", padding: "5px", margin: "5px"}}>
            <div style={{fontWeight:"700", paddingBottom:"5px"}}>Job Detail</div>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
            <div style={{}}>
              <div  style={{}}>Job Title</div>
              <div style={{}}>{ global.jobTitle}</div>
            </div>
            <div style={{}}>
              <div  style={{}}>Job Detail</div>
              <div style={{}}>{ global.detail}</div>
            </div>
            <div style={{}}>
              <div  style={{}}>Job Location</div>
              <div style={{}}>{ global.jobLocation}</div>
            </div>
            </div>
          </div>
          <div style={{backgroundColor: "#ffff", padding: "5px", margin: "5px"}}>
            <div style={{fontWeight:"700", paddingBottom:"5px"}}>Interview Settings</div>
            <div style={{display:"grid", gridTemplateColumns: "1fr 1fr", gap: "10px"}}>
            <div style={{}}>
              <div  style={{}}>Interview Mode</div>
              <div style={{}}>{ global.mode}</div>
            </div>
            <div style={{}}>
              <div  style={{}}>Interview Duration</div>
              <div style={{}}>{ global.duration}</div>
            </div>
            <div style={{}}>
              <div  style={{}}>Interview Location</div>
              <div style={{}}>{ global.location}</div>
              </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}
export default PostDetailTabs