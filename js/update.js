'use strict';

(function(){
    let resultset;
    let resultarea;
    let key;
    let search;
    let messagearea;

    const serverPath ='/persons';

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        resultset = document.getElementById('resultset');
        resultarea = document.getElementById('resultarea');
        key = document.getElementById('key');
        search = document.getElementById('search');
        messagearea = document.getElementById('messagearea');

        document.getElementById('submit').addEventListener('click', submit);

    }// end of init

    async function submit(){
        const searchKey = key.value;
        const searchValue = search.value;

        const url =searchKey?`${serverPath}/${searchKey}?value=${searchValue}` : serverPath;
        /* console.log('url',url); */
        const result = await fetch(url);
        const personData = await result.json();
        /* console.log(personData); */
        /* messagearea.innerHTML = '<h2>Testing</h2>'; */
    }

})(); //automatically running function.