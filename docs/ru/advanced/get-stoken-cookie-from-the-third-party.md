---
categories: [FAQ, Третьй_инструмент]
icon: iconfont icon-read
order: 7
comment: false
description: Некоторые сторонние инструменты могут помочь вам получить файлы cookie MiYouShe, содержащие поле Stoken, и использовать их в Snap Hutao.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/advanced/get-stoken-cookie-from-the-third-party.html&has_description=False
---

# Получение cookie со Stoken с помощью сторонних инструментов

::: important
Это перевод, сделанный моделью Google Gemini. Мы приветствуем исправления посредством PR.
:::

::: warning

- Программное обеспечение, проекты с открытым исходным кодом и другие ресурсы, упомянутые в следующих шагах, взяты из Интернета и не имеют отношения к DGP-Studio.
- Данный документ с описанием предназначен только для предоставления соответствующих решений, предназначенных для обучения. Конкретные операции и их последствия не имеют отношения к этому проекту.

:::

## Android

Пользователи Android могут использовать проект с открытым исходным кодом GetToken для получения файлов cookie, содержащих поле Stoken.

::: tip Проект GetToken с открытым исходным кодом

- GitHub: [HolographicHat/GetToken](https://github.com/HolographicHat/GetToken)

:::

- В выпуске проекта GetToken есть два APK-файла, и оба они в конечном итоге дают одинаковый эффект. Выберите версию, которая подходит вашему устройству.
  - `app-release.apk` — это плагин LSPosed, который позволяет пользователям использовать функцию GetToken в официальном приложении MiYouShe.
    - Требуются root-права.
  - `miyoushe-361-lspatched.apk` — это модифицированная версия приложения MiYouShe, которая уже включает функцию GetToken.
    - Обратите внимание, что вам нужно удалить официальную версию MiYouShe, чтобы установить эту версию.
    - Этот метод не требует root-прав.
- После включения плагина или установки модифицированной версии MiYouShe откройте MiYouShe, нажмите «Мое» в нижней панели, а затем войдите в систему.
- Нажмите кнопку в форме 🔑 в правом верхнем углу.
- Установите флажок `Stoken`.
- Нажмите «Копировать информацию для входа», чтобы получить `Cookie`.
- Отправьте скопированный Stoken на компьютер, на котором установлен Snap Hutao.
- В Snap Hutao нажмите «Вход в аккаунт — Ввести вручную».
- Введите ранее полученные `Cookie`, чтобы завершить вход в систему.

## iOS

Пользователи iOS могут загрузить программу для перехвата пакетов `Stream` из App Store для получения файлов cookie с полем Stoken.

- Загрузите [Stream](https://apps.apple.com/cn/app/stream/id1312141691) из App Store.
- Выполните перехват пакетов домена `api-takumi.mihoyo.com`.
- Найдите и скопируйте данные с `Stoken`.
  - Имеет вид `stuid=****;stoken=v2****;mid=****;`
- Отправьте скопированный Stoken на компьютер, на котором установлен Snap Hutao.
- В разделе входа в аккаунт в Snap Hutao нажмите «Ввести вручную».
- Введите ранее полученные `Cookie`, чтобы завершить вход в систему.

## macOS

Пользователи macOS могут использовать приложение [TeyvatGuide](https://github.com/BTMuli/TeyvatGuide) для получения cookie, содержащих поле Stoken.

- Загрузите соответствующий пакет macOS для TeyvatGuide из [Github Release](https://github.com/BTMuli/TeyvatGuide/releases/latest).
- См. [документацию TeyvatGuide](https://github.com/BTMuli/TeyvatGuide/blob/master/docs/macos-gatekeeper/README.md) для установки.
- Войдите в свою учетную запись на странице настроек с помощью SMS-кода подтверждения.
- Нажмите кнопку копирования cookie в значке пользователя, чтобы скопировать cookie.
- В разделе входа в учетную запись в Snap Hutao нажмите «Ввести вручную».
- Просто вставьте cookie, чтобы завершить вход в систему.
