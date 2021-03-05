const Home = () =>{
 

  
  return(
   <div>
     <section id="hero">
    <div id="heroCarousel" className="carousel slide carousel-fade" data-ride="carousel">

      <div className="carousel-inner" role="listbox">

      
        <div className="carousel-item active" style={{backgroundImage: "url(img/img-1.jpeg)"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
              <h2>Welcome to <span>SVUCE official Website</span></h2>
              <p>
              The Sri Venkateswara University College of Engineering (SVUCE),Tirupati is a Constituent and Autonomous College of 
              Sri Venkateswara University, Tirupati, Andhra Pradesh, India. The college offers B.Tech degree ,two-year M.Tech Degree and Ph.D. programmes.
                </p>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

       
        <div className="carousel-item" style={{backgroundImage: "url(img/img-2.jpeg)"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>Welcome to <span>SVUCE official Website</span></h2>
              <p>
              The college has well-equipped laboratories in all disciplines, improved and modernized through different schemes like MODROBS, TEQIP etc. The faculty is well qualified, most of them being Ph.D. degree holders and actively engaged in teaching, research and consultancy testing services, besides disseminating knowledge by conducting Workshops, Seminars, Conferences, and Symposia.
              </p>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div> */}
            </div>
          </div>
        </div>

       
        {/* <div className="carousel-item"style={{backgroundImage: "url(/img/img.jpeg)" ,backgroundSize:"auto"}}>
          <div className="carousel-container">
            <div className="carousel-content animate__animated animate__fadeInUp">
            <h2>Welcome to <span>SVUCE official Website</span></h2>
              {/* <div className="text-center"><a href="" className="btn-get-started">Read More</a></div>
           
             */}
             {/* <p>
             The college alumni has presence all over the globe. The alumni association of SVUCE was started in 1965. It was formally registered in the year 2001. The association is currently presided by B. Gangi Reddy.

There are hundreds of SVU alumni based in western countries such as the UK, Canada, Australia, and UK. This powerful alumni network has led to job opportunities for many graduates.

The official Alumni Network of SVU College Of Engineering website is <a href="svucealumni.org">svucealumni.org.</a>
             </p>
              </div>
          </div>
        </div>

     
       */} 
 </div>
      <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon bx bx-left-arrow" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>

      <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon bx bx-right-arrow" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>

      <ol className="carousel-indicators" id="hero-carousel-indicators"></ol>

    </div>
    
  </section>
  
  <main id="main">

   
    <section id="cta" className="cta">
      <div className="container">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-left">
            <h3>We are celebrating 60th year of  <span>Academic Excellence</span></h3>
            <p> SVUCE, a constituent college of Sri Venkateswara University, Tirupati, was established in 1959 and started functioning from 10 August 1959.</p>

{/* <p>The foundation stone for the college Main Building was laid on 13 October 1959 by Pandit Jawaharlal Nehru, the first Prime Minister of India. It was declared open on 21 November 1968 by Sri. K Brahmananda Reddy, the then Chief Minister of Andhra Pradesh.</p>

<p>From the year 1977-78, the names of BE and ME were changed as B.Tech and M.Tech. The institution achieved autonomous status in 2005.</p> */}
           
              
          
          </div>
         
        </div>

      </div>

    </section>

   
   
/</main>
   </div>
  )
}
export default Home