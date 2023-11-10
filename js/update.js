'use strict';

(function(){
    let resultset;
    let resultarea;
    let key;
    let search;
    let messagearea;

    const serverPath ='/persons';

    const showResultSet = ()=> resultset.removeAttribute('class','hidden');
    const hideResultSet = ()=> resultset.setAttribute('class','hidden');

    const showMessageArea = ()=> messagearea.classList.remove('hidden');
    const hideMessageArea = ()=> messagearea.classList.add('hidden');

    document.addEventListener('DOMContentLoaded', init);

    function init(){
        resultset = document.getElementById('resultset');
        resultarea = document.getElementById('resultarea');
        key = document.getElementById('key');
        search = document.getElementById('search');
        messagearea = document.getElementById('messagearea');

        document.getElementById('submit').addEventListener('click', submit);

        key.addEventListener('focus', clear);
        key.addEventListener('change', ()=> search.focus());
        search.addEventListener('change',submit);

        clear();

    }// end of init

    function clear(){
        key.value = '';
        search.vlaue = '';
        hideMessageArea();
        hideResultSet();
        key.focus();
    } // end of clear

    async function submit(){
        const searchKey = key.value;
        const searchValue = search.value;

        const url =searchKey?`${serverPath}/${searchKey}?value=${searchValue}` : serverPath;
        /* console.log('url',url); */
        const result = await fetch(url);
        const personData = await result.json();

        updatePage(personData);
        /* console.log(personData); */
        /* messagearea.innerHTML = '<h2>Testing</h2>'; */
    } //end of submit

    function showMessagae(message){
        messagearea.textContent=message;
        hideResultSet();
        showMessageArea();
    } // end of showMessage

    function updatePage(searchResult){
        if (searchResult.message){
showMessagae(searchResult.message);
        }
        else if (searchResult.length==0){
            showMessagae('No person found');
        }
        else {
            let htmlString='';
            for (const person of searchResult){
                htmlString+=`<tr>
                <td>${person.firstname}</td>
                <td>${person.lastname}</td>
                <td>${person.age}</td>
                </tr>\n`
            }
            resultarea.innerHTML=htmlString;
            showResultSet();
            hideMessageArea();
        }
    } //end of updatePage

})(); //automatically running function.