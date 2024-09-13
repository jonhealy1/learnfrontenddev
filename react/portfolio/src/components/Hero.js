import React from "react";  

const Hero = () => {
    return(
        <section className="bg-primary text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
            <div className="hero-info">
                <h1 className="text-2xl lg:text-6xl">
                    Hi, <br />
                    I am <span className="text-accent">j</span>onathan <br />
                    Fullstack engineer
                </h1> 
                <p className="py-5">I am proficient in Python, Golang and React</p>
                <button className="btn border-2 border-[#7477FF] bg-accent text-white px-6 py-3 hover:bg-transparent">See projects</button>
            </div>
            <div className="hero-img">
                <img src="assets/Coder.png" alt="coding illustration" className="width-[80%] ml-auto"></img>
            </div>
            </div>
        </section>
    )
}

export default Hero;