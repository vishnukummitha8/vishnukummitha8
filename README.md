# JSW Motors MES — Login Page

A pixel-faithful recreation of the **JSW Motors — Manufacturing Execution System (MES)** login screen, built with plain HTML, CSS and JavaScript (no build step required).

## Preview

Open `index.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Structure

```
.
├── index.html        # Page markup
├── styles.css         # All styling (layout, theme, responsive rules)
├── script.js          # Password show/hide toggle, form validation, footer year
├── assets/
│   ├── factory-background.png   # Hero background (automotive assembly line)
│   └── jsw-motors-logo.png      # JSW Motors logo
└── README.md
```

## Features implemented

- Split hero/login layout with the JSW Motors corner ribbon logo.
- Left hero panel: factory background image, "Driving Tomorrow. Building Excellence Today." headline, sub-copy, and the four feature cards (Production Management, Quality Management, Performance Dashboards, Traceability & Reporting).
- Right login card: JSW Motors logo + "Better Everyday" tagline, "MES / MANUFACTURING EXECUTION SYSTEM" title, Username field, Password field with show/hide toggle, Select Plant dropdown, LOGIN button, "Remember me" checkbox and "Forgot Password?" link.
- "Innovate. Integrate. Inspire the Future." banner beneath the login card.
- Footer bar with "One Plant. One Process. One System." tagline, Secure Access / Real-time Data / Connected Operations badges, and a dynamic copyright year.
- Fully responsive layout (stacks vertically on tablet/mobile breakpoints).
- Client-side form validation and a simulated login flow (no backend attached).

## Notes

- Icons are provided by [Font Awesome](https://fontawesome.com/) (loaded via CDN).
- The background photo and logo in `assets/` are AI-generated placeholders styled after the reference design; swap them out with the official brand assets if available.
