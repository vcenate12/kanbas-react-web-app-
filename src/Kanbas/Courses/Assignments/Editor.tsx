export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label> <br /><br />
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description" cols={40} rows={10}>
          The assignment is available online Submit a link to the landing page of your Web applicatin running on Netlify.  The landing page should include the following: Your full name and section links to each of the lab assignments.  Link to the Kanbas application.  Links to all relevant source code repositories.  The kanbas application should include a link to navigate back tothe landing page.
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
            <option selected value="Assignments">Assignments</option>
            <option value="Assignment1">Assignment 1</option>
            <option value="Assignment2">
                Assignment 2</option>
            </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
            <option selected value="Percentage">Percentage</option>
            <option value="Letter">Letter Grade</option>
            </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
            <option selected value="Online">Online</option>
            <option value="InPerson">In Person</option>
            </select>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
            <label>Online Entry Options</label><br/>

            <input type="checkbox" name="check-genre" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="check-genre" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="check-genre" id="wd-media-recording"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="check-genre" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotatioin</label><br/>

            <input type="checkbox" name="check-genre" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
            <label htmlFor="wd-assign-to">Assign To</label><br />
              <input id="wd-assign-to" value={"Everyone"} />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
            <td>
            <label htmlFor="wd-due-date">Due </label><br />
            <input type = "date" id="wd-due-date" value ="2024-04-13" />
            </td>
          </tr>
          <br />
          <tr>
            <td></td>
          <td>
            <label htmlFor="wd-available-from">Available From </label><br />
            <input type = "date" id="wd-available-from" value ="2024-04-13" />
            </td>
            <td>
            <label htmlFor="wd-available-until">Until </label><br />
            <input type = "date" id="wd-available-until" value ="2024-04-13" />
            </td>
          </tr>
          
          <tr>
            <td></td>
            <td></td>
            <td><br /><button>Cancel</button> <button>Save</button></td>
          </tr>
        </table>
      </div>
  );}
  