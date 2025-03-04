import TiltedCard from '../TiltedCard/TiltedCard';
import "./projects.scss";



function Projects() {


    return (
        <div className='projects' id='projects'><TiltedCard
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
                    Kendrick Lamar - GNX
                </p>
            }
        />
            <TiltedCard
                imageSrc="src/assets/coffee.PNG"
                altText="Coffee Shop"
                captionText="Coffee Shop"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick='https://keerat-tanwar-coffeeshop.vercel.app/'
            />
            <TiltedCard
                imageSrc="src/assets/band.PNG"
                altText="Band Site"
                captionText="Band Site"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://keerat-tanwar-bandsite.vercel.app/"
            />
            <TiltedCard
                imageSrc="src/assets/laroye.avif"
                altText="laroye-mental health app"
                captionText="laroye-mental health app"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://laroye.ai"

            />
            <TiltedCard
                imageSrc="src/assets/anim.PNG"
                altText="Anime recommender"
                captionText="Anime recommender"
                containerHeight="300px"
                containerWidth="400px"
                imageHeight="300px"
                imageWidth="400px"
                urlClick="https://anirecommender.vercel.app/"

            />
            <TiltedCard
                imageSrc="src/assets/foodie.PNG"
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