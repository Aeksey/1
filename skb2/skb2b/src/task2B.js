export default function getShortFullName(fio) {
    let fioTrim = fio.trim();
    fioTrim = fioTrim.replace(/\s+/g, ' ');
    const reExp = new RegExp('([A-ZА-ЯЁ^\D][a-zа-яё\D]+[\-\s]?){1,3}', 'i');
    const reNum = new RegExp('[^ a-zA-ZÀ-ÿа-яА-ЯЁё\']', 'i');

    if (fioTrim.match(reNum) == null && fioTrim.match(reExp) != null) {
        const re = fioTrim.split(/ /);
        if (re != null) {
            switch (re.length) {
                case 1:
                    return re[0];
                    break;
                case 2:
                    return re[1].toLowerCase()[0].toUpperCase() + re[1].toLowerCase().slice(1) + ' ' + re[0].charAt(0).toUpperCase() + '.';
                    break;
                case 3:
                    return re[2].toLowerCase()[0].toUpperCase() + re[2].toLowerCase().slice(1) + ' ' + re[0].charAt(0).toUpperCase() + '.' + ' ' + re[1].charAt(0).toUpperCase() + '.';
                    break;
                default:
                    return 'Invalid fullname';
            }
        }
        return 'Invalid fullname';
    }
    return 'Invalid fullname';
}
