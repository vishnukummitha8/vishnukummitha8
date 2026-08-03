# DELMIA Apriso MES — Station Operator Dashboard (HTML + CSS)

A pixel-faithful, static recreation of the *Station 02 – Front Suspension Assembly* MES
operator screen. Built with **plain HTML and CSS only** — no JavaScript, no build step and
no external assets (icons and illustrations are inline SVG).

## Files

| Path | Purpose |
| --- | --- |
| `index.html` | Full dashboard markup plus the inline SVG icon sprite and the two technical illustrations. |
| `css/styles.css` | Complete stylesheet: design tokens, layout grids and every component style. |

## Run it

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8080
# then browse to http://localhost:8080/index.html
```

The board is designed for a 1920 × 1080 shop-floor display and fits without scrolling at
that size. Below 1440 px wide the columns stack so the screen stays readable.

## What is on the screen

1. **Header bar** — DELMIA Apriso branding, station name and task, production order, VIN,
   model/variant, sequence number, shift, operator card and the station clock.
2. **Status strip** — station status, vehicle status, order status, variant validation,
   target vs. actual cycle time and OEE.
3. **Left column** — vehicle & order information, component verification table (9 scanned
   parts) and the quality checklist with `VIEW INSPECTION` / `DEFECT LOG` actions.
4. **Centre column** — digital work instruction with `STEP 1`–`STEP 5` tabs, the exploded
   suspension illustration with callouts and zoom controls, safety instructions, and the
   `PDF / SOP`, `PART LIST`, `TORQUE SHEET`, `3D VIEW`, `VIDEO` buttons. Below it sit
   variant & BOM validation and VIN genealogy traceability.
5. **Right column** — torque management (tool status, torque sequence diagram, 8-step
   torque table with curve sparklines), equipment status tiles and the six station action
   buttons.
6. **Station KPIs** — cycle time, target, efficiency, OEE, FTR, good/reject/rework counts.
7. **Footer** — system integration status for the 8 connected systems and the Andon board.

## Implementation notes

- The `STEP 1`–`STEP 5` tabs are real, working tabs implemented with hidden radio inputs
  and `:checked` sibling selectors, so they switch instruction content without JavaScript.
- Column proportions (`--col-left`, `--col-center`, `--col-right`) and all colours live as
  custom properties at the top of `css/styles.css`, so the theme can be retargeted from one
  place.
- Every icon is an SVG `<symbol>` referenced through `<use>`; the suspension exploded view
  and the torque sequence map are hand-drawn inline SVG.
- All values are static sample data — wire the markup to live MES data as needed.
