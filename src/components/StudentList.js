import Student from './Student';

const StudentList = () => {
  return (
    <>
      <div className="table-title">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Manage <b>Student</b>
            </h2>
          </div>
          <div className="col-sm-6">
            <a
              href="#addStudentMdal"
              className="btn btn-success"
              data-toggle="modal"
            >
              <i className="material-icons">&#xe147;</i>
              <span>Add new student</span>
            </a>
          </div>
        </div>
      </div>

      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Student />
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default StudentList;
