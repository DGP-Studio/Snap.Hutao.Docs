---
category: [open source, разработка]
tag: ["разработка", "GitHub"]
icon: iconfont icon-code
order: 3
description: Snap Hutao использует C# и .NET Framework для разработки настольного клиента и сервера. Мы приветствуем отзывы от сообщества открытого исходного кода. Если вы хотите внести свой вклад в код, пожалуйста, прочтите это руководство.
banner: https://opengraph.snapgenshin.cn/generate?url=https://hut.ao/zh/development/contribute.html
---

::: important
Это перевод, выполненный моделью Google Gemini. Мы приветствуем исправления через PR.
:::

# Внесение своего вклада в код

Snap Hutao использует `C#` и `.NET Framework` для разработки настольного клиента и сервера. Мы приветствуем отзывы от сообщества открытого исходного кода. Если вы заинтересованы в том, чтобы внести свой вклад в код, пожалуйста, прочтите это руководство.

Вы можете просмотреть все текущие [нерешенные проблемы](https://github.com/DGP-Studio/Snap.Hutao/issues?q=is%3Aissue%20is%3Aopen%20-label%3A%E5%B7%B2%E5%AE%8C%E6%88%90) на GitHub.

## <HopeIcon icon="iconfont icon-visual-studio" size="1.5rem" color="rgb(193,142,241)" /> Настройка проекта Snap.Hutao

1. Скачайте и установите [Visual Studio](https://visualstudio.microsoft.com/downloads/)
   - Необходимо установить следующие компоненты:
     - `.NET desktop development` (Разработка классических приложений .NET)
     - `Desktop development with C++` (Разработка классических приложений на C++)
     - `WinUI application development` (Разработка приложений WinUI)
2. Установите плагин `Single-project MSIX Packaging Tools for VS 2022`, предоставляемый Microsoft, из магазина расширений Visual Studio.
3. Используйте Git для клонирования репозитория проекта: `https://github.com/DGP-Studio/Snap.Hutao.git`.
4. Переключитесь на ветку `develop`.
5. Откройте решение проекта (Solution) в Visual Studio, и можно начинать разработку.

## <HopeIcon icon="iconfont icon-debug" size="1.5rem" color="rgb(73,156,84)" /> Включение отладки

1. Скачайте и установите [Sysinternals Suite](https://www.microsoft.com/store/productid/9P7KNL5RWT25) (из Microsoft Store) или с [официального сайта Microsoft](https://learn.microsoft.com/zh-cn/sysinternals/downloads/sysinternals-suite).
2. Найдите и запустите `DebugView` (в меню «Пуск» или в распакованных файлах).
3. Запустите основную программу Snap Hutao.
4. Наблюдайте за отладочной информацией, выводимой `DebugView`.

## <HopeIcon icon="iconfont icon-pull-request" size="1.5rem" color="rgb(130,80,223)"/> Отправка Pull Request

- Все Pull Request, созданные не из других веток проекта, могут быть объединены только с веткой `develop`.
- Если ваш код связан с существующей проблемой, используйте [ключевые слова](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/using-keywords-in-issues-and-pull-requests), чтобы связать ваш PR с соответствующей проблемой. Это приведет к автоматическому закрытию связанной проблемы при слиянии PR с веткой `main`.

## <HopeIcon icon="iconfont icon-build-package" size="1.5rem" color="rgb(254,189,105)" /> Тестирование сборки пакета

::: warning Внимание
Если вы хотите протестировать последнюю Alpha-версию, пожалуйста, сначала загрузите и установите [**DGP_Studio_CA.crt**](https://github.com/DGP-Automation/Hutao-Auto-Release/releases/download/certificate-ca/DGP_Studio_CA.crt) в **доверенные корневые центры сертификации**.
:::

- После каждого `push` скрипты GitHub Actions автоматически запускаются для сборки последнего решения:
  - Для веток `main`, `develop` и `feat` скрипт автоматически загружает собранный архив `Snap Hutao Alpha` для тестирования.
  - Другие ветки только проверяют возможность сборки кода и не предоставляют функцию загрузки.
- Вы можете просмотреть все записи компиляции в [конвейере Alpha](https://github.com/DGP-Studio/Snap.Hutao/actions/workflows/alpha.yml).
