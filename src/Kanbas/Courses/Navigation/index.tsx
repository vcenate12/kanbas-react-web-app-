import "./index.css";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../Database";


export default function CoursesNavigation() {
   const { pathname } = useLocation();
   const { cid } = useParams();
   const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

  return (
   
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
       {links.map((link) => (
        <a
          key={link}
          id={`wd-course-${link}-link`}
          href={`#Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item text-danger border border-0 ${
            pathname.includes(link) ? "active" : ""
          }`}
        >
          {link}
          </a>
      ))}
    
    
    </div>
   
  );
}

  