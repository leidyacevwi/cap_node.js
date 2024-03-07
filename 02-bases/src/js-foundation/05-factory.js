

const buildPerson = ({name, birthdate}) => {

    return {
        id: new Date().getTime(),
        name:name,
        age: new Date().getFullYear() - new Date(birthdate).getFullYear(),

    }

}
const obj = { name: 'Jhon', birthdate:'1997-07-21'};
const jhon = buildPerson(obj);

console.log(jhon);