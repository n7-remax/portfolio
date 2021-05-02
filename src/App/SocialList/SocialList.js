import React from "react";

function SocialList(props) {
  return (
    <ul className={props.className}>
      <li>
        <a
          href="mailto:ditritusa@gmail.com"
          title="mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-envelope-open"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/maksym-vinnytskyi"
          title="linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/n7-remax"
          title="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </li>
    </ul>
  );
}

export default SocialList;
