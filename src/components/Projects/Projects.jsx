import TiltedCard from '../TiltedCard/TiltedCard';
import "./projects.scss";
import coffee from "../../assets/coffee.png";
import band from "../../assets/band.png";
import foodie from "../../assets/foodie.png";
import laroye from "../../assets/laroye.avif";
import anim from "../../assets/anim.png";



function Projects() {


    return (
        <div className='projects' id='projects'>
            <TiltedCard
                imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
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
                        ReginaRoads- Report and View road conditions
                    </p>
                }
                urlClick="https://regina-roads.vercel.app/"
            />
            <TiltedCard
                imageSrc={coffee}
                altText="Coffee Shop"
                captionText="Coffee Shop"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick='https://keerat-tanwar-coffeeshop.vercel.app/'
            />
            <TiltedCard
                imageSrc={band}
                altText="Band Site"
                captionText="Band Site"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://keerat-tanwar-bandsite.vercel.app/"
            />
            <TiltedCard
                imageSrc={laroye}
                altText="laroye-mental health app"
                captionText="laroye-mental health app"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://laroye.ai"

            />
            <TiltedCard
                imageSrc={anim}
                altText="Anime recommender"
                captionText="Anime recommender"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://anirecommender.vercel.app/"

            />
            <TiltedCard
                imageSrc={foodie}
                altText="FoodieFind: Search and manage food"
                captionText="FoodieFind: Search and manage food"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="http://3.128.33.252:5000/"
            />

        </div>
    )
}

export default Projects