const PROD_KEY = 'sake_display_products';

let prods = [];
let editingId = null;

function load(){
  const s = localStorage.getItem(PROD_KEY);
  prods = s ? JSON.parse(s) : JSON.parse(JSON.stringify(BASE));
}

function save(){
  localStorage.setItem(PROD_KEY, JSON.stringify(prods));
}
