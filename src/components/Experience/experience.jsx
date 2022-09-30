import "./experience.css";
import Musescore from "../../images/musescore.png"
import Mern from "../../images/merndev.png"
import Adobe from "../../images/adobe.png"


const Experience = () => {
  return (
    <div className="a">
      <div className="a-left">
       
        <div className="a-card">
          <div>
           <img
           src={Musescore}
           
            alt=""
            className="img1"
          /> 
       
          </div>
          <div>
      <img
            src={Adobe}
            alt=""
            className="img2"
          />
          
      </div>
      <div>
      <img
             src={ Mern}
            alt=""
            className="img3"
          />
          
      </div>
         
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">My Unique Career Journey</h1><br></br>
        <p className="a-desc">
          Started in the Musical language Software World as a Data operator in <b>Musescore Software</b>!!!
        </p>

        <p className="a-desc">
          Entered into the PhotoGraphy World of <b>Adobe Photoshop</b> as a Photo Editor!!!
        </p>

        <p className="a-desc">
          At this moment, am enjoying the present wonderful journey as a <b>Full-Stack Mern developer</b> !!!
        </p>
       
      </div>
    </div>
  );
};

export default Experience;