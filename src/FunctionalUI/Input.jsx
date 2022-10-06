import React, { useState } from 'react'

const Input = () => {

    const [Input, setInput] = useState();
    console.log(Input);

    return (
        <input type="text" onChange={(e) => setInput(e.currentTarget.value)} />
    )
}

export default Input