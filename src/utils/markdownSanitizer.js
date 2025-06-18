import { marked } from "marked";
import sanitizeHtml from "sanitize-html";

import TurndownService from "turndown";



function sanitizeMarkdown(markdownContent) {
    const turndownService = new TurndownService();

    //1. Convert markdown to HTML

    const convertedHtml = marked.parse(markdownContent);

    //console.log("convertedHtml",convertedHtml);

    //2. Sanitize the HTML

    const sanitizedHtml = sanitizeHtml(convertedHtml, {
        allowedTags: sanitizeHtml.defaults.allowedTags
    })

    //console.log("sanitizedHtml",sanitizedHtml);
    

    //3. Convert sanitized HTML to markdown

    const sanitizedMarkdown = turndownService.turndown(sanitizedHtml);
    //console.log("santizedMarkdown",sanitizedMarkdown);

    return sanitizedMarkdown;

};


export {
    sanitizeMarkdown
}