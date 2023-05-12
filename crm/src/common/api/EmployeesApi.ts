import { EmployeeDto } from "../dto";
import { HttpService } from "./HttpService";

class EmployeesApi extends HttpService {
    constructor() {
        super('staff');
    }
    getAll():Promise<EmployeeDto[]> {
        return this.get('')
    }
}
export default new EmployeesApi()