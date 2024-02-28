import React from 'react';
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

const Card = ({course, likedCourses,setLikedCourses}) => {
    function clickHandler(){
        //logic
        //agr liked course ke andar current course ki id hai to vo liked hai
        if(likedCourses.includes(course.id))
        {
            //pahle se like hai to hm use remove kr denge
            //pahle us id ko chhodkar baki sabhi liked id ko array men daal denge jisse vo unliked ho jayegi
            setLikedCourses((prev)=> prev.filter((cid)=> (cid!==course.id)));
            toast.warning("Liked removed");

        }
        else{
            //pahle se liked nhi hai
            //to insert krna hai liked courses men
            if(likedCourses.length===0)
            {
                setLikedCourses([course.id]);
            }
            else{
                //agar pahle se hai to hm kuchh is prakar insert krenge purana vala + nayi vali id
                setLikedCourses((prev)=>[...prev,course.id]);
                
            }
            toast.success("Liked Succesfully");

        }
    }
  return (
      
         <div className='w-[300px] bg-slate-800 bg-opacity-70 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url}></img>
            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-12px] grid place-items-center'>
                <button onClick={clickHandler}>
                    {/* button kr andar hm like vala tag chahate hai  */}
                   {//agr current course liked course ke andar hai to vo pahle se liked tha to usko unlike krna hai
                   //to agr include hai to liked hai fclike V like nhi hai to hm placeholder lga denge 
                   //to hm fc like lga denge
                    likedCourses.includes(course.id)?
                    (<FcLike fontSize="1.75rem"/>):(<FcLikePlaceholder fontSize="1.75rem"/>)
                   }
                </button>
            </div>
        </div>
        <div>
            <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2 text-white '>
               {
                course.description.length>100 ? (course.description.substr(0,100) + "...") : (course.description) 
                }</p>
        </div>
      
    </div>
   

  )
}

export default Card
