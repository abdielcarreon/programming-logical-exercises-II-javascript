//Converter from text to seo slug, ergo a optimized fragmented text for better web rank

function seoSlug(text) {
    const textClear = text.toLowerCase().replace(/\s/gi, '-')
    return textClear
}


console.log(seoSlug('Victor Robles Web Curses'));