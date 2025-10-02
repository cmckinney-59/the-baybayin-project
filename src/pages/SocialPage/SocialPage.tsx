import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./SocialPage.css";

export default function SocialPage() {
  return (
    <>
      <h1>Social</h1>
      <h2>Follow us</h2>
      <ul className="social-container">
        <li>
          <a
            href="https://www.facebook.com/profile.php?id=61558642794586"
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook"
            className="social-link"
          >
            <AiFillFacebook className="nav-icon social-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/the_baybayin_project/"
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram"
            className="social-link"
          >
            <AiFillInstagram className="nav-icon social-icon" />
          </a>
        </li>
      </ul>
      <h2>Contact us</h2>
      <p>the.baybayin.project@gmail.com</p>
    </>
  );
}
