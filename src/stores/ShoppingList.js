import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = []
    @observable length
    @observable location
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }

    @action addItem = (value) => {
        let item = new Item(value)
        this.list.push(item)
    }
    @action editItem = (itemName, newLocation) => {
        let item = this.list.find(i => i.name === itemName)
        item.location = newLocation
    }
    @action deleteItem = (name) => {
        let index = 0
        this.list.map((i, ind) => i.name === name ? index = ind : null)
        this.list.splice(index, 1)
    }
}

