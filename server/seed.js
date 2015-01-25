if (Contacts.find().count() === 0)
{
    Contacts.insert(
        {
            firstname: "John",
            lastname: "Smith"
        }
    );

    Contacts.insert(
        {
            firstname: "Jane",
            lastname: "Doe"
        }
    );

    Contacts.insert(
        {
            firstname: "Leon",
            lastname: "Benko"
        }
    );

    Contacts.insert(
        {
            firstname: "Milos",
            lastname: "Stojcev"
        }
    );


    Contacts.insert(
        {
            firstname: "Amer",
            lastname: "Dupovac"
        }
    );


}