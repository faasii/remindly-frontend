import React from 'react'

function UserTitle({name}:{name:string}) {
    return (
        <div className='mt-6 text-white'>
            <h3 className="text-3xl ">Welcome {name}</h3>
        </div>
    )
}

export default UserTitle