import React from 'react'
import SubCategoriesJson from "../SubCategories.json"

const Categories = (props) => {


    const showBlocks = () => { 
        props.setshowBlock(true)
    }

  return (
    <div>
    {
        SubCategoriesJson.map((item, index) => {
          return (
            <div key={index} className={`Block-Categories ${props.showBlock && 'hidden'} `} onClick={() => showBlocks()}>
               <p>{item.label}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Categories