import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue from "vue";
import { faBars, faTimes, faStar } from "@fortawesome/free-solid-svg-icons";
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
  faYoutube
);
Vue.component("font-awesome", FontAwesomeIcon);
