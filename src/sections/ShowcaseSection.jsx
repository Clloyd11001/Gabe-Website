import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current,
        project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },

                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100px',
                    }
                },
            )
        });

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 });
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10 lg:gap-16">
                    {/* LEFT*/}
                    <div className="w-full lg:w-[55%] mx-auto md:mx-0" ref={project1Ref} style={{ display: "flex", justifyContent: "center" }}>
                        <div className="image-wrapper aspect-[3/4] md:aspect-[3/4] xl:aspect-[4/5] w-full max-w-[22rem] md:max-w-[24rem] xl:max-w-[26rem] overflow-hidden rounded-xl">
                            <img
                            style={{height: "70%", width: "100%"}}
                                src={`${import.meta.env.BASE_URL}images/basketballTeam.jpg`}
                                alt="About us"
                            />
                        </div>
                    </div>
                    {/* RIGHT */}
                    {/* <div className="project-list-wrapper overflow-hidden">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library Management" />
                            </div>
                        </div>
                    </div> */}

                    <div className="project w-full lg:w-[40%] mx-auto md:mx-0" ref={project3Ref}>
                        <p style={{ fontFamily: "-apple-system", fontSize: "2rem" }} className="text-white-50 text-base md:text-xl leading-relaxed max-w-md mx-auto md:mx-0 lg:mt-10">
Queen City Cuisine is the proud sponsor of the Finneytown Wildcats girls basketball team. We provide them with team logo warmup suits and cater their basketball season ending banquet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;