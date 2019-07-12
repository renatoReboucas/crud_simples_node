*mongo for docker*

docker run --name mongodb -p 27017:27017 -d mongo

conect sem autenticacao
mongoose.connect('mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
); 

