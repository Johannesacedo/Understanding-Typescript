const product:{
    id: string;
    price: number;
    tags: string[];
    details: {
      title: string;
      description: string;
    } 
}= {
    id: 'abc1',
    price: 12.99,
    tags: ['great-offer', 'hot-and-new'],
    details: {
      title: 'Red Carpet',
      description: 'A great carpet - almost brand-new!'
    }
}

console.log(product.id);
console.log(product.price);
console.log(product.tags);
console.log(product.details.title + "" + product.details.description);