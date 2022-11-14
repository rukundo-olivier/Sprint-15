import fs from "fs/promises";

async function run(){
    let data = await loadData();
    console.log(data);
    const operation = process.argv[2];
    const incomingData = process.argv[3];
    console.log(operation, incomingData);

    if(operation === "add"){
        addUser(data, incomingData);
    }
    if(operation == "delete"){
        data = deleteUser(data, incomingData);
    }
    console.log(data);
    await saveData(data);
}
run();

function addUser(data, newUser){
    const newId = data.reduce((a, c) => Math.max(a, c.id), 0) + 1;
    console.log(newId, newUser);
    data.push({id: newId, name: newUser});
}

function deleteUser(data, removeId){
    return data.filter(user => user.id !== parseInt(removeId))
}
async function loadData(){
    const data = await fs.readFile ("./users.json");
    return JSON.parse(data)
    
}
loadData();

async function saveData(data){

    return fs.writeFile("./users.json", JSON.stringify(data));
}