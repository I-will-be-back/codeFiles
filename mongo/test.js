let json = {'name':'smallPangChao','date':new Date()};
let db = connect('log');
db.login.insert(json);
print('json is inserted');