import EventHandler from "./EventHandler";

export default abstract class AbstractShareButton {

    url: string;
    eventHandler: EventHandler;
    clazz: string;

    constructor(url: string, clazz: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
        this.clazz = clazz;
    }

    abstract createLink(): string;
    
    bind() {
        const link = this.createLink();
        this.eventHandler.addEventListenerToClass(this.clazz, "click", () => window.open(link));
    }
}