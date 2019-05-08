const likes = (names) => {
  let templates = ['no one like this','{name} like this','{name} and {name} like this','{name},{name} and {name} like this',
  '{name},{name} and {n} others like this'];
  let idx = Math.min(names.length, 4);
  return templates[idx].replace(/{name}|{n}/g, function(val) {
    // console.log(val);
    return val === '{name}'?names.shift():names.length;
  });
}

console.log(likes(['111','1','2','3']));