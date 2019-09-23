// formal full name
function getFullNameFormal(useFormalName, firstname, surname) {
    if (useFormalName) {
        return ("Lord" + "" + "firstname" + "" + "surname");
    }
    else {
        return (firstname + "" + surname);
    }
}
