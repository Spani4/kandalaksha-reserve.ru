import initAccessibility from '../components/accessibility';
import initHeaderMobile from "../modules/header-mobile";
import initNavMobile from "../modules/nav-mobile";
import collapsibleNav from "../components/collapsible-nav";

export default function() {
    initAccessibility();
    initHeaderMobile();
    initNavMobile();
    collapsibleNav();
}