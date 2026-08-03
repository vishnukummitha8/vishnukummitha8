# HTML & CSS Basic Notes

A beginner-friendly study guide covering the fundamentals of web page structure and styling, with examples, cheat sheets, and practice exercises.

[TOC]

## Part 1 - Getting Started

### 1.1 What Are HTML and CSS?

Every web page you visit is built from a small set of technologies that each do one job.

- **HTML (HyperText Markup Language)** provides the *structure* and *content* of a page: headings, paragraphs, images, links, forms. HTML is not a programming language; it is a markup language that labels each piece of content so the browser knows what it is.
- **CSS (Cascading Style Sheets)** provides the *presentation*: colours, fonts, spacing, borders, and layout. CSS decides how the HTML looks on screen.
- **JavaScript** adds *behaviour* and interactivity. It is a separate topic, but it is worth knowing where it fits.

A common analogy for a house:

| Technology | Role in the analogy | Role on a web page |
| --- | --- | --- |
| HTML | Walls, rooms, doors | Structure and content |
| CSS | Paint, tiles, furniture | Appearance and layout |
| JavaScript | Electricity, plumbing | Behaviour and interactivity |

> Key idea: keep structure (HTML) and style (CSS) separate. This makes a site easier to read, reuse, and maintain.

### 1.2 How a Web Page Is Displayed

1. You type an address, and the browser requests a file from a web server.
2. The server sends back an HTML document.
3. The browser parses the HTML into a tree of nodes called the **DOM** (Document Object Model).
4. While parsing, the browser finds links to CSS, images, fonts, and scripts, and downloads them too.
5. The browser applies the CSS rules to the DOM, calculates the position and size of every box, and paints pixels on the screen.

You do not need a server to learn: a `.html` file opened directly from your computer works fine.

### 1.3 Tools You Need

- **A text editor.** Visual Studio Code is the usual choice. Install the *Live Server* extension so the page reloads automatically when you save.
- **A browser.** Chrome, Firefox, or Edge. Press `F12` (or `Ctrl` + `Shift` + `I`) to open **DevTools**, where you can inspect any element and see exactly which CSS rules apply to it.
- **Nothing else.** No compiler, no build tool, no framework is required for the basics.

### 1.4 Your First Page

