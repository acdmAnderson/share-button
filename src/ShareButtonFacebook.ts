import AbstractLinkShareButton from "./AbstractLinkShareButton";
import EventHandler from "./EventHandler";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
    constructor(url: string, clazz: string, eventHandler: EventHandler) {
        super(url, clazz, eventHandler);
    }

    createLink(): string {
        return `http://www.facebook.com/share.php?u=${this.url}`;
    }
}