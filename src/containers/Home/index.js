import React from "react";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <h1>hello</h1>
      <button onClick={()=> {alert("hello")}}>click</button>
    </div>
  )
}

export default Home;