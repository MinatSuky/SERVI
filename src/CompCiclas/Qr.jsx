import React from 'react'

const Qr = ({negacionQR}) => {
    return (
        <div onClick={negacionQR} className='w-[100%] bg-black/50 h-[100%] absolute z-20 flex justify-center items-center '>
            <div className='bg-white z-30 p-10 rounded-xl'>
                <svg className='bg-black cursor-pointer rounded' xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 24 24"><path fill="#ffffff" d="M13 21v-2h2v2zm-2-2v-5h2v5zm8-3v-4h2v4zm-2-4v-2h2v2zM5 14v-2h2v2zm-2-2v-2h2v2zm9-7V3h2v2zM4.5 7.5h3v-3h-3zM3 9V3h6v6zm1.5 10.5h3v-3h-3zM3 21v-6h6v6zM16.5 7.5h3v-3h-3zM15 9V3h6v6zm2 12v-3h-2v-2h4v3h2v2zm-4-7v-2h4v2zm-4 0v-2H7v-2h6v2h-2v2zm1-5V5h2v2h2v2zM5.25 6.75v-1.5h1.5v1.5zm0 12v-1.5h1.5v1.5zm12-12v-1.5h1.5v1.5z" /></svg>
            </div>
        </div>
    )
}

export default Qr
