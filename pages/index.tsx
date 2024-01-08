import type { NextPage } from "next";
import PostDetailTabs from "./compoents/post/PostDetailTabs";

const Home: NextPage = () => {
  //add state and a toggle handler

  return <div className="container">
  <h1 className="text-2xl font-bold my-2">Create Candidate Requisition </h1>
  <PostDetailTabs />
</div>
};

export default Home;
