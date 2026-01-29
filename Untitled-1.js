// ─── Пропуск ───
class Pass {
    #id;
    #active = true;

    constructor(id) {
        this.#id = id;
    }

    deactivate() {
        this.#active = false;
    }

    isActive() {
        return this.#active;
    }

    getId() {
        return this.#id;
    }
}

// ─── Сотрудник ───
class Employee {
    #name;
    #pass;

    constructor(name, pass) {
        this.#name = name;
        this.#pass = pass;
    }

    getPass() {
        return this.#pass;
    }

    getName() {
        return this.#name;
    }
}

// ─── Система доступа ───
class AccessSystem {
    #log = [];

    tryEnter(employee) {
        if (!employee.getPass().isActive()) {
            this.#log.push("Отказ во входе");
            return "Вход запрещён";
        }

        this.#log.push("Вход разрешён");
        return "Добро пожаловать!";
    }

    showLog() {
        return this.#log.join("\n");
    }
}

// ─── Создание объектов ───
const pass = new Pass(101);
const emp = new Employee("Иван", pass);
const system = new AccessSystem();

// ─── Функции для кнопок в HTML ───
function enter() {
    const result = system.tryEnter(emp);
    document.getElementById("out").textContent = result;
}

function block() {
    pass.deactivate();
    document.getElementById("out").textContent = "Пропуск заблокирован";
}

function log() {
    document.getElementById("out").textContent = system.showLog() || "(лог пуст)";
}