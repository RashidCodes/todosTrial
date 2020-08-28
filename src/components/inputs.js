import React from 'react'

const Inputs = ({day, job, setDay, setJob, handleClick}) => {
    return (
        <div>
            <input value={job} type="text" name="" onChange={e => setJob(e.target.value)}/>
            <input value={day} type="text" name="" onChange={e => setDay(e.target.value)}/>

            <button onClick={handleClick}>Add Job</button>
        </div>
     
    )
}

export default Inputs;