
//--------------------ДИНАМИЧЕСКАЯ СБОРКА СТРАНИЦЫ---------------------------------
//фнкиции create_page and addProjectInDataBase вызываються после выгрузки даных из локальной базы данных в файде save_script

function create_page(){

    const listElement = document.querySelector('.list_project');

    for (let i = 0; i < allProject.length; i++) {

        if(document.title === "home"){
            listElement.insertAdjacentHTML(
                'beforeend',
                `<div class="item">
            <div class="block ${allProject[i].filterClass}">
                <div class="logo">
                    <img src="${allProject[i].logo}" loading="lazy" alt="">
                </div>
                <div class="description"><p>${allProject[i].description}</p></div>
                <div class="button">
                    <a href="${allProject[i].hrefPage}"><button>перейти</button></a>
                    <label id="${allProject[i].id}" data-id="${allProject[i].id}" data-name="${allProject[i].name}"><i class="fa-solid fa-bookmark"></i></label>
                </div>
            </div>
        </div>`
            );
        } else if (document.title === "profile"){
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
                    <a href="${allProject[i].hrefPage}"><button>перейти</button></a>
                    <label id="${allProject[i].id}" data-id="${allProject[i].id}" data-name="${allProject[i].name}"><i class="fa-solid fa-play"></i></label>
                </div>
            </div>
        </div>`
                );
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

function addProjectInDataBase(){
    // сохранение тем в избранное
    document.querySelectorAll('.button label').forEach(label => {
        label.addEventListener('click', function () {

            const idProject = parseInt(this.getAttribute('data-id'), 10); // Преобразуем в число
            const nameProject = this.getAttribute('data-name');

            let currentProject = { id: idProject, name: nameProject };

            // Проверяем, есть ли обьект в базе данных
            let exists = dataBase.some(item => item.id === currentProject.id);
            console.log('Before:', dataBase);

            // Если проект не существует, добавляем его в массив
            if (!exists) {
                dataBase.push(currentProject);
            } else {
                console.log("обьект уже сохранён")
            }

            // Функция для сохранения данных в IndexedDB
            function saveUserData(user) {
                if (!db) {
                    console.error('Database not opened');
                    return;
                }

                let transaction = db.transaction('users', 'readwrite');
                let store = transaction.objectStore('users');

                // Сохраняем каждый проект по отдельности
                let request = store.put(user);

                request.onsuccess = function() {
                    console.log('User data saved successfully');
                    let isSave = document.getElementById(`${idProject}`)
                    isSave.style.color = "#fff"
                    isSave.style.opacity =" 1"
                };

                request.onerror = function() {
                    console.error('Failed to save user data');
                };
            }

            // Сохраняем каждый новый проект в IndexedDB
            dataBase.forEach(project => {
                saveUserData(project);
            });

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



// ------------------ТАБС ПАНЕЛЬ--------------------------
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
        console.log("is home page")
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