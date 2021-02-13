const fn = document.getElementById('fn');
const ln = document.getElementById('ln');
const ca = document.getElementById('ca');
const pn = document.getElementById('pn');
const em = document.getElementById('em');
const pass = document.getElementById('pass');
const btn = document.getElementById('btn');
const input = document.getElementsByTagName('input');

const fnLength = () => {
    return fn.value.length;
}

const lnLength = () => {
    return ln.value.length;
}
const caLength = () => {
    return ca.value.length;
}

const pnLength = () => {
    return pn.value.length;
}

const emLength = () => {
    return em.value.length;
}

const passLength = () => {
    return pass.value.length;
}