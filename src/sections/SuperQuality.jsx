import {shoe8} from '../assets/images';
import Button from '../components/button';
const SuperQuality = () => {
  return (
   <section
   id="about-us"
   className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
          <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
            We Provide You 
            <span className='text-violet-700'> Super </span> 
            <span className='text-violet-700'> Quality </span> Shoes
            </h2>
            <p className='mt-4 lg:max-w-lg info-text'>At Bolt, we prioritize your safety, comfort, and style in every pair of shoes we design. Our commitment to high-quality materials and innovative craftsmanship ensures that your feet are supported, protected, and looking great, no matter where your journey takes you.</p>
            <p className='mt-6 lg:max-w-lg info-text'>Our dedication to detail and excellence ensures your satisfaction.</p>
            <div className='mt-11'>
              <Button label= "View details"/>
            </div> 
    </div>
    <div className='flex-1 flex justify-center items-center'>
      <img
      src={shoe8}
      alt="shoe8"
      width={570}
      height={522}
      className='object-contain'
      />

    </div>
   </section>
  )
}

export default SuperQuality
