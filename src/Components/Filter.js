import React from 'react'

const Filter = ({filterData,category,setCategory}) => {
  function filterHandler(title)
  {
    setCategory(title);
  }
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        
      {filterData.map((data)=>{
        // jb hm multiple itme ko print krenge to return ka use krene
       return( <button
       className={`text-lg px-2 py-2 rounded-md font-medium text-white bg-black hover:bg-opacity-50
       border-2  transition-all duration-300
       ${category===data.title ? "bg-opacity-60 border-white ":" bg-opacity-40 border-transparent"}
       `}
       key={data.id}
      //  hm jis bhi filter pr click krenge vo hmara set ho jayega
       onClick={()=>filterHandler(data.title)}>
        {/* for print the filter value like bussiness development and like this */}
        {data.title}
        </button>)
      })}
    </div>
  )
}

export default Filter
