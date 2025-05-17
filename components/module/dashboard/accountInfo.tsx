import React from 'react'

function AccountInfo({title,subtitle}:{title:string,subtitle:string}) {
    return (
        <div className='mt-5'>
            <div className='border border-white rounded-lg'>
                <div className="flex justify-between items-center m-5">
                    <div>
                        <p className="text-gray-500"> {title}</p>
                        <p className="text-2xl font-light">{subtitle}</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AccountInfo