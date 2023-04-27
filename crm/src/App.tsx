import React from 'react';
import './App.css';

import { EmployeeDto } from './common/dto';
import { EmployeeCard } from './components/EmployeeCard';




const employees:EmployeeDto[] =  [
  {
  "firstName": "Ирина",
  "patronymic": "Сергеевна",
  "surName": "Краснова",
  "position": "Мастер ногтевого сервиса",
  "photo": "http://localhost:3002/api/staff/photo/d7be2a0cc36277ba0d5fcb3b325389a5.jpg",
  "startWorkDate": "2023-04-24T15:45:22.550Z",
  "id": 1,
  "fullName": "Краснова Ирина Сергеевна"
  },
  {
    "firstName": "Жанна",
    "patronymic": "Сергеевна",
    "surName": "Калилова",
    "position": "Визажист-стилист",
    "photo": "http://localhost:3002/api/staff/photo/d7ce2a2cc36277ba0d5fcb5b325389a5.jpg",
    "startWorkDate": "2023-04-25T05:23:18.422Z",
    "id": 2,
    "fullName": "Калилова Жанна Сергеевна"
  }
]
function App() {
  const removeEmployees = () => {

  }
  return (
    <div className='employees'>
      {employees.map(employee => <EmployeeCard onRemove={removeEmployees} key={employee.id} employee={employee}/>)}
    </div>
  );
}

export default App;
