import logo from '../assets/logo.png'

const Navbar = () => {
  const navItems = [
    {link: "Overview", path: "home"},
    {link: "Features", path: "features"},
    {link: "About us", path: "about us"},
    {link: "Contact us", path: "contact us"}
  ]
  return(
    <nav className='bg-white md:px-14 p-4 max-w-screen-2xl max-auto text-primary'>
      <div className='text-lg container mx-auto flex justify-between items-center font-medium'>
        <div className='flex space-x-14 items-center'>
          <a href="/" className='text-2xl font-semibold flex items-center space-x-4 text-primary'><img src={logo} alt=" " className='h-11 w-11 inline-block items-center' /><span>E-bye</span> </a>

          <ul className='md:flex space-x-12 hidden'>
            {
              navItems.map(({link,path}) =>  <a key={link} href={path} className='block hover:text-gray-300'>{link}</a>)
            }
          </ul>
          </div>
          <div className='space-x-12 hidden md:flex items-center'>
            <button className='bg-secondary  px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Login</button>
            <button className='bg-pink px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
          </div> 
      </div>
    </nav>

  );
};

export default Navbar; 