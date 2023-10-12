type Person = {
  readonly name: string
  readonly age: number
}

/* Or: 
type PersonData = {
  name: string
  age: number
}
type Person = Readonly<PersonData>
*/

const createPerson = (name: string, age: number) => ({name, age})

type Company = {
  readonly name: string
  readonly address: string
  readonly employees: Readonly<Person[]>
}

const createCompany = (name: string, address: string, employees: Person[] = []): Company => 
  ({name, address, employees})

const addEmployee = (c: Company, e: Person) => createCompany(c.name, c.address, [...c.employees, e])

const removeEmployee = (c: Company, e: Person) => createCompany(c.name, c.address, c.employees.filter(ee => e.name !== ee.name))

let c = createCompany("Acme", "Acme Way 1")
c = addEmployee(c, createPerson("", 8))
c = addEmployee(c, createPerson("asdlkfj", 88))

let hires = [createPerson("", 8), createPerson("asdlkfj", 88)]

c = hires.reduce(addEmployee, c)
