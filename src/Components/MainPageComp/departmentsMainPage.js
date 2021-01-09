const DepartmentsMainPage = ()=>{
  return(
    <section id="departments" class="dark">
    <div className="inner-width">
        <h1 className="section-title">Departments</h1>
        <div class="services">
            <div className="service">
                <a href="/ChE"><h4>Chemical Engineering</h4></a>
                
            </div>

            <div className="service">
               
                <a href="/CE"><h4>Civil Engineering</h4></a>
                
            </div>

            <div className="service">
              
               <a href="/EEE"><h4>Electrical & Electronics Engineering</h4></a>

            </div>

            <div className="service">
               
                <a href="/ECE"><h4>Electronics and Communication Engineering</h4></a>
               
            </div>

            <div className="service">
                
                <a href="/ME"><h4>Mechanical Engineering</h4></a> 
                
            </div>

            <div className="service">
                
                <a href="/cse"><h4>Computer Science Engineering</h4></a> 
               
            </div>
        </div>
    </div>
       
</section>

  )
}
export default DepartmentsMainPage