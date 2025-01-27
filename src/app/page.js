import Banner from "@/Components/Banner";
import Contact from "@/Components/Contact";
import Doctor from "@/Components/Doctor";
import OurServices from "@/Components/OurServices";
import Reviews from "@/Components/Reviews";


const Home = () => {
    return (
        <div>
            <Banner/>

            <OurServices/>
            <Reviews/>
            <Doctor/>
            <Contact/>
        </div>
    );
};

export default Home;