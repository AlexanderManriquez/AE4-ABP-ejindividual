const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');

const app = express();
const PORT = 3001;

// Rutas de carpetas
const publicDir = path.join(__dirname, 'public');
const viewsPath = path.join(__dirname, 'views');
const layoutsPath = path.join(viewsPath, 'layouts');
const partialsPath = path.join(viewsPath, 'partials');

// Configuración de Handlebars con layouts y helpers
app.engine('handlebars', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: layoutsPath,
  partialsDir: partialsPath,
  helpers: {
    currentYear: () => new Date().getFullYear()
  }
}));
app.set('view engine', 'handlebars');
app.set('views', viewsPath);

app.use(express.static(publicDir));

// Datos de proyectos
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

// Manejo de rutas
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Inicio',
    name: 'Alexander Manríquez',
    bio: 'Soy un desarrollador web full-stack con experiencia en la creación de aplicaciones web dinámicas y responsivas. Me especializo en JavaScript, Node.js, y frameworks modernos como React y Vue.js. Me apasiona construir soluciones eficientes y escalables que mejoren la experiencia del usuario.',
    projects
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'Alexander Manríquez',
    bio: 'Breve historia o presentación personal. Puedes decir en qué te especializas, tu background y qué buscas.'
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Proyectos',
    projects
  });
});

// Ruta para páginas no encontradas
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404 - No encontrado',
    message: "Lo siento, no encontramos la página que buscas."
  });
});
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
