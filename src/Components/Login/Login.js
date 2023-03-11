import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../UserContext";

function Login({ setMentorVisible }) {
  const userdata = useContext(UserContext);

  const navigate = useNavigate();
  return (
    <div className="bg-gradient-primary" style={{ height: "750px" }}>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">
                          Student-Teacher Login
                        </h1>
                      </div>
                      <form>
                        <div className="form-outline mb-3">
                          <input
                            type="text"
                            id="form3Example3"
                            className="form-control form-control-lg"
                            placeholder="Enter a username"
                            onChange={(event) =>
                              userdata.setUsername(event.target.value)
                            }
                          />
                          <label className="form-label" For="form3Example3">
                            Username
                          </label>
                        </div>

                        {/* <!-- Password input --> */}
                        <div className="form-outline mb-3">
                          <input
                            type="password"
                            id="form3Example4"
                            className="form-control form-control-lg"
                            placeholder="Enter password"
                          />
                          <label className="form-label" For="form3Example4">
                            Password
                          </label>
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          {/* <!-- Checkbox --> */}
                          <div className="form-check mb-0">
                            <input
                              className="form-check-input me-2"
                              type="checkbox"
                              value=""
                              id="form2Example3"
                            />
                            <label
                              className="form-check-label"
                              For="form2Example3"
                            >
                              Remember me
                            </label>
                          </div>
                        </div>

                        <div className="d-flex row p-2">
                          <button
                            onClick={() => {
                              setMentorVisible(true);
                              navigate("/portal/mentor");
                            }}
                            type="button"
                            className="btn btn-primary btn-lg mt-2"
                            style={{
                              paddingLeft: "2.5rem",
                              paddingRight: "2.5rem",
                            }}
                          >
                            Login as a Teacher
                          </button>
                          <button
                            onClick={() => {
                              setMentorVisible(false);
                              navigate("/portal/student");
                            }}
                            to="/portal/student"
                            type="button"
                            className="btn btn-primary btn-lg mt-2"
                            style={{
                              paddingLeft: "2.5rem",
                              paddingRight: "2.5rem",
                            }}
                          >
                            Login as a student
                          </button>
                        </div>
                      </form>
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
}
export default Login;
