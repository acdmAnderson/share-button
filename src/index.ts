import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonTwitter from "./ShareButtonTwitter";
import ShareButtonPrint from "./ShareButtonPrint";
import DOMEventHandler from "./DOMEventHandler";

const eventHandler = new DOMEventHandler();
const twitter = new ShareButtonTwitter("", ".btn-twitter", eventHandler);
twitter.bind();
const facebook = new ShareButtonFacebook("", ".btn-facebook", eventHandler);
facebook.bind();
const linkedin = new ShareButtonLinkedIn("", ".btn-linkedin", eventHandler);
linkedin.bind();
const print = new ShareButtonPrint(".btn-print", eventHandler);
print.bind();