import React, { ButtonHTMLAttributes, FormEvent, ReactNode, useEffect, useState } from 'react';
import './App.css';

import { EmployeeDto } from './common/dto';
import { EmployeesApi } from './common/api';
import { EmployeeCard } from './components/EmployeeCard';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.onClick}>{props.children}</button>
  )
}

interface EmployeeCreateFormData {
  name: string;
  lastName: string;
}

function EmployeeCreateForm( {onCreate }: { onCreate: (data: EmployeeCreateFormData) => void}) {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const handleForm = (event: FormEvent) => {
    event.preventDefault();
    onCreate({ name, lastName })
  }

  return (
    <form onSubmit={handleForm}>
      <input value={name} onChange={e => setName(e.target.value)} name='name' placeholder='Имя' type="text"></input>
      <input value={lastName} onChange={e => setLastName(e.target.value)} name='lastName' placeholder='Фамилия' type="text"></input>
      <Button>Добавить</Button>
    </form>
  )
}

const employeesData:EmployeeDto[] =  [
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
  const [employees, setEmployees] = useState<EmployeeDto[]>([]);
  useEffect(() => {
    EmployeesApi.getAll().then(setEmployees)
    setEmployees(employeesData)
  }, [])
  const removeEmployee = (employeeId: number) => {
    setEmployees(employees.filter(x => x.id !== employeeId))
  }
  const createEmployee = (data: EmployeeCreateFormData) => {
    setEmployees(employees.concat({
      "firstName": data.name,
      "patronymic": "Сергеевна",
      "surName": data.lastName,
      "position": "Визажист-стилист",
      "photo": "http://localhost:3002/api/staff/photo/d7ce2a2cc36277ba0d5fcb5b325389a5.jpg",
      "startWorkDate": "2023-04-25T05:23:18.422Z",
      "id": employees.length + 1,
      "fullName": "Калилова Жанна Сергеевна"
    }));
  };
  return (
    <> 

    <EmployeeCreateForm onCreate={createEmployee}/>
    {employees.length === 0 && <p>Нет данных</p>}

    <div className='employees'>
      {employees.map(employee => <EmployeeCard 
        onRemove={() => removeEmployee(employee.id)} 
        key={employee.id} 
        employee={employee}/>)}
    </div>

    <Button>Кнопка1111</Button>
    </>
 
  );
}

export default App;
