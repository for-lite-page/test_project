// {
//     name: "",
//     styleForlogo: " ",
//     time: " ",
//     shortDescription: " ",
//     instruction: ``,
//     description: ``,
// }


let itemPageDataBase = [
    {
        name: "dogs",
        styleForlogo: "", // вписывать только если есть необходимость, если изменения в лого не нужны, просто пропустить
        time: "12.08.2024", // дата добавления проекта в бот
        shortDescription: "⚡Получаем аирдроп Dogs за возраст вашего телеграм аккаунта", // короткое описание
        instruction: `🤔Что делать? <br> <br>
                        ◼️ Переходим в бота<br> <br>
                        ◼️ Может забагаться и писать "Who are you dawg?",
                        это значит, что у вашего аккаунта телеграм нет юзернейма
                        (это тот, что с @ начинается). Просто сделайте себе его
                        в настройках телеги, и получите награду<br> <br>
                        ◼️ Проверяем количество токенов <br> <br>
                        ◼️ По возможности приглашаем друзей<br> <br>
                        ◼️ Ждем новостей<br> <br>`, // копировать прям из старницы и сюда ебашать, с описание

        description: `⚡Получаем аирдроп Dogs за возраст вашего телеграм аккаунта <br><br><br>
                    ⚡DOGS новый мем-коин на Ton с логотипом собаки Spotty, 
                    которую когда-то нарисовал Павел Дуров для VK.<br><br><br> 
                    💪Ходят слухи, что бот от Blum и Notcoin. 
                    В любом случае, потратить 5 секунд стоит<br><br><br>
                    🚀Уже сейчас биржа BingX делаем промо с токеном DOGS, 
                    биржа Bitget запускает на премаркете токен DOGS, 
                    также анонсировали листинг на бирже LBANK<br><br><br>
                    🔥Safepal упомянули Dogs<br><br><br>`,
    },
    {
        name: "cats",
        styleForlogo: "",
        time: "12.08.2024",
        shortDescription: "⚡Получаем аирдроп Cats",
        instruction: `🤔Что делать? <br> <br> <br>
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Проверяем количество токенов <br> <br>
                    ◼️ По возможности приглашаем друзей<br> <br>
                    ◼️ Ждем новостей<br> <br>`,
        description: `💪Клон проекта Dogs, который может раздать свои токены. Потратить 5 секунд стоит`,
    },
    {
        name: "ducks",
        styleForlogo: "",
        time: "12.08.2024",
        shortDescription: "⚡Получаем аирдроп DUCKS ",
        instruction: `    🤔Что делать? <br> <br> <br>
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Проверяем количество токенов <br> <br>
                    ◼️ По возможности приглашаем друзей<br> <br>
                    ◼️ Ждем новостей<br> <br>`,
        description: `💪Клон проекта Dogs, который может раздать свои токены. Потратить 5 секунд стоит`,
    },
    {
        name: "meta-racing",
        styleForlogo: "",
        time: "12.09.2024",
        shortDescription: "⚡Играем в гонки от Meta Racing",
        instruction: `🤔Что делать? <br> <br> 
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Гоняем в заездах <br> <br>
                    ◼️ Выполняем квесты<br> <br>
                    ◼️ По возможности приглашаем друзей<br> <br>
                    ◼️ Ждем запуска токена<br> <br>`,
        description: `🏆Meta Racing - уникальный GameFi проект, где участники гоняют друг 
                    с другом на трассах, прокачивая свои NFT машины<br><br><br>

                    🎈Совсем скоро состоится запуск основной игры, 
                    а пока сделали мини-игру в Telegram, 
                    которая поможет распределить токены<br><br><br>

                    💪Монетки нужны для ремонта и прокачки тачек. 
                    Но ключевое: чем больше монет = тем выше будет награда<br><br><br>

                    💎Важно упомянуть, что команда уже раздавала жирный 
                    дроп бета-тестерам (20к$). Точно врываемся в приложуху!<br><br><br>`,
    },
    {
        name: "Dejen-Dog",
        styleForlogo: "",
        time: "12.09.2024",
        shortDescription: "⚡Собираем боксы от Hashkey",
        instruction: `🤔Что делать? <br> <br>
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Тыкаем и собираем монетки <br> <br>
                    ◼️ Бустим в разделе Prize<br> <br>
                    ◼️ По возможности покупаем боксы за 100000<br> <br>
                    ◼️ Ждем запуска токена<br> <br>`,
        description: `💪Тапалка от Tier1 фонда Hashkey, между пользователями 
                    тапалки разделят общий призовой фонд 10 млн HSK<br>`,
    },
    {
        name: "tg-stars",
        styleForlogo: "",
        time: "12.09.2024",
        shortDescription: "⚡Собираем звёзды в телеграм",
        instruction: `🤔Что делать? <br> <br> 
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Очень долго ждём загрузки, в разделе Earn фармим Stars <br> <br>
                    ◼️ Собираем звёзды ежедневно
                    ◼️ По возможности приглашаем друзей<br> <br>`,
        description: `💪Недавно телеграм запустил новую фичу, 
                    что-то типа доната за контент. В качестве валюты - Stars, 
                    которые можно покупать за реальные деньги.<br><br><br>
                    🎈Пока что можно пофармить звёзды в приложении, возможно в будущем
                    их можно будет продать`,
    },
    {
        name: "lumcity",
        styleForlogo: "",
        time: "12.09.2024",
        shortDescription: "⚡Развиваем город в Lumcity",
        instruction: `🤔Что делать? <br> <br>
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Вводим один из кодов <br> <br>
                    ◼️ Вкачиваем бусты для быстрого фарма <br> <br>
                    ◼️ Приглашаем друзей<br> <br>
                    ◼️ Ждем запуска токена<br> <br>`,
        description: `⚡Lumcity проводит онбординг в цифрвой город — 
                    собираем игровые активы, NFT, фармим токены и 
                    прокачиваем свой майнер. Далее выполняем квесты, 
                    повышаем уровень города — за это будем лутать USDT, TON, SOL и BTC<br><br><br>
                    🏅Клеймим игровые токены GOLT и прокачиваем свой майнер. Сейчас мета тг ботов и может неплохо насыпать`,
    },
    {
        name: "tabi",
        styleForlogo: "",
        time: "12.09.2024",
        shortDescription: "⚡Фармим монеты от Tabi",
        instruction: `🤔Что делать? <br> <br> 
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Указываем в разделе Airdrop - Tabi Wallet  
                    (тот адрес, который вы подключали, когда участвовали 
                    в их активностях), если не делали активности, 
                    тогда просто Метамаск <br> <br>
                    ◼️ Собираем каждые 8 часов, также Check-In каждый день 
                    и выполняем задания <br> <br>
                    ◼️ По возможности приглашаем друзей<br> <br>
                    ◼️ Ждем аирдроп<br> <br>`,
        description: `⚡Фармим монеты от Tabi <br><br>
                    💪Проект TABI это NFT маркетплейс, который собрал инвестиций свыше 10 млн$<br><br><br>
                    🎈Участвуем, хотя бы до раздачи от TABI, пока они токен GG не залистят, а там уже видно будет<br><br><br>
                    💪Говорят бонус для первых 100 000 человек, а также всего лимит на вступление 1 000 000 человек`,
    },
    {
        name: "tomarket",
        styleForlogo: " ",
        time: "12.09.2024",
        shortDescription: "⚡Собираем томаты в тапалке",
        instruction: `🤔Что делать? <br> <br>
                    ◼️ Переходим в бота<br> <br>
                    ◼️ Собираем токены каждые 6 часов (можно только с телефона) <br> <br>
                    ◼️ Выполняем задания в разделе Task<br> <br>
                    ◼️ По возможности приглашаем друзей<br> <br>
                    ◼️ Ждем запуска токена<br> <br>`,
        description: `💪Есть поддержка от Bitget Wallet поэтому эту тему лучше сделать чем пропустить`,
    },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    // {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },    {
    //     name: "tg-stars",
    //     styleForlogo: " ",
    //     time: " ",
    //     shortDescription: " ",
    //     instruction: ``,
    //     description: ``,
    // },
    //

]