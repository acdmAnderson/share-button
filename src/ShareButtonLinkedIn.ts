import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonLinkedIn extends AbstractShareButton {
    constructor(url: string, clazz: string) {
        super(url, clazz);
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}