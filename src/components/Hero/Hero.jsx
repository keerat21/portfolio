import "./Hero.scss";
import { ReactTyped } from "react-typed";

function Hero() {
    return (
        <div className="hero">


            <ReactTyped
                className="hero__text"
                backSpeed={50}
                onBegin={function noRefCheck() { }}
                onComplete={function noRefCheck() { }}
                onDestroy={function noRefCheck() { }}
                onLastStringBackspaced={function noRefCheck() { }}
                onReset={function noRefCheck() { }}
                onStart={function noRefCheck() { }}
                onStop={function noRefCheck() { }}
                onStringTyped={function noRefCheck() { }}
                onTypingPaused={function noRefCheck() { }}
                onTypingResumed={function noRefCheck() { }}
                strings={[
                    "Hey 👋",
                    "I'm Keerat :)",
                    "I'm a Full Stack Web Developer 💻",
                    "I'm a Software Engineer ⚙️",
                    "I'm a lifelong learner 📚",
                    "I love 💻",
                    "I love 🐱",
                    "I love 🐶",
                    "I love 🤖",
                    "I love 🧩",
                    "I love 📊",
                    "I love 📚",
                    "I love 🏕️",
                    "I love 🥾",
                    "I love 🚵🏻",]}
                loop="true"
                typeSpeed={25}
                typedRef={function noRefCheck() { }}
            />
        </div>
    )
}

export default Hero