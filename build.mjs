#!/usr/bin/env node
/**
 * Build index.html from README.md for GitHub Pages.
 * Usage: node build.mjs
 */

import { readFileSync, writeFileSync, mkdirSync, cpSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const readme = readFileSync(join(__dirname, "README.md"), "utf8");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function inline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
}

function parseMarkdown(md) {
  const lines = md.replace(/\r\n/g, "\n").split("\n");
  const sections = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("# ")) {
      sections.push({ type: "h1", text: line.slice(2).trim() });
      i += 1;
      continue;
    }

    if (line.startsWith("## ")) {
      sections.push({ type: "h2", text: line.slice(3).trim() });
      i += 1;
      continue;
    }

    if (line.startsWith("### ")) {
      const text = line.slice(4).trim();
      sections.push({ type: "h3", text, id: slugify(text) });
      i += 1;
      continue;
    }

    if (line.trim() === "---") {
      sections.push({ type: "hr" });
      i += 1;
      continue;
    }

    if (line.startsWith("|")) {
      const tableLines = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i += 1;
      }
      const rows = tableLines
        .filter((row) => !/^\|[\s-|]+\|$/.test(row.trim()))
        .map((row) =>
          row
            .trim()
            .slice(1, -1)
            .split("|")
            .map((cell) => cell.trim())
        );
      sections.push({ type: "table", rows });
      continue;
    }

    if (/^- /.test(line)) {
      const items = [];
      while (i < lines.length && /^- /.test(lines[i])) {
        items.push(lines[i].slice(2).trim());
        i += 1;
      }
      sections.push({ type: "ul", items });
      continue;
    }

    if (line.trim() === "") {
      i += 1;
      continue;
    }

    const para = [];
    while (i < lines.length && lines[i].trim() !== "" && !lines[i].startsWith("#") && !lines[i].startsWith("|") && !/^- /.test(lines[i]) && lines[i].trim() !== "---") {
      para.push(lines[i]);
      i += 1;
    }
    sections.push({ type: "p", text: para.join(" ") });
  }

  return sections;
}

function renderSections(sections) {
  let html = "";
  let inCallout = false;

  for (const section of sections) {
    if (section.type === "h1") {
      html += `<h1>${inline(section.text)}</h1>\n`;
      continue;
    }

    if (section.type === "h2") {
      if (inCallout) {
        html += "</div>\n";
        inCallout = false;
      }
      html += `<h2>${inline(section.text)}</h2>\n`;
      continue;
    }

    if (section.type === "h3") {
      if (inCallout) {
        html += "</div>\n";
        inCallout = false;
      }
      html += `<h3 id="${section.id}">${inline(section.text)}</h3>\n`;
      continue;
    }

    if (section.type === "hr") {
      if (inCallout) {
        html += "</div>\n";
        inCallout = false;
      }
      html += "<hr>\n";
      continue;
    }

    if (section.type === "table") {
      if (inCallout) {
        html += "</div>\n";
        inCallout = false;
      }
      const [head, ...body] = section.rows;
      html += '<div class="table-wrap"><table>\n<thead><tr>';
      for (const cell of head) {
        html += `<th>${inline(cell)}</th>`;
      }
      html += "</tr></thead>\n<tbody>\n";
      for (const row of body) {
        html += "<tr>";
        for (const cell of row) {
          html += `<td>${inline(cell)}</td>`;
        }
        html += "</tr>\n";
      }
      html += "</tbody></table></div>\n";
      continue;
    }

    if (section.type === "ul") {
      if (inCallout) {
        html += "</div>\n";
        inCallout = false;
      }
      html += "<ul>\n";
      for (const item of section.items) {
        html += `<li>${inline(item)}</li>\n`;
      }
      html += "</ul>\n";
      continue;
    }

    const text = inline(section.text);
    const isNameNote = section.text.startsWith("**Name note:**");
    const isMeta =
      section.text.includes("Jade Zhao · Informatics") ||
      section.text.includes("Ship work lives on");

    if (isNameNote && !inCallout) {
      html += `<div class="callout"><p>${text}</p>\n`;
      inCallout = true;
      continue;
    }

    if (inCallout && !isNameNote && section.text.includes("Expect permanent collision")) {
      html += `<p>${text}</p></div>\n`;
      inCallout = false;
      continue;
    }

    if (isMeta) {
      html += `<div class="meta"><p>${text}</p></div>\n`;
      continue;
    }

    if (inCallout) {
      html += `<p>${text}</p>\n`;
      continue;
    }

    html += `<p>${text}</p>\n`;
  }

  if (inCallout) {
    html += "</div>\n";
  }

  return html;
}

const sections = parseMarkdown(readme);
const h3Sections = sections.filter((s) => s.type === "h3");

const toc = h3Sections
  .map((s) => `        <li><a href="#${s.id}">${s.text.replace(/&/g, "&amp;")}</a></li>`)
  .join("\n");

const body = renderSections(sections);

const html = `<!DOCTYPE html>
<html lang="en-GB">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="index, follow">
  <title>Stealth · foresight scrapbook · Jade Zhao</title>
  <meta name="description" content="A dated list of where AI might land hard. Predictions, not product claims. Wrong on purpose beats an empty coming soon.">
  <link rel="canonical" href="https://zhao-langxi.github.io/Stealth/">
  <meta property="og:title" content="Stealth · foresight scrapbook">
  <meta property="og:description" content="Predictions about AI, agents, EU policy, and the verify step. Not a pitch deck.">
  <meta property="og:url" content="https://zhao-langxi.github.io/Stealth/">
  <meta name="theme-color" content="#990000">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <a class="skip-link" href="#main">Skip to main content</a>
  <nav class="site-nav" aria-label="Site">
    <div class="wrap">
      <p>Stealth · foresight scrapbook</p>
      <ul>
        <li><a href="https://zhao-langxi.github.io/zhao-langxi/" rel="noopener noreferrer">zhao-langxi</a></li>
        <li><a href="https://jadexzhao.github.io/jadexzhao/" rel="noopener noreferrer">jadexzhao</a></li>
        <li><a href="https://github.com/zhao-langxi/Stealth" rel="noopener noreferrer">source</a></li>
        <li><a href="README.md">readme</a></li>
      </ul>
    </div>
  </nav>

  <div class="layout">
    <aside class="toc" aria-label="On this page">
      <h2>Predictions</h2>
      <ul>
${toc}
      </ul>
    </aside>

    <main id="main" class="content">
${body}    </main>
  </div>

  <footer class="site-footer">
    <p>Jade Zhao · Informatics @ Indiana University · class of 2027</p>
    <p>These are predictions, not product claims. Nothing here is peer-reviewed or IU-endorsed.</p>
    <p><a href="https://zhao-langxi.github.io/zhao-langxi/">Essays and research notes</a> · <a href="https://jadexzhao.github.io/jadexzhao/">Shipped work</a></p>
  </footer>
</body>
</html>
`;

mkdirSync(join(__dirname, "docs"), { recursive: true });
writeFileSync(join(__dirname, "docs/index.html"), html);
mkdirSync(join(__dirname, "docs/css"), { recursive: true });
cpSync(join(__dirname, "css/style.css"), join(__dirname, "docs/css/style.css"));
console.log("Built docs/index.html + docs/css/style.css");
