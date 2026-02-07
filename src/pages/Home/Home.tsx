import CertificationsSection from "./Certificate";
import Hero from "./Hero";
import WorkExperience from "./WorkExperience";

const Home=()=>{
    return(
        <>
            <div className="">
                <Hero/>
                <WorkExperience/>
                <CertificationsSection/>
            </div>
        </>
    )
}

export default Home;