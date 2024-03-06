import { Link } from "react-router-dom";
import "../styles/landingpage.css"

const Landingpage = () => {
    return ( 
        <div className="landingPage">
            <Link to="/merchant"><img className="img1" src="https://cdn.dribbble.com/users/2768923/screenshots/7092251/media/bdd6b91480344aa6f0f6a5db926147f8.gif" alt="merchant" /> <h1>Merchant</h1></Link>
            <Link to="/user"><img className="img1" src="https://i.pinimg.com/originals/e7/e7/a5/e7e7a57b55a98d53bbf4b6231b3a0092.gif" alt="user"></img> <h1>User</h1></Link>
            <img src="https://24.media.tumblr.com/b2837da0f58dbbab6ec48aed3e85b8dc/tumblr_mt41c3prhs1seb9peo1_500.gif" className="img3" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIMJwJNpNWa8SvMF9aM6PAPivCEBZakMx6mw&usqp=CAU" className="img4" alt="" />
            <img src="https://cdn.dribbble.com/users/435189/screenshots/5502657/media/886816aa426106a06a474c8a2af87e08.gif" className="img5" alt="" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcCI6e1k8rkmMRUJcVGYaWwFyic4yOTmCEEDZ7X6JMVl6UVxnPJPMCg2YyFuY336I194E&usqp=CAU" className="img6" alt="" />
            <img src="https://www.shutterstock.com/image-vector/greeting-card-banner-site-poster-600nw-2190597317.jpg" className="img7" alt=""/>
            
        </div>


     );
}
 
export default Landingpage;