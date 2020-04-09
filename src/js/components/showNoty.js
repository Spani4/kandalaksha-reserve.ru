import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/metroui.scss';

export default function showNoty(type, text, timeout = 10000) {
    
    return new Noty({
            theme: 'metroui',
            text,
            type,
            timeout,
            closeWith: ['click', 'button'],
            progressBar: true
            
        }).show();
}
