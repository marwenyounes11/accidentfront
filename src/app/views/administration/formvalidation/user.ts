import {
    propObject,
    prop,
    alphaNumeric, alpha, compare, contains, creditCard, digit, email, greaterThanEqualTo,
    greaterThan, hexColor, json, lessThanEqualTo, lowerCase, maxLength,maxNumber,
    minNumber, password, pattern,
    lessThan, range, required, time, upperCase, url, propArray, minLength, minDate, maxDate
} from "@rxweb/reactive-form-validators";



export class User{
   

    @required()
    @alpha()
    name: string;

    @required()
    @alphaNumeric()
    username: string;

    @required()
    @email()
    email: string;

    @required()
    @compare({ fieldName: "email" })
    confirmEmail: string;

    @required()
    @minLength({value:6})
    password: string;

    @required()
    @compare({ fieldName: "password" })
    confirmPassword: string;

    @required()
    idrole: number;

    

    
  
}
