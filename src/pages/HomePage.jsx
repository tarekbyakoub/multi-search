import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const HomePage = () => {
  const [stackOverflow, setStackOverflow] = useState(false);
  const [mdn, setMdn] = useState(false);
  const [youtube, setYoutube] = useState(false);
  const [canIUse, setCanIUse] = useState(false);
  const [medium, setMedium] = useState(false);
  const [codeGrepper, setCodeGrepper] = useState(false);
  const [searchText, setSearchText] = useState("");

  const URLsByWebsite = {
    stackOverflow: "https://stackoverflow.com/search?q=",
    mdn: "https://developer.mozilla.org/en-US/search?q=",
    youtube: "https://www.youtube.com/results?search_query=react",
    canIUse: "https://caniuse.com/?search=",
    medium: "https://medium.com/search?q=",
    codeGrepper: "https://www.codegrepper.com/search.php?q=",
  };
  const states = [stackOverflow, mdn, youtube, canIUse, medium, codeGrepper];

  const submit = (e) => {
    e.preventDefault();
    const websites = Object.values(URLsByWebsite);
    return states.every((s, index) =>
      s === true ? window.open(websites[index] + searchText) : []
    );
  };

  return (
    <div className="home-container">
      <div className="search-container">
        <form className="form">
          <span
            style={{
              color: "white",
              fontSize: "xx-large",
              marginBottom: "50px",
            }}>
            TechSearch
          </span>
          <div className="input-wrapper">
            <input
              className="search"
              placeholder="Search"
              onChange={(e) => setSearchText(e.target.value)}></input>
            <button class="input-wrapper__button" onClick={submit}>
              Search
            </button>
          </div>
          <div
            style={{ color: "white", fontSize: "small", margin: "20px 0 0 0" }}>
            Websites to search:
          </div>
          <div class="checkbox-wrapper">
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setStackOverflow(!stackOverflow)}
            />
            <label>Stack Overflow</label>
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setMdn(!mdn)}
            />
            <label>MDN Web Docs</label>
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setYoutube(!youtube)}
            />
            <label>Youtube</label>
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setCanIUse(!canIUse)}
            />
            <label>Can I use?</label>
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setMedium(!medium)}
            />
            <label>Medium</label>
            <input
              class="checkbox-wrapper__input"
              type="checkbox"
              onChange={() => setCodeGrepper(!codeGrepper)}
            />
            <label>Grepper</label>
          </div>
        </form>
      </div>
      <div class="footer">
        <div class="footer-link-wrapper">
          <a
            class="footer-link"
            href="https://github.com/tarekbyakoub/multi-search"
            target="_blank">
            <div class="footer-link__icon">
              <BsGithub />
            </div>
            <span class="footer__item">Github</span>
          </a>
        </div>
        <span class="footer__item">
          Please enable pop-ups for full functionality
        </span>
      </div>
    </div>
  );
};

export { HomePage };
