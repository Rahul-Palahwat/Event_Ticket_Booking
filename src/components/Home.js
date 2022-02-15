import React from 'react'

export default function Home() {
  return (
    <>
    <div className="bodyContainer d-flex justify-content-center align-items-center">
    <div className="card" style={{width: "50rem", height:"25rem"}}>
  <div className="card-body">
    <h1 className="card-title d-flex justify-content-center my-3">IIITDMJ_Fests</h1>
    <h2 className="card-subtitle mb-2 text-muted d-flex justify-content-center my-3">Sports Cultural and Tech Fests</h2>
    <h6 className="card-text d-flex justify-content-center my-4">
      Here on this platform we are providing you the best ticket price as compared to other platforms . And we are currently giving 20% discount to till we reaches our first 1000 tickets by this platform . 
    </h6>
    <h5 className="card-text d-flex justify-content-center my-4 mb-2 text-muted">
      So for what are you waiting for....
    </h5>
    <h5 className="card-text d-flex justify-content-center my-2">
      Book your Ticket Now by clicking on the Book_Ticket here...
    </h5>
    <div className="routes d-flex justify-content-between my-5">
    <button type="button" class="btn btn-primary mx-5"><a href="/signup" className="btn btn-primary">
                Sign Up
              </a></button>
    <button type="button" class="btn btn-primary mx-5"><a href="/bookticket" className="btn btn-primary">
                Book_Ticket
              </a></button>

    
    </div>
  </div>
</div>
    </div>
    
    </>
  )
}
