# meikaku

README language: [Русский](README.md) | **English**

A browser environment inspector built with plain HTML, CSS and JavaScript. No frameworks, packages or build step are required.

[Open the website](https://tsukuyomi-vibe.github.io/meikaku/)

## Run

Serve this directory with a local static HTTP server and open its URL, or deploy the three application files to an HTTPS host:

- `index.html` — page structure and English fallback text.
- `styles.css` — responsive layout and light/dark themes.
- `script.js` — browser API checks, English/Russian translations and JSON reports.

For example, if Python 3 is installed, run this command from the project directory:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

Open `http://127.0.0.1:4173/`. Opening `index.html` directly can display basic readings, but HTTP/HTTPS site rules and browser permissions may require a server. Use localhost or HTTPS when checking the extension.

`info.md` is a local reference, excluded by `.gitignore`. The application does not load it at runtime, so it is not required for deployment. Do not put secrets in a publicly served directory.

## GitHub Pages

The public site is at [tsukuyomi-vibe.github.io/meikaku](https://tsukuyomi-vibe.github.io/meikaku/).

The project source is kept on `main`. GitHub Pages publishes the root of `gh-pages`, containing only `index.html`, `styles.css`, `script.js` and an empty `.nojekyll` file. Local reference files and exported reports are not included in the published site.

## Interface language

English is the default on the first visit, including when the browser's preferred language is Russian. Select **Русский** in the header to switch to Russian, or **English** to switch back. The interface updates without reloading the page.

The choice is stored locally under `meikaku-language`, with the value `en` or `ru`, and restored on later visits to the same origin. If storage is unavailable, language switching still works in the current tab; the next visit starts in English. Removing the preference restores the English default. Theme preferences use a separate `meikaku-theme` key.

The language selector changes interface text, accessibility labels, status messages and application-generated errors. It does not change `navigator.language`, `navigator.languages`, the default `Intl` locale, time zone, keyboard map or other browser readings. Diagnostic date/number examples, native browser error messages and actual key characters retain the values returned by the browser, so Russian text can legitimately appear in a reading while the interface is English.

Translation dictionaries are in `messages.en` and `messages.ru` in `script.js`. Static elements use `data-i18n` attributes. Dynamic UI messages use translation keys and parameters, allowing their current state to update when the interface language changes. Keep the same keys and `{parameter}` placeholders in both dictionaries when editing translations.

## Available checks

- Geolocation: latitude, longitude, accuracy, altitude, altitude accuracy, speed and heading. Request a position or start/stop watching with the corresponding buttons.
- Browser language preferences and the independent date/number formatting locale.
- `Intl` formatting, comparison, plural, list, display-name, segmentation and duration APIs when available.
- Local `Date` fields, UTC values, date construction, setters and available `Temporal.Now` methods.
- Keyboard Layout Map API, map iteration and a dedicated input test field.
- Browser API availability, secure context and geolocation permission state.

Missing APIs and denied permissions are reported explicitly. The application does not add polyfills or invent replacement readings. Matching values alone do not prove that the extension is active.

The actual `Accept-Language` request header must be checked by the server receiving the request. This static application marks it as unverified and does not call an external echo service.

## Reports and privacy

**Download report** creates a local JSON file. **Copy JSON** writes the same report structure to the clipboard. Report field names, API identifiers and application-generated diagnostic messages use English; `interfaceLanguage` records the selected interface language. Actual browser values and native errors are preserved.

The report includes the latest snapshot and separately timestamped location and keyboard results. It can contain precise coordinates if you requested location access, plus the last key event from the input test field. Review reports before sharing them.

There are no analytics, external fonts, third-party scripts or automatic uploads. Readings remain in the current tab until the user exports or copies them. Exported reports, secrets, local settings and temporary files are excluded by `.gitignore`.
