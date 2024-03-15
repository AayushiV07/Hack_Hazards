import banner from '../assets/home-image.png'
import Banner from '../shared/Banner';
const Home = () => {
  return (
    <div className="md:px-10 p-4 max-w-screen-2xl mx-auto mt-20" id='home' >
      <Banner banner={banner} heading="E-bye is a Webapp that is promoting Recyling over Replacement "
      subheading="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus officiis dignissimos laudantium aperiam accusantium aliquid fugiat neque sunt perferendis libero excepturi odit suscipit, necessitatibus assumenda veniam fuga maxime. Similique, exercitationem? "
      btn1="Sell" btn2="Purchase"/>
    </div>  
  );
};

export default Home;
