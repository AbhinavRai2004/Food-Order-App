// import { Component } from "react";
// import UserClass from "./UserClass";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faGithub,
  faLinkedinIn,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import Abhinav from "../../Images/Abhinav.png";

const About = () => {
  return (
    <div className="min-h-screen py-28 bg-gradient-to-b from-teal-500">
      <div className="flex justify-between w-6/12 mx-auto rounded-3xl shadow-2xl bg-white">
        <div>
          <img
            className="mt-12 mx-12 p-2 rounded-3xl grayscale hover:grayscale-0 hover:scale-110 hover:duration-500"
            src={Abhinav}
          />
          <div className="flex pl-16 mx-10 mt-2">
            <Link to="https://www.linkedin.com/in/abhinav2004/">
              <FontAwesomeIcon
                className="scale-150 px-4 pt-2 pb-1 text-blue-500"
                icon={faLinkedinIn}
              />
            </Link>
            <Link to="https://github.com/AbhinavRai2004">
              <FontAwesomeIcon
                className="scale-125 px-4 pt-2 pb-1"
                icon={faGithub}
              />
            </Link>
            <Link to="https://x.com/AbhinavRai48039">
              <FontAwesomeIcon
                className="scale-125 px-3 pt-2 pb-1 text-cyan-400"
                icon={faTwitter}
              />
            </Link>
          </div>
        </div>
        <div className="my-10 mx-5 px-12">
          <p className="text-justify text-neutral-700 text-md font-semibold">
            My name is <span className="font-bold text-lg"> Abhinav Rai</span>,
            and I am a dedicated and enthusiastic programmer. I am a quick
            learner with a strong self-learning attitude, always eager to
            explore and master new technologies. I have a passion for
            problem-solving and a deep interest in all aspects of web
            application development. My core skill lies in ReactJs, NodeJs,
            JavaScript, and I enjoy leveraging it to create open and accessible
            web solutions. I am open to any job opportunities that align with my
            skills and interests.
          </p>
        </div>
      </div>
    </div>
  );
};

// class About extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       userInfo: {
//         name: "Dummy Name",
//         location: "Dummy Location",
//       },
//     }
//   }

//   async componentDidMount() {
//     // console.log("Parent Component Did Mount");

//     const data = await fetch("https://api.github.com/users/AbhinavRai2004");
//     const json = await data.json();

//     this.setState({
//       userInfo: json
//     });

//     console.log(json);
//   }
//   render() {
//     const { name, location ,  avatar_url } = this.state.userInfo;

//     return (
//       <div>
//         <h2>About Class Component</h2>
//         <p>This is the about page.</p>
//         <UserClass name={name} location={location} image={avatar_url} />
//       </div>
//     );
//   }
// }

export default About;
