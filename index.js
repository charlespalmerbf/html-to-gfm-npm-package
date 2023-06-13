function convertHtmlToMarkdown(html) {
    // Replace heading tags
    html = html.replace(/<h1(.*?)>(.*?)<\/h1>/g, "# $2");
    html = html.replace(/<h2(.*?)>(.*?)<\/h2>/g, "## $2");
    html = html.replace(/<h3(.*?)>(.*?)<\/h3>/g, "### $2");
    html = html.replace(/<h4(.*?)>(.*?)<\/h4>/g, "#### $2");
    html = html.replace(/<h5(.*?)>(.*?)<\/h5>/g, "##### $2");
    html = html.replace(/<h6(.*?)>(.*?)<\/h6>/g, "###### $2");

    // Replace bold and italic tags
    html = html.replace(/<strong(.*?)>(.*?)<\/strong>/g, "**$2**");
    html = html.replace(/<b(.*?)>(.*?)<\/b>/g, "**$2**");
    html = html.replace(/<em(.*?)>(.*?)<\/em>/g, "*$2*");
    html = html.replace(/<i(.*?)>(.*?)<\/i>/g, "*$2*");

    // Replace unordered list tags
    html = html.replace(
        /<ul(.*?)>(.*?)<\/ul>/gs,
        function (match, attrs, content) {
            content = content.trim().replace(/<li(.*?)>(.*?)<\/li>/gs, "- $2");
            return content;
        }
    );

    // Replace ordered list tags
    html = html.replace(
        /<ol(.*?)>(.*?)<\/ol>/gs,
        function (match, attrs, content) {
            let counter = 1;
            content = content
                .trim()
                .replace(
                    /<li(.*?)>(.*?)<\/li>/gs,
                    function (match, attrs, content) {
                        return `${counter++}. ${content}`;
                    }
                );
            return content;
        }
    );

    // Replace link tags
    html = html.replace(/<a href="(.*?)">(.*?)<\/a>/g, "[$2]($1)");

    // Replace blockquote tags
    html = html.replace(
        /<blockquote(.*?)>(.*?)<\/blockquote>/gs,
        function (match, attrs, content) {
            content = content.trim().replace(/^/gm, "> ");
            return content;
        }
    );

    // Replace code tags
    html = html.replace(/<code(.*?)>(.*?)<\/code>/g, "`$2`");

    // Replace pre tags
    html = html.replace(/<pre(.*?)>(.*?)<\/pre>/gs, "```\n$2\n```");

    // Replace horizontal rule tags
    html = html.replace(/<hr(.*?)>/g, "---");

    // Remove any remaining HTML tags
    html = html.replace(/<\/?.+?>/g, "");

    return html;
}

module.exports = convertHtmlToMarkdown;
