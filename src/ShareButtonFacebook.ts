import AbstractLinkShareButton from "./AbstractLinkShareButton";

export default class ShareButtonFacebook extends AbstractLinkShareButton {
    constructor(url: string, clazz: string) {
        super(url, clazz);
    }

    createLink(): string {
        return `http://www.facebook.com/share.php?u=${this.url}`;
    }
}