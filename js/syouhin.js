function renderAll(){
  const cats = {
    'original-goek': 'original-list',
    'original-non':  'nonbiyori-list',
    'kokubun':       'list-kokubun',
    'hamada':        'list-hamada',
    'shirogane':     'list-shirogane',
    'others':        'list-others',
    'limited':       'list-limited',
    'premier':       'list-premier',
  };

  Object.entries(cats).forEach(([cat, elId])=>{
    const el = document.getElementById(elId);
    if(!el) return;

    const items = prods.filter(p=>p.cat===cat);

    el.innerHTML = items.map(p=>`
      <div>${p.name}</div>
    `).join('');
  });
}

// 初期化
load();
renderAll();
