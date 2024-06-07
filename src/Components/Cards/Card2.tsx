import IconCheck from '/Img/icon-check.svg'
import IconPaid from '/Img/icon-paid.svg'

const Card2 = () => {
    return (
        <div className='relative bg-[#3ee9e5] w-[327px] h-[436px] my-16 rounded-lg p-6'>
            <img className="absolute -top-6 left-[40px] transform -translate-x-1/2 z-10" src={IconPaid} alt="Free Icon" />
            <h2 className='text-lg mb-4 mt-8 text-[#080c20] font-bold'>Dive right in</h2>
            <p className='text-[#080c20] font-semibold'>
                Ready for the big time? Our paid plan will help you take your business to the next level.
            </p>
            <h1 className='my-7 text-4xl font-bold text-[#080c20]'>$25.00 <span className=' text-sm text'>/month</span></h1>
            <div className="flex flex-row">
                <ul className="list-none text-[#080c20]">
                    <li className="flex items-center mb-2 text-[#080c20]">
                        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
                        Custom domain
                    </li>
                    <li className="flex items-center mb-2 text-[#080c20]">
                        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
                        Advanced analytics and reports
                    </li>
                    <li className="flex items-center mb-2 text-[#080c20]">
                        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
                        High marketplace visibility
                    </li>
                    <li className="flex items-center mb-2 text-[#080c20]">
                        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
                        5% fee per transaction
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Card2