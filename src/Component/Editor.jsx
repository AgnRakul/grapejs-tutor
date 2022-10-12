import React, { useState, useEffect } from 'react'
import 'grapesjs/dist/css/grapes.min.css'

import { Editor } from '../Editor'
import SideBar from './SideBar'
import { RenderCustomBlock } from '../Helper/renderCustomBlocks';
import { RestrictTemplatesToOne } from '../Helper/actions'
import { CustomPositionTraitsForTemplates } from '../Helper/renderCustomTraits'


const Builder = () => {

    useEffect(() => {
        const editor = Editor();
        RenderCustomBlock(editor.BlockManager)
        RestrictTemplatesToOne(editor)
        CustomPositionTraitsForTemplates(editor)
    }, [])

    
    return (


        <div className='editor-container'>
            <SideBar />
            <div id='grapesjs-container'>

            </div>
        </div>

    )
}

export default Builder