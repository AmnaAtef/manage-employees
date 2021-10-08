
const BASE_URL = "https://employeetaskapi.azurewebsites.net";
const API_URL = BASE_URL + "/api";
const EmployeeManagement = "/EmployeeManagement";
const ALL_EMPLOYEE_URL = "/get";
const ADD_NEW_EMPLOYEE_URL = "/post";
const DELETE_URL = "/Delete";
const EDIT_EMPLOYEE_URL = "/put";

export abstract class EndPoints {
    public static BASE_URL = BASE_URL;
    public static API_URL = API_URL;
    public static ALL_EMPLOYEE_ENDPOINT = API_URL + EmployeeManagement + ALL_EMPLOYEE_URL;
    public static NEW_EMPLOYEE_ENDPOINT = API_URL + EmployeeManagement + ADD_NEW_EMPLOYEE_URL;
    public static DELETE_ENDPOINT_ENDPOINT = API_URL + EmployeeManagement + DELETE_URL;
    public static EDIT_EMPLOYEE_ENDPOINT = API_URL + EmployeeManagement + EDIT_EMPLOYEE_URL;
    
   
}
