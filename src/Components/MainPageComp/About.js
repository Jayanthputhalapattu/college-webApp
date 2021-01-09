const About = () =>{
   return(
    <section id="about">
    <div class="inner-width">
        <h1 class="section-title">About</h1>
        <div class="about-content">
            <img src="/pic.jpg"  className="about-pic"/>
            <div class="about-text">
                <h2>SVU College of Engineering</h2>
                {/* <h3>
                    <span>Student</span>
                    <span>Professor</span>
                    <span>Administration</span>
                </h3> */}
                <p>
                    The SVU College of Engineering, Sri Venkateswara University (abbreviated SVUCE) is a public engineering college and a division of Sri Venkateswara University located in Tirupati, India. The college offers 4-year B.Tech degree courses and 6-year Dual Degree(B.Tech & M.Tech), and two-year post-graduation courses with ten specializations with a total intake of 560 in B.Tech programmes and 180 in postgraduate programmes.
                </p>
            </div>
            
        </div>

        <div class="skills">
            <div class="skill">
                <div class="skill-info">
                    <span>Education</span>
                    <span>90%</span>
                </div>
                <div class="skill-bar html"></div>
            </div>

            <div class="skill">
                <div class="skill-info">
                    <span>Skills</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar css"></div>
            </div>

            <div class="skill">
                <div class="skill-info">
                    <span>Placements</span>
                    <span>70%</span>
                </div>
                <div class="skill-bar js"></div>
            </div>

            <div class="skill">
                <div class="skill-info">
                    <span>Sports</span>
                    <span>60%</span>
                </div>
                <div class="skill-bar php"></div>
            </div>

            <div class="skill">
                <div class="skill-info">
                    <span>Environment</span>
                    <span>90%</span>
                </div>
                <div class="skill-bar mysql"></div>
            </div>

            <div class="skill">
                <div class="skill-info">
                    <span>Cultural activites</span>
                    <span>80%</span>
                </div>
                <div class="skill-bar cs"></div>
            </div>
        </div>
    </div>
</section>

   )
}
export default About