Create a folder, add a file named `index.html`, paste the code below, and open it in a browser.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Page</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 40px; }
    h1   { color: #1d4ed8; }
  </style>
</head>
<body>
  <h1>Hello, world!</h1>
  <p>This is my first web page.</p>
</body>
</html>
```

Change the text, save the file, and refresh the browser. That edit-save-refresh loop is the whole workflow.

> Tip: use DevTools to experiment. Any change you make there is temporary and disappears on refresh, so you can try things without breaking your file.

## Part 2 - HTML Basics

### 2.1 The Structure of an HTML Document

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="A short summary shown in search results.">
  <title>Page Title - shown in the browser tab</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Everything the visitor sees goes here -->
  <h1>Visible heading</h1>
  <script src="js/main.js"></script>
</body>
</html>
```

| Part | Purpose |
| --- | --- |
| `<!DOCTYPE html>` | Tells the browser to use modern (HTML5) rules. Always the first line. |
| `<html lang="en">` | The root element. `lang` helps screen readers and translation tools. |
| `<head>` | Information *about* the page: title, character set, stylesheets, metadata. Not displayed. |
| `<meta charset="UTF-8">` | Lets the page display any character or symbol correctly. |
| `<meta name="viewport" ...>` | Required for a page to scale properly on phones. |
| `<title>` | Text in the browser tab and in search results. |
| `<link rel="stylesheet">` | Attaches an external CSS file. |
| `<body>` | All visible content. |

### 2.2 Elements, Tags, and Attributes

An **element** is usually made of an opening tag, some content, and a closing tag:

```html
<p class="intro">This is a paragraph.</p>
```

- `<p>` is the **opening tag**, `</p>` is the **closing tag**.
- `class="intro"` is an **attribute**: extra information written as `name="value"` inside the opening tag.
- Some elements have no content and no closing tag. These are **empty** (or void) elements: `<br>`, `<hr>`, `<img>`, `<input>`, `<meta>`, `<link>`.

Elements can be **nested** inside one another, and they must be closed in the reverse order they were opened:

```html
<!-- Correct -->
<p>Learning <strong>HTML</strong> is fun.</p>

<!-- Wrong: tags overlap -->
<p>Learning <strong>HTML</p></strong>
```

Attributes that appear on almost any element:

| Attribute | Meaning |
| --- | --- |
| `id` | A unique name for one element. Used for links and CSS/JS targeting. |
| `class` | A reusable label; many elements can share the same class. |
| `style` | Inline CSS for that single element. Use sparingly. |
| `title` | Tooltip text shown on hover. |
| `hidden` | Hides the element completely. |
| `data-*` | Custom data, for example `data-user-id="42"`. |

### 2.3 Comments

```html
<!-- This note is invisible on the page but visible in the source. -->
```

Use comments to explain non-obvious markup or to temporarily disable a block while testing.

### 2.4 Headings and Text

```html
<h1>Main title - one per page</h1>
<h2>Section</h2>
<h3>Sub-section</h3>
<h4>Smaller</h4>
<h5>Smaller still</h5>
<h6>Smallest</h6>

<p>A paragraph of text. Browsers add space above and below it.</p>
<p>Line one<br>Line two, after a manual line break.</p>
<hr>

<strong>Important</strong> and <em>emphasised</em> text.
<b>Bold look</b> and <i>italic look</i> with no added meaning.
<mark>Highlighted</mark>, <small>fine print</small>.
<del>Removed text</del> and <ins>inserted text</ins>.
H<sub>2</sub>O and E = mc<sup>2</sup>.
<blockquote cite="https://example.com">A longer quotation.</blockquote>
<p>She said <q>a short quote</q> and left.</p>
<pre>  Pre-formatted text
  keeps    spaces and line breaks.</pre>
<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save.</p>
<p>Use the <code>console.log()</code> function.</p>
<address>Written by Vishnu, Chennai.</address>
```

Use headings in order (`h1`, then `h2`, then `h3`) to describe the outline of your content, never to make text bigger. Sizing is CSS's job.

> `<strong>` and `<em>` carry meaning that screen readers announce; `<b>` and `<i>` only change appearance. Prefer `<strong>` and `<em>`.

### 2.5 Lists

```html
<!-- Unordered: order does not matter -->
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<!-- Ordered: sequence matters -->
<ol start="1" type="1">
  <li>Install an editor</li>
  <li>Create index.html</li>
  <li>Open it in a browser</li>
</ol>

<!-- Nested list -->
<ul>
  <li>Front-end
    <ul>
      <li>HTML</li>
      <li>CSS</li>
    </ul>
  </li>
  <li>Back-end</li>
</ul>

<!-- Description list: term and definition pairs -->
<dl>
  <dt>HTML</dt>
  <dd>Defines the structure of a page.</dd>
  <dt>CSS</dt>
  <dd>Defines the presentation of a page.</dd>
</dl>
```

A `<li>` must be a direct child of `<ul>` or `<ol>`. Nested lists go *inside* an `<li>`, as shown above.

### 2.6 Links

```html
<a href="https://developer.mozilla.org">External site</a>
<a href="about.html">Another page in the same folder</a>
<a href="pages/contact.html">A page in a sub-folder</a>
<a href="../index.html">Up one folder</a>
<a href="#section-3">Jump to id="section-3" on this page</a>
<a href="mailto:hello@example.com">Send an email</a>
<a href="tel:+919876543210">Call this number</a>
<a href="report.pdf" download>Download a file</a>
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  Open in a new tab
</a>
```

- **Absolute URL**: the full address, including `https://`. Used for other websites.
- **Relative URL**: a path relative to the current file. Used inside your own site.
- Add `rel="noopener noreferrer"` whenever you use `target="_blank"`; it closes a security and performance loophole.
- Write meaningful link text. "Read the CSS guide" is helpful; "click here" is not.

### 2.7 Images and Media

```html
<img src="images/logo.png" alt="Company logo" width="200" height="80">

<figure>
  <img src="images/chart.png" alt="Sales rose 20% in 2025">
  <figcaption>Figure 1: Annual sales growth.</figcaption>
</figure>

<video src="clip.mp4" controls width="480" poster="thumb.jpg">
  Your browser does not support video.
</video>

<audio src="song.mp3" controls></audio>

<iframe src="https://example.com" title="Embedded page"
        width="600" height="400"></iframe>
```

| Attribute | Purpose |
| --- | --- |
| `src` | Path or URL of the image file. Required. |
| `alt` | Text description read by screen readers and shown if the image fails to load. Required. |
| `width` / `height` | Intrinsic size in pixels; setting both prevents the page from jumping while loading. |
| `loading="lazy"` | Delays loading of off-screen images. |

Use an empty `alt=""` only for purely decorative images. Never omit the attribute.

Common formats: **JPG** for photos, **PNG** for images needing transparency, **SVG** for icons and logos that must stay sharp at any size, **WebP** for smaller files with good quality.

### 2.8 Tables

Tables are for tabular data - rows and columns of related values - not for page layout.

```html
<table>
  <caption>Marks obtained</caption>
  <thead>
    <tr>
      <th scope="col">Subject</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">HTML</th>
      <td>92</td>
    </tr>
    <tr>
      <th scope="row">CSS</th>
      <td>88</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Total</td>
      <td>180</td>
    </tr>
  </tfoot>
</table>
```

| Element / attribute | Meaning |
| --- | --- |
| `<table>` | The table itself. |
| `<caption>` | A title for the table. |
| `<thead>`, `<tbody>`, `<tfoot>` | Header, body, and footer row groups. |
| `<tr>` | Table row. |
| `<th>` | Header cell; bold and centred by default. |
| `<td>` | Data cell. |
| `colspan="2"` | Makes a cell span two columns. |
| `rowspan="2"` | Makes a cell span two rows. |
| `scope="col"` / `scope="row"` | Tells screen readers what a header describes. |

### 2.9 Forms and Inputs

A form collects data from the user and sends it somewhere.

```html
<form action="/submit" method="post">
  <label for="name">Full name</label>
  <input type="text" id="name" name="name" placeholder="Vishnu" required>

  <label for="email">Email</label>
  <input type="email" id="email" name="email" required>

  <label for="pwd">Password</label>
  <input type="password" id="pwd" name="pwd" minlength="8" required>

  <label for="age">Age</label>
  <input type="number" id="age" name="age" min="1" max="120">

  <fieldset>
    <legend>Preferred contact</legend>
    <input type="radio" id="byEmail" name="contact" value="email" checked>
    <label for="byEmail">Email</label>
    <input type="radio" id="byPhone" name="contact" value="phone">
    <label for="byPhone">Phone</label>
  </fieldset>

  <input type="checkbox" id="terms" name="terms" required>
  <label for="terms">I accept the terms</label>

  <label for="city">City</label>
  <select id="city" name="city">
    <option value="">-- Choose --</option>
    <option value="chennai" selected>Chennai</option>
    <option value="mumbai">Mumbai</option>
  </select>

  <label for="msg">Message</label>
  <textarea id="msg" name="msg" rows="4" cols="30"></textarea>

  <button type="submit">Send</button>
  <button type="reset">Clear</button>
</form>
```

Rules worth memorising:

- Every input needs a `name`, otherwise its value is never submitted.
- Pair every input with a `<label for="...">` that matches the input's `id`. Clicking the label then focuses the input, and screen readers announce it correctly.
- `method="get"` puts the data in the URL (searches); `method="post"` sends it in the request body (logins, anything private).

Useful input types: `text`, `email`, `password`, `number`, `tel`, `url`, `search`, `date`, `time`, `color`, `range`, `file`, `checkbox`, `radio`, `hidden`, `submit`.

Useful attributes: `required`, `placeholder`, `value`, `disabled`, `readonly`, `checked`, `min`, `max`, `step`, `maxlength`, `minlength`, `pattern`, `autocomplete`, `autofocus`, `multiple`.

### 2.10 Semantic HTML and Page Layout

Semantic elements describe the *meaning* of a region instead of just grouping it. They improve accessibility and search engine understanding, and they make your code readable.

```html
<body>
  <header>
    <h1>My Site</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/blog">Blog</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>Blog post title</h2>
      <p>Post content...</p>
    </article>

    <section>
      <h2>Related topics</h2>
      <p>...</p>
    </section>

    <aside>
      <h2>About the author</h2>
      <p>Side content, loosely related.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2026 My Site</p>
  </footer>
</body>
```

| Element | Use it for |
| --- | --- |
| `<header>` | Introductory content of a page or a section. |
| `<nav>` | A block of navigation links. |
| `<main>` | The primary content. Only one per page. |
| `<article>` | Self-contained content that would make sense on its own (a post, a news item, a product card). |
| `<section>` | A thematic grouping, normally with its own heading. |
| `<aside>` | Sidebars, related links, pull quotes. |
| `<footer>` | Closing information: copyright, contact, links. |
| `<figure>` / `<figcaption>` | An image, diagram, or code sample with a caption. |
| `<details>` / `<summary>` | A native expand-and-collapse widget. |
| `<time datetime="2026-08-03">` | A machine-readable date or time. |

### 2.11 Block vs Inline, `div` and `span`

- A **block-level** element starts on a new line and takes the full available width: `div`, `p`, `h1`-`h6`, `ul`, `li`, `section`, `form`.
- An **inline** element flows within a line of text and is only as wide as its content: `span`, `a`, `strong`, `em`, `img`, `input`, `label`.

`<div>` (block) and `<span>` (inline) have no meaning at all. They are generic containers used purely for styling or scripting when no semantic element fits.

```html
<div class="card">
  <p>Price: <span class="currency">Rs.</span>499</p>
</div>
```

> Reach for a semantic element first. Use `div` and `span` only when nothing more descriptive applies.

### 2.12 Entities and Special Characters

Certain characters have meaning in HTML and must be escaped.

| You want | Write | Name |
| --- | --- | --- |
| `<` | `&lt;` | Less than |
| `>` | `&gt;` | Greater than |
| `&` | `&amp;` | Ampersand |
| `"` | `&quot;` | Double quote |
| a fixed space | `&nbsp;` | Non-breaking space |
| c | `&copy;` | Copyright |
| R | `&reg;` | Registered |
| - | `&mdash;` | Em dash |

### 2.13 HTML Tag Cheat Sheet

| Tag | What it does |
| --- | --- |
| `<html>` `<head>` `<body>` | Document skeleton |
| `<title>` `<meta>` `<link>` `<style>` `<script>` | Head contents |
| `<h1>` ... `<h6>` | Headings |
| `<p>` `<br>` `<hr>` `<pre>` | Text blocks |
| `<strong>` `<em>` `<mark>` `<small>` `<sub>` `<sup>` | Inline text meaning |
| `<ul>` `<ol>` `<li>` `<dl>` `<dt>` `<dd>` | Lists |
| `<a>` | Links |
| `<img>` `<figure>` `<figcaption>` `<video>` `<audio>` | Media |
| `<table>` `<tr>` `<th>` `<td>` `<thead>` `<tbody>` | Tables |
| `<form>` `<input>` `<label>` `<select>` `<option>` `<textarea>` `<button>` | Forms |
| `<header>` `<nav>` `<main>` `<section>` `<article>` `<aside>` `<footer>` | Layout and semantics |
| `<div>` `<span>` | Generic containers |

## Part 3 - CSS Basics

### 3.1 CSS Syntax

A CSS **rule** has a selector and a block of declarations.

```css
h1 {
  color: navy;
  font-size: 32px;
}
```

- `h1` is the **selector**: which elements to style.
- `color: navy;` is a **declaration**, made of a **property** (`color`) and a **value** (`navy`).
- Every declaration ends with a semicolon. The block is wrapped in braces.
- Comments use `/* ... */`. There is no `//` comment in CSS.

```css
/* This is a CSS comment */
```

### 3.2 Three Ways to Add CSS

```html
<!-- 1. Inline: one element only. Hard to maintain; avoid. -->
<p style="color: red;">Red text</p>

<!-- 2. Internal: a <style> block in the <head>. Fine for one small page. -->
<head>
  <style>
    p { color: red; }
  </style>
</head>

<!-- 3. External: a separate .css file. The right choice for real projects. -->
<head>
  <link rel="stylesheet" href="css/style.css">
</head>
```

An external stylesheet keeps style out of your markup, is cached by the browser, and can be shared by every page of the site.

### 3.3 Selectors

```css
*              { margin: 0; }              /* every element */
p              { color: #333; }            /* by tag name */
.intro         { font-size: 18px; }        /* by class - reusable */
#header        { height: 60px; }           /* by id - unique */
h1, h2, h3     { font-family: Georgia; }   /* group: applies to all three */

article p      { line-height: 1.6; }       /* descendant: any p inside article */
article > p    { margin-top: 0; }          /* direct child only */
h2 + p         { font-weight: bold; }      /* the p immediately after an h2 */
h2 ~ p         { color: gray; }            /* every following sibling p */

a[target]            { color: teal; }              /* has the attribute */
input[type="email"]  { border-color: blue; }       /* exact value */
a[href^="https"]     { font-weight: bold; }        /* starts with */
a[href$=".pdf"]      { color: crimson; }           /* ends with */
a[href*="blog"]      { text-decoration: underline; } /* contains */
```

| Selector type | Syntax | Notes |
| --- | --- | --- |
| Universal | `*` | Matches everything; use carefully. |
| Type | `p` | All elements of that tag. |
| Class | `.name` | The workhorse. Reusable on many elements. |
| Id | `#name` | One element per page. High specificity, so use rarely. |
| Group | `a, b` | Same rules for several selectors. |
| Descendant | `a b` | `b` anywhere inside `a`. |
| Child | `a > b` | `b` is a direct child of `a`. |
| Adjacent sibling | `a + b` | The single `b` right after `a`. |
| General sibling | `a ~ b` | All `b` siblings after `a`. |
| Attribute | `[attr=value]` | Matches attributes and their values. |

### 3.4 The Cascade, Specificity, and Inheritance

When several rules target the same element, the browser resolves the conflict in this order:

1. **Importance** - a declaration marked `!important` wins. Avoid it; it makes debugging painful.
2. **Specificity** - the more specific selector wins.
3. **Source order** - if specificity ties, the rule written last wins.

Specificity, counted as (ids, classes, elements):

| Selector | Score | Result |
| --- | --- | --- |
| `p` | 0-0-1 | Lowest |
| `.intro` | 0-1-0 | Beats any number of element selectors |
| `#main` | 1-0-0 | Beats any number of classes |
| `nav ul li a` | 0-0-4 | Still loses to a single class |
| `style="..."` | inline | Beats all selectors |

**Inheritance**: some properties pass from a parent to its children automatically - `color`, `font-family`, `font-size`, `line-height`, `text-align`, `visibility`. Most do not - `margin`, `padding`, `border`, `background`, `width`, `height`. You can force it with `inherit`:

```css
button { font-family: inherit; }  /* buttons ignore the body font by default */
```

### 3.5 Colours

```css
.a { color: tomato; }                      /* one of 140+ named colours */
.b { color: #ff6347; }                     /* hex: #RRGGBB */
.c { color: #f63; }                        /* short hex, same as #ff6633 */
.d { color: #ff634780; }                   /* hex with alpha (80 = 50%) */
.e { color: rgb(255 99 71); }              /* red, green, blue: 0-255 */
.f { color: rgb(255 99 71 / 50%); }        /* with transparency */
.g { color: hsl(9 100% 64%); }             /* hue, saturation, lightness */
.h { background: transparent; }
.i { background: linear-gradient(to right, #4f46e5, #06b6d4); }
```

`hsl()` is the easiest format to adjust by hand: keep the hue and change the lightness to get a matching darker or lighter shade.

### 3.6 Units

| Unit | Type | Meaning |
| --- | --- | --- |
| `px` | Absolute | One device-independent pixel. Predictable, does not scale with user font settings. |
| `%` | Relative | Percentage of the parent's value. |
| `em` | Relative | Multiple of the *current* element's font size. |
| `rem` | Relative | Multiple of the *root* font size (16px by default). Best for font sizes and spacing. |
| `vw` / `vh` | Viewport | 1% of the viewport width / height. |
| `vmin` / `vmax` | Viewport | 1% of the smaller / larger viewport side. |
| `fr` | Grid | A fraction of the free space in a grid. |
| `ch` | Relative | Width of the character "0"; handy for text line length. |

```css
html { font-size: 100%; }        /* respect the user's browser setting */
h1   { font-size: 2.5rem; }      /* = 40px when root is 16px */
.box { width: 80%; max-width: 60ch; padding: 1rem; }
.hero{ min-height: 60vh; }
```

Prefer `rem` for type and spacing, `%` or `fr` for layout widths, and `px` only for small fixed details such as borders.

### 3.7 Text and Fonts

```css
body {
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  font-size: 1rem;
  font-weight: 400;          /* 100-900; 400 normal, 700 bold */
  font-style: normal;        /* italic | oblique */
  line-height: 1.6;          /* unitless is best: 1.6 x font size */
  color: #222;
}

h1 {
  text-align: center;        /* left | right | center | justify */
  text-transform: uppercase; /* lowercase | capitalize | none */
  letter-spacing: 0.05em;
  word-spacing: 2px;
}

a {
  text-decoration: none;     /* underline | line-through | overline */
}

.quote {
  text-indent: 2rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
  white-space: nowrap;       /* stop text wrapping */
  overflow-wrap: break-word; /* break very long words */
}
```

A **font stack** lists fallbacks: the browser uses the first font it can find. Always end with a generic family (`sans-serif`, `serif`, `monospace`).

### 3.8 The Box Model

Every element is a rectangular box built from four layers, from the inside out:

```
+-----------------------------------------------+
|                  margin                       |
|  +-----------------------------------------+  |
|  |                border                   |  |
|  |  +-----------------------------------+  |  |
|  |  |            padding                |  |  |
|  |  |  +-----------------------------+  |  |  |
|  |  |  |         content             |  |  |  |
|  |  |  +-----------------------------+  |  |  |
|  |  +-----------------------------------+  |  |
|  +-----------------------------------------+  |
+-----------------------------------------------+
```

- **content** - the text or image itself (`width`, `height`).
- **padding** - space *inside* the border. Takes the background colour.
- **border** - the edge of the box.
- **margin** - space *outside* the border, separating this box from its neighbours. Always transparent.

```css
.box {
  width: 300px;
  padding: 20px;             /* all four sides */
  padding: 10px 20px;        /* top-bottom | left-right */
  padding: 10px 20px 30px;   /* top | left-right | bottom */
  padding: 10px 20px 30px 40px; /* top | right | bottom | left (clockwise) */
  border: 2px solid #333;
  margin: 0 auto;            /* 0 top-bottom, auto left-right = centred */
}
```

By default `width` applies to the *content* only, so padding and border are added on top: a 300px box with 20px padding and a 2px border actually occupies 344px. Fix this globally:

```css
*, *::before, *::after {
  box-sizing: border-box;   /* width now includes padding and border */
}
```

Almost every real project starts with that rule.

**Margin collapse**: vertical margins of adjacent block elements merge into the larger of the two. A 20px bottom margin next to a 30px top margin produces a 30px gap, not 50px.

### 3.9 Backgrounds and Borders

```css
.card {
  background-color: #f9fafb;
  background-image: url("images/bg.jpg");
  background-repeat: no-repeat;   /* repeat | repeat-x | repeat-y */
  background-position: center;
  background-size: cover;         /* contain | 100% 100% */
  /* shorthand */
  background: #f9fafb url("images/bg.jpg") no-repeat center / cover;

  border: 1px solid #e5e7eb;
  border-bottom: 3px solid #4f46e5;
  border-radius: 8px;             /* 50% makes a circle */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);
  outline: 2px solid orange;      /* drawn outside the border; ignores box size */
  opacity: 0.95;                  /* 0 invisible - 1 opaque */
}
```

> Never remove focus outlines with `outline: none` unless you replace them with another clearly visible focus style. Keyboard users rely on them.

### 3.10 The `display` Property

| Value | Behaviour |
| --- | --- |
| `block` | Starts a new line, fills the width, respects `width`/`height`. |
| `inline` | Flows in text; ignores `width`, `height`, and vertical margins. |
| `inline-block` | Flows in text like inline, but accepts `width`, `height`, and padding. |
| `flex` | Makes the element a flex container (one-dimensional layout). |
| `grid` | Makes the element a grid container (two-dimensional layout). |
| `none` | Removes the element from the page entirely. |

`visibility: hidden` hides an element but keeps its space; `display: none` removes both the element and its space.

### 3.11 Positioning

```css
.a { position: static; }    /* default: normal flow, offsets ignored */
.b { position: relative; top: 10px; left: 20px; }  /* shifted from its own spot */
.c { position: absolute; top: 0; right: 0; }       /* placed against the nearest
                                                      positioned ancestor */
.d { position: fixed; bottom: 20px; right: 20px; } /* fixed to the viewport */
.e { position: sticky; top: 0; }                   /* normal until it scrolls
                                                      to the offset, then fixed */
.f { z-index: 10; }         /* stacking order; needs a non-static position */
```

The usual pattern: give the parent `position: relative`, then position a child `absolute` inside it - for a badge on a card, or an icon inside a button.

```css
.parent { position: relative; }
.badge  { position: absolute; top: -8px; right: -8px; }
```

`overflow` controls content that does not fit: `visible` (default), `hidden`, `scroll`, `auto`.

### 3.12 Flexbox - One-Dimensional Layout

Flexbox arranges items in a row or a column and distributes space between them. It is the fastest way to build navigation bars, card rows, and centred content.

```css
.container {
  display: flex;
  flex-direction: row;         /* row | row-reverse | column | column-reverse */
  flex-wrap: wrap;             /* allow items to move to the next line */
  justify-content: space-between; /* along the main axis */
  align-items: center;            /* across the cross axis */
  align-content: center;          /* multiple lines, when wrapping */
  gap: 16px;                      /* space between items */
}

.item {
  flex-grow: 1;      /* share of extra space */
  flex-shrink: 0;    /* resistance to shrinking */
  flex-basis: 200px; /* starting size */
  flex: 1 0 200px;   /* shorthand for the three above */
  align-self: flex-end; /* override align-items for one item */
  order: 2;             /* visual reordering */
}
```

Values for `justify-content` and `align-items`: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly` (justify only), `stretch` and `baseline` (align only).

Perfect centring in three lines:

```css
.centre {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
```

A responsive card row with no media query at all:

```css
.cards { display: flex; flex-wrap: wrap; gap: 1rem; }
.card  { flex: 1 1 250px; }   /* at least 250px, then grow and wrap */
```

### 3.13 CSS Grid - Two-Dimensional Layout

Grid controls rows and columns together, which makes it the right tool for whole page layouts.

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;    /* three columns by proportion */
  grid-template-columns: repeat(3, 1fr); /* the same, written shorter */
  grid-template-rows: 80px auto 60px;
  gap: 20px;                             /* row-gap and column-gap */
}

/* Responsive gallery: as many columns as fit, minimum 200px each */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

/* Placing an item explicitly */
.feature {
  grid-column: 1 / 3;   /* from line 1 to line 3 = two columns wide */
  grid-row: span 2;      /* two rows tall */
}
```

Named areas make a page layout easy to read:

```css
.page {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 240px 1fr;
  min-height: 100vh;
}
.page > header  { grid-area: header; }
.page > aside   { grid-area: sidebar; }
.page > main    { grid-area: main; }
.page > footer  { grid-area: footer; }
```

> Rule of thumb: Flexbox for content in one direction, Grid for a layout in two directions. They work well together - a grid cell can itself be a flex container.

### 3.14 Pseudo-Classes and Pseudo-Elements

A **pseudo-class** (single colon) selects an element in a particular state.

```css
a:link    { color: blue; }
a:visited { color: purple; }
a:hover   { color: darkblue; text-decoration: underline; }
a:active  { color: red; }
input:focus     { outline: 2px solid #4f46e5; }
input:disabled  { background: #eee; }
input:checked + label { font-weight: bold; }
input:invalid   { border-color: crimson; }

li:first-child      { font-weight: bold; }
li:last-child       { border-bottom: none; }
li:nth-child(2)     { color: teal; }
li:nth-child(odd)   { background: #f5f5f5; }  /* zebra striping */
li:nth-child(3n)    { color: gray; }          /* every third item */
p:not(.intro)       { color: #555; }
```

A **pseudo-element** (double colon) styles a specific part of an element, or inserts generated content.

```css
p::first-line   { font-variant: small-caps; }
p::first-letter { font-size: 2em; float: left; }
::selection     { background: #fde68a; }
.required::after  { content: " *"; color: red; }
.quote::before    { content: "\201C"; font-size: 2rem; }
```

Keep link pseudo-classes in the order link, visited, hover, focus, active ("LVHFA") so that later rules do not silently override earlier ones.

### 3.15 Transitions and Transforms

```css
.button {
  background: #4f46e5;
  transition: background 0.3s ease, transform 0.2s ease;
  /* property | duration | timing-function | delay */
}
.button:hover {
  background: #4338ca;
  transform: translateY(-2px);
}

.demo {
  transform: translate(10px, 20px);
  transform: scale(1.1);
  transform: rotate(45deg);
  transform: skew(10deg);
  transform: translateX(10px) rotate(5deg) scale(1.05); /* combined */
}
```

Timing functions: `ease` (default), `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)`.

Animate `transform` and `opacity` where you can; they are the cheapest properties for the browser to animate smoothly.

A simple keyframe animation:

```css
@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card { animation: fade-in 0.5s ease-out both; }
```

### 3.16 CSS Variables (Custom Properties)

Define a value once and reuse it everywhere. Change the theme in one place.

```css
:root {
  --brand: #4f46e5;
  --text: #1f2937;
  --space: 1rem;
  --radius: 8px;
}

.button {
  background: var(--brand);
  padding: var(--space) calc(var(--space) * 2);
  border-radius: var(--radius);
  color: var(--fallback, white);   /* second argument is a fallback */
}
```

Variables are inherited, so you can override them for one part of the page:

```css
.dark-panel { --text: #f9fafb; }
```

### 3.17 Responsive Design and Media Queries

Responsive design means one layout that adapts to any screen size. Three ingredients:

1. The viewport meta tag in the HTML `<head>`.
2. Flexible sizes (`%`, `rem`, `fr`, `max-width`) instead of fixed pixel widths.
3. Media queries for the points where the layout must change.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

```css
/* Mobile first: write the small-screen styles as the default ... */
.container { padding: 1rem; }
.cards     { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* ... then add larger screens with min-width queries */
@media (min-width: 600px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 900px) {
  .container { max-width: 1100px; margin: 0 auto; padding: 2rem; }
  .cards     { grid-template-columns: repeat(3, 1fr); }
}

/* Other useful queries */
@media (max-width: 599px)        { .sidebar { display: none; } }
@media (orientation: landscape)  { .hero { min-height: 40vh; } }
@media print                     { .nav, .ads { display: none; } }
@media (prefers-color-scheme: dark) { :root { --text: #f3f4f6; } }
```

Common breakpoints: about 480px (phones), 768px (tablets), 1024px (laptops), 1280px (large screens). Choose breakpoints where *your* design breaks, not to match specific devices.

Make images responsive with one rule:

```css
img { max-width: 100%; height: auto; display: block; }
```

### 3.18 CSS Property Cheat Sheet

| Category | Properties |
| --- | --- |
| Text | `color`, `font-family`, `font-size`, `font-weight`, `font-style`, `line-height`, `text-align`, `text-decoration`, `text-transform`, `letter-spacing` |
| Box | `width`, `height`, `max-width`, `min-height`, `margin`, `padding`, `border`, `box-sizing`, `overflow` |
| Background | `background-color`, `background-image`, `background-size`, `background-position`, `background-repeat` |
| Effects | `border-radius`, `box-shadow`, `text-shadow`, `opacity`, `filter`, `transform`, `transition` |
| Layout | `display`, `position`, `top`/`right`/`bottom`/`left`, `z-index`, `float`, `gap` |
| Flexbox | `flex-direction`, `flex-wrap`, `justify-content`, `align-items`, `align-self`, `flex` |
| Grid | `grid-template-columns`, `grid-template-rows`, `grid-template-areas`, `grid-column`, `grid-row` |
| Other | `cursor`, `list-style`, `visibility`, `content`, `object-fit` |

## Part 4 - Putting It Together

### 4.1 A Complete Example Page

Two files: `index.html` and `style.css`. This page uses semantic HTML, CSS variables, Flexbox for the navigation bar, Grid for the cards, and a media query for small screens.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Profile - Vishnu</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header class="site-header">
    <a class="logo" href="#">Vishnu</a>
    <nav>
      <ul class="nav-list">
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section class="hero">
      <h1>Hello, I build web pages</h1>
      <p>Learning HTML and CSS, one small project at a time.</p>
      <a class="btn" href="#skills">See my skills</a>
    </section>

    <section id="skills" class="section">
      <h2>Skills</h2>
      <div class="cards">
        <article class="card">
          <h3>HTML</h3>
          <p>Semantic structure, forms, tables, accessibility basics.</p>
        </article>
        <article class="card">
          <h3>CSS</h3>
          <p>Box model, Flexbox, Grid, responsive layouts.</p>
        </article>
        <article class="card">
          <h3>Next up</h3>
          <p>JavaScript for interactivity.</p>
        </article>
      </div>
    </section>

    <section id="contact" class="section">
      <h2>Contact</h2>
      <form class="form" action="#" method="post">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
        <label for="msg">Message</label>
        <textarea id="msg" name="msg" rows="4"></textarea>
        <button class="btn" type="submit">Send</button>
      </form>
    </section>
  </main>

  <footer class="site-footer">
    <p>&copy; 2026 Vishnu. Built with HTML and CSS.</p>
  </footer>
</body>
</html>
```

```css
/* ---------- Reset and variables ---------- */
*, *::before, *::after { box-sizing: border-box; }
body, h1, h2, h3, p, ul, figure { margin: 0; }
ul { padding: 0; list-style: none; }

:root {
  --brand: #4f46e5;
  --brand-dark: #4338ca;
  --text: #1f2937;
  --muted: #6b7280;
  --surface: #ffffff;
  --bg: #f9fafb;
  --radius: 10px;
  --space: 1rem;
}

body {
  font-family: "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  line-height: 1.6;
  color: var(--text);
  background: var(--bg);
}

/* ---------- Header: Flexbox ---------- */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space);
  padding: var(--space) 5%;
  background: var(--surface);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  position: sticky;
  top: 0;
}
.logo {
  font-weight: 700; font-size: 1.25rem;
  color: var(--brand); text-decoration: none;
}
.nav-list { display: flex; gap: 1.5rem; }
.nav-list a { color: var(--text); text-decoration: none; }
.nav-list a:hover { color: var(--brand); text-decoration: underline; }

