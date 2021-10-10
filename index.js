const Koa = require("koa");
const app = new Koa();

// response
app.use((ctx) => {
  const url = ctx.url;

  if (url === "/") {
    ctx.body = "<h1>INDEX sayfasına hoş geldiniz </h1>";
  } else if (url === "/hakkimizda") {
    ctx.body = "<h1>Hakkımızda sayfasına hoş geldiniz </h1>";
  } else if (url === "/iletisim") {
    ctx.body = "<h1>İletişim sayfasına hoş geldiniz </h1>";
  } else { 
    ctx.body = "<h1>404 sayfa bulunamadı. </h1>";
  }
});

app.listen(3000);
