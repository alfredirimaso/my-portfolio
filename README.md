# Irimaso Alfred — Portfolio

Simple static portfolio site built with HTML, CSS and JavaScript.

Files added:

- `index.html` — main site
- `css/styles.css` — styles
- `js/script.js` — small UI interactions

Images are referenced from the `assets/` folder. I used `assets/alllll.jpg` as the profile photo; replace with any other file from `assets/` if desired.

How to view locally:

1. Open `index.html` in a browser (double-click or right-click -> Open With).
2. For better behaviour with local fetches in some browsers, serve the folder with a simple HTTP server (Python):

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

Notes:
- The contact form uses a mailto fallback which opens the user's email client. Replace the placeholder email in `index.html` and `js/script.js` with a real address.
- The theme toggle stores preference in localStorage.
