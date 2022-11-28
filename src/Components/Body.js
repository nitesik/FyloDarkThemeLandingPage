import { useState } from "react";
import illustration_intro from "./Images/illustration-intro.png";
import access_anywhere from "./Images/icon-access-anywhere.svg";
import security from "./Images/icon-security.svg";
import collaboration from "./Images/icon-collaboration.svg";
import any_file from "./Images/icon-any-file.svg";
import stay_productive from "./Images/illustration-stay-productive.png";
import arrow from "./Images/icon-arrow.svg";
import quotes from "./Images/bg-quotes.png";
import satish_pic from "./Images/profile-1.jpg"
import bruce_pic from "./Images/profile-2.jpg"
import iva_pic from "./Images/profile-3.jpg"

function Body() {

  const [features] = useState([
    {image: access_anywhere, title: "Access your files, anywhere", description: "The ability to use a smartphone, tablet or a computer to access your account menas your files follow you everywhere."},
    {image: security, title: "Security you can trust", description: "2-factor authorization and user-controlled encryption are just a couple of the security features we allow to help secure your files."},
    {image: collaboration, title: "Real-time collaboration", description: "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required."},
    {image: any_file, title: "Store any type of file", description: "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."},
  ])

  const [testimonials] = useState([
    {description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine", name: "Satish Patel", role: "Founder & CEO, Huddle", picture: satish_pic},
    {description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.", name: "Bruce McKenzie", role: "Founder & CEO, Huddle", picture: bruce_pic},
    {description: "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine", name: "Iva Boyd", role: "Founder & CEO, Huddle", picture: iva_pic},

  ])

  return (
    <main className="body">
      <img src={illustration_intro} alt="Intro" className="intro" />
      <div className="intro-text">
        <div className="intro-title">All your files in one secure location accessible anywhere.</div>
        <div className="description">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</div>
        <button>Get Started</button>
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <div className="feature" key={index}>
            <img src={feature.image} />
            <div className="title">{feature.title}</div>
            <div className="description">{feature.description}</div>
          </div>
        ))}
      </div>
      <div className="productive">
        <img src={stay_productive} className="productive_logo" />
        <div className="productive_text">
          <div className="title">Stay Productive, wherever you are</div>
          <div className="description">Never let location be an issue when accessing your files, Fylo has you covered for all of your file storage needs.</div>
          <div className="description">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</div>
          <div className="link">
            <div>See how Fylo works</div>
            <img src={arrow} alt="arrow"/>
          </div>
        </div>
      </div>
      <div className="bottom">
        <img src={quotes} alt="quotes" className="quotes" />
        {testimonials.map((testimony, index) => (
          <div key={index} className="box">
            <div className="description">{testimony.description}</div>
            <div className="box-bottom">
              <img src={testimony.picture} className="profile_pic" />
              <div className="name-role">
                <div className="name">{testimony.name}</div>
                <div className="role">{testimony.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="early-access">
        <div className="title">Get early access today</div>
        <div className="description">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</div>
        <form>
          <input type="text" placeholder="email@example.com" />
          <button>Get Started For Free</button>
        </form>
      </div>
    </main> 
  )
}

export default Body;