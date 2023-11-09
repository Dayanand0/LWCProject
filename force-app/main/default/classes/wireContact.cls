public with sharing class wireContact {
    @AuraEnabled(cacheable=true)
    public static List<Contact> findContacts(string searchtext){
        string key='%'+searchtext+'%';
        return [select Id, Name from Contact where firstname like:key];
        
    }
    
}