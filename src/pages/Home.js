import styles from './Home.css';

function Home() {
  const image1 = require('../Images/carbonara1.jpg');
  const image2 = require('../Images/Chicken-Kebabs1.jpg');
  const image3 = require('../Images/vegan-lasagna1.jpg');
  return (
    <>
      <div className={styles.para}>
      <h1>Home</h1>
      <p>The online meal recipe portal is a culinary haven that opens the doors to a world of gastronomic delight and culinary exploration. Users are welcomed into a virtual realm where they can access an extensive repository of diverse and delectable recipes spanning various cuisines, dietary preferences, and skill levels. The portal serves as a comprehensive guide for both novice cooks seeking easy-to-follow recipes and seasoned chefs eager to experiment with innovative culinary creations. Upon entering the portal, users are greeted with a user-friendly interface that facilitates seamless navigation. The platform allows users to explore an array of recipes, ranging from quick and convenient weekday meals to elaborate dishes fit for special occasions. Each recipe is meticulously curated, accompanied by vivid images, detailed ingredient lists, and step-by-step instructions, ensuring that users can recreate the dishes with precision and culinary finesse. Interactivity takes center stage as users can engage with the platform in various ways. They have the option to add and save their favorite recipes and share their culinary triumphs with a vibrant community of food enthusiasts.  For those with specific dietary requirements, the portal offers advanced filtering options, enabling users to discover recipes tailored to their needs, whether they follow a gluten-free, vegan, or low-carb lifestyle. Additionally, the platform regularly updates its content with seasonal recipes, cooking tips, and trending culinary concepts, ensuring a constant source of inspiration for users on their gastronomic journey. In essence, the online meal recipe portal is a multifaceted culinary companion that not only provides a diverse range of recipes but fosters a sense of community and creativity among its users. It transforms cooking from a routine task into an exciting and interactive experience, offering a virtual kitchen where individuals can discover, share, and savor the joys of preparing delicious meals.</p>
      </div>
      
      <div className={styles.container}>

        <div className="image-box">
          <img src={image1} width={400} height={300} alt={'carbonara1'} />
          <img src={image2} width={400} height={360} alt={'kebab1'} />
          <img src={image3} width={400} height={350} alt={'lasagna1'} />
        </div>
      </div>
    </>
    
  );
}

export default Home;
