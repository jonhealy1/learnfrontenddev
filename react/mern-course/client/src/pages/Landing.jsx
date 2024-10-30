import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            vero ea dolores excepturi minima, optio error quod autem commodi ex
            suscipit dolorem, earum soluta nihil, impedit fugiat eos accusantium
            voluptatem.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
