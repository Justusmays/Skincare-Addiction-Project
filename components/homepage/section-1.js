import React from "react";

export function Section1() {
  return (
    <div className="Welcome">
      <div className="row">
        <div className="col">
          <img src="https://i.imgur.com/llVRLsE.png" />
        </div>
        <div className="col">
          <div className="text">
            <h4 className="sub-title">Hello There,</h4>
            <h2 className="font-family-serif">Welcome To Skincare Addiction</h2>
            <p />
            <p className="mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
              odio laboriosam in recusandae expedita ducimus voluptatum
              provident doloremque doloribus, deserunt, ad maxime voluptas
              voluptatem ex qui quam saepe debitis dolorum!
            </p>
            <p>
              <a href="https://b15ib.sse.codesandbox.io/skintype" className="btn btn-primary pill px-4 py-3 text-white">
                Customize Your Routine
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
