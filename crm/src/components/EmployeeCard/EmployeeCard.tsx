import { EmployeeDto } from "../../common/dto";
// import $ from 'jquery';

interface EmployeeCardProps {
    employee: EmployeeDto,
    onRemove: () => void;
}

export function EmployeeCard({ employee, onRemove }: EmployeeCardProps) {
    return (
        <div>
            {employee.photo && <div>
                <img style={{ maxWidth: 200}} src={employee.photo} alt={employee.fullName} />
            </div>}
            <div>{employee.surName} {employee.firstName}</div>
            <div>{employee.position}</div>
            {/* <div>{employee.startWorkDate}</div> */}
            <button onClick={onRemove}>Удалить</button>
        </div>
    )
}