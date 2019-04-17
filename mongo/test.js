var json = {
  findAndModify:'person',
  query:{name:'xiaopangchao'},
  update:{$set:{email:1505013204,time:new Date()}},
  new:true
}
var result = db.runCommand(json);
printjson(result);