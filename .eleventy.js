module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(['html', 'md', 'pug', 'ejs', '11ty.js'])

  const fileCopies = []
  for (const f of fileCopies) {
    eleventyConfig.addPassthroughCopy(`src/${f}`)
  }

  return {
    dir: {
      input: 'src',
    },
  }
}
