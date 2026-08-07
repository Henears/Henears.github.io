(() => {
  const root = (window.GROOT || '.').replace(/\/+$/, '')
  const $ = (id) => document.getElementById(id)
  const state = { cat: '全部', theme: null, kw: '' }

  const esc = (s) => String(s).replace(/[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))

  document.addEventListener('DOMContentLoaded', () => {
    document.title = `${PORTAL.name} · 离线小游戏门户`
    if (document.getElementById('portalName')) {
      document.getElementById('portalName').textContent = PORTAL.name
    }
    renderCats()
    renderThemes()
    render()
    bindSearch()
    bindCards()
  })

  function renderCats() {
    const nav = document.getElementById('catNav')
    if (!nav) return
    nav.innerHTML = CATS.map(c =>
      `<a class="${c === '全部' ? 'active' : ''}" data-cat="${esc(c)}">${esc(c)}</a>`).join('')
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a')
      if (!a) return
      state.cat = a.dataset.cat
      state.theme = null
      nav.querySelectorAll('a').forEach(x => x.classList.toggle('active', x === a))
      renderThemes()
      render()
    })
  }

  function renderThemes() {
    const bar = document.getElementById('themes')
    if (!bar) return
    bar.innerHTML = THEMES.map(t => `<button class="theme" data-theme="${esc(t.id)}">
      <span class="ticon">${t.icon}</span><span class="tname">${esc(t.name)}</span>
      <span class="tdesc">${esc(t.desc || '')}</span></button>`).join('')
    bar.addEventListener('click', (e) => {
      const b = e.target.closest('button.theme')
      if (!b) return
      state.theme = state.theme === b.dataset.theme ? null : b.dataset.theme
      if (state.theme) state.cat = '全部'
      renderCats()
      renderThemes()
      render()
    })
  }

  function render() {
    const grid = document.getElementById('gameGrid')
    const empty = document.getElementById('emptyTip')
    const count = document.getElementById('countText')
    if (!grid) return

    const themed = state.theme ? THEMES.find(t => t.id === state.theme) : null
    const kw = state.kw.trim().toLowerCase()
    const list = GAMES.filter(g => {
      if (themed) {
        const okCat = themed.cats.includes(g.cat)
        const okTag = themed.tags.some(t => (g.tags || []).includes(t))
        if (!okCat && !okTag) return false
      } else if (state.cat !== '全部' && g.cat !== state.cat) {
        return false
      }
      if (!kw) return true
      return (g.name + ' ' + (g.desc || '') + ' ' + (g.tags || []).join(' ')).toLowerCase().includes(kw)
    })

    const head = themed ? `主题 · ${themed.name}` : (state.cat !== '全部' ? state.cat : '全部')
    count.textContent = `共 ${list.length} 款游戏 · ${head}${kw ? ' · “' + state.kw + '”' : ''}`
    empty.style.display = list.length ? 'none' : 'block'
    grid.innerHTML = list.map(cardHTML).join('')
  }

  function cardHTML(g) {
    const tag = g.type === 'swf' ? 'Flash' : 'HTML5'
    const cls = g.type === 'swf' ? 'swf' : 'html5'
    const icon = g.icon || '🎮'
    const tags = (g.tags || []).slice(0, 3).map(t => `<span class="tag">${esc(t)}</span>`).join('')
    return `
      <div class="card" data-id="${esc(g.id)}" data-type="${esc(g.type)}">
        <div class="thumb"><span class="thumb-emoji">${icon}</span><span class="type-badge ${cls}">${tag}</span></div>
        <div class="body">
          <div class="name">${esc(g.name)}</div>
          <div class="desc">${esc(g.desc || '')}</div>
          <div class="tags">${tags}</div>
        </div>
      </div>`
  }

  function bindSearch() {
    const input = document.getElementById('searchInput')
    const btn = document.getElementById('searchBtn')
    if (!input) return
    const go = () => { state.kw = input.value; render() }
    btn.addEventListener('click', go)
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') go() })
  }

  function bindCards() {
    document.addEventListener('click', (e) => {
      const card = e.target.closest('.card')
      if (!card) return
      const g = GAMES.find(x => x.id === card.dataset.id)
      if (g) openGame(g)
    })
  }

  function openGame(g) {
    const p = new URLSearchParams({ name: g.name, type: g.type, path: g.path })
    if (g.ratio) p.set('ratio', g.ratio)
    location.href = `${root}/player.html?${p.toString()}`
  }

  window.GamePortal = { root, state, render }
})()