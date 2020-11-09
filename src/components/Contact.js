import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <div className="container">
      <h2 className="h4 mb-5">Contact us</h2>
      <div className="row">
        <div className="mb-5 mb-md-0 col-md-7">
          <form className="">
            <div className="controls">
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">
                      Your first name *
                    </label>
                    <input
                      name="name"
                      id="name"
                      placeholder="Enter your first name"
                      required=""
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="surname" className="form-label">
                      Your last name *
                    </label>
                    <input
                      name="surname"
                      id="surname"
                      placeholder="Enter your last name"
                      required=""
                      type="text"
                      className="form-control"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your email *
                </label>
                <input
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  required=""
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Your message for us *
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  required=""
                  className="form-control"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-5">
          <div className="pl-lg-4">
            <div>
              <p className="text-muted">
                Please note that use of vulgar language won't be tolerated. Make
                sure your message is clear so we can be of help. We believe in
                an equal society and don't discriminate anyone on basis of race,
                religion or sexual orientation. Any suggestions are welcome.
                Complaints will be dealt with too.
              </p>
              <p className="text-muted">
                Ensure you provide a working email address. Also additional
                means of Contact through the message is also welcome. Our goal
                is to make debugging less painful and welcome any ideas on how
                to we can better our service to achieve it.
              </p>
            </div>
            <div className="social">
              <ul className="list-inline">
                <li className="list-inline-item">
                  <Link to="#" target="_blank">
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank">
                    <FontAwesomeIcon icon={["fab", "facebook"]} />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#" target="_blank">
                    <FontAwesomeIcon icon={["fab", "instagram"]} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
