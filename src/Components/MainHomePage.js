
const MainHomePage = () =>{
  return(
      <div>
           <section id="home">
        <div class="inner-width">
            <div class="content">
                <h1></h1>
                <div class="sm">
                    <a href="https://www.facebook.com/jyothish.chandra.167" class="fab fa-facebook-f"></a>
                    <a href="https://twitter.com/jyothishnsr" class="fab fa-twitter"></a>
                    <a href="https://www.instagram.com/nsr_jc/?hl=en" class="fab fa-instagram"></a>
                    <a href="https://www.linkedin.com/in/jyothish-chandra-nsr-bba0a1183/" class="fab fa-linkedin-in"></a>
                    <a href="https://www.youtube.com/" class="fab fa-youtube"></a>
                </div>
                <div class="buttons">
                    <a href="#contact">Contact us</a>
                    <a href="#">Map</a>
                </div>
            </div>
        </div>
    </section>
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
       <section id="services" class="dark">
        <div class="inner-width">
            <h1 class="section-title">Quick Links</h1>
            <div class="services">
                <div class="service">
                    <i class="icon fas fa-paint-brush"></i>
                    <h4><b>Academics and faculty</b></h4>
                    <p>Excelled with well established labs and experienced faculty</p>
                </div>

                <div class="service">
                    <i class="icon fas fa-pager"></i>
                    <h4>TEQIP III</h4>
                    <p>TEQIP HEADING</p>
                </div>

                <div class="service">
                    <i class="icon fas fa-database"></i>
                   <h4>BOG</h4>
                    <p>Board of Governance</p>
                </div>

                <div class="service">
                    <i class="icon fab fa-android"></i>
                    <h4>Hostel info</h4>
                    <p>Dedicated hostels for men and Women,This page will be updated Soon!</p>
                </div>

                <div class="service">
                    <i class="icon fas fa-credit-card"></i>
                    <h4>Cultural Activities and Fests</h4>
                    <p>Yearly cultural event Rhapsody and departmental National Level Technical Symposiums</p>
                </div>

                <div class="service">
                    <i class="icon fas fa-keyboard"></i>
                    <h4>Placements</h4>
                    <p>This page will be updated soon... with latest info..!</p>
                </div>
            </div>
        </div>
    </section>

    
       </div>
    
      
  )}
export default MainHomePage