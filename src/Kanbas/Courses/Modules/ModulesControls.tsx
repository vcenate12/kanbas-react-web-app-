import { FaPlus } from "react-icons/fa6";
import { FaRegTimesCircle } from "react-icons/fa";
import { BsExclamationCircleFill } from 'react-icons/bs';
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">


      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>

        
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items" className="dropdown-item" href="#">
              <FaRegTimesCircle />
               Unpublish all Modules and Items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only" className="dropdown-item" href="#">
              <FaRegTimesCircle />
                Unpublish Modules Only
            </a>
          </li>
          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and
              wd-unpublish-modules-only with labels Unpublish all modules and items
              and Unpublish modules only */}
        </ul>
      </div>
      {/* Implement the View Progress and Collapse All buttons
          with IDs wd-view-progress and wd-collapse-all */}
          <div className=" d-inline me-1 float-end">
          <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary"
          type="button" data-bs-toggle="dropdown">
         
          View Progress
        </button>
        </div>

        <div className=" d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary"
          type="button" data-bs-toggle="dropdown">
          
          Collapse All
        </button>
        </div>
    </div>
  );
}
