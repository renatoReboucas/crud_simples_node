*mongo for docker*

docker run --name mongodb -p 27017:27017 -d mongo

conect sem autenticacao
mongoose.connect('mongodb://localhost:27017/nodeapi',
    {useNewUrlParser: true}
); 

// cria dados no mongodb
 Product.create({
         title: 'React Native',
         description: 'Build native apps with React',
         url: 'http://github.com/facebook/react-native'
     });
