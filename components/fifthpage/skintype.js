import React from 'react'

export function Skintype() {
  return (
    <div className="Skintype">
    <div className="container">
        <h3>Skin Type</h3>
        <div className="container">
            <div className="row">
                  <div className="col-sm">
                    <a href="https://b15ib.sse.codesandbox.io/dry"><input type="image" src="https://i.imgur.com/QciWnCN.jpg" alt="Dry Skin" href="https://b15ib.sse.codesandbox.io/dry"/></a>
                    <p>Dry Skin</p>
                  </div>
                  <div className="col-sm">
                    <a href="https://b15ib.sse.codesandbox.io/oily"><input type="image" src="https://i.imgur.com/NaFXYfV.jpg" alt="Oily Skin"/></a>
                    <p>Oily Skin</p>
                  </div>
                  <div className="col-sm">
                   <a href="https://b15ib.sse.codesandbox.io/combination"><input type="image" src="https://i.imgur.com/hdAliKe.jpg" alt="Combination Skin"/></a>
                  <p>Combination Skin</p>
                  </div>
            </div>
            
        </div>
    </div>
    </div> 
  )
}