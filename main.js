const produtos = [
  {
    id: 0,
    nome: 'Playsation 5',
    descricao: 'Console da Sony com mídia fisica',
    preco: 4500,
    foto: 'https://images.kabum.com.br/produtos/fotos/115737/console-sony-playstation-5_1603798015_g.jpg',
    categoria_id: 1,
    quantidade: 0
  },
  {
    id: 1,
    nome: 'XBOX Series S',
    descricao: 'Xbox com foco em 1080p',
    preco: 2600,
    foto: 'https://images.kabum.com.br/produtos/fotos/128561/console-microsoft-xbox-series-s-500gb-branco-rrs-00006_1601067301_g.jpg',
    categoria_id: 1,
    quantidade: 0
  },
  {
    id: 2,
    nome: 'XBOX Series X',
    descricao: 'Xbox com foco em qualquer coisa',
    preco: 4500,
    foto: 'https://images.kabum.com.br/produtos/fotos/128560/console-microsoft-xbox-series-x-1tb-preto-rrt-00006_1601067024_g.jpg',
    categoria_id: 1,
    quantidade: 0
  },
  {
    id: 3,
    nome: 'Iphone 12',
    descricao: 'Apple Iphone 128GB cor preta',
    preco: 5000,
    foto: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-black-select-2020?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1604343702000',
    categoria_id: 2,
    quantidade: 0
  },
  {
    id: 4,
    nome: 'Galaxy S20+',
    descricao: 'Samsung Galaxy S20+ com 256GB na cor azul',
    preco: 4800,
    foto: 'https://sipolatti.vteximg.com.br/arquivos/ids/174518-550-570/SAMSUNG-GALAXY-S20-PLUS-Cloud-Blue.jpg?v=637227295037370000',
    categoria_id: 2,
    quantidade: 0
  },
  {
    id: 5,
    nome: 'Galaxy S20 FE',
    descricao: 'Samsung Galaxy Fan Edition 128GB',
    preco: 2500,
    foto: 'https://a-static.mlcdn.com.br/1500x1500/smartphone-samsung-galaxy-s20-fe-128gb-cloud-navy-4g-6gb-ram-tela-65-cam-tripla-selfie-32mp/magazineluiza/155629800/0007bbdc665749ec107d860c3a4b8b2f.jpg',
    categoria_id: 2,
    quantidade: 0
  },
  {
    id: 6,
    nome: 'Iphone 12 mini',
    descricao: 'Apple Iphone mini 128GB cor preta',
    preco: 3800,
    foto: 'https://www.techinn.com/f/13782/137821889/apple-iphone-12-mini-4gb-128gb-5.4.jpg',
    categoria_id: 2,
    quantidade: 0
  },
  {
    id: 7,
    nome: 'Coca cola 600ml',
    descricao: '',
    preco: 7.5,
    foto: 'https://www.clubeextra.com.br/img/uploads/1/18/12034018.jpg',
    categoria_id: 3,
    quantidade: 0
  },
  {
    id: 8,
    nome: 'Chocolate Milka Oreo',
    descricao: 'Chocolate recheado com creme de Oreo',
    preco: 12,
    foto: 'https://m.media-amazon.com/images/I/61APYfE+uZL._AC_SL1200_.jpg',
    categoria_id: 3,
    quantidade: 0
  }
]

const categorias = [
  {
    id: 1,
    nome: 'Video Games'
  },
  {
    id: 2,
    nome: 'Smartphones'
  },
  {
    id: 3,
    nome: 'Outros'
  }
]

/* Products */
initStore = () => {
  var containerProducts = document.getElementById('products')
  produtos.map(val => {
    containerProducts.innerHTML +=
      `
        <div class="cardproduct">
          <img src="` +
      val.foto +
      `" alt="" />
          <p>` +
      val.nome +
      `</p>
          <span>` +
      val.preco +
      `</span>
          <a key="` +
      val.id +
      `" href="#">ADICIONAR AO CARRINHO</a>
        </div>    
    `
  })
}

initStore()

removeCart = i => {
  produtos[i].quantidade = produtos[i].quantidade - 1
  attCart()
  return false
}

/* Cart */
attCart = () => {
  var containerCart = document.getElementById('cart')
  containerCart.innerHTML = ''
  produtos.map((val, i) => {
    if (val.quantidade > 0) {
      console.log(val.id)
      containerCart.innerHTML +=
        `
        <p>` +
        val.nome +
        ` | quantidade:` +
        val.quantidade +
        `</p>
        <a href="javascript:removeCart(${i})">Remover</a>
    `
    }
  })
}

var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function () {
    let key = this.getAttribute('key')
    produtos[key].quantidade++
    attCart()
    return false
  })
}
