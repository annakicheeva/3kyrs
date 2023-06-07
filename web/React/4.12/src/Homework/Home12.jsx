import React from "react";
import Product from ".././Home12/Product";
import { useState } from 'react';

function Home12() {

const product = [
{
name: "iPhone 14 Pro Max",
description:
"Смартфон выполнен из нержавеющей стали и противоударного стекла Ceramic Shield, обладает встроенной памятью 128 Гб.  ",
price: 110999,
src:"https://img.mvideo.ru/Big/30064939bb.jpg"
},
{
name: "OPPO Find N2 Flip",
description:
"Смартфон OPPO Find N2 Flip 8/256GB сиреневый ",
price: 89999,
src:"https://img.mvideo.ru/Big/400129537bb.jpg"
},
{
name: "Realme C55",
description:
"Смартфон realme C55 8/256GB Rainy Night (RMX3710) ",
price: 17999,
src:"https://img.mvideo.ru/Big/400103375bb.jpg"
},
{
name: "Samsung Galaxy A34",
description:
"Смартфон Samsung Galaxy A34 Awesome Silver обладает большим экраном диагональю 6,6 дюйма разрешением 2340х1080 пикселей ",
price: 30990,
src:"https://img.mvideo.ru/Big/30067381bb.jpg"
},
{
name: "HONOR X7A 4/128GB",
description:
"Смартфон Honor X7A 5109AMLU, серебристый – модель базового уровня в пластиковом корпусе, удобном для управления двумя руками ",
price: 11299,
src:"https://img.mvideo.ru/Big/400078853bb.jpg"
},
{
name: "Apple iPhone 13 128GB",
description:
"iPhone 13. Самая совершенная система двух камер на iPhone. Режим «Киноэффект» делает из видео настоящее кино.",
price: 70999,
src:"https://img.mvideo.ru/Big/30063536bb.jpg"
},
];

const [products, setProducts] = useState([...product]);

const sortByPriceAsc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.price - b.price);
setProducts(sortedProducts);
};

const sortByPriceDesc = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => b.price - a.price);
setProducts(sortedProducts);
};

const sortByName = () => {
const sortedProducts = [...products];
sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
setProducts(sortedProducts);
};


return (
<>
<header>
<nav>
<ul>
<li>
<button onClick={sortByPriceAsc}>
Сортировать по возрастанию цены
</button>
</li>
<li>
<button onClick={sortByPriceDesc}>
Сортировать по убыванию цены
</button>
</li>
<li>
<button onClick={sortByName}>
Сортировать по алфавиту
</button>
</li>
</ul>
</nav>
</header>
<div
style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
>
{products.map((product) => (
<Product
key={product.name}
name={product.name}
description={product.description}
price={product.price}
src ={product.src}
/>
))}
</div>
</>
);
}

export default Home12;