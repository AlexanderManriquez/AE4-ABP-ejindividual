const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const PORT = 3001;

const publicDir = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');
const partialsPath = path.join(viewsPath, 'partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

hbs.registerHelper('currentYear', () => new Date().getFullYear());

app.use(express.static(publicDir));

const projects = [
  {
    id: 1,
    title: 'Klik Market',
    short_desc: 'Tienda en línea',
    long_desc: 'Klik Market es una tienda en línea que ofrece una amplia variedad de productos. La plataforma permite a los usuarios navegar y agregar productos al carrito',
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/klik-market.webp',
    link: 'https://alexandermanriquez.github.io/Market-cart-project/'
  },
  {
    id: 2,
    title: 'CineFlash',
    short_desc: 'Landing page de un cine',
    long_desc: 'CineFlash es la landing page de un cine que ofrece información sobre las películas en cartelera, horarios y promociones. La página está diseñada para ser atractiva y fácil de navegar.',
    stack: ['HTML', 'Bootstrap', 'JavaScript'],
    image: '/img/cine-webflash.webp',
    link: 'https://alexandermanriquez.github.io/Market-cart-project/'
  },
  {
    id: 3,
    title: 'Quién es ese Pokémon',
    short_desc: 'Aplicación de descubrimiento de Pokémon',
    long_desc: 'Quién es ese Pokémon es una aplicación que permite a los usuarios adivinar Pokémon a partir de imágenes. La aplicación utiliza Vue.js para una experiencia interactiva y dinámica. Los datos se obtienen de la API pública de PokéAPI.',
    stack: ['Vue.js'],
    image: '/img/quien-es-ese-poke.webp',
    link: 'https://alexandermanriquez.github.io/Market-cart-project/'
  }
];

app.get('/', (req, res) => {
res.render('home', {
title: 'Inicio',
name: 'Tu Nombre',
bio: 'Soy desarrollador/a web y hago cosas bonitas con JavaScript.',
projects
});
});


app.get('/about', (req, res) => {
res.render('about', {
title: 'About',
name: 'Tu Nombre',
bio: 'Breve historia o presentación personal. Puedes decir en qué te especializas, tu background y qué buscas.'
});
});


app.get('/projects', (req, res) => {
res.render('projects', {
title: 'Proyectos',
projects
});
});

app.use((req, res) => {
res.status(404).render('404', {
title: '404 - No encontrado',
message: "Lo siento, no encontramos la página que buscas."
});
});

console.log('Partials path: ', partialsPath);
console.log('Public dir: ', publicDir);
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});