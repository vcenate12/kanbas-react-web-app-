import ModulesControls from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { BsGripVertical } from 'react-icons/bs';
import { MdEditNote } from "react-icons/md";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoEllipsisVertical } from "react-icons/io5";
import { useParams } from "react-router";
import * as db from "../../Database";
 import { Link } from "react-router-dom";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
    return (
      <div id="wd-assignments">      

    <div className="d-flex justify-content-between mb-3">
      
      <div className="input-group w-50 me-2">
      <span className="input-group-text" id="basic-addon1"><HiMagnifyingGlass />
        
      </span> 
      <input id="wd-search-assignment" className="form-control" placeholder="Search..." aria-label="Search"/> 
      </div>


      < div className="ms-auto">
      <button id="wd-add-assignment-group" className="btn btn-secondary me-2"> <FiPlus />Group</button>
      <button id="wd-add-assignment" className="btn btn-danger"><FiPlus />Assignment</button>
      </div>
    </div>



        <ul id="wd-assignment-list" className="list-group rounded-0">
          <li className="wd-assignment-list-item  list-group-item p-0  border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary">
            <BsGripVertical className="me-2 fs-3" /><IoMdArrowDropdownCircle /><b>ASSIGNMENTS </b> 
           <div className="float-end"> 
          <button className ="me-2">40% of Total </button> 
            <FiPlus />
            <IoEllipsisVertical className="fs-4" /></div>
          </div>

          
          </li>

          {assignments
        .filter((assignment: any) => assignment.course === cid)
        .map((assignment: any) => (
        <li className="wd-assignment list-group-item p-3 ps-1">
        <BsGripVertical className="me-2 fs-3" /> <MdEditNote className="me-2 fs-3"  />
        <a className="wd-assignment-link" href={`#/Kanbas/Courses/${assignment.course}/Assignments/${assignment._id}`}>
  {assignment.title}
</a>

       
            <LessonControlButtons />
            <div className="wd-assignment list-group-item p-3 ps-1">
          Multiple Modules | <b>Not available until</b> {assignment.availabledate} | <b>Due</b> {assignment.duedate} | {assignment.points} pts
          </div>
        
          </li> 
        ))}
          
         
        </ul>
        </div>
      
  );}
  