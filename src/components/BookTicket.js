import React from "react";
import sportimg from "../accessories/sportimg.jpeg";
import culimg from "../accessories/culimg.jpeg";
import dramaimg from "../accessories/dramaimg.jpeg";
import codimg from "../accessories/codimg.jpeg";

export default function BookTicket() {
  return (
    <>
      <div className="row my-5 d-flex align-items-center justify-content-center">
        <div className="col-md-5 my-4">
          <div className="card" style={{width: "33rem"}}>
            <img src={sportimg} className="card-img-top" alt="..." />
            <div className="card-body">
              <h2 className="card-title d-flex justify-content-center">Gusto_Event</h2>
              <p className="card-text text-muted">
                This is sports event which includes mostly all kind of sports like Cricket, Bolleyball, BasketBall, Kabbadi, and indoor games also...
              </p>
              <a href="/login" className="btn btn-primary d-flex justify-content-center">
                Book_Ticket
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 my-4">
          <div className="card" style={{width: "33rem"}}>
            <img src={culimg} className="card-img-top" alt="..." />
            <div className="card-body">
            <h2 className="card-title d-flex justify-content-center">Tarang</h2>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/login" className="btn btn-primary d-flex justify-content-center disabled">
                Not Available
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 my-4">
          <div className="card" style={{width: "33rem"}}>
            <img src={dramaimg} className="card-img-top" alt="..." />
            <div className="card-body">
            <h2 className="card-title d-flex justify-content-center">Tvaran</h2>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/login" className="btn btn-primary d-flex justify-content-center disabled">
                Not Available
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-5 my-4">
          <div className="card" style={{width: "33rem"}}>
            <img src={codimg} className="card-img-top" alt="..." />
            <div className="card-body">
            <h2 className="card-title d-flex justify-content-center">Avataar</h2>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="/login" className="btn btn-primary d-flex justify-content-center disabled">
                Not Available
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