/* ---------- Hero ---------- */
.hero {
  padding: 4rem 5%;
  text-align: center;
  background: linear-gradient(135deg, #eef2ff, #ecfeff);
}
.hero h1 { font-size: clamp(1.75rem, 5vw, 3rem); }
.hero p  { color: var(--muted); margin: 0.5rem 0 1.5rem; }

/* ---------- Buttons ---------- */
.btn {
  display: inline-block;
  padding: 0.7rem 1.4rem;
  background: var(--brand);
  color: #fff;
  border: none;
  border-radius: var(--radius);
  font: inherit;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.15s ease;
}
.btn:hover { background: var(--brand-dark); transform: translateY(-2px); }

/* ---------- Sections and cards: Grid ---------- */
.section { max-width: 1000px; margin: 0 auto; padding: 3rem 5%; }
.section h2 { margin-bottom: 1.5rem; }

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}
.card {
  background: var(--surface);
  padding: 1.5rem;
  border: 1px solid #e5e7eb;
  border-radius: var(--radius);
  transition: box-shadow 0.25s ease;
}
.card:hover { box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08); }
.card h3 { color: var(--brand); margin-bottom: 0.5rem; }

/* ---------- Form ---------- */
.form { display: grid; gap: 0.4rem; max-width: 420px; }
.form label { font-weight: 600; margin-top: 0.5rem; }
.form input, .form textarea {
  padding: 0.6rem;
  font: inherit;
  border: 1px solid #d1d5db;
  border-radius: 6px;
}
.form input:focus, .form textarea:focus {
  outline: 2px solid var(--brand);
  border-color: var(--brand);
}
.form .btn { margin-top: 1rem; justify-self: start; }

