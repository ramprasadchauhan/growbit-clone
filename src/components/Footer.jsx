import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "../assets/icons";
import LogoDark from "../assets/image/logo-dark.png";
const Footer = () => {
  return (
    <div className="flex justify-around items-center py-8 bg-gray-200">
      <div>
        <div>
          <img src={LogoDark} alt="logo" />
        </div>
        <div className="mt-4 text-gray-600">
          <p>© 2024 GrowBit. </p>
          <p>All rights reserved</p>
        </div>
        <div>
          <ul className="flex gap-4 mt-4">
            <li>
              <Link to="https://www.linkedin.com/company/thegrowbit/">
                {Linkedin}
              </Link>
            </li>
            <li>
              <Link to="https://www.facebook.com/growbit.in/">{Facebook} </Link>
            </li>
            <li>
              <Link to="https://twitter.com/growbit3">{Twitter} </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/growbit.in/">
                {Instagram}
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/@growbit">{Youtube} </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <div>
          <p className="text-3xl">Get in Touch</p>
        </div>
        <div className="mt-4 text-gray-600">
          <address>
            plot 18B, vasavi <br /> colony(B), karkhana,
            <br /> Hyderabad.
          </address>
        </div>
        <div className="mt-4">
          <p className="hover:text-blue-400">
            <a href="mailto:hello@growbit.in">hello@growbit.in</a>
            <br />
          </p>
          <p className="text-gray-400">(+91) 90638 90638</p>
        </div>
      </div>
      <div className="mt-6">
        <div>
          <p className="text-3xl">Learn More</p>
        </div>
        <div className="mt-4 text-gray-600">
          <ul className="flex flex-col gap-2">
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/projects">Our Story</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/projects">Projets</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/projects">Term of Use</Link>
            </li>
            <li className="hover:text-blue-400 transition duration-200">
              <Link to="/projects">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6">
        <div>
          <p className="text-3xl">Our Newslatter</p>
        </div>
        <div className="mt-4 text-gray-600">
          <p>
            Subscribe to our newslatters to <br /> get our news & deals
            delivered to <br />
            you
          </p>
        </div>
        <div className="mt-4"></div>
        <form>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
            className="p-4 border-none bg-gray-100 rounded-l-xl"
          />
          <button className="bg-violet-400 p-4 text-white rounded-r-xl">
            Join
          </button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
