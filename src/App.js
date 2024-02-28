import {useEffect, useState} from 'react';
import React from 'react';
import './App.css';
import {Route} from 'react';
import PageNotFound from './Components/PageNotFound';
//this is the two variable in data .js file
import { apiUrl,filterData } from './data';
import Navbar from './Components/Navbar';
import Filter from './Components/Filter';
import Cards from  './Components/Cards'
//import toast
import {toast} from "react-toastify";
//import spiner
import Spiner from'./Components/Spiner';

function App() {

  const[courses,setCourses]=useState(null);
  const[loading,setLoading]=useState(true);
  //for all category bussiness this type of filter
  const[category,setCategory]=useState(filterData[0].title);

  useEffect(()=>{
    //async function is uses for API CALL
    const fetchData= async()=>{
      setLoading(true);
      try{
        const res=await fetch(apiUrl);
        //convert the data into json format
        const output=await res.json();
        //save data into a variable

        setCourses(output.data);
      
      }
      catch(error){
        //data nhi aaya to 404 vala bhi print kr sakte hai
        <Route path="*" element={<PageNotFound />} />
        toast.error("something went wrong");

      }
      //yadi data aa jata hai to set loading ko false kr denge
      setLoading(false);
    }
    fetchData();
  },[]);
 
  return (
    <div className="min-h-screen flex  flex-col bg-slate-900">
      {/* the three main component  for Courses */}
         <Navbar/>
         
         <div className='bg-slate-900'>

         <Filter filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        <div className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] '>
          {
              loading ? (<Spiner/>) : (<Cards courses={courses} category={category}/>)
          }
          </div>
        </div>


        </div>
  );
};
export default App;
