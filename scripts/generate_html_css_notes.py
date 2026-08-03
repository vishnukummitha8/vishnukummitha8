"""Generate HTML and CSS Basic Notes Word document."""

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt, RGBColor
from pathlib import Path


def add_code_block(doc, code: str):
    p = doc.add_paragraph()
    run = p.add_run(code)
    run.font.name = "Consolas"
    run.font.size = Pt(9)
    run.font.color.rgb = RGBColor(0x2D, 0x2D, 0x2D)
    p.paragraph_format.left_indent = Inches(0.25)
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(8)
    shading = p._element.get_or_add_pPr()
    from docx.oxml.ns import qn
    from docx.oxml import OxmlElement
    shd = OxmlElement("w:shd")
    shd.set(qn("w:fill"), "F5F5F5")
    shading.append(shd)


def build_document() -> Document:
    doc = Document()

    # Title
    title = doc.add_heading("HTML and CSS Basic Notes", level=0)
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    doc.add_paragraph(
        "A beginner-friendly guide to building web pages with HTML and CSS."
    ).alignment = WD_ALIGN_PARAGRAPH.CENTER

    # --- HTML SECTION ---
    doc.add_heading("Part 1: HTML Basics", level=1)

    doc.add_heading("What is HTML?", level=2)
    doc.add_paragraph(
        "HTML (HyperText Markup Language) is the standard language for creating web pages. "
        "It uses tags to structure content such as headings, paragraphs, links, images, and lists. "
        "HTML describes what content appears on a page; it does not control visual styling (that is CSS)."
    )

    doc.add_heading("Basic HTML Document Structure", level=2)
    add_code_block(
        doc,
        """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
  </head>
  <body>
    <!-- Page content goes here -->
  </body>
</html>""",
    )
    doc.add_paragraph(
        "DOCTYPE tells the browser to use HTML5. The <head> contains metadata; "
        "the <body> contains visible content."
    )

    doc.add_heading("Common HTML Tags", level=2)
    table = doc.add_table(rows=1, cols=3)
    table.style = "Table Grid"
    hdr = table.rows[0].cells
    hdr[0].text = "Tag"
    hdr[1].text = "Purpose"
    hdr[2].text = "Example"
    rows = [
        ("<h1> to <h6>", "Headings (h1 largest)", "<h1>Main Title</h1>"),
        ("<p>", "Paragraph", "<p>Hello world</p>"),
        ("<a>", "Hyperlink", "<a href=\"url\">Link</a>"),
        ("<img>", "Image", "<img src=\"pic.jpg\" alt=\"desc\">"),
        ("<ul>, <ol>, <li>", "Lists", "<ul><li>Item</li></ul>"),
        ("<div>", "Block container", "<div>Section</div>"),
        ("<span>", "Inline container", "<span>text</span>"),
        ("<br>", "Line break", "<br>"),
        ("<hr>", "Horizontal rule", "<hr>"),
        ("<strong>, <em>", "Bold and emphasis", "<strong>Bold</strong>"),
        ("<table>", "Table", "<table><tr><td>Cell</td></tr></table>"),
        ("<form>", "Form", "<form><input type=\"text\"></form>"),
        ("<button>", "Button", "<button>Click</button>"),
        ("<header>, <footer>", "Page sections", "<header>Top</header>"),
        ("<nav>, <main>, <section>", "Semantic layout", "<nav>Menu</nav>"),
    ]
    for tag, purpose, example in rows:
        row = table.add_row().cells
        row[0].text = tag
        row[1].text = purpose
        row[2].text = example

    doc.add_heading("HTML Attributes", level=2)
    doc.add_paragraph(
        "Attributes provide extra information about elements. They appear inside the opening tag."
    )
    add_code_block(
        doc,
        """<a href="https://example.com" target="_blank">Visit site</a>
<img src="photo.png" alt="A photo" width="300">
<input type="email" placeholder="Enter email" required>
<div id="main" class="container">Content</div>""",
    )
    doc.add_paragraph(
        "Common attributes: id (unique identifier), class (reusable style hook), "
        "href (link URL), src (image/script source), alt (image description), "
        "type (input type), placeholder, required."
    )

    doc.add_heading("Forms Basics", level=2)
    add_code_block(
        doc,
        """<form action="/submit" method="post">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email">

  <label for="msg">Message:</label>
  <textarea id="msg" name="message" rows="4"></textarea>

  <button type="submit">Send</button>
</form>""",
    )

    doc.add_heading("Semantic HTML", level=2)
    doc.add_paragraph(
        "Semantic tags describe the meaning of content, which helps accessibility and SEO:"
    )
    for item in [
        "<header> — top of page or section",
        "<nav> — navigation links",
        "<main> — primary content (one per page)",
        "<section> — thematic grouping",
        "<article> — self-contained content (blog post, card)",
        "<aside> — sidebar or related content",
        "<footer> — bottom of page or section",
    ]:
        doc.add_paragraph(item, style="List Bullet")

    # --- CSS SECTION ---
    doc.add_heading("Part 2: CSS Basics", level=1)

    doc.add_heading("What is CSS?", level=2)
    doc.add_paragraph(
        "CSS (Cascading Style Sheets) controls how HTML elements look: colors, fonts, spacing, "
        "layout, and animations. CSS separates presentation from content."
    )

    doc.add_heading("Three Ways to Add CSS", level=2)
    doc.add_paragraph("1. Inline (inside an element):", style="List Number")
    add_code_block(doc, "<p style=\"color: blue;\">Blue text</p>")
    doc.add_paragraph("2. Internal (in <head>):", style="List Number")
    add_code_block(
        doc,
        """<style>
  p { color: blue; }
</style>""",
    )
    doc.add_paragraph("3. External (recommended):", style="List Number")
    add_code_block(
        doc,
        """<link rel="stylesheet" href="styles.css">""",
    )

    doc.add_heading("CSS Syntax", level=2)
    add_code_block(
        doc,
        """selector {
  property: value;
  another-property: value;
}""",
    )
    doc.add_paragraph(
        "Example: p { color: red; font-size: 16px; } styles all paragraph elements."
    )

    doc.add_heading("CSS Selectors", level=2)
    sel_table = doc.add_table(rows=1, cols=3)
    sel_table.style = "Table Grid"
    sh = sel_table.rows[0].cells
    sh[0].text = "Selector"
    sh[1].text = "Syntax"
    sh[2].text = "Targets"
    selectors = [
        ("Element", "p", "All <p> elements"),
        ("Class", ".classname", "Elements with class=\"classname\""),
        ("ID", "#myid", "Element with id=\"myid\""),
        ("Descendant", "div p", "<p> inside <div>"),
        ("Child", "div > p", "Direct child <p> of <div>"),
        ("Multiple", "h1, h2", "All h1 and h2"),
        ("Pseudo-class", "a:hover", "Links on hover"),
        ("Attribute", "input[type=\"text\"]", "Text inputs"),
    ]
    for name, syntax, targets in selectors:
        r = sel_table.add_row().cells
        r[0].text = name
        r[1].text = syntax
        r[2].text = targets

    doc.add_heading("Common CSS Properties", level=2)

    doc.add_heading("Text & Font", level=3)
    add_code_block(
        doc,
        """color: #333;
font-family: Arial, sans-serif;
font-size: 16px;
font-weight: bold;       /* normal | bold | 100-900 */
font-style: italic;
text-align: center;      /* left | center | right */
text-decoration: underline;
line-height: 1.5;
letter-spacing: 1px;""",
    )

    doc.add_heading("Box Model", level=3)
    doc.add_paragraph(
        "Every element is a box with: content → padding → border → margin (inside to outside)."
    )
    add_code_block(
        doc,
        """width: 300px;
height: 200px;
padding: 20px;           /* space inside border */
margin: 10px auto;       /* space outside; auto centers block */
border: 2px solid #ccc;
border-radius: 8px;     /* rounded corners */
box-sizing: border-box; /* width includes padding and border */""",
    )

    doc.add_heading("Background", level=3)
    add_code_block(
        doc,
        """background-color: #f0f0f0;
background-image: url('bg.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;""",
    )

    doc.add_heading("Display & Layout", level=3)
    add_code_block(
        doc,
        """display: block;        /* full width, new line */
display: inline;        /* no width/height, flows with text */
display: inline-block;
display: flex;          /* modern layout */
display: grid;          /* grid layout */
visibility: hidden;    /* hidden but keeps space */""",
    )

    doc.add_heading("Flexbox Basics", level=3)
    doc.add_paragraph("Flexbox arranges items in a row or column easily:")
    add_code_block(
        doc,
        """.container {
  display: flex;
  flex-direction: row;    /* row | column */
  justify-content: center; /* main axis alignment */
  align-items: center;      /* cross axis alignment */
  gap: 16px;
}

.item {
  flex: 1;               /* grow to fill space */
}""",
    )

    doc.add_heading("Grid Basics", level=3)
    add_code_block(
        doc,
        """.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;  /* 3 equal columns */
  gap: 20px;
}

/* Responsive: 1 column on small screens */
@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}""",
    )

    doc.add_heading("Positioning", level=3)
    add_code_block(
        doc,
        """position: static;   /* default */
position: relative; /* offset from normal position */
position: absolute; /* relative to nearest positioned parent */
position: fixed;    /* relative to viewport */
position: sticky;   /* sticks while scrolling

top: 10px;
right: 0;
z-index: 10;        /* stacking order */""",
    )

    doc.add_heading("Colors in CSS", level=3)
    add_code_block(
        doc,
        """color: red;
color: #ff0000;
color: rgb(255, 0, 0);
color: rgba(255, 0, 0, 0.5);  /* with transparency */
color: hsl(0, 100%, 50%);""",
    )

    doc.add_heading("Units", level=3)
    doc.add_paragraph("px — pixels (fixed)", style="List Bullet")
    doc.add_paragraph("% — percentage of parent", style="List Bullet")
    doc.add_paragraph("em — relative to element font size", style="List Bullet")
    doc.add_paragraph("rem — relative to root (html) font size", style="List Bullet")
    doc.add_paragraph("vw / vh — viewport width / height", style="List Bullet")

    doc.add_heading("Pseudo-classes & Pseudo-elements", level=3)
    add_code_block(
        doc,
        """a:hover { color: red; }
a:active { color: darkred; }
input:focus { outline: 2px solid blue; }
li:first-child { font-weight: bold; }
p::before { content: "→ "; }
p::after { content: " ✓"; }""",
    )

    doc.add_heading("Transitions & Animations", level=3)
    add_code_block(
        doc,
        """button {
  transition: background-color 0.3s ease;
}
button:hover {
  background-color: #0056b3;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
.fade {
  animation: fadeIn 1s ease-in-out;
}""",
    )

    doc.add_heading("Complete Example", level=2)
    add_code_block(
        doc,
        """<!-- HTML -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="header">
    <h1>Welcome</h1>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
    </nav>
  </header>
  <main class="container">
  <section class="card">
    <h2>About Us</h2>
    <p>We build great websites.</p>
  </section>
  </main>
  <footer class="footer">
    <p>&copy; 2026 My Site</p>
  </footer>
</body>
</html>""",
    )
    add_code_block(
        doc,
        """/* style.css */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

.header {
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
}

.container {
  max-width: 960px;
  margin: 2rem auto;
  padding: 0 1rem;
}

.card {
  background: #f8f9fa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.footer {
  text-align: center;
  padding: 1rem;
  background: #ecf0f1;
}""",
    )

    doc.add_heading("Best Practices", level=2)
    for tip in [
        "Use semantic HTML tags for structure and accessibility.",
        "Keep CSS in external files for maintainability.",
        "Use class names that describe purpose, not appearance (e.g. .card not .blue-box).",
        "Always include alt text on images.",
        "Use responsive units (rem, %, vw) where possible.",
        "Test on different screen sizes (mobile-first design).",
        "Validate HTML and CSS using browser dev tools or online validators.",
        "Comment your code for complex sections.",
    ]:
        doc.add_paragraph(tip, style="List Bullet")

    doc.add_heading("Quick Reference Cheat Sheet", level=2)
    cheat = doc.add_table(rows=1, cols=2)
    cheat.style = "Table Grid"
    ch = cheat.rows[0].cells
    ch[0].text = "HTML"
    ch[1].text = "CSS"
    cheat_rows = [
        ("<div> block container", "display: flex"),
        ("<span> inline", "margin, padding"),
        ("<a href>", "color, text-decoration"),
        ("<img src alt>", "width, height, object-fit"),
        ("<ul><li>", "list-style"),
        ("<table>", "border-collapse"),
        ("<form><input>", ":focus, :hover"),
        ("id, class", "#id, .class selectors"),
    ]
    for html, css in cheat_rows:
        cr = cheat.add_row().cells
        cr[0].text = html
        cr[1].text = css

    doc.add_paragraph()
    p = doc.add_paragraph("— End of Notes —")
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER

    return doc


def main():
    out_dir = Path(__file__).resolve().parent.parent / "docs"
    out_dir.mkdir(exist_ok=True)
    out_path = out_dir / "HTML_and_CSS_Basic_Notes.docx"
    doc = build_document()
    doc.save(str(out_path))
    print(f"Created: {out_path}")


if __name__ == "__main__":
    main()