/* ---------- Footer ---------- */
.site-footer {
  padding: 2rem 5%;
  text-align: center;
  color: var(--muted);
  border-top: 1px solid #e5e7eb;
}

/* ---------- Small screens ---------- */
@media (max-width: 600px) {
  .site-header { flex-direction: column; align-items: flex-start; }
  .hero { padding: 2.5rem 5%; }
}
```

### 4.2 Common Beginner Mistakes

| Mistake | Fix |
| --- | --- |
| Forgetting a closing tag or misspelling one | Use editor auto-close and check with the W3C validator. |
| Using headings for size | Choose the heading level by outline, set the size in CSS. |
| Missing `alt` on images | Describe the image, or use `alt=""` if it is decorative. |
| Missing the viewport meta tag | The page will look zoomed-out on phones. |
| Ignoring `box-sizing` | Add the global `border-box` rule before anything else. |
| Overusing `#id` selectors and `!important` | Style with classes; keep specificity flat. |
| Using tables or `float` for page layout | Use Flexbox and Grid. |
| Wrong relative paths for CSS and images | Check the folder structure; DevTools shows 404s in the Network tab. |
| Fixed pixel widths everywhere | Use `%`, `rem`, `max-width`, and `fr`. |
| Writing every style inline | Move styles to one external `.css` file. |
| Removing focus outlines | Keep or restyle them for keyboard users. |
| Inputs without `name` or a matching `<label for>` | Add both; forms and accessibility depend on them. |

