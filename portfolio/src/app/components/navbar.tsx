import Image from "next/image";
import ContactDropdown from "../components/contactdropdown";

export default function Navbar() {
    return (
        <div className="navbar">
      <div className="profile-info">
        <div className="profile-icon">
          <Image
            src="/Icons/Vectors-Wrapper.svg" // Path relative to the public folder
            alt="Logo"
            width={27.52897071838379} // Set the desired width
            height={40} // Set the desired height
            className="vectors-wrapper"
            loading="lazy"
          />
        </div>
        <div className="profile-txt">Robin Nguyen</div>
        <ContactDropdown />
      </div>
      <div className="navbar-action-items">
        <div className="navbar-item">Projects</div>
        <div className="navbar-item">Technologies</div>
        <div className="navbar-item">Blog</div>
        <div className="contact-btn">Contact</div>
      </div>
    </div>
    )
}