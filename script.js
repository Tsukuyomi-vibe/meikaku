/* meikaku. No dependencies, requests, profile guesses or simulated values. */
(() => {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const messages = {
    en: {
      "page.title": "meikaku — your browser environment",
      "page.description": "meikaku — a local check of your browser's location, languages, regional formats, time and keyboard layout.",
      "page.skip": "Skip to content",
      "nav.label": "Navigation",
      "nav.brand": "meikaku, overview",
      "nav.heading": "BROWSER ENVIRONMENT",
      "nav.overview": "Overview",
      "nav.geolocation": "Geolocation",
      "nav.locale": "Languages & locale",
      "nav.datetime": "Date & time",
      "nav.keyboard": "Keyboard",
      "nav.api": "API details",
      "privacy.title": "Stays in this tab",
      "privacy.description": "No analytics. No results sent to a server.",
      "header.tools": "Tools",
      "header.environment": "Environment check",
      "header.checking": "Checking context",
      "header.secure": "Secure context",
      "header.insecure": "Insecure context",
      "language.label": "Interface language",
      "language.choose": "Choose interface language",
      "theme.change": "Change theme",
      "theme.light": "Switch to light theme",
      "theme.dark": "Switch to dark theme",
      "overview.title": "What websites see",
      "overview.description": "Your location, languages and time. Straight from your browser.",
      "actions.refresh": "Refresh",
      "actions.download": "Download report",
      "actions.copy": "Copy JSON",
      "snapshot.current": "Readings from this page",
      "snapshot.label": "Snapshot",
      "snapshot.help": "Reload the page after switching profiles",
      "stat.timezone": "Time zone",
      "stat.language": "Primary language",
      "stat.locale": "Formatting locale",
      "stat.localeHint": "Independent of browser language",
      "stat.apis": "API availability",
      "stat.support": "View support",
      "common.unavailable": "Unavailable",
      "common.apiUnsupported": "This API is not available in this browser",
      "common.notRequested": "Not requested",
      "common.apiUnavailable": "API unavailable",
      "common.requesting": "Requesting…",
      "common.none": "None",
      "common.error": "Unavailable: {error}",
      "unit.minutesValue": "{value} min",
      "geo.title": "Geolocation",
      "geo.mapCaption": "BROWSER COORDINATES",
      "geo.emptyTitle": "Where does your browser place you?",
      "geo.emptyDescription": "Ask your browser for coordinates",
      "geo.latitude": "Latitude",
      "geo.longitude": "Longitude",
      "geo.request": "Request location",
      "geo.pending": "Getting location…",
      "geo.watch": "Watch",
      "geo.stop": "Stop",
      "geo.initialMessage": "Browser permission is required. Your IP address is not checked.",
      "geo.denied": "Access denied",
      "geo.granted": "Access granted",
      "geo.deniedMessage": "Your browser denied access. You can change permission in the site settings.",
      "geo.readyMessage": "Select “Request location” to read your position.",
      "geo.received": "Received",
      "geo.watching": "Watching",
      "geo.receivedMessage": "Location received · position timestamp {time}.",
      "geo.watchingMessage": "Watching location · position timestamp {time}.",
      "geo.error": "Request failed",
      "geo.errorDenied": "Geolocation was denied by your browser or this page's policy.",
      "geo.errorDeniedPrevious": "Geolocation was denied by your browser or this page's policy. The previous result is still displayed.",
      "geo.errorUnavailable": "Your browser could not determine a position. Try again.",
      "geo.errorUnavailablePrevious": "Your browser could not determine a position. Try again. The previous result is still displayed.",
      "geo.errorTimeout": "The location request timed out. Try again.",
      "geo.errorTimeoutPrevious": "The location request timed out. Try again. The previous result is still displayed.",
      "geo.errorGeneric": "{error}",
      "geo.errorGenericPrevious": "{error} The previous result is still displayed.",
      "geo.waitingMessage": "Waiting for your browser. Choose a permission if a prompt appears.",
      "geo.stoppedMessage": "Watching stopped. The last received coordinates are still displayed.",
      "geo.startedMessage": "Watching started. Waiting for a position from your browser.",
      "geo.stopped": "Watching stopped",
      "geo.pageHiddenMessage": "Select “Watch” to resume location updates after returning to this page.",
      "geo.secureRequired": "Geolocation requires HTTPS or localhost.",
      "geo.unsupported": "Your browser does not provide the Geolocation API.",
      "time.title": "Date & time",
      "time.live": "Live",
      "time.local": "LOCAL TIME",
      "time.clockLabel": "Current local time",
      "time.localeDate": "Localized date",
      "time.hourCycle": "Hour cycle",
      "time.offset": "JavaScript offset",
      "time.utc": "Absolute time (UTC)",
      "time.note": "A time zone changes how time is displayed. The instant itself stays the same.",
      "locale.title": "Languages & locale",
      "locale.preferred": "LANGUAGES IN ORDER OF PREFERENCE",
      "locale.primary": "primary",
      "locale.emptyLanguages": "Empty language list",
      "locale.unavailableLanguages": "Language list unavailable",
      "locale.date": "Date locale",
      "locale.number": "Number locale",
      "locale.tabs": "Locale view",
      "locale.examples": "Format examples",
      "locale.options": "Intl options",
      "locale.numberLabel": "Number",
      "locale.datetime": "Date & time",
      "locale.relative": "Relative time",
      "locale.region": "Region name",
      "locale.calendar": "Calendar",
      "locale.numbering": "Numbering system",
      "locale.grouping": "Digit grouping",
      "locale.decimal": "Decimal separator",
      "locale.separator": "Grouping separator",
      "locale.httpNote": "This header is read by a server. A static page cannot confirm its actual value.",
      "keyboard.title": "Keyboard layout map",
      "keyboard.detected": "DETECTED MAP",
      "keyboard.waiting": "Waiting for a request",
      "keyboard.diagram": "Physical key diagram",
      "keyboard.initialMessage": "The diagram shows physical key codes. Read the map to see its characters.",
      "keyboard.request": "Read layout map",
      "keyboard.test": "Input test",
      "keyboard.placeholder": "Press a key in this field…",
      "keyboard.note": "The API map and actual input may differ.",
      "keyboard.space": "Space",
      "keyboard.notInMap": "not in the map",
      "keyboard.looksLike": "Looks like {layout}",
      "keyboard.read": "Map read",
      "keyboard.empty": "Empty map",
      "keyboard.reading": "Reading…",
      "keyboard.count.one": "{count} key in map",
      "keyboard.count.few": "{count} keys in map",
      "keyboard.count.many": "{count} keys in map",
      "keyboard.emptyMessage": "getLayoutMap() returned no key labels. You can still test actual input below.",
      "keyboard.readMessage": "Labels come from getLayoutMap(). The layout name is inferred from Q, W, Y and Z.",
      "keyboard.received": "Map received",
      "keyboard.noAccess": "No access",
      "keyboard.errorMessage": "{error} Open this page in the active tab and try again.",
      "keyboard.errorPreviousMessage": "{error} The previous map is still displayed.",
      "keyboard.reread": "Read again",
      "keyboard.changed": "Map may have changed",
      "keyboard.changedMessage": "A layoutchange event was received. Read the map again.",
      "keyboard.unsupported": "API not supported",
      "keyboard.unsupportedMessage": "The map requires a supported browser and a secure context. The input test is still available.",
      "api.eyebrow": "UNDER THE HOOD",
      "api.title": "Detailed API readings",
      "api.description": "Raw readings and additional checks described in info.md.",
      "readings.one": "{count} reading",
      "readings.few": "{count} readings",
      "readings.many": "{count} readings",
      "group.support.title": "Availability & context",
      "group.support.description": "An API being present does not mean your browser has granted access to its data.",
      "group.navigator.title": "Browser languages",
      "group.navigator.description": "The order of navigator.languages is preserved. The formatting locale is checked separately.",
      "group.intl.title": "Locale & regional formats",
      "group.intl.description": "These examples use the default locale and time zone. The page does not select a region for these checks.",
      "group.date.title": "Time & local fields",
      "group.date.description": "A snapshot taken at refresh time. The main clock above updates every second.",
      "group.construction.title": "Date construction & changes",
      "group.construction.description": "Reference date: January 15, 2024, 12:00 local time. Each setter is checked on a separate copy.",
      "group.temporal.title": "Modern time APIs",
      "group.temporal.description": "Only methods already present in your browser are read. No polyfills are used.",
      "group.geolocation.title": "Coordinates & timestamps",
      "group.geolocation.description": "Latitude, longitude and timestamp from the latest getCurrentPosition or watchPosition result.",
      "group.keyboard.title": "Layout map & actual input",
      "group.keyboard.description": "The map does not determine typed text. KeyboardEvent is read only in the input test field.",
      "group.http.title": "Request language",
      "group.http.description": "The actual Accept-Language can be checked by the server receiving a request. No third-party services are called.",
      "api.geoNotRead": "Coordinates have not been received yet",
      "api.keyboardNotRead": "The map has not been received yet",
      "api.httpUnavailable": "A server receiving the HTTP request is required. Not checked in this version.",
      "footer.tagline": "Know what your browser reveals.",
      "footer.note": "Matching values do not confirm that spoofing is active.",
      "page.noscript": "Enable JavaScript to read your browser's data.",
      "toast.download": "JSON report prepared for download",
      "toast.copied": "JSON report copied",
      "toast.copyError": "Clipboard access is unavailable. Use “Download report”.",
      "toast.refreshed": "Readings refreshed. Use the location and map buttons to update those readings.",
    },
    ru: {
      "page.title": "meikaku — ваше окружение",
      "page.description": "meikaku — локальная проверка геолокации, языков, региональных форматов, времени и раскладки браузера.",
      "page.skip": "К содержимому",
      "nav.label": "Навигация",
      "nav.brand": "meikaku, обзор",
      "nav.heading": "ОКРУЖЕНИЕ БРАУЗЕРА",
      "nav.overview": "Обзор",
      "nav.geolocation": "Геолокация",
      "nav.locale": "Языки и локаль",
      "nav.datetime": "Дата и время",
      "nav.keyboard": "Клавиатура",
      "nav.api": "Подробности API",
      "privacy.title": "В пределах этой вкладки",
      "privacy.description": "Без аналитики и отправки результатов на сервер.",
      "header.tools": "Инструменты",
      "header.environment": "Проверка окружения",
      "header.checking": "Проверка контекста",
      "header.secure": "Безопасный контекст",
      "header.insecure": "Небезопасный контекст",
      "language.label": "Язык интерфейса",
      "language.choose": "Выбрать язык интерфейса",
      "theme.change": "Сменить тему",
      "theme.light": "Включить светлую тему",
      "theme.dark": "Включить тёмную тему",
      "overview.title": "Что видят сайты",
      "overview.description": "Ваши координаты, языки и время. Прямо из браузера.",
      "actions.refresh": "Обновить",
      "actions.download": "Скачать отчёт",
      "actions.copy": "Копировать JSON",
      "snapshot.current": "Значения текущей страницы",
      "snapshot.label": "Снимок",
      "snapshot.help": "После смены профиля перезагрузите страницу",
      "stat.timezone": "Часовой пояс",
      "stat.language": "Основной язык",
      "stat.locale": "Локаль форматов",
      "stat.localeHint": "Независима от языка браузера",
      "stat.apis": "Доступность API",
      "stat.support": "Посмотреть поддержку",
      "common.unavailable": "Недоступно",
      "common.apiUnsupported": "API отсутствует в этом браузере",
      "common.notRequested": "Не запрошена",
      "common.apiUnavailable": "API недоступен",
      "common.requesting": "Запрашиваем…",
      "common.none": "Нет",
      "common.error": "Недоступно: {error}",
      "unit.minutesValue": "{value} мин",
      "geo.title": "Геолокация",
      "geo.mapCaption": "КООРДИНАТЫ БРАУЗЕРА",
      "geo.emptyTitle": "Где вы для этой страницы?",
      "geo.emptyDescription": "Запросите координаты у браузера",
      "geo.latitude": "Широта",
      "geo.longitude": "Долгота",
      "geo.request": "Запросить координаты",
      "geo.pending": "Получаем координаты…",
      "geo.watch": "Наблюдать",
      "geo.stop": "Остановить",
      "geo.initialMessage": "Потребуется разрешение браузера. IP-адрес не определяется.",
      "geo.denied": "Доступ запрещён",
      "geo.granted": "Доступ разрешён",
      "geo.deniedMessage": "Браузер запретил доступ. Разрешение можно изменить в настройках сайта.",
      "geo.readyMessage": "Нажмите «Запросить координаты», чтобы прочитать положение.",
      "geo.received": "Получена",
      "geo.watching": "Наблюдение",
      "geo.receivedMessage": "Координаты получены · отметка позиции {time}.",
      "geo.watchingMessage": "Наблюдение активно · отметка позиции {time}.",
      "geo.error": "Ошибка запроса",
      "geo.errorDenied": "Доступ к геолокации запрещён браузером или политикой страницы.",
      "geo.errorDeniedPrevious": "Доступ к геолокации запрещён браузером или политикой страницы. На экране сохранён предыдущий результат.",
      "geo.errorUnavailable": "Браузер не смог определить положение. Можно повторить запрос.",
      "geo.errorUnavailablePrevious": "Браузер не смог определить положение. Можно повторить запрос. На экране сохранён предыдущий результат.",
      "geo.errorTimeout": "Время ожидания координат истекло. Можно повторить запрос.",
      "geo.errorTimeoutPrevious": "Время ожидания координат истекло. Можно повторить запрос. На экране сохранён предыдущий результат.",
      "geo.errorGeneric": "{error}",
      "geo.errorGenericPrevious": "{error} На экране сохранён предыдущий результат.",
      "geo.waitingMessage": "Ожидаем ответ браузера. Если появится запрос доступа, выберите разрешение.",
      "geo.stoppedMessage": "Наблюдение остановлено. Последние полученные координаты сохранены на экране.",
      "geo.startedMessage": "Наблюдение запущено. Ожидаем позицию от браузера.",
      "geo.stopped": "Наблюдение остановлено",
      "geo.pageHiddenMessage": "Страница была закрыта или покинута. Нажмите «Наблюдать», чтобы возобновить наблюдение.",
      "geo.secureRequired": "Для геолокации нужен HTTPS или localhost.",
      "geo.unsupported": "Браузер не предоставляет Geolocation API.",
      "time.title": "Дата и время",
      "time.live": "В реальном времени",
      "time.local": "ЛОКАЛЬНОЕ ВРЕМЯ",
      "time.clockLabel": "Текущее местное время",
      "time.localeDate": "Дата по локали",
      "time.hourCycle": "Часовой цикл",
      "time.offset": "Смещение JavaScript",
      "time.utc": "Абсолютное время UTC",
      "time.note": "Часовой пояс меняет представление времени. Сам момент времени остаётся прежним.",
      "locale.title": "Языки и локаль",
      "locale.preferred": "ЯЗЫКИ В ПОРЯДКЕ ПРЕДПОЧТЕНИЯ",
      "locale.primary": "основной",
      "locale.emptyLanguages": "Пустой список языков",
      "locale.unavailableLanguages": "Список языков недоступен",
      "locale.date": "Локаль дат",
      "locale.number": "Локаль чисел",
      "locale.tabs": "Представление локали",
      "locale.examples": "Примеры форматов",
      "locale.options": "Параметры Intl",
      "locale.numberLabel": "Число",
      "locale.datetime": "Дата и время",
      "locale.relative": "Относительное время",
      "locale.region": "Название региона",
      "locale.calendar": "Календарь",
      "locale.numbering": "Система цифр",
      "locale.grouping": "Группировка разрядов",
      "locale.decimal": "Десятичный разделитель",
      "locale.separator": "Разделитель групп",
      "locale.httpNote": "Этот заголовок читает сервер. Статическая страница не может подтвердить его значение.",
      "keyboard.title": "Карта клавиатуры",
      "keyboard.detected": "ОПРЕДЕЛЁННАЯ КАРТА",
      "keyboard.waiting": "Ожидает запроса",
      "keyboard.diagram": "Схема физических клавиш",
      "keyboard.initialMessage": "Подписи на схеме — физические коды. Запросите карту, чтобы увидеть символы.",
      "keyboard.request": "Прочитать карту",
      "keyboard.test": "Проверка ввода",
      "keyboard.placeholder": "Нажмите клавишу в этом поле…",
      "keyboard.note": "Карта API и реальный ввод могут различаться.",
      "keyboard.space": "Пробел",
      "keyboard.notInMap": "не входит в карту",
      "keyboard.looksLike": "Похожа на {layout}",
      "keyboard.read": "Карта прочитана",
      "keyboard.empty": "Пустая карта",
      "keyboard.reading": "Читаем…",
      "keyboard.count.one": "{count} клавиша в карте",
      "keyboard.count.few": "{count} клавиши в карте",
      "keyboard.count.many": "{count} клавиш в карте",
      "keyboard.emptyMessage": "getLayoutMap() вернул карту без подписей. Проверка реального ввода доступна ниже.",
      "keyboard.readMessage": "Показаны символы, возвращённые getLayoutMap(). Название оценено по Q, W, Y и Z.",
      "keyboard.received": "Карта получена",
      "keyboard.noAccess": "Нет доступа",
      "keyboard.errorMessage": "{error} Откройте страницу в активной вкладке и повторите запрос.",
      "keyboard.errorPreviousMessage": "{error} Показана предыдущая карта.",
      "keyboard.reread": "Прочитать ещё раз",
      "keyboard.changed": "Карта могла измениться",
      "keyboard.changedMessage": "Получено событие layoutchange. Прочитайте карту повторно.",
      "keyboard.unsupported": "Нет поддержки API",
      "keyboard.unsupportedMessage": "Для карты нужен поддерживаемый браузер и безопасный контекст. Проверка ввода доступна.",
      "api.eyebrow": "ПОД КАПОТОМ",
      "api.title": "Подробные показания API",
      "api.description": "Исходные значения и дополнительные способы чтения из info.md.",
      "readings.one": "{count} показание",
      "readings.few": "{count} показания",
      "readings.many": "{count} показаний",
      "group.support.title": "Доступность и контекст",
      "group.support.description": "Наличие API не означает, что браузер разрешил доступ к его данным.",
      "group.navigator.title": "Языки браузера",
      "group.navigator.description": "Порядок navigator.languages сохраняется. Локаль форматирования проверяется отдельно.",
      "group.intl.title": "Локаль и региональные форматы",
      "group.intl.description": "Во всех примерах локаль и часовой пояс по умолчанию: страница не подставляет свой регион.",
      "group.date.title": "Время и локальные поля",
      "group.date.description": "Снимок на момент обновления. Основные часы выше обновляются каждую секунду.",
      "group.construction.title": "Создание и изменение дат",
      "group.construction.description": "Контрольная дата: 15 января 2024 года, 12:00 локального времени. Каждый setter проверяется на отдельной копии.",
      "group.temporal.title": "Современные API времени",
      "group.temporal.description": "Читаются только методы, которые уже существуют в браузере. Полифиллы не используются.",
      "group.geolocation.title": "Координаты и отметки времени",
      "group.geolocation.description": "Широта, долгота и отметка времени из последнего результата getCurrentPosition или watchPosition.",
      "group.keyboard.title": "Карта и реальный ввод",
      "group.keyboard.description": "Данные карты не определяют вводимый текст. KeyboardEvent читается только в поле проверки ввода.",
      "group.http.title": "Сетевой язык",
      "group.http.description": "Фактический Accept-Language можно проверить на сервере, получившем запрос. Никакие сторонние сервисы не вызываются.",
      "api.geoNotRead": "Координаты ещё не получены",
      "api.keyboardNotRead": "Карта ещё не получена",
      "api.httpUnavailable": "Требуется сервер, получающий HTTP-запрос. В этой версии не проверяется.",
      "footer.tagline": "Понятно, что видит браузер.",
      "footer.note": "Совпадение значений не подтверждает работу подмены.",
      "page.noscript": "Включите JavaScript, чтобы прочитать данные браузера.",
      "toast.download": "JSON-отчёт подготовлен к скачиванию",
      "toast.copied": "JSON-отчёт скопирован",
      "toast.copyError": "Нет доступа к буферу обмена. Используйте «Скачать отчёт».",
      "toast.refreshed": "Показания обновлены. Координаты и карта — по своим кнопкам.",
    },
  };
  const translationParameters = new WeakMap();
  const state = {
    uiLanguage: "en",
    snapshotAt: null,
    groups: new Map(),
    position: null,
    geoError: null,
    geoPermission: "unknown",
    geoPermissionObject: null,
    geoPending: false,
    geoRequestId: 0,
    geoReceivedAt: null,
    watchId: null,
    keyboardMap: null,
    keyboardError: null,
    keyboardPending: false,
    keyboardReadAt: null,
    keyboardEvents: [],
    clockInterval: null,
    toastTimeout: null,
    refreshPending: false,
  };

  class UnsupportedAPIError extends Error {
    constructor(message = messages.en["common.apiUnsupported"]) {
      super(message);
      this.name = "UnsupportedAPIError";
    }
  }

  const groupDefinitions = [
    ["support", "API · Permissions"],
    ["navigator", "Navigator"],
    ["intl", "Intl"],
    ["date", "Date"],
    ["construction", "Date constructors · setters"],
    ["temporal", "Temporal.Now"],
    ["geolocation", "Geolocation"],
    ["keyboard", "Keyboard Map API"],
    ["http", "Accept-Language"],
  ];

  function t(key, parameters = {}) {
    const template = messages[state.uiLanguage]?.[key] ?? messages.en[key] ?? key;
    return template.replace(/\{(\w+)\}/g, (match, name) => Object.hasOwn(parameters, name) ? String(parameters[name]) : match);
  }

  function localize(element, key, parameters = {}) {
    element.dataset.i18n = key;
    translationParameters.set(element, parameters);
    element.textContent = t(key, parameters);
  }

  function setLocalizedText(id, key, parameters = {}) {
    localize($(id), key, parameters);
  }

  function setLocalizedAttribute(id, attribute, key) {
    const element = $(id);
    element.setAttribute(`data-i18n-${attribute}`, key);
    element.setAttribute(attribute, t(key));
  }

  function pluralText(key, count) {
    let category = count === 1 ? "one" : "many";
    if (state.uiLanguage === "ru") {
      const absolute = Math.abs(count);
      category = absolute % 10 === 1 && absolute % 100 !== 11 ? "one" : [2, 3, 4].includes(absolute % 10) && ![12, 13, 14].includes(absolute % 100) ? "few" : "many";
    }
    return t(`${key}.${category}`, { count });
  }

  function applyInterfaceLanguage() {
    document.documentElement.lang = state.uiLanguage;
    for (const element of document.querySelectorAll("[data-i18n]")) {
      element.textContent = t(element.dataset.i18n, translationParameters.get(element));
    }
    for (const attribute of ["aria-label", "title", "placeholder", "content"]) {
      for (const element of document.querySelectorAll(`[data-i18n-${attribute}]`)) {
        element.setAttribute(attribute, t(element.getAttribute(`data-i18n-${attribute}`)));
      }
    }
    $("language-select").value = state.uiLanguage;
  }

  function initializeLanguage() {
    try {
      const saved = localStorage.getItem("meikaku-language");
      if (saved === "en" || saved === "ru") state.uiLanguage = saved;
    } catch { /* English remains the default when storage is unavailable. */ }
    applyInterfaceLanguage();
    $("language-select").addEventListener("change", (event) => {
      const language = event.target.value;
      if (!["en", "ru"].includes(language)) return;
      state.uiLanguage = language;
      try { localStorage.setItem("meikaku-language", language); } catch { /* The current tab still switches language. */ }
      applyInterfaceLanguage();
      renderGroups();
      renderKeyboard();
      if (state.keyboardMap) setText("keyboard-count", pluralText("keyboard.count", state.keyboardMap.size));
    });
  }

  function errorInfo(error) {
    return { name: error?.name || "Error", message: error?.message || String(error) };
  }

  function inspect(api, operation) {
    try {
      return { api, status: "ok", value: operation() };
    } catch (error) {
      return {
        api,
        status: error instanceof UnsupportedAPIError ? "unavailable" : "error",
        error: errorInfo(error),
      };
    }
  }

  function record(group, api, operation) {
    const result = inspect(api, operation);
    if (!state.groups.has(group)) state.groups.set(group, []);
    state.groups.get(group).push(result);
    return result;
  }

  function unavailable(api, messageKey) {
    return { api, status: "unavailable", error: { name: "Unavailable", message: messages.en[messageKey], messageKey } };
  }

  function requireMethod(owner, method) {
    if (!owner || typeof owner[method] !== "function") throw new UnsupportedAPIError();
    return owner;
  }

  function jsonReplacer(key, value) {
    if (typeof value === "bigint") return `${value}n`;
    if (typeof value === "number" && !Number.isFinite(value)) return String(value);
    if (typeof value === "number" && Object.is(value, -0)) return "-0";
    if (value === undefined) return "undefined";
    return value;
  }

  function valueText(value) {
    if (value === null) return "null";
    if (value === undefined) return "undefined";
    if (typeof value === "string") return value || '""';
    if (typeof value === "object") return JSON.stringify(value, jsonReplacer, 2);
    return String(value);
  }

  function resultText(result, fallback = t("common.unavailable")) {
    return result?.status === "ok" ? valueText(result.value) : fallback;
  }

  function setText(id, value) {
    const element = $(id);
    delete element.dataset.i18n;
    translationParameters.delete(element);
    element.textContent = value === undefined || value === null ? "—" : String(value);
  }

  function setResult(id, result) {
    if (result?.status === "ok") setText(id, resultText(result));
    else setLocalizedText(id, "common.unavailable");
  }

  function badge(id, key, type = "") {
    const element = $(id);
    localize(element, key);
    element.className = `badge${type ? ` badge-${type}` : ""}`;
  }

  function utcOffset(minutes) {
    if (!Number.isFinite(minutes)) return t("common.unavailable");
    const sign = minutes > 0 ? "−" : "+";
    const absolute = Math.abs(minutes);
    return `UTC${sign}${String(Math.floor(absolute / 60)).padStart(2, "0")}:${String(Math.floor(absolute % 60)).padStart(2, "0")}`;
  }

  function shortLocalTime(date = new Date()) {
    return [date.getHours(), date.getMinutes(), date.getSeconds()]
      .map((part) => String(part).padStart(2, "0")).join(":");
  }

  function toast(key) {
    clearTimeout(state.toastTimeout);
    setLocalizedText("toast-text", key);
    $("toast").hidden = false;
    state.toastTimeout = setTimeout(() => { $("toast").hidden = true; }, 4200);
  }

  function collectSupport() {
    record("support", "window.isSecureContext", () => window.isSecureContext);
    record("support", "location.protocol", () => location.protocol);
    record("support", "document.hasFocus()", () => document.hasFocus());
    record("support", "document.visibilityState", () => document.visibilityState);
    const capabilities = [
      ["navigator.geolocation", () => typeof navigator.geolocation?.getCurrentPosition === "function"],
      ["navigator.keyboard.getLayoutMap", () => typeof navigator.keyboard?.getLayoutMap === "function"],
      ["Intl.DateTimeFormat", () => typeof Intl.DateTimeFormat === "function"],
      ["Intl.NumberFormat", () => typeof Intl.NumberFormat === "function"],
      ["Temporal.Now", () => typeof globalThis.Temporal?.Now === "object"],
    ];
    let count = 0;
    for (const [name, operation] of capabilities) {
      const result = record("support", name, operation);
      if (result.status === "ok" && result.value) count++;
    }
    record("support", 'navigator.permissions.query({ name: "geolocation" })', () => state.geoPermission);
    setText("stat-apis", count);
    setLocalizedText("context-label", window.isSecureContext ? "header.secure" : "header.insecure");
    $("context-badge").classList.toggle("is-insecure", !window.isSecureContext);
  }

  function collectNavigator() {
    const primary = record("navigator", "navigator.language", () => navigator.language);
    const languages = record("navigator", "navigator.languages", () => Array.from(navigator.languages));
    setResult("stat-language", primary);
    delete $("language-chips").dataset.i18n;
    $("language-chips").replaceChildren();
    if (languages.status === "ok") {
      languages.value.forEach((language, index) => {
        const chip = document.createElement("span");
        chip.className = "language-chip";
        chip.append(document.createTextNode(language));
        if (index === 0) {
          const label = document.createElement("small");
          localize(label, "locale.primary");
          chip.append(label);
        }
        $("language-chips").append(chip);
      });
      if (languages.value.length === 0) setLocalizedText("language-chips", "locale.emptyLanguages");
    } else {
      setLocalizedText("language-chips", "locale.unavailableLanguages");
    }
  }

  function collectIntl(now) {
    const dateOptions = record("intl", "new Intl.DateTimeFormat().resolvedOptions()", () => new Intl.DateTimeFormat().resolvedOptions());
    const numberOptions = record("intl", "new Intl.NumberFormat().resolvedOptions()", () => new Intl.NumberFormat().resolvedOptions());
    const number = record("intl", "new Intl.NumberFormat().format(1234567.89)", () => new Intl.NumberFormat().format(1234567.89));
    const numberParts = record("intl", "new Intl.NumberFormat().formatToParts(1234567.89)", () => new Intl.NumberFormat().formatToParts(1234567.89));
    record("intl", "new Intl.DateTimeFormat().format(date)", () => new Intl.DateTimeFormat().format(now));
    record("intl", "new Intl.DateTimeFormat().formatToParts(date)", () => new Intl.DateTimeFormat().formatToParts(now));
    const localNumber = record("intl", "(1234.5).toLocaleString()", () => (1234.5).toLocaleString());
    const bigInt = record("intl", "(1234n).toLocaleString()", () => BigInt(1234).toLocaleString());
    const localDate = record("intl", "date.toLocaleString()", () => now.toLocaleString());
    record("intl", "date.toLocaleDateString()", () => now.toLocaleDateString());
    record("intl", "date.toLocaleTimeString()", () => now.toLocaleTimeString());
    record("intl", "new Intl.Collator().resolvedOptions()", () => new Intl.Collator().resolvedOptions());
    record("intl", 'new Intl.Collator().compare("ä", "z")', () => new Intl.Collator().compare("ä", "z"));
    record("intl", '["ä", "a", "z", "å"].sort(new Intl.Collator().compare)', () => ["ä", "a", "z", "å"].sort(new Intl.Collator().compare));
    record("intl", '"ä".localeCompare("z")', () => "ä".localeCompare("z"));
    record("intl", '"Iİ".toLocaleLowerCase()', () => "Iİ".toLocaleLowerCase());
    record("intl", '"iı".toLocaleUpperCase()', () => "iı".toLocaleUpperCase());
    record("intl", "new Intl.PluralRules().resolvedOptions()", () => { requireMethod(Intl, "PluralRules"); return new Intl.PluralRules().resolvedOptions(); });
    record("intl", "new Intl.PluralRules().select(n), n = 0, 1, 2, 5, 21", () => {
      requireMethod(Intl, "PluralRules");
      const formatter = new Intl.PluralRules();
      return Object.fromEntries([0, 1, 2, 5, 21].map((number) => [number, formatter.select(number)]));
    });
    const relative = record("intl", 'new Intl.RelativeTimeFormat().format(-1, "day")', () => { requireMethod(Intl, "RelativeTimeFormat"); return new Intl.RelativeTimeFormat().format(-1, "day"); });
    record("intl", "new Intl.RelativeTimeFormat().resolvedOptions()", () => { requireMethod(Intl, "RelativeTimeFormat"); return new Intl.RelativeTimeFormat().resolvedOptions(); });
    record("intl", 'new Intl.ListFormat().format(["A", "B", "C"])', () => { requireMethod(Intl, "ListFormat"); return new Intl.ListFormat().format(["A", "B", "C"]); });
    record("intl", "new Intl.ListFormat().resolvedOptions()", () => { requireMethod(Intl, "ListFormat"); return new Intl.ListFormat().resolvedOptions(); });
    const region = record("intl", 'new Intl.DisplayNames(undefined, { type: "region" }).of("DE")', () => { requireMethod(Intl, "DisplayNames"); return new Intl.DisplayNames(undefined, { type: "region" }).of("DE"); });
    record("intl", 'new Intl.DisplayNames(undefined, { type: "region" }).resolvedOptions()', () => { requireMethod(Intl, "DisplayNames"); return new Intl.DisplayNames(undefined, { type: "region" }).resolvedOptions(); });
    record("intl", 'new Intl.Segmenter().segment("Hello, мир!")', () => {
      requireMethod(Intl, "Segmenter");
      return Array.from(new Intl.Segmenter().segment("Hello, мир!"), ({ segment, index, isWordLike }) => ({ segment, index, ...(isWordLike === undefined ? {} : { isWordLike }) }));
    });
    record("intl", "new Intl.Segmenter().resolvedOptions()", () => { requireMethod(Intl, "Segmenter"); return new Intl.Segmenter().resolvedOptions(); });
    record("intl", "new Intl.DurationFormat().format({ hours: 2, minutes: 30 })", () => { requireMethod(Intl, "DurationFormat"); return new Intl.DurationFormat().format({ hours: 2, minutes: 30 }); });
    record("intl", "new Intl.DurationFormat().resolvedOptions()", () => { requireMethod(Intl, "DurationFormat"); return new Intl.DurationFormat().resolvedOptions(); });
    record("intl", "new Intl.DateTimeFormat([]).resolvedOptions().locale", () => new Intl.DateTimeFormat([]).resolvedOptions().locale);
    record("intl", 'new Intl.DateTimeFormat("en-US", { timeZone: "UTC" }).format(date)', () => new Intl.DateTimeFormat("en-US", { timeZone: "UTC" }).format(now));

    const dateResolved = dateOptions.status === "ok" ? dateOptions.value : {};
    const numberResolved = numberOptions.status === "ok" ? numberOptions.value : {};
    const cycle = inspect("hourCycle", () => new Intl.DateTimeFormat(undefined, { hour: "numeric" }).resolvedOptions().hourCycle);
    if (dateResolved.timeZone) setText("stat-timezone", dateResolved.timeZone);
    else setLocalizedText("stat-timezone", "common.unavailable");
    if (dateResolved.locale) setText("stat-locale", dateResolved.locale);
    else setLocalizedText("stat-locale", "common.unavailable");
    setText("locale-date", dateResolved.locale);
    setText("locale-number", numberResolved.locale);
    setResult("format-number", number);
    setResult("format-local-number", localNumber);
    setResult("format-bigint", bigInt);
    setResult("format-datetime", localDate);
    setResult("format-relative", relative);
    setResult("format-region", region);
    setText("option-calendar", dateResolved.calendar);
    setText("option-numbering", numberResolved.numberingSystem);
    setResult("option-cycle", cycle);
    setText("option-grouping", numberResolved.useGrouping);
    const parts = numberParts.status === "ok" ? numberParts.value : [];
    const setPart = (id, type) => {
      const part = parts.find((item) => item.type === type);
      if (!part) setLocalizedText(id, "common.none");
      else setText(id, `${JSON.stringify(part.value)} · U+${part.value.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}`);
    };
    setPart("option-decimal", "decimal");
    setPart("option-separator", "group");
    setText("clock-timezone", dateResolved.timeZone);
    setResult("time-hour-cycle", cycle);
  }

  function collectDate(now) {
    for (const method of ["getFullYear", "getYear", "getMonth", "getDate", "getDay", "getHours", "getMinutes", "getSeconds", "getMilliseconds", "getTimezoneOffset", "toString", "toDateString", "toTimeString", "toLocaleString", "toLocaleDateString", "toLocaleTimeString", "getTime", "valueOf", "toISOString", "toJSON", "toUTCString", "toGMTString"]) {
      record("date", `date.${method}()`, () => now[method]());
    }
    record("date", "String(date)", () => String(now));
    record("date", "Date()", () => Date());
    record("date", "Date.now()", () => Date.now());
    record("date", "Date.UTC(2024, 0, 15, 12)", () => Date.UTC(2024, 0, 15, 12));
    record("date", "UTC getters", () => ({
      getUTCFullYear: now.getUTCFullYear(), getUTCMonth: now.getUTCMonth(),
      getUTCDate: now.getUTCDate(), getUTCDay: now.getUTCDay(),
      getUTCHours: now.getUTCHours(), getUTCMinutes: now.getUTCMinutes(),
      getUTCSeconds: now.getUTCSeconds(), getUTCMilliseconds: now.getUTCMilliseconds(),
    }));
    record("date", "JSON.stringify({ date })", () => JSON.stringify({ date: now }));
    record("date", "structuredClone(date)", () => {
      requireMethod(globalThis, "structuredClone");
      const cloned = structuredClone(now);
      return { local: cloned.toString(), iso: cloned.toISOString(), timestamp: cloned.getTime(), sameTimestamp: cloned.getTime() === now.getTime() };
    });
    record("date", "performance.now()", () => performance.now());
  }

  function collectConstruction() {
    record("construction", "new Date(2024, 0, 15, 12, 0, 0, 0)", () => {
      const date = new Date(2024, 0, 15, 12, 0, 0, 0);
      return { local: date.toString(), iso: date.toISOString(), timestamp: date.getTime() };
    });
    record("construction", 'new Date("2024-01-15T12:00")', () => {
      const date = new Date("2024-01-15T12:00");
      return { local: date.toString(), iso: date.toISOString() };
    });
    record("construction", 'Date.parse("2024-01-15T12:00")', () => Date.parse("2024-01-15T12:00"));
    for (const value of ["2024-01-15T12:00:00Z", "2024-01-15T12:00:00+03:00", "2024-01-15"]) {
      record("construction", `new Date(${JSON.stringify(value)}).toISOString()`, () => new Date(value).toISOString());
    }
    record("construction", 'new Date("01/02/2024").toString()', () => new Date("01/02/2024").toString());
    record("construction", 'Date.parse("01/02/2024")', () => Date.parse("01/02/2024"));
    const localSetters = [
      ["setDate", [16]], ["setFullYear", [2025]], ["setMonth", [5]],
      ["setHours", [9, 30]], ["setMinutes", [45]], ["setSeconds", [30]],
      ["setMilliseconds", [123]], ["setYear", [125]],
    ];
    for (const [method, args] of localSetters) {
      record("construction", `date.${method}(${args.join(", ")})`, () => {
        const date = new Date(2024, 0, 15, 12, 0, 0, 0);
        const timestamp = date[method](...args);
        return { local: date.toString(), iso: date.toISOString(), timestamp };
      });
    }
    const utcSetters = [
      ["setUTCFullYear", [2025]], ["setUTCMonth", [5]], ["setUTCDate", [16]],
      ["setUTCHours", [9, 30]], ["setUTCMinutes", [45]],
      ["setUTCSeconds", [30]], ["setUTCMilliseconds", [123]], ["setTime", [0]],
    ];
    for (const [method, args] of utcSetters) {
      record("construction", `UTC control: date.${method}(${args.join(", ")})`, () => {
        const date = new Date("2024-01-15T12:00:00Z");
        date[method](...args);
        return date.toISOString();
      });
    }
  }

  function collectTemporal() {
    for (const method of ["timeZoneId", "zonedDateTimeISO", "plainDateTimeISO", "plainDateISO", "plainTimeISO", "instant"]) {
      record("temporal", `Temporal.Now.${method}()`, () => {
        const owner = requireMethod(globalThis.Temporal?.Now, method);
        return String(owner[method]());
      });
    }
    for (const method of ["zonedDateTime", "plainDateTime", "plainDate", "plainTime"]) {
      if (typeof globalThis.Temporal?.Now?.[method] !== "function") continue;
      const args = method === "plainTime" ? [] : ["iso8601"];
      record("temporal", `Temporal.Now.${method}(${args.map((value) => JSON.stringify(value)).join(", ")})`, () => String(globalThis.Temporal.Now[method](...args)));
    }
  }

  function collectGeo() {
    const rows = [];
    state.groups.set("geolocation", rows);
    rows.push({ api: "permission.state", status: "ok", value: state.geoPermission });
    rows.push({ api: "watchPosition active", status: "ok", value: state.watchId !== null });
    if (state.geoError) rows.push({ api: "Last geolocation request", status: "error", error: state.geoError });
    if (!state.position) {
      rows.push(unavailable("GeolocationPosition", "api.geoNotRead"));
      return;
    }
    const position = state.position;
    for (const field of ["latitude", "longitude"]) {
      record("geolocation", `position.coords.${field}`, () => position.coords[field]);
    }
    record("geolocation", "position.timestamp", () => position.timestamp);
    record("geolocation", "position.timestamp (ISO)", () => new Date(position.timestamp).toISOString());
    record("geolocation", "Received by page (ISO)", () => state.geoReceivedAt);
  }

  function collectKeyboard() {
    state.groups.set("keyboard", []);
    record("keyboard", "navigator.keyboard.getLayoutMap available", () => typeof navigator.keyboard?.getLayoutMap === "function");
    if (state.keyboardError) state.groups.get("keyboard").push({ api: "getLayoutMap()", status: "error", error: state.keyboardError });
    if (state.keyboardMap) {
      const map = state.keyboardMap;
      record("keyboard", "map.size", () => map.size);
      record("keyboard", 'map.get("KeyY")', () => map.get("KeyY"));
      record("keyboard", 'map.has("KeyY")', () => map.has("KeyY"));
      record("keyboard", "[...map]", () => [...map]);
      record("keyboard", "[...map.entries()]", () => [...map.entries()]);
      record("keyboard", "[...map.keys()]", () => [...map.keys()]);
      record("keyboard", "[...map.values()]", () => [...map.values()]);
      record("keyboard", "map.forEach()", () => {
        const entries = [];
        map.forEach((value, key) => entries.push([key, value]));
        return entries;
      });
      record("keyboard", "Map read at (ISO)", () => state.keyboardReadAt);
    } else {
      state.groups.get("keyboard").push(unavailable("KeyboardLayoutMap", "api.keyboardNotRead"));
    }
    record("keyboard", "layoutchange events (last 10)", () => [...state.keyboardEvents]);
    if (lastKeyboardEvent) record("keyboard", "Last KeyboardEvent in input test", () => ({ ...lastKeyboardEvent }));
  }

  function collectHTTP() {
    state.groups.set("http", [unavailable("Accept-Language (actual header)", "api.httpUnavailable")]);
  }

  function renderGroups() {
    const opened = new Set(Array.from($("api-groups").querySelectorAll("details[open]"), (element) => element.dataset.group));
    const fragment = document.createDocumentFragment();
    for (const [id, source] of groupDefinitions) {
      const rows = state.groups.get(id) || [];
      const details = document.createElement("details");
      details.className = "api-group";
      details.dataset.group = id;
      details.open = opened.has(id);
      const summary = document.createElement("summary");
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.classList.add("icon");
      icon.setAttribute("aria-hidden", "true");
      const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
      use.setAttribute("href", "#i-chevron");
      icon.append(use);
      const heading = document.createElement("span");
      heading.className = "api-group-title";
      heading.textContent = t(`group.${id}.title`);
      const subtitle = document.createElement("span");
      subtitle.className = "api-group-subtitle";
      subtitle.textContent = source;
      const count = document.createElement("span");
      count.className = "api-group-count";
      count.textContent = String(rows.length);
      count.setAttribute("aria-label", pluralText("readings", rows.length));
      summary.append(icon, heading, subtitle, count);
      const body = document.createElement("div");
      body.className = "api-body";
      const intro = document.createElement("p");
      intro.className = "api-description";
      intro.textContent = t(`group.${id}.description`);
      const table = document.createElement("dl");
      table.className = "api-table";
      for (const result of rows) {
        const row = document.createElement("div");
        row.className = "api-row";
        const key = document.createElement("dt");
        key.className = "api-key";
        key.textContent = result.api;
        const value = document.createElement("dd");
        value.className = `api-value${result.status !== "ok" ? ` is-${result.status}` : ""}`;
        const errorMessage = result.error?.messageKey ? t(result.error.messageKey) : result.error?.name === "UnsupportedAPIError" ? t("common.apiUnsupported") : result.error?.message;
        value.textContent = result.status === "ok" ? valueText(result.value) : `${result.error.name}: ${errorMessage}`;
        row.append(key, value);
        table.append(row);
      }
      body.append(intro, table);
      details.append(summary, body);
      fragment.append(details);
    }
    $("api-groups").replaceChildren(fragment);
  }

  function collectSnapshot() {
    const now = new Date();
    state.snapshotAt = now.toISOString();
    state.groups.clear();
    collectSupport();
    collectNavigator();
    collectIntl(now);
    collectDate(now);
    collectConstruction();
    collectTemporal();
    collectGeo();
    collectKeyboard();
    collectHTTP();
    renderGroups();
    $("snapshot-time").dateTime = state.snapshotAt;
    setText("snapshot-time", shortLocalTime(now));
    updateClock();
  }

  function updateClock() {
    const now = new Date();
    try {
      setText("clock-hours", String(now.getHours()).padStart(2, "0"));
      setText("clock-minutes", String(now.getMinutes()).padStart(2, "0"));
      setText("clock-seconds", String(now.getSeconds()).padStart(2, "0"));
      const offset = utcOffset(now.getTimezoneOffset());
      setText("clock-offset", offset);
      setText("stat-offset", offset);
      setLocalizedText("time-offset", "unit.minutesValue", { value: now.getTimezoneOffset() });
      setText("time-utc", now.toISOString());
      setText("time-locale-date", now.toLocaleDateString());
      setText("clock-date", new Intl.DateTimeFormat(undefined, { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(now));
    } catch (error) {
      setLocalizedText("clock-date", "common.error", { error: errorInfo(error).message });
    }
  }

  function refreshPermissionRow() {
    const rows = state.groups.get("support");
    const row = rows?.find((entry) => entry.api.startsWith("navigator.permissions.query"));
    if (row) row.value = state.geoPermission;
    collectGeo();
    renderGroups();
  }

  async function readGeoPermission() {
    if (!navigator.permissions?.query) {
      state.geoPermission = "unavailable";
      refreshPermissionRow();
      return;
    }
    try {
      const permission = await navigator.permissions.query({ name: "geolocation" });
      state.geoPermission = permission.state;
      if (state.geoPermissionObject !== permission) {
        if (state.geoPermissionObject) state.geoPermissionObject.onchange = null;
        state.geoPermissionObject = permission;
        permission.onchange = () => {
          state.geoPermission = permission.state;
          if (permission.state === "denied") {
            stopWatch(false);
            badge("geo-badge", "geo.denied", "red");
            setLocalizedText("geo-message", "geo.deniedMessage");
          } else if (!state.position && !state.geoPending) {
            badge("geo-badge", permission.state === "granted" ? "geo.granted" : "common.notRequested");
            setLocalizedText("geo-message", "geo.readyMessage");
          }
          refreshPermissionRow();
        };
      }
      if (permission.state === "denied" && !state.position && !state.geoPending) {
        badge("geo-badge", "geo.denied", "red");
        setLocalizedText("geo-message", "geo.deniedMessage");
      }
    } catch (error) {
      state.geoPermission = `unknown (${errorInfo(error).name})`;
    }
    refreshPermissionRow();
  }

  function renderPosition(position) {
    const { latitude, longitude } = position.coords;
    const timestamp = position.timestamp;
    const coords = { latitude, longitude };
    state.position = { coords, timestamp };
    state.geoReceivedAt = new Date().toISOString();
    state.geoError = null;
    for (const field of ["latitude", "longitude"]) {
      const target = $(`geo-${field}`);
      target.replaceChildren();
      target.append(document.createTextNode(String(coords[field])));
      const unit = document.createElement("span");
      unit.className = "value-unit";
      unit.textContent = "°";
      target.append(unit);
    }
    const valid = Number.isFinite(coords.latitude) && Number.isFinite(coords.longitude) && Math.abs(coords.latitude) <= 90 && Math.abs(coords.longitude) <= 180;
    $("map-empty").hidden = valid;
    $("map-marker").toggleAttribute("hidden", !valid);
    $("map-position").hidden = !valid;
    if (valid) {
      const x = (coords.longitude + 180) * 2;
      const y = (90 - coords.latitude) * 2;
      $("map-marker").setAttribute("transform", `translate(${x} ${y})`);
      setText("map-coordinate-label", `${coords.latitude}°, ${coords.longitude}°`);
    }
    const watching = state.watchId !== null;
    badge("geo-badge", watching ? "geo.watching" : "geo.received", "green");
    setLocalizedText("geo-message", watching ? "geo.watchingMessage" : "geo.receivedMessage", { time: shortLocalTime(new Date(timestamp)) });
    collectGeo();
    renderGroups();
  }

  function handleGeoError(error) {
    const errorKeys = {
      1: "geo.errorDenied",
      2: "geo.errorUnavailable",
      3: "geo.errorTimeout",
    };
    state.geoError = { ...errorInfo(error), code: error.code ?? null };
    badge("geo-badge", error.code === 1 ? "geo.denied" : "geo.error", error.code === 1 ? "red" : "amber");
    const key = `${errorKeys[error.code] || "geo.errorGeneric"}${state.position ? "Previous" : ""}`;
    setLocalizedText("geo-message", key, { error: errorInfo(error).message });
    collectGeo();
    renderGroups();
  }

  function setGeoPending(pending) {
    state.geoPending = pending;
    $("geo-button").disabled = pending;
    localize($("geo-button").querySelector("span"), pending ? "geo.pending" : "geo.request");
  }

  function requestPosition() {
    if (!navigator.geolocation || state.geoPending) return;
    const requestId = ++state.geoRequestId;
    setGeoPending(true);
    badge("geo-badge", "common.requesting", "amber");
    setLocalizedText("geo-message", "geo.waitingMessage");
    try {
      navigator.geolocation.getCurrentPosition((position) => {
        if (requestId !== state.geoRequestId) return;
        setGeoPending(false);
        renderPosition(position);
        readGeoPermission();
      }, (error) => {
        if (requestId !== state.geoRequestId) return;
        setGeoPending(false);
        handleGeoError(error);
        readGeoPermission();
      }, { maximumAge: 0, timeout: 15000 });
    } catch (error) {
      setGeoPending(false);
      handleGeoError(error);
    }
  }

  function stopWatch(showMessage = true) {
    if (state.watchId !== null) {
      navigator.geolocation.clearWatch(state.watchId);
      state.watchId = null;
    }
    $("watch-button").setAttribute("aria-pressed", "false");
    localize($("watch-button").querySelector("span"), "geo.watch");
    if (showMessage) {
      badge("geo-badge", state.position ? "geo.received" : "common.notRequested", state.position ? "green" : "");
      setLocalizedText("geo-message", "geo.stoppedMessage");
    }
    collectGeo();
  }

  function toggleWatch() {
    if (state.watchId !== null) {
      stopWatch();
      renderGroups();
      return;
    }
    if (!navigator.geolocation) return;
    try {
      state.watchId = navigator.geolocation.watchPosition(renderPosition, (error) => {
        stopWatch(false);
        handleGeoError(error);
        readGeoPermission();
      }, { maximumAge: 0, timeout: 15000 });
      $("watch-button").setAttribute("aria-pressed", "true");
      localize($("watch-button").querySelector("span"), "geo.stop");
      badge("geo-badge", "geo.watching", "green");
      setLocalizedText("geo-message", "geo.startedMessage");
      collectGeo();
      renderGroups();
    } catch (error) {
      stopWatch(false);
      handleGeoError(error);
    }
  }

  const keyboardRows = [
    ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", ["Backspace", "⌫", 1.55]],
    [["Tab", "Tab", 1.55], "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],
    [["CapsLock", "Caps", 1.95], "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", ["Enter", "Enter", 1.95]],
    [["ShiftLeft", "Shift", 1.55], "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", ["ShiftRight", "Shift", 1.95]],
    [["ControlLeft", "Ctrl", 1.55], ["MetaLeft", "Win", 1.55], ["AltLeft", "Alt", 1.55], "Space", ["AltRight", "Alt", 1.55], ["ControlRight", "Ctrl", 1.55]],
  ];
  const physicalNames = { Backquote: "`", Minus: "−", Equal: "=", BracketLeft: "[", BracketRight: "]", Backslash: "\\", Semicolon: ";", Quote: "'", IntlBackslash: "Intl", Comma: ",", Period: ".", Slash: "/", Space: "Space" };
  let lastKeyboardEvent = null;
  const keyElements = new Map();

  function renderKeyboard() {
    keyElements.clear();
    $("keyboard-visual").replaceChildren();
    for (const codes of keyboardRows) {
      const row = document.createElement("div");
      row.className = "keyboard-row";
      for (const item of codes) {
        const modifier = Array.isArray(item);
        const code = modifier ? item[0] : item;
        const cap = document.createElement("span");
        cap.className = "keycap";
        cap.dataset.code = code;
        cap.title = code;
        if (modifier) {
          cap.classList.add("modifier");
          if (item[2] > 1.55) cap.classList.add("wide");
          cap.textContent = item[1];
        } else if (state.keyboardMap) {
          const character = state.keyboardMap.get(code);
          cap.textContent = code === "Space" && character === " " ? t("keyboard.space") : character ?? "—";
          cap.title = `${code}: ${character === undefined ? t("keyboard.notInMap") : JSON.stringify(character)}`;
        } else {
          cap.textContent = physicalNames[code] || code.replace(/^Key|^Digit/, "");
          cap.classList.add("is-placeholder");
        }
        if (code === "Space") cap.classList.add("space");
        keyElements.set(code, cap);
        row.append(cap);
      }
      $("keyboard-visual").append(row);
    }
  }

  function identifyKeyboard(map) {
    const signatures = [
      ["US QWERTY", { KeyQ: "q", KeyW: "w", KeyY: "y", KeyZ: "z" }],
      ["DE QWERTZ", { KeyQ: "q", KeyW: "w", KeyY: "z", KeyZ: "y" }],
      ["RU JCUKEN", { KeyQ: "й", KeyW: "ц", KeyY: "н", KeyZ: "я" }],
    ];
    const match = signatures.find(([, signature]) => Object.entries(signature).every(([key, value]) => map.get(key) === value));
    return match ? match[0] : null;
  }

  async function requestKeyboard() {
    if (state.keyboardPending || typeof navigator.keyboard?.getLayoutMap !== "function") return;
    state.keyboardPending = true;
    $("keyboard-button").disabled = true;
    setLocalizedText("keyboard-button", "keyboard.reading");
    badge("keyboard-badge", "common.requesting", "amber");
    try {
      const map = await navigator.keyboard.getLayoutMap();
      state.keyboardMap = map;
      state.keyboardError = null;
      state.keyboardReadAt = new Date().toISOString();
      const layout = identifyKeyboard(map);
      setLocalizedText("keyboard-name", map.size === 0 ? "keyboard.empty" : layout ? "keyboard.looksLike" : "keyboard.read", { layout });
      setText("keyboard-count", pluralText("keyboard.count", map.size));
      setLocalizedText("keyboard-message", map.size === 0 ? "keyboard.emptyMessage" : "keyboard.readMessage");
      badge("keyboard-badge", map.size === 0 ? "keyboard.empty" : "keyboard.received", map.size === 0 ? "amber" : "green");
      renderKeyboard();
    } catch (error) {
      state.keyboardError = errorInfo(error);
      badge("keyboard-badge", "keyboard.noAccess", "amber");
      setLocalizedText("keyboard-message", state.keyboardMap ? "keyboard.errorPreviousMessage" : "keyboard.errorMessage", { error: `${errorInfo(error).name}: ${errorInfo(error).message}` });
    } finally {
      state.keyboardPending = false;
      $("keyboard-button").disabled = false;
      setLocalizedText("keyboard-button", state.keyboardMap ? "keyboard.reread" : "keyboard.request");
      collectKeyboard();
      renderGroups();
    }
  }

  function initializeKeyboardInput() {
    const input = $("keyboard-input");
    input.addEventListener("keydown", (event) => {
      lastKeyboardEvent = { key: event.key, code: event.code, location: event.location, repeat: event.repeat, isComposing: event.isComposing, isTrusted: event.isTrusted };
      setText("event-key", event.key === " " ? '" "' : event.key);
      setText("event-code", event.code);
      setText("event-location", event.location);
      keyElements.get(event.code)?.classList.add("pressed");
    });
    input.addEventListener("keyup", (event) => { keyElements.get(event.code)?.classList.remove("pressed"); });
    input.addEventListener("blur", () => {
      keyElements.forEach((element) => element.classList.remove("pressed"));
      collectKeyboard();
      renderGroups();
    });
    if (navigator.keyboard?.addEventListener) {
      navigator.keyboard.addEventListener("layoutchange", (event) => {
        state.keyboardEvents.push({ timestamp: new Date().toISOString(), isTrusted: event.isTrusted });
        state.keyboardEvents = state.keyboardEvents.slice(-10);
        if (state.keyboardMap) {
          badge("keyboard-badge", "keyboard.changed", "amber");
          setLocalizedText("keyboard-message", "keyboard.changedMessage");
        }
        collectKeyboard();
        renderGroups();
      });
    }
  }

  function report() {
    // Live snapshots preserve independently timestamped geolocation and keyboard results.
    collectSnapshot();
    return {
      application: "meikaku",
      interfaceLanguage: state.uiLanguage,
      reference: "info.md — oboro 0.3.1",
      snapshotAt: state.snapshotAt,
      context: { protocol: location.protocol, secureContext: window.isSecureContext },
      geolocationReadAt: state.geoReceivedAt,
      keyboardReadAt: state.keyboardReadAt,
      note: "Readings from the current document. No claim about extension activation. Accept-Language is not measured.",
      groups: Object.fromEntries(state.groups),
    };
  }

  function exportReport() {
    const data = report();
    const blob = new Blob([JSON.stringify(data, jsonReplacer, 2)], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `meikaku-${data.snapshotAt.replace(/[:.]/g, "-")}.json`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 10000);
    toast("toast.download");
  }

  async function copyReport() {
    const text = JSON.stringify(report(), jsonReplacer, 2);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        const previousFocus = document.activeElement;
        textarea.value = text;
        textarea.readOnly = true;
        textarea.style.cssText = "position:fixed;left:-9999px;top:0;opacity:0";
        document.body.append(textarea);
        textarea.select();
        const copied = document.execCommand("copy");
        textarea.remove();
        previousFocus?.focus();
        if (!copied) throw new Error("Clipboard access is unavailable");
      }
      toast("toast.copied");
    } catch {
      toast("toast.copyError");
    }
  }

  function initializeTabs() {
    const tabs = [$("formats-tab"), $("options-tab")];
    function activate(tab) {
      for (const item of tabs) {
        const selected = item === tab;
        item.classList.toggle("active", selected);
        item.setAttribute("aria-selected", String(selected));
        item.tabIndex = selected ? 0 : -1;
        $(item.getAttribute("aria-controls")).hidden = !selected;
      }
    }
    for (const tab of tabs) {
      tab.addEventListener("click", () => activate(tab));
      tab.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
        event.preventDefault();
        const next = event.key === "Home" ? tabs[0] : event.key === "End" ? tabs[1] : tabs[1 - tabs.indexOf(tab)];
        activate(next);
        next.focus();
      });
    }
  }

  function initializeNavigation() {
    const links = Array.from(document.querySelectorAll(".nav-link"));
    const targets = links.map((link) => document.querySelector(link.getAttribute("href")));
    let scheduled = false;
    function highlight() {
      scheduled = false;
      let active = targets[0];
      let nearestTop = -Infinity;
      const threshold = window.innerWidth <= 760 ? 240 : 170;
      for (const target of targets) {
        const top = target.getBoundingClientRect().top;
        if (top <= threshold && top >= nearestTop) { nearestTop = top; active = target; }
      }
      links.forEach((link) => {
        const selected = link.getAttribute("href") === `#${active.id}`;
        link.classList.toggle("active", selected);
        if (selected) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }
    window.addEventListener("scroll", () => {
      if (!scheduled) { scheduled = true; requestAnimationFrame(highlight); }
    }, { passive: true });
    highlight();
  }

  function initializeTheme() {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    let preference = null;
    try { preference = localStorage.getItem("meikaku-theme"); } catch { /* Storage may be disabled. */ }
    function apply(theme) {
      document.documentElement.dataset.theme = theme;
      const dark = theme === "dark";
      $("theme-icon").setAttribute("href", dark ? "#i-sun" : "#i-moon");
      setLocalizedAttribute("theme-button", "aria-label", dark ? "theme.light" : "theme.dark");
      document.querySelector('meta[name="theme-color"]').content = dark ? "#151b1c" : "#f6f7f9";
    }
    apply(preference === "light" || preference === "dark" ? preference : media.matches ? "dark" : "light");
    $("theme-button").addEventListener("click", () => {
      preference = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      apply(preference);
      try { localStorage.setItem("meikaku-theme", preference); } catch { /* Theme still works without storage. */ }
    });
    media.addEventListener?.("change", (event) => { if (!preference) apply(event.matches ? "dark" : "light"); });
  }

  function checkGatedAPIs() {
    if (!navigator.geolocation || !window.isSecureContext) {
      $("geo-button").disabled = true;
      $("watch-button").disabled = true;
      badge("geo-badge", "common.apiUnavailable", "amber");
      setLocalizedText("geo-message", !window.isSecureContext ? "geo.secureRequired" : "geo.unsupported");
    }
    if (typeof navigator.keyboard?.getLayoutMap !== "function" || !window.isSecureContext) {
      $("keyboard-button").disabled = true;
      badge("keyboard-badge", "common.apiUnavailable", "amber");
      setLocalizedText("keyboard-name", "keyboard.unsupported");
      setLocalizedText("keyboard-message", "keyboard.unsupportedMessage");
    }
  }

  $("refresh-button").addEventListener("click", async () => {
    if (state.refreshPending) return;
    state.refreshPending = true;
    $("refresh-button").disabled = true;
    try {
      collectSnapshot();
      await readGeoPermission();
      toast("toast.refreshed");
    } finally {
      state.refreshPending = false;
      $("refresh-button").disabled = false;
    }
  });
  $("geo-button").addEventListener("click", requestPosition);
  $("watch-button").addEventListener("click", toggleWatch);
  $("keyboard-button").addEventListener("click", requestKeyboard);
  $("export-button").addEventListener("click", exportReport);
  $("copy-button").addEventListener("click", copyReport);

  window.addEventListener("pagehide", () => {
    const wasWatching = state.watchId !== null;
    stopWatch(false);
    state.geoRequestId++;
    setGeoPending(false);
    clearInterval(state.clockInterval);
    state.clockInterval = null;
    if (wasWatching) {
      badge("geo-badge", "geo.stopped");
      setLocalizedText("geo-message", "geo.pageHiddenMessage");
    }
  });
  window.addEventListener("pageshow", (event) => {
    if (!event.persisted) return;
    collectSnapshot();
    readGeoPermission();
    checkGatedAPIs();
    state.clockInterval = setInterval(updateClock, 1000);
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) updateClock(); });

  initializeLanguage();
  initializeTheme();
  initializeTabs();
  initializeNavigation();
  renderKeyboard();
  initializeKeyboardInput();
  collectSnapshot();
  checkGatedAPIs();
  readGeoPermission();
  state.clockInterval = setInterval(updateClock, 1000);
})();
