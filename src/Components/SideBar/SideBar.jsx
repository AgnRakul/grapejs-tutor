import React, { useState } from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import Blocks from "../../Blocks.json"

const SideBar = () => {


    const [showBlock,setShowBlock] = useState(false);
    const [isSelected, setIsSelected] = useState(false)
    const [subBlockisSelected, setSubBlockIsSelected] = useState(false)
    const [selectedBlock, setselectedBlock] = useState('')
    const [selectedSubBlock, setselectedSUbBlock] = useState('')


    const selectBlock = (blc) => {
        setIsSelected(true)
        setselectedBlock(blc.Category)
    }

    const findSubBlockIsSelected = (subId) => {
        console.log(subId);

        setSubBlockIsSelected(true)
        setselectedSUbBlock(subId)


    }

    function textToDispkay() {
        return Blocks.map((block) => {
            if (block.Category === selectedBlock) {
                return block.SubCategory.map((subCategory) => {
                    return <div onMouseEnter={() => findSubBlockIsSelected(subCategory.id)} className={`subcat ${selectedSubBlock === subCategory.id && 'selected'}`}>{subCategory.label}</div>
                })
            }
        })
    }

    function displayModal() {
        
        return Blocks.map((block) => {
            if(block.Category === selectedBlock) {
                return block.SubCategory.map((subCategory) => {
                    if(subCategory.id === selectedSubBlock) {
                        return subCategory.modal.map((model) => {
                            return <div className='modal'>{model.label}</div>
                        })
                    }
                })
            }
        })
    }





    return (
        <div className='sidebar' id='panels-container'>
            <BiMessageSquareAdd style={{
                width: "20px",
                height: "40px",
                cursor: "pointer",
                marginTop: "30px"
            }} onClick={() => setShowBlock(!showBlock)} />
            <div className={`menubar hide-menu ${showBlock && 'show'} `}>
                <div className='menubar-topbar'>
                    <span>Add Element</span>
                </div>
                <div className='sub-block'>
                    <div className='sub-block-type'>
                        {
                            Blocks.map((item) => {
                                return <div onMouseEnter={() => selectBlock(item)} className={`category ${selectedBlock === item.Category && 'selected'}`}>{item.Category}</div>
                            })
                        }
                    </div>
                    {
                        isSelected &&
                        <div className='sub-block-type'>
                            {textToDispkay()}
                        </div>
                    }
                    { 
                    isSelected && subBlockisSelected && <div className='sub-block-type'>
                        {displayModal()}
                    </div>

                    }
                    
                </div>
            </div>

        </div>
    )
}

export default SideBar