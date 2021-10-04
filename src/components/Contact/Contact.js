import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h1 className="text-center contact-text">Contact Us</h1>
      <div className="contact-area">
        <div className="container p-4">
          <div className="row">
            <div className="col-md-7 border contact-form">
              <form className="p-3">
                <h5 className="my-3">Get in Touch</h5><hr />
                <div className="row row-cols-2 mb-3">
                  <div className="p-0">
                    <label>Name</label>
                    <input className="form-control" type="text" placeholder="Enter your name" />
                  </div>

                  <div>
                    <label>Email</label>
                    <input className="form-control" type="email" placeholder="Enter your email" />
                  </div>
                </div>

                <div className="col-12 mb-3">
                  <label>Subject</label>
                  <input className="form-control" type="text" />
                </div>

                <div className="col-12 mb-3">
                  <label>Message</label>
                  <textarea className="form-control" as="textarea" rows="3" />
                </div>
                <button className="btn btn-danger" type="submit">
                  Submit Request
                </button>
              </form>
            </div>
            <div className="col-md-5">
              <div className="reach-directly border ms-5 p-3">
                <h5 className="text-center">Reach Us Directly</h5><hr />
                <div className="address">
                  {/* icon1 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i className="bi bi-house-door"></i>
                    </div>
                    <div className="my-auto">
                      <p>2626,Elizabeth Road,USA</p>
                    </div>
                  </div>
                  {/* icon2 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i className="bi bi-envelope-open"></i>
                    </div>
                    <div className="my-auto">
                      <p>support@elanguageclub.com <br />
                        elanguageclub@gmail.com</p>
                    </div>
                  </div>
                  {/* icon3 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i className="bi bi-phone"></i>
                    </div>
                    <div>
                      <p>+966 123 124
                        <br/>
                      (02) 777 125</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;