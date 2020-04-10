import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <a
        href="https://www.linkedin.com/in/lucasolmos44"
        target="_blank"
        title="as"
      >
        <ion-icon class="icons" name="logo-linkedin" size="large"></ion-icon>
      </a>
      <a href="https://github.com/lucasolmos04" target="_blank" title="as">
        <ion-icon class="icons" name="logo-github" size="large"></ion-icon>
      </a>
      <br></br>
      <span className="copyright">
        Copyright (c) {new Date().getFullYear()} Lucas Maximiliano Olmos
      </span>
    </footer>
  );
}

export default Footer;
