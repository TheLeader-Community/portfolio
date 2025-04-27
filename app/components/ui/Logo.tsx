import Image from 'next/image'
import React from 'react'

export default function Logo() {
    return (
        <div className=" flex items-center gap-2">
            <Image src="/icons/logo.png" width={500} height={500} alt="logo" className=" size-7" />
            <h1 className=' font-extrabold text-xl lg:text-2xl '>TheLeader</h1>
        </div>
    )
}
