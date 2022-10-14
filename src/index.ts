import app from "./services/server";

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `Servidor Francisco Javier Llantada funcionando en puerto: ${PORT}  `
  );
});
