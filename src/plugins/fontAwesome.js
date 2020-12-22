import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import {
  faBars,
  faTimes,
  faStar,
  faEye,
  faEyeSlash
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faBars,
  faTimes,
  faWhatsapp,
  faStar,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faEye,
  faEyeSlash
);
Vue.component("font-awesome", FontAwesomeIcon);
