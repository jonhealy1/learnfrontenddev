import React from "react";  

const Hero = () => {
    return(
        <section className="bg-primary text-white">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
            <div className="hero-info">
                <h1 className="text-2xl lg:text-6xl">
                    Hi, <br />
                    I am <span className="text-accent">J</span>onathan <br />
                    Fullstack engineer
                </h1> 
                <p className="pt-5">I am proficient in Python, Golang and React</p>
                <button>See projects</button>
            </div>
            <div className="hero-img">
                <img src="assets/Coder.png" alt="coding illustration" className="width-[80%] ml-auto"></img>
            </div>
            </div>
        </section>
    )
}

export default Hero;