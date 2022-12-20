import './App.css';
import pic from './images/brytewide.jpeg';
import logo from './images/brytelogo.png';
import fb from './images/Facebook.png';
import twitter from './images/Twitter.png';
import ig from './images/Instagram.png';
import email from './images/Subtract.png';


function App() {
  return (
    <div className="App">

<nav class="navbar">
            <img className="nav-logo" src = {logo} alt="BRYTE logo"></img>
            <ul class="nav-menu">
                <li class="nav-item">
                    <a href="#" class="nav-link">Who We Are</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">What We Do</a>
                </li>
                <li class="nav-item-active">
                    <a href="#" class="nav-link-active">Join Us</a>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">Donate</a>
                </li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
        
      <h1> Join Us! </h1>
      <img className="top-image" src={pic} alt="BRYTE outdoor field day" />
      <h2> Available Positions </h2>
      <h3> BRYTE Tutor </h3>
      <p> BRYTE is a highly selective student organization at Brown and we seek students who will be committed and passionate volunteers. The application process entails filling out a written application and undertaking an interview with one of the BRYTE coordinators.
        

Tutor Expectations:
<ul class=""> 
<li>Minimum 2 semester commitment </li>
<li> 3 hours of in-home tutoring each week</li>
<li> Weekly Progress Reports</li>
<li>Coordinator Check-Ins </li>
<li>Attendance of 2 trainings per semester </li>
<li> Attendance of 1 community event per semester</li>
</ul>

Interested in joining our team of tutors? BRYTE recruits new tutors at the beginning of each semester. </p>
<div class="button-area"> <button> Apply </button> </div> 

<h3> BRYTE Initiative </h3>
      <p> BRYTE Initiative, implemented in Spring 2018 and formerly known as BRYTE Leaders, offers tutors a unique opportunity to become more involved in BRYTE outside of the traditional tutoring role. As a member of BRYTE Initiative, tutors can take on greater responsibility in different aspects of BRYTE that they find most engaging. Tutors within the Initiative will also gain a new perspective on BRYTE through their participation in the program.



</p>
 <div class="button-area"> <button>Apply </button> </div> 
<h2> Contact Us </h2>
<p> Feedback? Ideas for how we can be better? Concerns? Questions? We welcome all! Email: brown.refugee.tutoring@gmail.com
</p>
<div class ="footer">
    BRYTE 2022
<img className="footer-icons" src = {fb} alt="Facebook logo"></img>
<img className="footer-icons" src = {twitter} alt="Twitter logo"></img>
<img className="footer-icons" src = {ig} alt="Instagram logo"></img>
<img className="footer-icons" src = {email} alt="Email logo"></img>
</div>
    </div>
  );
}

export default App;
