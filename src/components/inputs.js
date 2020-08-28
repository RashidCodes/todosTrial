import React from 'react'

const Inputs = ({day, job, setDay, setJob, handleClick}) => {
    return (
        <div>
            <h2 style={{textAlign: 'center'}}>Enter the job and day</h2>
            <div style={{display: 'flex', justifyContent: 'center', margin: '1.5rem 0'}}>
                <div>
                    <label style={{margin: "0 1rem"}} htmlFor="job">Job:</label>
                    <input value={job} type="text" id="job" onChange={e => setJob(e.target.value)}/>
                </div>
                <div>
                    <label style={{margin: "0 1rem"}} htmlFor="day">Day:</label>
                    <input value={day} type="text" id="day" onChange={e => setDay(e.target.value)}/>
                </div>
                
                
            </div>

            <div style={{display: 'flex', justifyContent: 'center'}}>
                <button style={{display: 'block'}} onClick={handleClick}>Add Job</button>
            </div>
        </div>
     
    )
}

export default Inputs;