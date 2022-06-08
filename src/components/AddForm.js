import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap';
import { StudentContext } from '../context/StudentContext';
import { useContext, useState } from 'react';

const AddForm = () => {
  const { addStudent } = useContext(StudentContext);

  const [newStudent, setNewStudent] = useState({
    firstName: '',
    lastName: '',
    age: '',
    studentClass: '',
  });

  const onInputChange = (e) => {
    setNewStudent({ ...newStudent, [e.target.name]: [e.target.value] });
  };

  const { firstName, lastName, age, studentClass } = newStudent;

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(firstName, lastName, age, studentClass);
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
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
          onChange={(e) => onInputChange(e)}
          required
        />
      </FormGroup>

      <div className="d-flex justify-content-center">
        <Button className="w-100" variant="success" type="submit" block="true">
          Add new student
        </Button>
      </div>
    </Form>
  );
};

export default AddForm;
