import React from "react";
import "./aboutus.css"; // Import the CSS file
import group from "./assets/images/group.png"; // Import the first image
import elipse from "./assets/images/elipse.png"; // Import the elipse image
import mission from "./assets/images/mission.png"; // Import the mission image
import vision from "./assets/images/vision.png"; // Import the vision image
import lap from "./assets/images/lap.png"; // Import the laptop image

const About_us = () => {
  return (
    <div className="about-us-container">
      <header>
        <h1>About Us</h1>
        <p>
          We're dedicated to optimizing your project for maximum <br /> impact
          and success.
        </p>
      </header>
      <section className="image-container">
        <img src={group} alt="Group" />
      </section>
      <section className="image-elipse">
        <div className="overlay-text">Our Story</div>
        <div className="about-text">
          <p className="text1">
            At AppyByte,
            <br />
            We understand the complex construction projects posed by the client.
          </p>
          <div className="detail-div">
            <div className="text-column first">
              <p>
                We know the thrill and the buzz of construction, but we also
                know the headaches and frustration because we’ve experienced it
                all first-hand.
              </p>
              <p>
                What’s different about AppyByte is that we’re experts in
                development and believe in digitalisation.
              </p>
              <p>
                So we know how to model that real-world complexity and translate
                it into lines of code.
              </p>
              <p>
                We also have an in-depth understanding of the needs of different
                job roles. So your people can get access to exactly the right
                information, in the right way, at the right time.
              </p>
              <p>
                Meaning that you can get the stuff that you’re searching for.
              </p>
            </div>
            <div className="text-column second">
              <p>
                At AppyByte, we're not just developers, we're seasoned
                professionals who understand the highs and lows of building
                digital solutions.
              </p>
              <p>
                Our expertise lies in transforming real-world complexities into
                efficient lines of code, ensuring seamless digitalization for
                your business.
              </p>
              <p>
                With a deep understanding of diverse job roles, we tailor
                information access to meet your team's specific needs precisely
                when it's needed.
              </p>
              <p>
                Say goodbye to the frustrations of searching endlessly for
                solutions – with AppyByte, you get what you need, when you need
                it.
              </p>
            </div>
          </div>
          <div className="cart">
            <div className="con1">
              <div>
                <h3>Mission</h3>
                <p>
                  To empower businesses with seamless digital solutions,
                  leveraging our expertise in development and commitment to
                  digitalization, to streamline operations and enhance
                  productivity.
                </p>
              </div>
              <img src={mission} alt="Mission" />
            </div>
            <div className="con2">
              <div>
                <h3>Vision</h3>
                <p>
                  Pioneering digital transformation through innovative
                  solutions, unwavering quality standards, and a deep commitment
                  to understanding and meeting our clients' needs, thus driving
                  sustainable success.
                </p>
              </div>
              <img src={vision} alt="Vision" />
            </div>
          </div>
          <div className="con3">
            <h2>Core Value</h2>
            <ul>
              <li>
                <b>Excellence:</b> We strive for excellence in everything we do,
                delivering high-quality solutions that exceed expectations.
              </li>
              <li>
                <b>Innovation:</b> We foster a culture of innovation,
                continuously seeking new ways to drive efficiency and create
                value for our clients.
              </li>
              <li>
                <b>Integrity:</b> We conduct business with integrity,
                maintaining honesty, transparency, and accountability in all our
                interactions
              </li>
              <li>
                <b>Collaboration:</b> We believe in the power of collaboration,
                working closely with our clients and partners to achieve mutual
                success.
              </li>
              <li>
                <b>Customer-Centricity:</b> We are committed to understanding
                and meeting the unique needs of our clients, providing tailored
                solutions and exceptional service.
              </li>
              <li>
                <b>Continuous Improvement:</b> We are dedicated to continuous
                improvement, constantly learning and evolving to stay ahead of
                industry trends and technological advancements.
              </li>
              <li>
                <b>Empowerment:</b> We empower our team members to unleash their
                full potential, fostering a culture of creativity, growth, and
                personal development.
              </li>
            </ul>
          </div>
          <div className="con4">
            <img src={lap} alt="Laptop" />
            <div>
              <h2>From talented techies to support superstars</h2>
              <p>
                AppyByte’s quirky team of unique personalities are what makes
                this business something to be truly proud of!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_us;
