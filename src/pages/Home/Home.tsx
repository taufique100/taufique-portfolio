import CertificationsSection from "./Certificate";
import Hero from "./Hero";
import HomeProjects from "./HomeProjects";
import WorkExperience from "./WorkExperience";

const Home=()=>{
    return(
        <>
            <div className="">
                <Hero/>
                <WorkExperience/>
                <HomeProjects/>
                <CertificationsSection/>
            </div>
        </>
    )
}

export default Home;