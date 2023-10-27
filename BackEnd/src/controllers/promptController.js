const openia = require("../config/openIa");
const InputPrompt = require("../models/inputPrompt");

module.exports = {
  async sendText(req, res) {
    const openIaApi = openia.configuration();
    const inputModel = new InputPrompt(req.body);

    try {
      // criação da mensagem ,a partir do texto enviado pelo usuário
      const response = await openIaApi.createCompletion(
        openia.textCompletion(inputModel)
      );
      return res.status(200).json({
        sucess: true,
        data: response.data.choices[0].text,
      });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response ? error.response.data : "Erro no servidor",
      });
    }
  },
};
