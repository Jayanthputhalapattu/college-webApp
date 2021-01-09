import About from "./MainPageComp/About.js"
import DepartmentsMainPage from "./MainPageComp/departmentsMainPage.js"
import Home from "./MainPageComp/Home.js"
import Services from "./MainPageComp/Services.js"

const MainHomePage = () =>{
  return(
<div>
    <Home />
    <About/>
    <DepartmentsMainPage/>
    <Services />
   
</div>
    
      
  )}
export default MainHomePage