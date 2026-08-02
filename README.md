# JSW Motors — MES Login Page

A pixel-focused recreation of the JSW Motors **Manufacturing Execution System (MES)** login page, built with plain HTML, CSS, and JavaScript — no build step or dependencies required.

## Features

- **Hero section** over an automotive assembly-line background with the headline *"Driving Tomorrow. Building Excellence Today."*
- **Four feature cards**: Production Management, Quality Management, Performance Dashboards, and Traceability & Reporting.
- **Login card** with username, password (show/hide toggle), plant selector, Remember me (persists username/plant in `localStorage`), and Forgot Password.
- **Branded blue panel** with a line-art city/car/wind-turbine illustration and the motto *"Innovate. Integrate. Inspire the Future."*
- **Footer** with *"One Plant. One Process. One System."*, trust badges (Secure Access, Real-time Data, Connected Operations), and copyright.
- Fully **responsive** down to mobile widths.

## Running

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Structure

```
index.html        # Page markup
css/styles.css    # All styling
js/script.js      # Password toggle, validation, remember-me, simulated login
assets/           # Background image and JSW Motors logo (SVG)
```
