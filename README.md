# MST

## Описание проекта

Это тестовое задание.
[ScreenCast написания проекта](https://drive.google.com/drive/folders/1lKX2Wi-FyUQ9iKWzaFMfCZZfYZiUI3uz?usp=sharing) 

## Содержание

- [Описание проекта](#описание-проекта)
- [Установка](#установка)
- [Запуск приложения](#запуск-приложения)
- [Функциональность](#функциональность)
- [Структура проекта](#структура проекта)
- [Технологии](#технологии)

## Установка

1. Клонируйте репозиторий:

   ```sh
   git clone https://github.com/miisemaks/MST.git
   ```

2. Перейдите в директорию проекта:

   ```sh
   cd MST
   ```

3. Установите зависимости:

   ```sh
   npm install
   ```

4. Установка на iOS
   ```
   cd ios && pod install
   ```

## Запуск приложения

1. Запустите Metro bundler:

   ```sh
   npx react-native start
   ```

2. Для запуска приложения на Android:

   ```sh
   npx react-native run-android
   ```

3. Для запуска приложения на iOS:
   ```sh
   npx react-native run-ios
   ```

## Структура проекта

Структура проекта построена по Feature Sliced Design

```
inpalm/
├── android/
├── ios/
├── src/
|   ├── app/
|   |   ├── Navigation.tsx
|   |   ├── index.tsx
|   |   ├── TabMain.tsx
|   ├── features/
|   |   ├── subscription/
|   |   |   ├── ui/
|   |   |   |   ├── BankCard.tsx
|   |   |   |   ├── Card.tsx
|   |   |   |   ├── InputCard.tsx
|   |   |   |   ├── ModalNewCard.tsx
|   |   |   ├── index.tsx
|   |   ├── track/
|   |   |   ├── ui/
|   |   |   |   ├── TrackCard.tsx
|   |   |   |   ├── HistoryImage.tsx
|   |   |   ├── index.tsx
|   ├── screens/
|   |   ├── main/
|   |   ├── onboarding/
|   |   ├── playlist/
|   |   ├── profile/
|   |   ├── subscription/
|   |   |   ├── subscription/
|   |   |   ├── subscriptionFill/
|   |   |   ├── verifySubscribe/
|   ├── shared/
|   |   ├── api/
|   |   ├── icons/
|   |   ├── lib/
|   |   ├── store/
|   |   ├── styles/
|   |   ├── types/
|   |   ├── ui/
│   └── index.js
├── .gitignore
├── package.json
├── README.md
└── ...
```

## Технологии

- **React Native**: Фреймворк для создания кросс-платформенных мобильных приложений. [Документация](https://reactnative.dev/)
- **Zustand**: Библиотека для управления состоянием приложения. [Документация](https://zustand-demo.pmnd.rs/)
- **React Navigation**: Библиотека для навигации между экранами. [Документация](https://reactnavigation.org/)
- **Async storage**: Библиотека для локального хранения данных. [Документация](https://github.com/react-native-async-storage/async-storage#readme)
- **TypeScript**: Статически типизированный язык программирования, обеспечивающий более надежный и поддерживаемый код. [Документация](https://www.typescriptlang.org/)
- **Feature-Sliced-Design**: Архитектурный подход, который позволяет структурировать код по функциональным срезам, улучшая читаемость и поддерживаемость. [Документация](https://feature-sliced.github.io/documentation/)
- **Tanstack/react-query**: Библиотека для управления состоянием и кеширования данных, упрощающая работу с API и асинхронными запросами. [Документация](https://tanstack.com/query/latest/docs/react/overview)

## Что бы улучшил при большем времени.

Поменял бы логику подписки так как сейчас там нет подписки на аккаунт.
После Onboarding переносился бы на страницу авторизации. Переход на страницу подписки добавил бы на страницу профиля а также при нажатии на элемент из главной страницы добавил бы информационное окно с переходом на страницу подписки

[Ссылка на задание](https://docs.google.com/document/d/1w6RV53f7Q_OIEunEnHYLIehj4Ds-ihOVEuvS9xwK2M0/edit?tab=t.0)
