import * as db from "../../Database";
import { useParams, useLocation } from "react-router";

export default function AssignmentEditor() {
  const { cid, assignmentID } = useParams(); // Grab 'cid' and 'assignmentID' from the URL
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentID && assignment.course === cid
  );

  if (!assignment) {
    return <div>Assignment not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="mb-3 col-sm-10">
      <div className="mb-3">
        <label className="form-label">Assignment Name: {assignment.title}</label>
        <input
          type="text"
          className="form-control"
          id="wd-name"
          value={assignment.title}
          readOnly
        />
      </div>
      {/* Additional fields or information */}
    </div>
  );
}
  