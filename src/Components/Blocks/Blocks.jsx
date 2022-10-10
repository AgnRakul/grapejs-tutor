import React, {useState} from 'react'
import SubCategories from './SubCategories/SubCategories'
import Categories from './Categories/Categories'

import "./Blocks.css"

const Blocks = () => {

  const  [showBlock, setshowBlock] = useState(false);
  console.log("🚀 ~ file: Blocks.jsx ~ line 10 ~ Blocks ~ showBlock", showBlock)



  return (
    <div className='blocks'>
     
      {showBlock ? <SubCategories setshowBlock={setshowBlock} /> : <Categories setshowBlock={setshowBlock} />}
    </div>
  )
}

export default Blocks