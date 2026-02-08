import CertificationsSection from "./Certificate";
import Hero from "./Hero";
import HomeProjects from "./HomeProjects";
import WorkExperience from "./WorkExperience";
import SEO from "@/components/SEO";

const Home=()=>{
    return(
        <>
            <SEO 
                title="Taufique Ali - Full Stack Developer | React, Next.js, Node.js Expert"
                description="Full Stack Developer with 2+ years experience in React.js, Next.js, Angular, Node.js, TypeScript, MongoDB. Specialized in Frontend & Backend Development, MERN Stack, REST APIs, JWT Authentication, Docker, and responsive web applications."
                keywords="frontend developer, backend developer, full stack developer, react developer, reactjs developer, react.js developer, nextjs developer, next.js developer, angular developer, nodejs developer, node.js developer, javascript developer, typescript developer, mern stack developer, mongodb developer, express.js developer, html css developer, tailwind css developer, rest api developer, jwt authentication, docker developer, git developer, responsive design, web developer, software developer, software engineer, taufique ali"
                canonical="https://taufiqueali.dev1.com/"
            />
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