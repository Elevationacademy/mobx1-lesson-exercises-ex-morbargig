import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = []
    @observable length
    checkItem = () => {

        // your code here
    }
    addItem = (value) => {
       let item = new Item(value)
        this.list.push(item)
        // your code here
    }
    editItem = () => {
        // your code here
    }
    deleteItem = () => {
        // your code here
    }
}

