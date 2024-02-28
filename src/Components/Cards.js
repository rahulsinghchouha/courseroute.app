import React from 'react';
import Card from './Card'
import { useState } from 'react';

const Cards = ({courses,category}) => {
  //starting men liked courses empty hai
  const[likedCourses,setLikedCourses]=useState([])

 
  //returns you a list of all courses recieved from the api response
  const getCourses = () =>{
    if(category==="All"){
      let allCourses=[];
      
    Object.values(courses).forEach((courseCategory) =>
    {
      courseCategory.forEach((course)=>{
        allCourses.push(course);
      })
    })
    //all courses ke andar hmara get courses ke duvara sara data ek array men aa gaya hai
    // jo ki allCourses hai
    return allCourses;
  }
  else{
    //else men men sirf specific category ka data array pass krenge
    return courses[category];
  }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>{
      getCourses().map((course) => {
      return(<Card key={course.id}
         course={course}
         likedCourses={likedCourses}
        setLikedCourses={setLikedCourses}/>)
      })}
    </div>
  )
}

export default Cards

