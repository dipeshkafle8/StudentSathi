import bgImage from "./back.jpg";
import Testimonials from "./Testimonial/Testimonials";
import Footer from "./Footer/Footer";
function Front() {
  return (
    <>
      <div
        className="flex justify-center items-center bg-cover bg-center bg-blend-multiply h-[100vh]"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-white w-[50%] text-center">
          <h1 className="text-[4rem] italic">Your path to the perfect fit</h1>
          <p className="font-light pt-4">
            Welcome to StudentSathi, your one-stop destination for finding the
            perfect college match. Explore institutions, receive personalized
            recommendations, and access expert advice to guide you towards your
            dream education.
          </p>
          <a href="/Course">
            <button className="m-4 px-8 py-2 bg-white text-black rounded-md hover:bg-blue-600 hover:text-white">
              Explore more
            </button>
          </a>
        </div>
      </div>

      <Testimonials />

      <Footer />
    </>
  );
}
export default Front;
