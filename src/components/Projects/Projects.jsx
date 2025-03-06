import TiltedCard from '../TiltedCard/TiltedCard';
import "./projects.scss";
import coffee from "../../assets/coffee.png";
import band from "../../assets/band.png";
import foodie from "../../assets/foodie.png";
import laroye from "../../assets/laroye.avif";
import anim from "../../assets/anim.png";
import reginaroads from "../../assets/reginaroads.png";



function Projects() {

    const projects = [
        {
            imgpath: reginaroads, altTxt: "ReginaRoads- Report and View road conditions",
            cap: "ReginaRoads- Report and View road conditions",
            url: "https://regina-roads.vercel.app/"
        },
        {


            imgpath: coffee, altTxt: "Coffee Shop",
            cap: "Coffee Shop",
            url: 'https://keerat-tanwar-coffeeshop.vercel.app/'
        },
        {
            imgpath: band, altTxt: "Band Site",
            cap: "Band Site",
            url: "https://keerat-tanwar-bandsite.vercel.app/"
        },
        {
            imgpath: laroye, altTxt: "laroye-mental health app",
            cap: "laroye-mental health app",
            url: "https://laroye.ai"
        },
        {
            imgpath: anim, altTxt: "Anime recommender",
            cap: "Anime recommender",
            url: "https://anirecommender.vercel.app/"
        },
        {
            imgpath: foodie, altTxt: "FoodieFind: Search and manage food",
            cap: "FoodieFind: Search and manage food",
            url: "http://3.128.33.252:5000/"
        },

    ]


    return (
        <div className='projects' id='projects'>
            {projects.map((project) => {
                console.log(project);
                return (
                    <TiltedCard
                        imageSrc={project["imgpath"]}
                        altText={project["altTxt"]}
                        captionText={project["cap"]}
                        containerHeight="300px"
                        containerWidth="400px"
                        imageHeight="300px"
                        imageWidth="400px"
                        rotateAmplitude={12}
                        scaleOnHover={1.2}
                        showMobileWarning={false}
                        showTooltip={true}
                        displayOverlayContent={true}
                        overlayContent={
                            <p className="tilted-card-demo-text">
                                {project["altTxt"]}
                            </p>
                        }
                        urlClick="https://regina-roads.vercel.app/"
                    />
                )

            })}


        </div>
    )
}

export default Projects