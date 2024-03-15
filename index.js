let pswd = document.getElementById('pswd');
let pswdConfirm = document.getElementById('pswd-confirm');
let tooltip = document.getElementById('no-match');

function pswdCompare() {
    if (pswd.value != pswdConfirm.value) {
        pswd.setCustomValidity('Invalid Field.');
        pswdConfirm.setCustomValidity('Invalid Field.');
        return tooltip.innerText = '*Passwords do not match';
    } else {
        pswd.setCustomValidity('');
        pswdConfirm.setCustomValidity('');
        return tooltip.innerText = '';
    }
};

pswdConfirm.addEventListener('focusout', pswdCompare);