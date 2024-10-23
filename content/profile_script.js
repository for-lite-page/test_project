let tg = window.Telegram.WebApp;

const user_name = document.querySelector('.user_name');

let first_name = tg.initDataUnsafe.user?.first_name || 'void walker'
let last_name = tg.initDataUnsafe.user?.last_name || ' '

let p = document.createElement('p')

p.innerText = `${first_name} ${last_name}`

user_name.appendChild(p)


const editElement = document.querySelector('.settings')
const check1 = document.querySelector('.check1')
const check2 = document.querySelector('.check2')
const text = document.querySelector('.settings p')
let editStatus = 'default'

function editStoreProject (){

    editElement.addEventListener('click', function () {
        if (editStatus === 'default'){
            editStatus = 'edit'
            text.innerText = 'сохранить'
            check1.style.display = 'flex'
            check2.style.display = 'none'
            editElement.style.opacity = '1'
            modeProfilePage('edit')
        }
        else if (editStatus === 'edit'){
            editStatus = 'default'
            text.innerText = 'редактировать'
            check1.style.display = 'none'
            check2.style.display = 'flex'
            editElement.style.opacity = '0.3'
            modeProfilePage('default')
        }
    })
}

function modeProfilePage (editStatus) {
    let playButton = document.querySelectorAll('.play')
    let trashButton = document.querySelectorAll('.trash')

    document.querySelectorAll('.button label').forEach(label => {


        playButton.forEach(play =>  {
            if (editStatus === 'edit'){
                play.style.display = 'none'
            } else if (editStatus === 'default') {
                play.style.display = 'flex'
            }
        })
        trashButton.forEach(trash => {
            if (editStatus === 'edit'){
                trash.style.display = 'flex'
            } else if (editStatus === 'default') {
                trash.style.display = 'none'
            }
        })

        label.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            let parentBlock = label.closest('.item');
            if (!href && parentBlock) {
                parentBlock.style.display = 'none';
            }
        })

        label.style.color = 'white'
        label.style.opacity = '1'
        label.style.webkitTextStroke = 'transparent'
    })
}


