import React, { useEffect, useState } from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import { blocks } from "../Blocks"
import grapesjs from "grapesjs";
import { RenderCustomBlock } from '../Helper/renderCustomBlocks';


const SideBar = ({ editor }) => {



    const [showBlock, setShowBlock] = useState(false);
    const [isSelected, setIsSelected] = useState(false)
    const [subBlockisSelected, setSubBlockIsSelected] = useState(false)
    const [selectedBlock, setselectedBlock] = useState('')
    const [selectedSubBlock, setselectedSUbBlock] = useState('');

    const selectBlock = (blc) => {
        setIsSelected(true)
        setselectedBlock(blc.Category)
    }

    const findSubBlockIsSelected = (subId) => {
        setSubBlockIsSelected(true)
        setselectedSUbBlock(subId)
    }

    useEffect(() => {
        if (subBlockisSelected) {
            const blockContainer = editor.BlockManager.render();
            const $ = editor.$;
            $("#block-container").append(blockContainer)

        }
    }, [subBlockisSelected])

    const onDragComponent = () => {
        setShowBlock(false)
    }

    function textToDispkay() {
        return blocks.map((block) => {
            if (block.Category === selectedBlock) {
                return block.SubCategory.map((subCategory, index) => {
                    return <div key={index} onMouseEnter={() => findSubBlockIsSelected(subCategory.id)} className={`subcat ${selectedSubBlock === subCategory.id && 'selected'}`}>{subCategory.label}</div>
                })
            }
        })
    }

    // function displayModal() {
    //     return blocks.map((block) => {
    //         if (block.Category === selectedBlock) {
    //             return block.SubCategory.map((subCategory) => {
    //                 if (subCategory.id === selectedSubBlock) {
    //                     return subCategory.modal.map((model, index) => {
    //                         console.log("Helli");
    //                         return <div draggable onDrag={() => onDragComponent()} id="block-container">

    //                         </div>
    //                     })
    //                 }
    //             })
    //         }
    //     })
    // }


    return (
        <div className='sidebar' id='panels-container'>
            <BiMessageSquareAdd style={{
                width: "20px",
                height: "40px",
                cursor: "pointer",
                marginTop: "30px"
            }} onClick={() => setShowBlock(!showBlock)} />
            <div className={`menubar ${!showBlock && 'show'} `}>
                <div className='menubar-topbar'>
                    <span>Add Element</span>
                </div>
                <div className='sub-block'>
                    <div className='sub-block-type'>
                        {
                            blocks.map((item, index) => {
                                return <div key={index} onMouseEnter={() => selectBlock(item)} className={`category ${selectedBlock === item.Category && 'selected'}`}>{item.Category}</div>
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
                            <div className="block-container"draggable onDrag={() => onDragComponent()} id="block-container">
                           { RenderCustomBlock({bm: editor.BlockManager, selectedBlock:selectedBlock, selectedSubBlock: selectedSubBlock})}
                            </div>
                        </div>

                    }

                </div>
            </div>

        </div>
    )
}

export default SideBar