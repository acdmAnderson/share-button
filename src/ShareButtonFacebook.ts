import AbstractShareButton from "./AbstractShareButton";

export default class ShareButtonFacebook extends AbstractShareButton {
    constructor(url: string, clazz: string) {
        super(url, clazz);
    }

    createLink(): string {
        return `http://www.facebook.com/share.php?u=${this.url}`;
    }
}