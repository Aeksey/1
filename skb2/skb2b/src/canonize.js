export default function canonize(url) {
    const re = new RegExp('@?(https?:)?(\/\/)?(([a-zA-Z0-9.]*)[^\/]*\/)?([a-zA-Z0-9.]*)', 'i');
    return '@' + url.match(re)[5];
}
