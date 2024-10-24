import * as db from "../../Database";
import { useParams, useLocation } from "react-router";



export default function AssignmentEditor2() {
  const { cid, aid} = useParams();
  const courseassignment = db.assignments.find(
    (assignment) => assignment.course === cid
  );
  
  const { pathname } = useLocation();
  
    return (
      <div id="wd-assignments-editor" className="mb-3  col-sm-10"> 
       
        
       <div className="mb-3">
  <label className="form-label">Assignment Name </label>
  <input type="text" className="form-control" id="wd-name" value={courseassignment?.title}></input>
  </div>
   
   

<div className="mb-3">
    
    <textarea className="form-control  " id="wd-description" style={{ height: '300px' }}>{courseassignment?.description}</textarea>
  </div>


  <div className="mb-3 row">
    <label id="wd-points" className="col-sm-2 col-form-label text-end">Points</label>
    <div className="col-sm-10">
      <input type="number" className="form-control" id="wd-points" value={courseassignment?.points} />
    </div>
  </div>

  <div className="mb-3 row">
    <label id="wd-group" className="col-sm-2 col-form-label text-end">Assignment Group</label>
    <div className="col-sm-10">
      <select className="form-select" id="wd-group">
        <option value="Assignments" selected>Assignments</option>
        <option value="Assignment1">Assignment 1</option>
        <option value="Assignment2">Assignment 2</option>
      </select>
    </div>
  </div>

  <div className="mb-3 row">
    <label id="wd-display-grade-as" className="col-sm-2 col-form-label text-end">Display Grade as</label>
    <div className="col-sm-10">
      <select className="form-select" id="wd-display-grade-as">
        <option value="Percentage" selected>Percentage</option>
        <option value="Letter">Letter Grade</option>
      </select>
    </div>
  </div>


  <div className="mb-3 row">
    <label id="wd-submission-type" className="col-sm-2 col-form-label text-end">Submission Type</label>
    <div className="col-sm-10">
      <select className="form-select" id="wd-submission-type">
        <option value="Online" selected>Online</option>
        <option value="InPerson">In Person</option>
      </select>
    </div>
  </div>

  <div className="mb-3 row">
    <div className="col-sm-2"></div>
    <div className="col-sm-10">
      <label className="form-label">Online Entry Options</label><br />
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-text-entry" />
        <label className="form-check-label" id="wd-text-entry">Text Entry</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-website-url" />
        <label className="form-check-label" id="wd-website-url">Website URL</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-media-recording" />
        <label className="form-check-label" id="wd-media-recording">Media Recordings</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
        <label className="form-check-label" id="wd-student-annotation">Student Annotation</label>
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="wd-file-upload" />
        <label className="form-check-label" id="wd-file-upload">File Uploads</label>
      </div>
    </div>
  </div>


  <div className="mb-3 row">
    <label id="wd-assign-to" className="col-sm-2 col-form-label text-end">Assign To</label>
    <div className="col-sm-10">
      <input type="text" className="form-control" id="wd-assign-to" value="Everyone" />
    </div>
  </div>


  <div className="mb-3 row">
    <label id="wd-due-date" className="col-sm-2 col-form-label text-end">Due</label>
    <div className="col-sm-10">
      <input type="date" className="form-control" id="wd-due-date" value="2024-04-13" />
    </div>
  </div>


  <div className="mb-3 row">
    <label id="wd-available-from" className="col-sm-2 col-form-label text-end">Available From</label>
    <div className="col-sm-4">
      <input type="date" className="form-control" id="wd-available-from" value={courseassignment?.availabledate} />
    </div>
    <label id="wd-available-until" className="col-sm-2 col-form-label text-end">Until</label>
    <div className="col-sm-4">
      <input type="date" className="form-control" id="wd-available-until" value={courseassignment?.duedate} />
    </div>
  </div>

  <div className="mb-3 row">
    <div className="col-sm-10 offset-sm-2 ">
      <button className="btn btn-secondary me-2">Cancel</button>
      <button className= "btn btn-danger">Save</button>
    </div>
  </div>


 
 


        
      </div>
  );}