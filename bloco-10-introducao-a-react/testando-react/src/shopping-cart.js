// produtos na tela inicial
const items = document.querySelector('.items');
// ol do carrinho de compras
const cartProducts = document.querySelector('.cart__items');

// funcao para mostrar o texto de "carregando..." durante uma requisição à API
// acho que tem que colocar no onload com um await antes ou um settimeout
const loadingText = () => {
  const textLoading = document.createElement('div');
  textLoading.className = 'loading';
  textLoading.innerText = 'carregando...';
  textLoading.appendChild(items);
};

// funcao que cria as imagens dos produtos na tela
function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

// funcao que cria o elemento com imagem etc
function createCustomElement({ element, className, innerText }) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// funcao para criar produto (fetchProducts)
// destructuring (pegar) sku, name e image do objeto results
// pegando chave id e renomeando para sku
function createProductItemElement({ id: sku, title: name, thumbnail: image, price: salePrice }) {
  const section = document.createElement('section');

  section.className = 'item';

  section.appendChild(createCustomElement({ 
    element: 'span', className: 'item__sku', innerText: sku }));
  section.appendChild(createCustomElement({ 
    element: 'span', className: 'item__title', innerText: name }));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement({
    element: 'span',
    className: 'item__price', 
    innerText: salePrice }));
  section.appendChild(createCustomElement({ 
    element: 'button', className: 'item__add', innerText: 'Adicionar ao carrinho!' }));

  return section;
}

// funcao soma total do valor results price
// fazer um loop que soma todos os preços salePrice
function sumTotalPrice() {
  const spanPrice = document.createElement('span');
  spanPrice.className = 'total-price';
}

// serve para pegar o id das box
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

// o carrinho de compras deve ser salvo no LocalStorage,
// ou seja, todas as adições e remoções devem ser abordadas para que a lista esteja sempre atualizada.
// funcao para remover o item do carrinho ao clicar nele
// getAttribute https://developer.mozilla.org/pt-BR/docs/Web/API/element/getAttribute
function cartItemClickListener(event, sku) {
  const savedCartItem = getSavedCartItems();

  event.target.remove();
 
  const updatedsavedCartItem = savedCartItem.filter((item) => item.id !== sku);
}
// funcao para criar os componentes HTML referentes a um item do carrinho
// fetchItem
// Adicione o elemento retornado da função createCartItemElement(product) como filho do elemento <ol class="cart__items">.
function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.setAttribute('sku', sku);
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', (event) => cartItemClickListener(event, sku));
  cartProducts.appendChild(li);
  saveCartItems({ id: sku, title: name, price: salePrice });
}

//  Implemente a lógica no botão Esvaziar carrinho para limpar o carrinho de compras
// localStorage.clear https://qastack.com.br/programming/9943220/how-to-delete-a-localstorage-item-when-the-browser-window-tab-is-closed
function clearAllItems() {
  const clearButton = document.querySelector('.empty-cart');
  clearButton.addEventListener('click', () => {
    cartProducts.innerHTML = '';
    localStorage.clear(); // window.localStorage.removeItem('cartItems');
  });  
}

// funcao que adiciona itens ao carrinho
function handleAddToCart() {
  // botao de adicionar ao carrinho
  const buttonsItemAddCart = document.querySelectorAll('.item__add');
  buttonsItemAddCart.forEach((button) => {
    button.addEventListener('click', () => {
      const productBox = button.parentNode; // acessa uma vez a dom
      const sku = productBox.querySelector('.item__sku').innerText;
      const name = productBox.querySelector('.item__title').innerText;
      const salePrice = productBox.querySelector('.item__price').innerText;
      createCartItemElement({ id: sku, title: name, price: salePrice });
    });
  });
}

// criar funcao de montar lista de produtos na tela

// funcao montar produtos 

// funcao que inicia 
// fazer ações, quando nao quero manipular nada no array, uso forEach
async function init() {
  // loadingText();
  const { results } = await fetchProducts(); // quero somente o results da fecthProducts
  results.forEach((result) => {
    const elementProduct = createProductItemElement(result); // results é um objeto  
    items.appendChild(elementProduct);
  });
  handleAddToCart();
  getSavedCartItems(createCartItemElement);
  clearAllItems();
}

window.onload = async () => {
  init();
};
