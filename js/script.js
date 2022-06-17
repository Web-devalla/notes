document.addEventListener('DOMContentLoaded', ()=> {
    let allNotes = document.querySelectorAll('li a');

    console.log(allNotes);

    allNotes.forEach(a => {
        a.addEventListener('keyup', function() {
            let noteContent = a.querySelector('p').innerText;
    
            let itenKey = 'list_' + Array.prototype.indexOf.call(allNotes, a);

            let data = {
                content: noteContent,
            };
            window.localStorage.setItem(itenKey, JSON.stringify(data));
        });
    });

    allNotes.forEach(function (a) {
        data = JSON.parse(window.localStorage.getItem('list_' + Array.prototype.indexOf.call(allNotes, a)));

        if(data !== null) {
            noteContent = data.content;

            a.querySelector('p').textContent = noteContent;
        }

        let btnClose = a.querySelector('.close');
        btnClose.addEventListener('click', function() {
            localStorage.removeItem('list_' + Array.prototype.indexOf.call(allNotes, a));
            location.reload();
            });
        });
});
    
