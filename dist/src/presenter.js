var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
export function createPresenter(init_model, view) {
    let model = init_model;
    const onAction = (_a) => __awaiter(this, void 0, void 0, function* () {
        var { type } = _a, params = __rest(_a, ["type"]);
        switch (type) {
            case 'hire':
                const { id } = params;
                const salary = view.prompt('Salary?');
                if (salary) {
                    try {
                        const headers = { 'Content-Type': 'application/json', Accept: 'application/json' };
                        const employeeResponse = yield fetch('http://localhost:9090/employees', { method: 'POST', body: JSON.stringify({ salary, manager: false }), headers });
                        if (!employeeResponse.ok)
                            throw new Error(yield employeeResponse.text());
                        const employee = yield employeeResponse.json();
                        const personResponse = yield fetch('http://localhost:9090/persons/' + id, { method: 'PATCH', body: JSON.stringify(employee), headers });
                        const person = yield personResponse.json();
                        model = model.addEmployee(employee).updatePerson(person);
                        view.update(model);
                    }
                    catch (e) {
                        view.displayError(e.toString());
                    }
                }
                break;
        }
    });
    return { onAction };
}
//# sourceMappingURL=presenter.js.map