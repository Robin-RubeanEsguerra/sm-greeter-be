import { Repository } from "typeorm";
import { Employee } from "../entities";

export class EmployeeService {
  constructor(private readonly employeeRepository: Repository<Employee>) {}

  async findAll() {
    const employees = await this.employeeRepository.find();
    return employees;
  }

  async create(employeeData: Partial<Employee>) {
    const employee = this.employeeRepository.create(employeeData);
    await this.employeeRepository.save(employee);
    return employee;
  }

  async findByUuid(uuid: string) {
    const employee = await this.employeeRepository.findOneBy({ employeeUuid:uuid });
    return employee;
}


}
