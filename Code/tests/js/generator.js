export class MonGenerator extends EventTarget {
    constructor(timeout = 3000) {
        super();
        this.timeout = timeout;
        this.setNextEvent();
    }
    setNextEvent() {
        setTimeout(() => {
            // déclenchement de l'évènement newvalue avec dans l'objet event passé
            // le champs value rempli avec la nouvelle valeur
            this.dispatchEvent(new NewValueEvent(Math.random()));
            this.setNextEvent();
        }, Math.random() * this.timeout);
    }
}
class NewValueEvent extends Event {
    constructor(value) {
        super("newvalue");
        this.value = value;
    }
}
//# sourceMappingURL=generator.js.map