### 4.3 Practice Exercises

Work through these in order. Build each one from scratch, in a new folder.

1. **Profile card** - a photo, your name, a short bio, and three links. Practise: `img`, `alt`, headings, `border-radius`, `box-shadow`.
2. **Recipe page** - an ordered list of steps, an unordered ingredients list, and a table of nutrition facts. Practise: lists and tables.
3. **Navigation bar** - a logo on the left and links on the right, sticky at the top. Practise: Flexbox, `justify-content`, `position: sticky`.
4. **Image gallery** - nine images in a responsive grid that becomes one column on a phone. Practise: `grid-template-columns` with `auto-fit` and `minmax()`, `object-fit`.
5. **Contact form** - labels, several input types, validation attributes, and styled focus states. Practise: forms, `:focus`, `:invalid`.
6. **Pricing table** - three cards side by side, one highlighted as "popular". Practise: Grid, CSS variables, hover transitions.
7. **Full landing page** - header, hero, features, testimonial, footer, fully responsive. Practise: everything together.

For each project, ask yourself: does it work at 320px wide? Can I reach every link with the `Tab` key? Does the HTML pass the validator?

### 4.4 Learning Checklist

HTML:

- I can write a valid document skeleton from memory.
- I know the difference between block and inline elements.
- I can build lists, links, images, tables, and forms.
- I use semantic elements instead of `div` wherever one exists.
- I always add `alt` text and `<label>` elements.

