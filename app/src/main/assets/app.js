diff --git a/app/src/main/assets/app.js b/app/src/main/assets/app.js
index 07751b02120b30f5750cb5babfe698c4370bf46e..7b772e909b81e43bd27236c2cb137091d797876f 100644
--- a/app/src/main/assets/app.js
+++ b/app/src/main/assets/app.js
@@ -1 +1,43 @@
-const body=document.body;const themeBtn=document.getElementById('themeBtn');const form=document.getElementById('searchForm');const input=document.getElementById('urlInput');if(localStorage.getItem('gainser-theme')==='dark')body.classList.add('dark');function icon(){themeBtn.textContent=body.classList.contains('dark')?'☀':'☾'}icon();themeBtn.onclick=()=>{body.classList.toggle('dark');localStorage.setItem('gainser-theme',body.classList.contains('dark')?'dark':'light');icon()};function openQuery(value){const q=value.trim();if(!q)return;const hasProtocol=/^https?:\/\//i.test(q);const looksLikeAddress=/^[^\s]+\.[^\s]+$/.test(q);const destination=hasProtocol?q:looksLikeAddress?`https://${q}`:`https://www.google.com/search?q=${encodeURIComponent(q)}`;window.location.assign(destination)}form.onsubmit=e=>{e.preventDefault();openQuery(input.value)};document.querySelectorAll('[data-url]').forEach(b=>b.onclick=()=>window.location.assign(b.dataset.url));
+const body = document.body;
+const themeBtn = document.getElementById('themeBtn');
+const form = document.getElementById('searchForm');
+const input = document.getElementById('urlInput');
+
+if (localStorage.getItem('gainser-theme') === 'dark') body.classList.add('dark');
+
+function updateThemeButton() {
+  const isDark = body.classList.contains('dark');
+  themeBtn.textContent = isDark ? '☀' : '☾';
+  themeBtn.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme');
+}
+
+updateThemeButton();
+themeBtn.addEventListener('click', () => {
+  body.classList.toggle('dark');
+  localStorage.setItem('gainser-theme', body.classList.contains('dark') ? 'dark' : 'light');
+  updateThemeButton();
+});
+
+function openQuery(value) {
+  const query = value.trim();
+  if (!query) return;
+
+  const hasProtocol = /^https?:\/\//i.test(query);
+  const looksLikeAddress = /^[^\s]+\.[^\s]+$/.test(query);
+  const destination = hasProtocol
+    ? query
+    : looksLikeAddress
+      ? `https://${query}`
+      : `https://www.google.com/search?q=${encodeURIComponent(query)}`;
+
+  window.location.assign(destination);
+}
+
+form.addEventListener('submit', event => {
+  event.preventDefault();
+  openQuery(input.value);
+});
+
+document.querySelectorAll('[data-url]').forEach(button => {
+  button.addEventListener('click', () => window.location.assign(button.dataset.url));
+});
