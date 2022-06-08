import {
  Button,
  Modal,
  ModalHeader,
  ModalTitle,
  ModalBody,
  CloseButton,
} from 'react-bootstrap';
import { StudentContext } from '../context/StudentContext';
import EditForm from './EditForm';
import { useContext, useState, useEffect } from 'react';

const Student = ({ student }) => {
  const { deleteStudent } = useContext(StudentContext);

  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditForm = () => setShowEditForm(true);

  const handleCloseEditForm = () => setShowEditForm(false);

  useEffect(() => {
    handleCloseEditForm();
  }, [student]);
  return (
    <>
      <td>{student.firstName}</td>
      <td>{student.lastName}</td>
      <td>{student.age}</td>
      <td>{student.studentClass}</td>
      <td>
        <Button
          onClick={handleShowEditForm}
          variant="outline-warning"
          className="mr-2"
        >
          Edit
        </Button>
        <Button
          onClick={() => deleteStudent(student.id)}
          variant="outline-danger"
        >
          Delete
        </Button>
      </td>

      <Modal show={showEditForm}>
        <ModalHeader>
          <ModalTitle>Update student</ModalTitle>

          <CloseButton onClick={handleCloseEditForm} />
        </ModalHeader>

        <ModalBody>
          <EditForm currentStudent={student} />
        </ModalBody>
      </Modal>
    </>
  );
};

export default Student;
