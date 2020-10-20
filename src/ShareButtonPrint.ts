import AbstractShareButton from "./AbstractShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonTwitter extends AbstractShareButton {
    constructor(clazz: string, eventHandler: EventHandler) {
        super(eventHandler, clazz);
    }

    createAction(): any {
        return () => window.print();
    }
}