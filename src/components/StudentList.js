import Student from './Student';
import { useContext, useEffect, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import {
  Table,
  Container,
  Navbar,
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
  Alert,
} from 'react-bootstrap';
import AddForm from './AddForm';

const StudentList = () => {
  const { students } = useContext(StudentContext);

  const [showAddForm, setShowAddForm] = useState(false);

  const [showAlert, setShowAlert] = useState(false);

  const handleShowAlert = () => {
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

  const handleShowAddForm = () => setShowAddForm(true);

  const handleCloseAddForm = () => setShowAddForm(false);

  useEffect(() => {
    handleCloseAddForm();
    return () => {
      handleShowAlert();
    };
  }, [students]);

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="title">Quản lý sinh viên</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>

          <Button onClick={handleShowAddForm} variant="outline-success">
            Add new student
          </Button>
        </Container>
      </Navbar>

      <Alert
        show={showAlert}
        variant="success"
        onClose={() => setShowAlert(false)}
        dismissible
      >
        Student List Updated Successfully
      </Alert>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <Student student={student} />
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showAddForm}>
        <ModalHeader>
          <ModalTitle>Add student</ModalTitle>

          <CloseButton onClick={handleCloseAddForm} />
        </ModalHeader>

        <ModalBody>
          <AddForm />
        </ModalBody>
      </Modal>
    </>
  );
};

export default StudentList;
