---
category: [open source, development]
tag: ["development", "GitHub"]
icon: iconfont icon-code
order: 2
---

# Внесение своего вклада в код

Snap Hutao использует C# и .NET Framework для разработки клиента и сервера. Если вы хотите внести свой вклад в проект, ознакомьтесь с следующими рекомендациями.

Вы можете найти все [нерешенные открытые задачи](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue+is%3Aopen+-label%3A%E5%B7%B2%E4%BF%AE%E5%A4%8D+) на GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Настройка проекта Snap.Hutao

1. Скачайте и установите [Visual Studio 2022 Community](https://visualstudio.microsoft.com/downloads/).
2. Откройте установщик Visual Studio, чтобы завершить установку.
   - Вам нужно установить компоненты `.NET desktop development`, `Desktop development with C++` и `Universal Windows Platform development`.
3. Установите `Single-project MSIX Packaging Tools for VS 2022`, предоставленный Microsoft в магазине расширений Visual Studio.
4. Используйте git, чтобы клонировать проект `https://github.com/DGP-Studio/Snap.Hutao.git` на свое устройство.
5. Переключитесь на ветку git `develop`.
6. Откройте решение проекта в Visual Studio, и теперь вы готовы начать.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Включение отладки

1. Скачайте и установите `Sysinternals Suite` из [Microsoft Store](https://www.microsoft.com/store/productid/9P7KNL5RWT25) или [сайта Microsoft](https://learn.microsoft.com/en-us/sysinternals/downloads/sysinternals-suite).
2. Найдите и запустите программу `DebugView` в установленном списке приложений или распакованной папке.
3. Запустите клиент Snap Hutao.
4. Проверьте вывод DebugView.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Создание запроса на внесение изменений (Pull Request)

- Все изменения кода из веток авторов могут быть вливаемы только в ветку `develop`.
- Пожалуйста, используйте [ключевые слова](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests) для связи ваших запросов на внесение изменений или коммитов с задачами, чтобы задачи автоматически закрывались после вливания коммитов в ветку `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Тестирование двоичного пакета

Как только код обновляется в ветках `develop` и `main`, скрипт Azure Pipeline CI соберет последний код в пакет `Snap Hutao Alpha`. После построения пакета он будет выпущен на [странице релизов GitHub](https://github.com/DGP-Studio/Snap.Hutao/releases) в качестве предварительно выпущенного пакета.

Вам нужно установить сертификат [Snap.Hutao.CI.cer](https://github.com/DGP-Studio/Snap.Hutao/releases/download/2023.10.3.1/Snap.Hutao.CI.cer) на свое устройство, а затем установить msix-пакет из релиза.

\*Если последний релиз не содержит прикрепленного файла, это означает, что пакет все еще находится в процессе загрузки.
