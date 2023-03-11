import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useParams } from "react-router-dom";
import axios from "axios";
const formvalidationSchema = yup.object({
  employe_id: yup.number().required(),
  name: yup.string().required().min(4),
  subject: yup.string().required(),
  qualification: yup.string().required(),
  salary: yup.string().required().min(5),
  contact: yup.string().required().min(10),
  address: yup.string().required().min(5),
});

function MentorEdit() {
  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    getUsers();
  }, []);

  let getUsers = async () => {
    try {
      const details = await axios.get(
        `https://638dfe2b4190defdb753283c.mockapi.io/Teacher/${params.id}`
      );
      myFormik.setValues(details.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      batches: "",
      id: "",
    },
    validationSchema: formvalidationSchema,
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await axios.put(
          `https://638dfe2b4190defdb753283c.mockapi.io/Teacher/${params.id}`,
          values
        );
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
      navigate("/portal/mentor");
    },
  });

  return (
    <>
      <form className="container" onSubmit={myFormik.handleSubmit}>
        <div className="row mt-4 ps-5">
          <div className="col-lg-5  mt-5">
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.id && myFormik.errors.id
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.id}
              name="id"
              placeholder="id"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.id && myFormik.errors.id
                ? myFormik.errors.id
                : null}
            </span>
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.name && myFormik.errors.name
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.name}
              name="name"
              placeholder="Name"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.name && myFormik.errors.name
                ? myFormik.errors.name
                : null}
            </span>
            <br />
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.email && myFormik.errors.email
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.email}
              name="email"
              placeholder="Enter your email"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.email && myFormik.errors.email
                ? myFormik.errors.email
                : null}
            </span>
            <br />

            <input
              type="text"
              className={`form-control ${
                myFormik.touched.phone && myFormik.errors.phone
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.phone}
              name="phone"
              placeholder="Enter phone"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.phone && myFormik.errors.phone
                ? myFormik.errors.phone
                : null}
            </span>
            <br />
          </div>
          <div className="col-lg-5 mt-5 ms-0">
            <input
              type="text"
              className={`form-control ${
                myFormik.touched.batches && myFormik.errors.batches
                  ? "is-invalid"
                  : "is-valid"
              }`}
              value={myFormik.values.batches}
              name="batches"
              placeholder="Enter batches"
              onBlur={myFormik.handleBlur}
              onChange={myFormik.handleChange}
            />
            <span style={{ color: "red", fontSize: ".5" }}>
              {myFormik.touched.batches && myFormik.errors.batches
                ? myFormik.errors.batches
                : null}
            </span>
            <br />

            <div className="d-sm-flex  justify-content-end mt-3">
              <button type="submit" className="btn btn-primary create-btn">
                Update
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default MentorEdit;
