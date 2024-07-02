import { TableUser } from '@/components/shared/User/TableUser'
import React from 'react'

const User = () => {
    return (
        <>
            <section className="bg-[#F6F8FD]">
                <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="h1-bold">
                            Users
                        </h1>
                    </div>
                </div>
            </section>
            <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
                <TableUser />
            </section>
        </>
    )
}

export default User