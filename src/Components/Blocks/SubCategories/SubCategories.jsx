import React from 'react'

const SubCategories = (props) => {

    const setBack = () => {
        props.setshowBlock(false)
    }

  return (
    <div onClick={setBack}>
        <p>Back</p>
    </div>
  )
}

export default SubCategories