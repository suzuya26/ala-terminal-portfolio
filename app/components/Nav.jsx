export default function Nav() {
    return (
        <>
            <nav className='grid grid-cols-1 sm:grid-cols-3 gap-3 bg-gray-900 rounded-t-2xl'>
                <div className="hidden sm:flex gap-0 p-2">
                    <div className='bg-pink-600 rounded-full m-1'>
                        <span className='m-3'></span>
                    </div>
                    <div className='bg-red-700 rounded-full m-1'>
                        <span className='m-3'></span>
                    </div>
                    <div className='bg-blue-700 rounded-full m-1'>
                        <span className='m-3'></span>
                    </div>
                    <div className='bg-yellow-500 rounded-full m-1'>
                        <span className='m-3'></span>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className='text-slate-300 font-medium p-1'>~: farhan.sep@suzuya | terminal</p>
                </div>
                <div className='hidden sm:block'>

                </div>
            </nav>
        </>
    )
}
