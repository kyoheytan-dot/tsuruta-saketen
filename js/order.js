function renderForm(){
  let h='';

  prods.forEach(p=>{
    if(!p.sizes) return;

    p.sizes.forEach(sz=>{
      h+=`
        <div>
          ${p.name} ${sz.s} \${sz.p.toLocaleString()}
        </div>
      `;
    });
  });

  document.getElementById('sake-list').innerHTML = h;
}

// 初期化
load();
renderForm();
