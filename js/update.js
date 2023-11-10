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

    function submit(){
        messagearea.innerHTML = '<h2>Testing</h2>';
    }

})(); //automatically running function.