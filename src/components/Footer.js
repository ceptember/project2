import React from 'react'; 

function Footer (){
    return(
        <div id="footer"> 
        <p>React.js demo by <a href="https://ceptember.github.io/project-personal-website/"> <b>Christy Perozzi </b></a></p>
        <p>Published January 2022</p>
        <p>Follow Me: &nbsp;  
         <a className = "footer-link" href ="http://www.linkedin.com/in/chrizzi"><i class="fab fa-linkedin"></i> </a>
         <a className = "footer-link" href="https://github.com/ceptember?tab=repositories"><i class="fab fa-github-square"></i></a>
        </p>
        
        
        </div>
    )
    }


export default Footer; 