import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-4">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i class="bi bi-facebook"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="/"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>Sign up for our Upcoming Events</strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control" placeholder="Email address"
                    />
                    <label className="form-label" HTMLfor="form5Example21">
                      {/* Email address */}
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="submit" className="btn btn-outline-light mb-4">
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="mb-4">
            <p>
              By this email id provided by you . We will be in touch with you by updating you about our upcoming event and we will provide you all the details related to that .
            </p>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
        >
          © 2022 Copyright:
          
          Rahul_Hrishi_Jay
         
        </div>
      </footer>
    </>
  );
}
