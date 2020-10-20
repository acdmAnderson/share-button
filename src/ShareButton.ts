import EventHandler from "./EventHandler";

export default class ShareButton {

    url: string;
    eventHandler: EventHandler;

    constructor(url: string) {
        this.url = url;
        this.eventHandler = new EventHandler();
    }

    bind(clazz: string, socialNetwork: string) {
        let link: string
        if (socialNetwork === "twitter") {
            link = `https://twitter.com/share?url=${this.url}`;
        }
        if (socialNetwork === "facebook") {
            link = `http://www.facebook.com/share.php?u=${this.url}`;
        }
        if (socialNetwork === "linkedin") {
            link = `http://www.linkedin.com/shareArticle?url=${this.url}`;
        }
        this.eventHandler.addEventListenerToClass(clazz, "click", () => window.open(link));
    }
}