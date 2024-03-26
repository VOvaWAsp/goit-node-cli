import {promises as fs} from "fs"
import { nanoid } from "nanoid";
import path from "path"

const contactsPath = path.join("db", "contacts.json");

export async function listContacts() {
        const getJson = await fs.readFile(contactsPath);
    return JSON.parse(getJson);
  }
  
  export async function getContactById(contactId) {
    const getJsonById = await fs.readFile(contactsPath)
    const get = JSON.parse(getJsonById)
    const find = get.find((item) => item.id === contactId)
    if (!find) {
       return null
    }
    return find;
}
  
  export async function removeContact(contactId) {
    const removeJsonById = await fs.readFile(contactsPath);
    const get = JSON.parse(removeJsonById)
    const find = get.find((item) => item.id === contactId)
    if (!find) {
       return null
    }
     const removed = get.filter((item) => item.id !== find);
    await fs.writeFile(contactsPath, JSON.stringify(removed))
    return removed;
  }
  
  export async function addContact(name, email, phone) {
        const addJsonById = await fs.readFile(contactsPath);
        const get = JSON.parse(addJsonById)
        const addJson = [ ...get, {id: nanoid(), name, email, phone} ];
        await fs.writeFile(contactsPath, JSON.stringify(addJson))
        return addJson
  }

