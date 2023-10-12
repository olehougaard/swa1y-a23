export function createView(window) {
    const document = window.document;
    const table_body = document.getElementById('employee_data');
    if (table_body === null)
        throw new Error("Page uninitialized");
    const listeners = [];
    const listen = (l) => listeners.push(l);
    const addPerson = (p) => {
        var _a, _b;
        const tr = table_body.appendChild(document.createElement('tr'));
        tr.insertCell().appendChild(document.createTextNode(p.id.toString()));
        tr.insertCell().appendChild(document.createTextNode(p.name));
        if (p.employeeId) {
            tr.insertCell().appendChild(document.createTextNode(p.employeeId.toString()));
            tr.insertCell().appendChild(document.createTextNode(((_a = p.salary) !== null && _a !== void 0 ? _a : 0).toString()));
            tr.insertCell().appendChild(document.createTextNode(((_b = p.manager) !== null && _b !== void 0 ? _b : false).toString()));
        }
        else {
            const button = tr.insertCell().appendChild(document.createElement('button'));
            button.appendChild(document.createTextNode("Hire"));
            button.onclick = () => {
                const event = { type: 'hire', id: p.id };
                listeners.forEach(l => l(event));
            };
            tr.insertCell();
            tr.insertCell();
        }
    };
    const displayError = (e) => {
        const msg_board = document.getElementById('error_messages');
        if (msg_board === null)
            throw new Error("Page uninitialized");
        msg_board.innerText = e;
    };
    const update = (model) => {
        while (table_body.firstChild)
            table_body.removeChild(table_body.firstChild);
        model.personData().forEach(addPerson);
    };
    const prompt = window.prompt.bind(window);
    return { addPerson, update, listen, prompt, displayError };
}
//# sourceMappingURL=view.js.map