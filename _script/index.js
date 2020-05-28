window.addEventListener('load', handleHashChange)
window.addEventListener('hashchange', handleHashChange)

const iframeSrcs = [
  { slug: 'counter', src: '/counter/' },
  { slug: 'keycode', src: '/keycode/' },
  { slug: 'tiny', src: '/tiny/' },
  { slug: 'agent-echo', src: '/agent-echo/' }
]

function handleHashChange() {
  const hash = location.hash
  const slugs = hash.split('/').slice(1)
  const found = iframeSrcs.find(src => src.slug === slugs[0])
  if (!found) {
    location.hash = ['#', iframeSrcs[0].slug].join('/')
    return
  }
  changeIframeSrc(found.src)
}

function changeIframeSrc(src) {
  const iframe = document.getElementById('iframe-app')
  iframe.setAttribute('src', src)
}
