 
import BlogSection from "../BlogSection/BlogSerction";
import EducationSection from "../BlogSection/EducationSection/EducationSection";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Pricing from "../Pricing/Pricing";
import Projects from "../Project/Projects";

const Home = () => {
    return (
      <>
      <div className="w-full max-w-screen-lg mx-auto p-4">
        <div className="flex justify-center items-center mt-8">
          <div className="avatar  delay-700">
            <div className="mask mask-squircle lg:w-96 md:w-40 w-36">
              <img src="https://i.ibb.co/nDbgCPm/Untitled-design.png" alt="Avatar" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mt-6">
          <h1 className="font-bold text-3xl md:text-5xl text-white animate-fade-in">Md Rana</h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mt-2 animate-fade-in">Junior Mern Stak Developer</h2>
          <p className="mt-4 lg:w-7/12 w-10/12 text-sm md:text-base lg:text-lg text-gray-400 animate-fade-in">
        My Name is Rafiet Rana,  I am a Front End Web Developer. As a Front-end web developer, I am responsible for creating interactive websites that users see and interact with. Currently I am learning about full stack web developement. I am passionate about Software Engineering My Skills That I  have acquired. Html, Css, Javascript, React js, Node js, Express js, Mongodb, WordPress, In the future I want to work on modernizing the website and I want to work more on how to make the website more beautiful and more user friendly.
          </p>
          <div className="flex gap-10 my-5 animate-fade-in">
            <button className="btn btn-warning">Contact Now</button>
            <button 
  className="btn btn-warning bg-[#2A323C] text-white" 
  onClick={() => window.open("https://drive.google.com/file/d/1GZppgy5fWjWlAoNTrDQB7UQYNakH15dw/view?usp=sharing", "_blank")}
>
  View Resume
</button>

          </div>
          <div className="mt-16 animate-fade-in">
            <p className="text-2xl font-bold">My Top Skills</p>
    
          </div>
          <div className="w-full my-24">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 animate-grid-fade-in">
              {[
                "https://i.ibb.co/NnVnLV9/html-removebg-preview.png",
                "https://i.ibb.co/fCFcw1n/css-removebg-preview.png",
                "https://i.ibb.co/FhvKC2X/javascript-removebg-preview.png",
                "https://i.ibb.co/sW4pWYJ/react-removebg-preview.png",
                "https://i.ibb.co/PYX3ddv/express-js.png",
                "https://i.ibb.co/9sRCfKt/Mongodb-removebg-preview.png",
                "https://i.ibb.co/RCxQVhw/node-removebg-preview.png",
                "https://i.ibb.co/9sRCfKt/Mongodb-removebg-preview.png"
              ].map((src, index) => (
                <div key={index} className="card bg-neutral text-neutral-content hover:scale-105 transition-transform duration-300">
                  <div className="card-body items-center text-center">
                    <img className="w-11" src={src} alt={`Skill ${index + 1}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Pricing></Pricing>
          <EducationSection></EducationSection>
          <Projects></Projects>
          <BlogSection></BlogSection>
        </div>
        <div>
          
          <Contact />
 
        </div>
      </div>
      <div className="bg-[#2A323C]">
        <div className="w-9/12 mx-auto">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
