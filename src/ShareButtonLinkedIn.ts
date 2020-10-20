import AbstractLinkShareButton from "./AbstractLinkShareButton";


export default class ShareButtonLinkedIn extends AbstractLinkShareButton {
    constructor(url: string, clazz: string) {
        super(url, clazz);
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`;
    }
}