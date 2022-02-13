const userName = localStorage.getItem('name')
document.querySelector('#thanks').innerHTML = (userName || '___') + document.querySelector('#thanks').innerHTML;