export default class ShareButton {

    url: string;

    constructor(url: string) {
        this.url = url;
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

        const elements: any = document.querySelectorAll(clazz);
        for (const element of elements) {
            element.addEventListener("click", () => window.open(link))
        }
    }
}