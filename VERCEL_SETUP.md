# Настройка переменных окружения на Vercel

## Обязательные переменные

Для работы форм обратной связи на сайте необходимо настроить следующие переменные окружения в Vercel:

### 1. Telegram Bot (обязательно)

```
TELEGRAM_BOT_TOKEN=your_telegram_bot_token_here
TELEGRAM_ADMIN_ID=your_telegram_chat_id_here
```

**Как получить:**
1. Создайте бота через [@BotFather](https://t.me/botfather) в Telegram
2. Отправьте команду `/newbot` и следуйте инструкциям
3. Скопируйте токен бота (это будет `TELEGRAM_BOT_TOKEN`)
4. Отправьте любое сообщение вашему боту
5. Откройте в браузере: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
6. Найдите `"chat":{"id":123456789}` - это ваш `TELEGRAM_ADMIN_ID`

### 2. Пароль админки

```
ADMIN_PASSWORD=your_secure_admin_password
```

Придумайте надежный пароль для доступа к административной панели.

### 3. URL сайта

```
NEXT_PUBLIC_SITE_URL=https://casadigital.ru
```

## Как добавить переменные на Vercel

1. Откройте [Vercel Dashboard](https://vercel.com/dashboard)
2. Выберите ваш проект
3. Перейдите в **Settings** → **Environment Variables**
4. Добавьте каждую переменную:
   - **Key**: имя переменной (например, `TELEGRAM_BOT_TOKEN`)
   - **Value**: значение переменной
   - **Environment**: выберите `Production`, `Preview` и `Development`
5. Нажмите **Save**
6. После добавления всех переменных сделайте **Redeploy**

## Проверка

После настройки переменных:
1. Сделайте redeploy проекта на Vercel
2. Протестируйте форму на сайте
3. Убедитесь что сообщение пришло в Telegram

## Опциональные переменные (Email)

Если хотите получать уведомления по email вместо/вместе с Telegram:

```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_email_password
MAIL_TO=recipient@example.com
```