CSS:

- I can add CSS three ways and know why external is preferred.
- I can use type, class, id, descendant, child, and attribute selectors.
- I can explain the cascade and specificity.
- I can draw the box model and know what `box-sizing: border-box` does.
- I can centre anything with Flexbox.
- I can build a responsive grid with `auto-fit` and `minmax()`.
- I use `rem` for type, and `%`/`fr` for layout.
- I can write a media query and explain mobile-first order.
- I use CSS variables for colours and spacing.

### 4.5 Next Steps and Resources

Once the above is comfortable, learn in roughly this order: JavaScript basics, DOM manipulation, Git and GitHub, deploying a static site (GitHub Pages or Netlify), accessibility in depth, then a framework such as React.

Reference and practice:

- **MDN Web Docs** (`developer.mozilla.org`) - the authoritative reference for every element and property.
- **W3C Markup Validator** (`validator.w3.org`) - catches HTML mistakes.
- **CSS Tricks** - the complete guides to Flexbox and Grid.
- **Flexbox Froggy** and **Grid Garden** - browser games that teach layout properties.
- **Frontend Mentor** - real design files to build from.
- **Can I Use** (`caniuse.com`) - browser support for any feature.

> The fastest way to learn is to build. Read one section, then immediately write code that uses it, break it on purpose, and fix it.
