import React from 'react'
import landing from '../landing.png'
function page() {
    return (
      <div><h1 className="text-center font-bold mt-6" style={{fontSize:"30px"}}>Vote the available buidls now</h1>
<div className="card card-compact w-96 bg-base-100 shadow-xl" style={{margin:"100px"}}>
  <figure><img src={landing.src} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Cross Chain Protocol</h2>
              <p>Github link : https://github.com/KENILSHAHH/Axelar-Bridge</p>
              <p>Video link : https://www.loom.com/share/37238475..</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Vote up now</button>
    </div>
  </div>
            </div>
            </div>
  )
}

export default page