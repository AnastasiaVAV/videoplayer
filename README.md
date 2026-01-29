# Видеоплеер с модальным окном

Интерактивный видеоплеер с модальным окном, управлением воспроизведением и изменением размера. Позволяет просматривать видео как в режиме превью на странице, так и в полноэкранном модальном окне.

## Особенности проекта
- Управление воспроизведением (play/pause)
- Изменение размера модального окна (мини/полный)
- Автозапуск видео при открытии модалки
- Автоматическая пауза при закрытии модалки

## Технологии
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![XState](https://img.shields.io/badge/XState-000000?style=for-the-badge&logo=xstate&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**Библиотеки**
- `react-player` – воспроизведение видео
- `xstate` – управление состоянием приложения
- `antd` (Ant Design) – UI компоненты
- `lucide-react` – иконки

## Установка и запуск
1. Клонируйте репозиторий
2. Установите зависимости:
    ```bash
    make install
    ```
2. Запустите приложение в режиме разработки:
    ```bash
    make run
    ```
3. Откройте http://localhost:5173 в браузере.

Production сборка:
```bash
make build
```

## Структура и описание проекта
```
src/
├── components/
│   ├── Modal.tsx          # Модальное окно с видеоплеером
│   └── VideoPlayer.tsx    # Компонент-обертка для управления состоянием
├── state/
│   └── machine.tsx        # Машина состояний XState
├── context/
│   └── VideoContext.tsx   # Контекст для XState
├── App.tsx                # Основной компонент приложения
```