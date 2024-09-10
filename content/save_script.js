let dataBase = [
    {id: 0,
    name: "none"}
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

    create_page()// запускаем генерацию стараницы
    addProjectInDataBase()//запускаем возможность сохранять в избранное
}
init();
