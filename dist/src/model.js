export const createModel = (persons, employees, filter = () => true) => {
    const employeeMap = {};
    const employeeData = (p) => p.employeeId === undefined ? undefined : employeeMap[p.employeeId];
    employees.forEach(e => employeeMap[e.employeeId] = e);
    const personData = () => persons
        .map(p => (Object.assign(Object.assign({}, p), employeeData(p))))
        .filter(filter);
    const updatePerson = p => createModel(persons.map(pp => p.id == pp.id ? p : pp), employees, filter);
    const addEmployee = e => createModel(persons, employees.concat(e), filter);
    const filtered = filter => createModel(persons, employees, filter);
    const all = () => createModel(persons, employees);
    return { personData, updatePerson, addEmployee, filtered, all };
};
//# sourceMappingURL=model.js.map