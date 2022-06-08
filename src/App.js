import StudentList from './components/StudentList';
import StudentContextProvider from './context/StudentContext';
function App() {
  return (
    <div className="container">
      <StudentContextProvider>
        <StudentList />
      </StudentContextProvider>
    </div>
  );
}

export default App;
