const logMiddleware = (req, res, next) => {
    console.log('Método:', req.method);
    console.log('Rota:', req.url);
    console.log('Uma requisição foi recebida!');

    next();
};

module.exports = logMiddleware;