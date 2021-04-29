module.exports = (eleventyConfig) => {
  eleventyConfig.setTemplateFormats(['html', 'md', 'njk', 'ejs', '11ty.js'])

  const fileCopies = ['favicon.ico', 'styles']
  for (const f of fileCopies) {
    eleventyConfig.addPassthroughCopy(`src/${f}`)
  }

  return {
    dir: {
      input: 'src',
    },
  }
}
