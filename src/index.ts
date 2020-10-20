import ShareButtonFacebook from "./ShareButtonFacebook";
import ShareButtonLinkedIn from "./ShareButtonLinkedIn";
import ShareButtonTwitter from "./ShareButtonTwitter";


const twitter = new ShareButtonTwitter("", ".btn-twitter");
twitter.bind();
const facebook = new ShareButtonFacebook("", ".btn-facebook");
facebook.bind();
const linkedin = new ShareButtonLinkedIn("", ".btn-linkedin");
linkedin.bind();