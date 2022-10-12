import React, { useState, useEffect } from 'react'
import { BiMessageSquareAdd } from "react-icons/bi";
import { blocks } from "../../Blocks"
import { Editor } from '../../editor';

const SideBar = () => {

    const [showBlock, setShowBlock] = useState(false);
    const [isSelected, setIsSelected] = useState(false)
    const [subBlockisSelected, setSubBlockIsSelected] = useState(false)
    const [selectedBlock, setselectedBlock] = useState('')
    const [selectedSubBlock, setselectedSUbBlock] = useState('');
    const [editor, setEditor] = useState(null);
    
    useEffect(() => {
        const editor = Editor();
        setEditor(editor)
    }, []);

    const selectBlock = (blc) => {
        setIsSelected(true)
        setselectedBlock(blc.Category)
    }

    const findSubBlockIsSelected = (subId) => {
        setSubBlockIsSelected(true)
        setselectedSUbBlock(subId)
    }

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

    function displayModal() {

        return blocks.map((block) => {
            if (block.Category === selectedBlock) {
                return block.SubCategory.map((subCategory) => {
                    if (subCategory.id === selectedSubBlock) {
                        return subCategory.modal.map((model, index) => {
                            return editor.BlockManager.add(model.id, {
                                label: model.label,
                                content: model.content,
                            })
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
                            {displayModal()}
                        </div>

                    }

                </div>
            </div>

        </div>
    )
}

export default SideBar