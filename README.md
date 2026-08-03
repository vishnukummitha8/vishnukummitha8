# DELMIA Apriso MES — Station 02 Dashboard

HTML/CSS recreation of the **Station 02 – Front Suspension Assembly** Manufacturing Execution System (MES) operator UI.

## Open the dashboard

Open this file in a browser:

```
mes-dashboard/index.html
```

Or serve locally:

```bash
cd mes-dashboard
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## What’s included

- Global header (DELMIA Apriso MES, station title, VIN, order, operator, live clock)
- Top status KPI cards (Station / Vehicle / Order / Variant / Cycle / OEE)
- Left column: Vehicle & Order Info, Component Verification, Quality Checklist
- Center column: Digital Work Instructions (steps + tabs), BOM Validation, Genealogy
- Right column: Torque Management, Equipment Status, Station Actions
- Footer KPIs, system integration bar, Andon status

## Files

| File | Purpose |
|------|---------|
| `mes-dashboard/index.html` | Markup & structure |
| `mes-dashboard/styles.css` | Layout & industrial theme |
| `mes-dashboard/app.js` | Tabs, steps, actions, clock, modals |
