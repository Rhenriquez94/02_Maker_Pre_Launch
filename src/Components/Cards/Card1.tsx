import IconCheck from '/Img/icon-check.svg'
import IconFree from '/Img/icon-free.svg'

const Card1 = () => {
  return (
<div className='relative bg-[#093f68] w-[327px] h-[436px] my-16 rounded-lg p-6'>
  <img className="absolute -top-6 left-[40px] transform -translate-x-1/2 z-10" src={IconFree} alt="Free Icon" />
  <h2 className='text-lg mb-4 mt-3'>Dip your toe</h2>
  <p>
    Just getting started? No problem at all! 
    Our free plan will take you a long way.
  </p>
  <h1 className='my-7 text-4xl font-bold text-white'>Free</h1>
  <div className="flex flex-row">
    <ul className="list-none">
      <li className="flex items-center mb-2">
        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
        Unlimited products
      </li>
      <li className="flex items-center mb-2">
        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
        Basic analytics
      </li>
      <li className="flex items-center mb-2">
        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
        Limited marketplace exposure
      </li>
      <li className="flex items-center mb-2">
        <img className="size-3 mr-2" src={IconCheck} alt="Check Icon" />
        10% fee per transaction
      </li>
    </ul>
  </div>
</div>
  )
}

export default Card1