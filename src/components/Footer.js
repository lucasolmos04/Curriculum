import React from "react";

function Footer(props) {
  return (
    <footer className="footer">
      <div className="divFooter">
        <a
          href="https://www.linkedin.com/in/lucasolmos44"
          target="_blank"
          title="as"
        >
          <ion-icon name="logo-linkedin" size="large"></ion-icon>
        </a>
        <a href="https://github.com/lucasolmos04" target="_blank" title="as">
          <ion-icon name="logo-github" size="large"></ion-icon>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
