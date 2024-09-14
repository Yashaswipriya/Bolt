import Button from '../components/button'

const Subscribe = () => {
  return (
    <section id="contact-us" className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold text-center lg:text-left">
        Sign up for<span className="text-violet-700"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input 
          type="text"
          placeholder="subscribe@bolt.com"
          className="w-full max-lg:w-auto p-3 rounded-full border border-gray-300 outline-none focus:ring-2 focus:ring-violet-700 transition-all"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth={true}/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
