import React from "react";

export function Navbar() {
  return (
    <div id="wrapper" className="animate">
      <nav className="navbar header-top fixed-top navbar-expand-lg  navbar-light bg-light">
        <span className="navbar-toggler-icon leftmenutrigger" />
        <a className="navbar-brand" href="https://b15ib.sse.codesandbox.io/">
          SKINCARE ADDICTION
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav animate side-nav">
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                Account
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                Assessment
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                My Routine
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                Support
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                FAQ
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ml-md-auto d-md-flex">
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io/routine">
                Guide
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://b15ib.sse.codesandbox.io">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
