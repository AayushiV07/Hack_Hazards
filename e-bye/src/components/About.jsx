import aboutImg from '../assets/about-image.png'
const About = () => {
  return (
    <div className="md:px-14 p-4 max-w-s mx-auto  space-y-10">
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='md:w-1/2'>
          <img src={aboutImg}  alt='' className='w-100 h-100'  />
        </div>
        {/* About Content */}
        <div className='md:w-2/5'>
          <h2 className='md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal'>
            Lorem ipsum dolor sit amet consectetur <span className='text-secondary'>adipisicing elit. Eligendi.</span>
          </h2>
          <p className='text-tertiary text-lg mb-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non dolorum veritatis repellat ut quae corrupti rerum beatae ipsum facilis laborum.</p>
          <button className='btnPrimary'>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;