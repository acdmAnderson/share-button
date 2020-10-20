import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonTwitter extends AbstractLinkShareButton {
    constructor(url: string, clazz: string) {
        super(url, clazz);
    }

    createLink(): string {
        return `https://twitter.com/share?url=${this.url}`;
    }
}