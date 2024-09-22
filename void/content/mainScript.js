// let host = window.location.hostname;
// console.log(host);
// if (host !== "for-lite-page.github.io") {
//     location.href = "https://t.me/VoidProjectBot/app"
// }


let dataBase = [
    {
        id: 0,
        name: "none"
    }
]


let saveStatus = false

let db;

function openDatabase() {
    return new Promise((resolve, reject) => {
        let request = indexedDB.open('myDatabase', 1);

        request.onupgradeneeded = function(event) {
            let db = event.target.result;
            db.createObjectStore('users', { keyPath: 'id' }); // Создание хранилища
        };

        request.onsuccess = function(event) {
            db = event.target.result; // Открытие успешное, база доступна
            console.log('Database opened successfully');
            resolve();
        };

        request.onerror = function(event) {
            console.error('Database failed to open');
            reject('Database failed to open');
        };
    });
}

async function getAllUsers() {
    if (!db) {
        console.error('Database not opened');
        return;
    }

    let transaction = db.transaction('users', 'readonly');
    let store = transaction.objectStore('users');

    let request = store.getAll(); // Получаем все данные

    return new Promise((resolve, reject) => {
        request.onsuccess = function() {
            console.log('All users:', request.result); // Выводим данные в консоль
            resolve(request.result);
        };

        request.onerror = function() {
            console.error('Failed to fetch user data');
            reject('Failed to fetch user data');
        };
    });
}

async function init() {
    await openDatabase(); // Ждем, пока база откроется
    let users = await getAllUsers(); // Ждем получения всех пользователей
    dataBase = users; // Обновляем базу данных
    // Проверка на наличие более одного элемента
    saveStatus = dataBase.length >= 1;
    console.log('Save status:', saveStatus); // Логируем статус
    create_page()
    addProjectInDataBase()//запускаем возможность сохранять в избранное
}
init();


function create_page(){

    const listElement = document.querySelector('.list_project');

    for (let i = 0; i < allProject.length; i++) {
        if(document.title === "home"){
            listElement.insertAdjacentHTML(
                'beforeend',
                `<div class="item">
            <div class="block ${allProject[i].filterClass}">
                <div class="logo">
                    <img src="${allProject[i].logo}" loading="lazy" alt="" >
                </div>
                <div class="description"><p>${allProject[i].description}</p></div>
                <div class="button">
                    <a href="pages_projects/item_page.html?name=${allProject[i].name}"><button>перейти</button></a>
                    <label id="${allProject[i].id}" data-id="${allProject[i].id}" data-name="${allProject[i].name}"><i class="fa-solid fa-bookmark"></i></label>
                </div>
            </div>
        </div>`
            );
        } else if (document.title === "profile"){
            if (saveStatus) {
                if (dataBase.some(item => item.name === allProject[i].name)){
                    listElement.insertAdjacentHTML(
                        'beforeend',
                        `<div class="item">
            <div class="block ${allProject[i].filterClass}">
                <div class="logo">
                    <img src="${allProject[i].logo}" loading="lazy" alt="">
                </div>
                <div class="description"><p>${allProject[i].description}</p></div>
                <div class="button">
                    <a href="pages_projects/item_page.html?name=${allProject[i].name}"><button>перейти</button></a>
                    <label id="${allProject[i].id}" data-id="${allProject[i].id}" data-name="${allProject[i].name}" data-href="${allProject[i].quick_start}"><i class="fa-solid fa-play"></i></label>
                </div>
            </div>
        </div>`);
                }
            } else if (!saveStatus) {
                let none = document.querySelector('.not_save')
                none.style.display = "flex"
            }
        }

        if(dataBase.some(item => item.name === allProject[i].name)){
            const isSave = document.getElementById(`${allProject[i].id}`)
            if(isSave){
                isSave.style.color = "#fff"
                isSave.style.opacity = "1"
            } else {
                console.log(isSave)
            }
        }
    }
}


function createItemPage(){
    const bodyPage = document.querySelector('.page')
    let params = new URLSearchParams(window.location.search);
    let nameProject = params.get('name')
    let foundItem = itemPageDataBase.find(item => item.name === nameProject);
    let dopInf = allProject.find(item => item.name === nameProject)
    let href = ""

    if (!dopInf.logo.includes('http')) {
        href = "../"
    }

    bodyPage.insertAdjacentHTML('beforeend',
        `<div class="logo" style="${foundItem.styleForlogo}"><img src="${href}${dopInf.logo}" alt=" "></div>
        <div class="loading_time"><p>дата добавления ${foundItem.time}</p></div>
        <div class="info">
            <div class="switch_content">
                <div class="switch">
                    <div id="left" class="label" onclick="showContent('instruction')">Инструкция</div>
                    <div id="right" class="label" onclick="showContent('description')">Описание</div>
                </div>
                <div class="indicator">
                    <div class="slider"></div>
                </div>
            </div>
            <div class="content_page">
                <div id="instruction" class="content active">
                    <p>${foundItem.shortDescription}</p>
                    <p>${foundItem.instruction}</p>
                    <a href="${dopInf.quick_start}" class="button"><button class="link">Перейти</button></a> <!--ССЫЛКУ СЮДА-->
                </div>
                <div id="description" class="content">${foundItem.description}</div>
            </div>

        </div>`)
}

