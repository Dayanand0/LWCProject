import { LightningElement, wire } from 'lwc';
import findContacts from '@salesforce/apex/wireContact.findContacts';

export default class WireDecorator extends LightningElement {
    searchkey;

    handlechange(event){
        this.searchkey=event.target.value;
    }
    //***wire a property */
    @wire(findContacts,{searchtext:'$searchkey'}) contact;
    //**wire a function */
}