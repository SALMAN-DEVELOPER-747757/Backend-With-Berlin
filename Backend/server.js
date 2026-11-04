import express from 'express';
const app = express();
app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//     res.send("server is ready")
// });
          //List of 5 jokes
          app.get('/api/jokes',(req,res)=>{
            const jokes=[
                {
                    id:1,
                    title:"A joke first",
                    content:"This is a first joke"

                },
                {
                    id:2,
                    title:"A joke second ",
                    content:"This is a second joke"

                },
                {
                    id:3,
                    title:"A joke third",
                    content:"This is a third joke"

                },
                {
                    id:4,
                    title:"A joke fourth",
                    content:"This is a fourth joke"

                },
                {
                    id:5,
                    title:"A fifth joke",
                    content:"This is a fifth joke"

                }
            ];
            res.send(jokes)
          })

const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server at http://localhost:${port}`);
    
})