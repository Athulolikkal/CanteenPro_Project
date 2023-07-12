    export default function connection(mongoose,config){
         function connectToMongo(){
          
            mongoose.connect(config.mongo.uri).
            then(()=>{
                console.log('mongosee connect')
            }).catch((err)=>{
                console.log(err,'error found')
            })

         }
         return {connectToMongo}
    }