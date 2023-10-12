var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createModel } from './model';
import { createPresenter } from './presenter';
import { createView } from './view';
function display(view, persons, employees = []) {
    const model = createModel(persons, employees);
    const presenter = createPresenter(model, view);
    view.listen(presenter.onAction);
    view.update(model);
}
function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const view = createView(window);
        try {
            const response = yield fetch('http://localhost:9090/persons');
            if (!response.ok)
                throw response.statusText;
            const persons = yield response.json();
            const empRes = yield fetch('http://localhost:9090/employees');
            if (!empRes.ok)
                throw empRes.statusText;
            const employees = yield empRes.json();
            display(view, persons, employees);
        }
        catch (e) {
            view.displayError(e.toString());
        }
    });
}
init();
//# sourceMappingURL=init.js.map