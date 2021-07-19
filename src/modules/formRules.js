const formsRules = () => {
    const body = document.querySelector('body');

    body.addEventListener('input', (e) => {
        const target = e.target;

        if (e.inputType === 'insertFromPaste') {
            target.value = '';
            return;
        }
    });

    body.addEventListener('focusout', (e) => {
        const target = e.target;

        if (target.value) {

            if (target.matches('fio-1')) {
                target.value = target.value.replace(/^\s+|\s+$/g, '');
                target.value = target.value.replace(/\s{2,}/g, ' ');
            }

            if (target.matches('fio-1') && target.value) {
                let str = target.value;
                str = str.split(' ');
                str.forEach((el, id) => str[id] = el[0].toUpperCase() + el.substring(1).toLowerCase());
                str = str.join(' ');
                target.value = str;
            }
        }
    });
};
export default formsRules;