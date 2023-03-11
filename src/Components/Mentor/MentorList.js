import React from "react";

import { Link } from "react-router-dom";

function MentorList({ mentordata }) {
  return (
    <>
      <tr>
        <td>{mentordata.id}</td>
        <td>{mentordata.name}</td>
        <td>{mentordata.subject}</td>
        <td>{mentordata.email}</td>
        <td>
          <Link
            className="btn btn-info btn-sm me-1"
            to={`/portal/mentorview/${mentordata.id}`}
          >
            view
          </Link>
          <Link
            className="btn btn-danger btn-sm me-1"
            to={`/portal/mentoredit/${mentordata.id}`}
          >
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
}

export default MentorList;
