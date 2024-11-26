const emailClient = require("./emailClient");
const { enviarEmail } = require("./emailService");

jest.mock("./emailClient");

test("Envia o email com os parametros corretos", () => {
  enviarEmail("destinatario@email.com", "Olá Mundo");
  expect(emailClient.send).toHaveBeenCalledWith(
    "email@email.com",
    "destinatario@email.com",
    "Olá Mundo"
  );
  expect(emailClient.send).toHaveBeenCalledTimes(1);
});
