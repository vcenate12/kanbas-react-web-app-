import { Link } from "react-router-dom";
import "../Courses/Navigation/index.css";
export default function AccountNavigation() {
  return (
    <div id="wd-account-navigation" className="list-group fs-6 rounded-0 fs-50">
      <Link  className="list-group-item active border border-0" to={`/Kanbas/Account/Signin`}  > Signin  </Link> <br/>
      <Link  className="list-group-item text-danger border border-0" to={`/Kanbas/Account/Signup`}  > Signup  </Link> <br/>
      <Link  className="list-group-item text-danger border border-0" to={`/Kanbas/Account/Profile`} > Profile </Link> <br/>
    </div>
);}
