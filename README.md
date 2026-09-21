# Gainser

Gainser is a lightweight brown-themed Android browser interface built with a native Android WebView and bundled HTML/CSS/JavaScript.

## Features

- Brown-themed responsive start page
- Search or enter a web address
- Quick links for common sites
- Light/dark theme with local persistence
- Android WebView JavaScript and DOM storage support
- Android back-button navigation
- Minimal native Android shell

## Build

Open this repository in Android Studio with Android SDK Platform 35 installed.

For command-line builds, use Gradle 8.7:

```bash
gradle :app:assembleDebug
```

Debug APK output: `app/build/outputs/apk/debug/app-debug.apk`.

GitHub Actions builds the debug APK on every push to `main` and uploads it as an artifact.
