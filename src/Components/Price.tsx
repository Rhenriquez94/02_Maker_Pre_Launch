import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'

const Price = () => {
  return (
    <section className='flex flex-col justify-center items-center my-8'>
      <h1 className='text-white text-2xl font-bold mb-8'>Our pricing plans</h1>
      <p className='flex flex-center text-center md:w-[530px]'>We only make money when our creators make money. 
        Our plans are always affordable, and it’s completely free to get started.
      </p>
      <div className='md:flex md: flex-row md:gap-16'>
      <Card1/>
      <Card2/>
      </div>
      

    </section>
  )
}

export default Price