import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-content">
        <div className="navigation-container width-control normal-color relative normal-text">
          <Link to="/timer" className="navigation-element  ">
            Timer
          </Link>
          <p className="text-[#a1633a">|</p>
          <Link to="/notes" className="navigation-element">
            Notes
          </Link>
          <p className="text-[#a1633a]">|</p>
          <Link to="/diary" className="navigation-element">
            Diary
          </Link>
          <p className="text-[#a1633a]">|</p>
          <Link to="/aichat" className="navigation-element">
            AI Chat
          </Link>
          <p className="text-[#a1633a]">|</p>
          <Link to="/flashcards" className="navigation-element">
            Flashcards
          </Link>
          <p className="text-[#a1633a]">|</p>
          <Link to="/social" className="navigation-element">
            Social
          </Link>
        </div>

        <img src="avatar.jpg" className="avatar" />
      </div>
    </div>
  );
};

export default Header;
