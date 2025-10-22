export class MonGenerator extends EventTarget{
    constructor(private timeout:number=3000){
        super();
        this.setNextEvent();
    }

    setNextEvent(){
        setTimeout(() => {
            // déclenchement de l'évènement newvalue avec dans l'objet event passé
            // le champs value rempli avec la nouvelle valeur
            this.dispatchEvent(new NewValueEvent(Math.random()));
            this.setNextEvent();
        }, Math.random()*this.timeout);
    }

}

class NewValueEvent extends Event{
    constructor(public value:number){
        super("newvalue");
    }

}