![alt text](https://img.shields.io/npm/dw/@charlespalmerbf/html-to-gfm?style=for-the-badge)

# @charlespalmerbf/html-to-gfm

The code provided is a custom JavaScript function called convertHtmlToMarkdown that converts HTML content into GitHub Flavored Markdown (GFM) format. Here's a breakdown of what each part of the code does:

# Installation

`npm install @charlespalmerbf/html-to-gfm`

# Usage

`node`

```js
const convertHtmlToMarkdown = require("@charlespalmerbf/html-to-gfm");

const html = '<h1>Hello, world!</h1><p>This is <strong>HTML</strong> content.</p><ul><li>Item 1</li><li>Item 2</li></ul>';

const markdown = convertHtmlToMarkdown(html);
console.log(markdown); //# Hello, world!This is **HTML** content.- Item 1- Item 2
```

# Build

`npm run build`

# Contribute

If you would like to contribute, you are welcome. Clone repository and open pull request.

# About

The code provided is a custom JavaScript function called convertHtmlToMarkdown that converts HTML content into GitHub Flavored Markdown (GFM) format. Here's a breakdown of what each part of the code does:

The function takes an HTML string as input.

The code uses regular expressions and string replacements to convert specific HTML tags and elements into their Markdown equivalents.

The following HTML tags are converted to Markdown headings:

<h1> to # Heading 1
<h2> to ## Heading 2
<h3> to ### Heading 3
<h4> to #### Heading 4
<h5> to ##### Heading 5
<h6> to ###### Heading 6
The code replaces <strong> and <b> tags with double asterisks (**) to represent bold text in Markdown.

The code replaces <em> and <i> tags with single asterisks (*) to represent italic text in Markdown.

<ul> and <ol> tags, representing unordered and ordered lists respectively, are converted to Markdown list items using hyphens (-) for unordered lists and numbers (1., 2., etc.) for ordered lists.

<a> tags are transformed into Markdown links by extracting the URL and anchor text.

<blockquote> tags are replaced with a > character at the beginning of each line to indicate a blockquote in Markdown.

<code> tags are converted to inline code snippets by surrounding the content with backticks.

<pre> tags are replaced with triple backticks to indicate a code block in Markdown.

<hr> tags, representing horizontal rules, are replaced with a series of dashes (---) in Markdown.

Any remaining HTML tags are removed from the converted Markdown output.

The resulting Markdown content is returned by the function.

This custom conversion function attempts to convert common HTML elements into their corresponding Markdown equivalents, allowing you to convert HTML content into a format compatible with GitHub Flavored Markdown.
