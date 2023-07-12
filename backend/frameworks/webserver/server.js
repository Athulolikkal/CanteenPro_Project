export default function serverConfig(server,config){
    function startServer(){
        server.listen(config.port,()=>{
            console.log('server connceted')
        })
    }
    return{
        startServer
    }
}