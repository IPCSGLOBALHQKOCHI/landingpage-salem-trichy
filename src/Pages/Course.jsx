import React from 'react'
import CourseLists from '../Components/Courses/CourseLists'
function Course() {
    return (
        <div id="courses" className=' absloute w-full h-[380px] sm:h-[480px]  mt-20 mb-40'>
            <div>
                <h1 className='text-black text-center text-4xl font-bold'>Signature <span className='text-[#008145]'>Courses</span></h1>
                <h3 className='text-center text-lg font-medium text-black text-opacity-80 !px-2 mt-3'>Check our extensive range of educational offerings</h3>
                <CourseLists /> 
            </div>
        </div>
      )
}

export default Course