function addProjectInDataBase() {
    // Сохранение проектов в избранное
    document.querySelectorAll('.button label').forEach(label => {
        label.addEventListener('click', function () {
            const idProject = parseInt(this.getAttribute('data-id'), 10); // Преобразуем в число
            const nameProject = this.getAttribute('data-name');
            const href = this.getAttribute('data-href');
            let currentProject = { id: idProject, name: nameProject };

            // Проверяем, есть ли проект в базе данных
            const projectExists = dataBase.some(item => item.id === currentProject.id);
            let statusOperation = "none";

            console.log('Before:', dataBase);

            if (!projectExists) {
                dataBase.push(currentProject);
                statusOperation = "add";
                console.log(statusOperation);
            } else if (!href) {
                dataBase = dataBase.filter(item => item.id !== idProject);
                statusOperation = "delete";
                console.log(statusOperation);
            } else if (href) {
                window.location.href = href;
                console.log(statusOperation);
                return;
            }

            function saveOrDeleteUserData(user) {
                if (!db) {
                    console.error('Database not opened');
                    return;
                }
                let transaction = db.transaction('users', 'readwrite');
                let store = transaction.objectStore('users');
                let request

                if(statusOperation === "add"){
                    request = store.put(user); // Сохранение данных
                } else if(statusOperation === "delete"){
                    request = store.delete(user); // Удаление данных
                }

                request.onsuccess = function() {
                    updateProjectUI(idProject, statusOperation);
                };

                request.onerror = function() {
                    console.error('Failed to save or delete user data');
                };
            }
            // Функция обновления UI (изменение стилей проекта)
            function updateProjectUI(projectId, statusOperation) {
                let projectLabel = document.getElementById(`${projectId}`);
                if (statusOperation === "add") {
                    projectLabel.style.color = "#fff";
                    projectLabel.style.opacity = "1";
                } else {
                    projectLabel.style.color = "transparent";
                    projectLabel.style.opacity = "0.3";
                }
            }
            if(statusOperation === "add"){
                saveOrDeleteUserData(currentProject);
            } else if(statusOperation === "delete"){
                saveOrDeleteUserData(idProject);
            }
            console.log('After:', dataBase);
        });
    });
}

// переход между вкладками табса
document.querySelectorAll('.buttons_tabs label').forEach(label => {
    label.addEventListener('click', function() {
        const href = this.getAttribute('data-href');
        if (href) {
            window.location.href = href;
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        if (document.title === "home") {
            document.getElementById("home_button").style.color = "#fff";
            document.getElementById("home_button").style.opacity = "1";
        } else if (document.title === "support") {
            document.getElementById("support_button").style.color = "#fff";
            document.getElementById("support_button").style.opacity = "1";
        } else if (document.title === "profile") {
            document.getElementById("profile_button").style.color = "#fff";
            document.getElementById("profile_button").style.opacity = "1";
        }
    }, 80);

    if(document.title === "item page"){
        createItemPage()
    }
});


// реализация звёзд на фоне
const starsContainer = document.querySelector('.stars');

// Генерируем звезды с разными размерами и рандомными координатами
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.width = `${Math.random() * 2}px`; // Размер звезды от 1 до 3 пикселей
    star.style.height = star.style.width;
    star.style.background = '#fff';
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * 100}%`; // Рандомная координата по горизонтали
    star.style.top = `${Math.random() * 100}%`; // Рандомная координата по вертикали
    starsContainer.appendChild(star);

    // Добавляем анимацию мерцания
    star.style.animation = `twinkling ${Math.random() * 3 + 1}s infinite`;

    if (document.title === "home") {
    } else {
        // Добавляем анимацию планового передвижения
        const moveX = Math.random() < 0.5 ? -1 : 1;
        const moveY = Math.random() < 0.5 ? -1 : 1;
        const duration = Math.random() * 30 + 10; // Увеличиваем длительность перемещения
        const keyframes = `
      @keyframes move${i} {
        0% { transform: translate(0, 0); }
        50% { transform: translate(${moveX * Math.random() * 20}px, ${moveY * Math.random() * 20}px); }
        100% { transform: translate(0, 0); }
      }
    `;
        document.styleSheets[0].insertRule(keyframes, document.styleSheets[0].cssRules.length);

        star.style.animation += `, move${i} ${duration}s ease-in-out infinite`;
        star.style.animationDirection = `${moveX > 0 ? 'normal' : 'reverse'} ${moveY > 0 ? 'normal' : 'reverse'}`;
    }

}