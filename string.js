const client =require('./client')

async function init() {
    // await client.set('msg:4',"hello everyone")
    await client.expire('msg:4',20)
    const result =await client.get('msg:4');
    console.log('Result --> ',result);
    
}
init();