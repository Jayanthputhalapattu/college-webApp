const DepartmentsMainPage = ()=>{
  return(
    <section id="services" className="services">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2><strong>Departments</strong></h2>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up">
              <div className="icon"><i class="icofont-test-tube-alt"></i></div>
              <h4 className="title"><a href="/Che">Chemical Engineering</a></h4>
              <p className="description">
                   </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon"><i class="icofont-building-alt"></i></div>
              <h4 className="title"><a href="/CIV">Civil Engineering</a></h4>
              <p className="description"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i class="icofont-thunder-light"></i></div>
              <h4 className="title"><a href="/EEE">Electrical & Electronics Engineering</a></h4>
              <p className="description"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon"><i class="icofont-micro-chip"></i></div>
              <h4 className="title"><a href="/ECE">Electronics and Communication Engineering</a></h4>
              <p className="description"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon"><i className="icofont-computer"></i></div>
              <h4 className="title"><a href="/CSE">Computer Science and Engineering</a></h4>
              <p className="description"></p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon"><i class="icofont-auto-mobile"></i></div>
              <h4 className="title"><a href="ME">Mechanical Engineering</a></h4>
              <p className="description"></p>
            </div>
          </div>
        </div>

      </div>
    </section>

  )
}
export default DepartmentsMainPage