import React from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";
import "./../assets/styles/navbar.css";
import { Context } from "./Wrapper";
function Navbar() {
  const [active, setActive] = React.useState(false);
  const context = React.useContext(Context);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <h1>SarkorMebel</h1>
          <div className="search">
            <select>
              <option value="">All categories</option>
              <option value="">All categories</option>
              <option value="">All categories</option>
              <option value="">All categories</option>
            </select>
            <input type="text" placeholder="Search anything" />
          </div>
          <button className="btn">Help</button>
        </div>
        {window.innerWidth < 768 &&
          <span onClick={() => setActive(!active)}>☰</span>}
        <ul className={active && "active"}>
          <li>
            <Link onClick={() => setActive(false)} to={"/"}>
              <FormattedMessage id="furniture" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/"}>
              <FormattedMessage id="lamination" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/about"}>
              <FormattedMessage id="about_company" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/"}>
              <FormattedMessage id="home_page" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/"}>
              <FormattedMessage id="contacts" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/products/1"}>
              <FormattedMessage id="all_production" />
            </Link>
          </li>
          <li>
            <Link onClick={() => setActive(false)} to={"/"}>
              <FormattedMessage id="terms" />
            </Link>
          </li>
          <li>
            <select value={context.locale} onChange={context.selectLanguage}>
              <option value="en">English</option>
              <option value="ru">Russian</option>
              <option value="uz">Uzbek</option>
            </select>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
