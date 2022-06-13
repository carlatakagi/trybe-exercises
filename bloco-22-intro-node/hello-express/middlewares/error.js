const error = (error, req, res, next) => {
  res.status(error.status || 500).json({ error: error.message });
}

module.exports = error;
//quando lanca o erro no middleware error, pega qual o status do erro e a mensagem
// caso seja um erro q nao foi mapeado, nao vai acontecer um error.status do erro// entao cai no erro 500 que é default
