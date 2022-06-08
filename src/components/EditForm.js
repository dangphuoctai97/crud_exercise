import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { StudentContext } from '../context/StudentContext';
import { useContext, useState } from 'react';

const EditForm = ({ currentStudent }) => {
  const id = currentStudent.id;

  const [firstName, setFirstName] = useState(currentStudent.firstName);
  const [lastName, setLastName] = useState(currentStudent.lastName);
  const [age, setAge] = useState(currentStudent.age);
  const [studentClass, setStudentClass] = useState(currentStudent.studentClass);
  const { updateStudent } = useContext(StudentContext);

  const updatedStudent = { id, firstName, lastName, age, studentClass };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id, updatedStudent);
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup className="mb-3">
        <FormLabel>First name</FormLabel>
        <FormControl
          type="text"
          placeholder="Input first name"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Last name</FormLabel>
        <FormControl
          type="text"
          placeholder="Input last name"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Age</FormLabel>
        <FormControl
          type="text"
          placeholder="Input age"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </FormGroup>
      <FormGroup className="mb-3">
        <FormLabel>Class</FormLabel>
        <FormControl
          type="text"
          placeholder="Input class"
          name="studentClass"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          required
        />
      </FormGroup>

      <div className="d-flex justify-content-center">
        <Button className="w-100" variant="success" type="submit" block="true">
          Update
        </Button>
      </div>
    </Form>
  );
};

export default EditForm;
