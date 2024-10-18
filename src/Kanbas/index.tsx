import "./styles.css";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import Account from "./Account";


export default function Kanbas() {
  
    return (
      <div id="wd-kanbas" className="h-100">
       
        <div className="d-flex h-100">
            <div className="d-none d-md-block bg-black">
            <KanbasNavigation />
            </div>
         
          <div className="flex-fill p-4">
          <Routes>
              <Route path="/" element={<Navigate to="Account" />} />
              <Route path="Account" element={<Account />} />
              <Route path="Dashboard" element={<Dashboard />} />
              <Route path="/Courses/:cid/*" element={<Courses />} />
              <Route path="/Calendar" element={<h1>Calendar</h1>} />
              <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
            </div>
        
      </div>
  );}
  
 