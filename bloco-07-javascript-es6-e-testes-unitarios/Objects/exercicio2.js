const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  // retornar Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
  const pessoaDelivery = order.order.delivery.deliveryPerson
  const nome = order.name;
  const telefone = order.phoneNumber;
  const enderecoRua = order.address.street;
  const enderecoNumero = order.address.number;
  const numeroApartamento = order.address.apartment;
  
  console.log(`Olá ${pessoaDelivery}, entrega para ${nome}, Telefone: ${telefone}, R. ${enderecoRua}, Nº: ${enderecoNumero}, AP: ${numeroApartamento}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  // seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
  const novaPessoaDelivery = order.order.delivery.deliveryPerson = 'Luiz Silva';
  const pizza = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;

  console.log(`Olá ${novaPessoaDelivery}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${bebida} é de R$ 50,00`)
}

orderModifier(order);