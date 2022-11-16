import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row">
          <div className="col">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.instagram.com/damalibayrakf1"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-instagram fa"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UC1yoMNgio9VQcQOb4reU0gA"
                  rel="noopener noreferrer"
                >
                  <i class="fab fa-youtube fa"></i>
                </a>
              </li>
            </ul>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;({new Date().getFullYear()}) Damalı Bayrak F1 Ligi | Tüm
              hakları saklıdır
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
