import { AccessibilityToggler } from '@websm/accessibility';

export default() => {
    const accessibilityButtons = document.querySelectorAll('.accessibility');
    accessibilityButtons.forEach(el => new AccessibilityToggler(el));
};