import {promises as fs} from "fs"
import path from "path"

const contactsPath = path.join("db", "contacts.json");

export async function listContacts() {
        const getJson = await fs.readFile(contactsPath);
    return console.table(JSON.parse(getJson));
  }
  
  export async function getContactById(contactId) {
    const getJsonById = await fs.readFile(contactsPath)
    const get = JSON.parse(getJsonById)
    const find = get.find((item) => item.id === contactId)
    return console.log(find);
}
  
  export async function removeContact(contactId) {
    const removeJsonById = await fs.readFile(contactsPath);
    const get = JSON.parse(removeJsonById)
    const removed = get.filter((item) => item.id !== contactId);
    return console.log(fs.writeFile(contactsPath, JSON.stringify(removed)))
  }
  
  export async function addContact(name, email, phone) {
        const addJsonById = await fs.readFile(contactsPath);
        const get = JSON.parse(addJsonById)
        const addJson = [ ...get, {name, email, phone} ];
        return fs.writeFile(contactsPath, JSON.stringify(addJson))
  }

