# vishnukummitha8

## Delmia Apriso MES – Station 02 Dashboard

A pixel-faithful HTML/CSS/JS recreation of the Delmia Apriso MES "Station 02 – Front Suspension Assembly" operator dashboard, including:

- Header bar with station, VIN, model/variant, sequence, shift, operator, and timestamp
- Station status strip (Station Status, Vehicle Status, Order Status, Variant Validation, Cycle Times, OEE)
- Vehicle & Order Information, Component Verification, and Quality Checklist panels
- Digital Work Instruction panel with clickable Step 1–5 tabs, labeled assembly diagram, zoom controls, safety instructions, and PDF/SOP, Part List, Torque Sheet, 3D View, and Video links
- Variant & BOM Validation and Genealogy (VIN Traceability) tables
- Torque Management panel with a torque sequence diagram and per-bolt torque table
- Equipment Status panel and Station Actions buttons (Start Job, Hold, Resume, Request Quality, Call Maintenance, Complete Station) with live status updates
- Station KPIs strip and a System Integration Status footer with Andon Status indicators

### Running locally

```bash
npm install
npm run dev
```

Then open the printed local URL (defaults to `http://localhost:5173`).

### Build

```bash
npm run build
npm run preview
```
