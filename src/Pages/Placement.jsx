import React from 'react'
import PlacementImageSlider from '../Components/Placement/PlacementImageSlider';
import PlacementImageMobile from '../Components/Placement/PlacementImageMobile';

function Placement() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 block md:hidden lg:block xl:block 2xl:hidden">
    <div className="mb-[80px] mt-8">
      <h1 className="text-black text-2xl sm:text-3xl md:text-4xl text-center font-semibold sm:font-bold"> 
        Your Future, 
        <span className="text-[#067D45]"> Our Focus</span>, Your Fulfillment
      </h1>
      <h3 className="text-center text-lg sm:text-xl md:text-2xl font-medium text-black text-opacity-70 mt-3">
        Placement Assistance
      </h3>
      <div className="mt-10">
      <PlacementImageSlider/>
<PlacementImageMobile />
 
      </div>
    </div>
  </div>
  
  )
}

export default Placement;
