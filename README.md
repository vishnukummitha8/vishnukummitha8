# vishnukummitha8

## HTML & CSS Basic Notes (Word document)

A beginner-friendly study guide covering HTML and CSS fundamentals, with code examples,
cheat sheet tables, common mistakes, and practice exercises.

| File | Description |
| --- | --- |
| `HTML_and_CSS_Basic_Notes.docx` | The finished Word document (27 pages, A4). Download and open in Word, Google Docs, or LibreOffice. |
| `notes/html-css-basics.md` | Markdown source of the notes - edit this to change the content. |
| `tools/md_to_docx.py` | Converts the Markdown source into the formatted Word document. |

### What the notes cover

- **Part 1 - Getting Started:** what HTML and CSS are, how a page loads, tools, first page.
- **Part 2 - HTML Basics:** document structure, elements and attributes, text, lists, links,
  images, tables, forms, semantic layout, block vs inline, entities, tag cheat sheet.
- **Part 3 - CSS Basics:** syntax, ways to add CSS, selectors, cascade and specificity, colours,
  units, fonts, box model, backgrounds, `display`, positioning, Flexbox, Grid, pseudo-classes,
  transitions, variables, responsive design, property cheat sheet.
- **Part 4 - Putting It Together:** a complete example page, common beginner mistakes,
  seven practice projects, a learning checklist, and next steps.

### Regenerating the document

```bash
pip install -r requirements.txt
python3 tools/md_to_docx.py notes/html-css-basics.md HTML_and_CSS_Basic_Notes.docx
```

The converter handles the Markdown subset used by the notes: headings, paragraphs, bullet and
numbered lists, fenced code blocks, pipe tables, blockquote callouts, a `[TOC]` placeholder,
and the inline markers `**bold**`, `*italic*`, and `` `code` ``.
