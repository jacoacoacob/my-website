
function slugify(s: string) {
    return s.toLowerCase().replace(/\W/g, " ").replace(/\s+/g, "-");
}

export { slugify };