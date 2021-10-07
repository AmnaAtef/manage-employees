
const BASE_URL = "https://employeetaskapi.azurewebsites.net";
const API_URL = BASE_URL + "/api";
const ALL_EMPLOYEE_URL = "/EmployeeManagement/get";
const ADD_NEW_EMPLOYEE_URL = "/EmployeeManagment/post";
// const FILTER_URL = "/ActionFilters/FilterEmployee";
// const EDIT_EMPLOYEE_URL = "/EmployeeManagment/put";
const DELETE_URL = "/EmployeeManagment/Delete";

export abstract class EndPoints {
    public static BASE_URL = BASE_URL;
    public static API_URL = API_URL;
    public static ALL_EMPLOYEE_ENDPOINT = API_URL + ALL_EMPLOYEE_URL;
    public static NEW_EMPLOYEE_ENDPOINT = API_URL + ADD_NEW_EMPLOYEE_URL;
    // public static FILTER_ENDPOINT = API_URL + FILTER_URL;
    // public static EDIT_EMPLOYEE_ENDPOINT = API_URL + EDIT_EMPLOYEE_URL;
    public static DELETE_ENDPOINT_ENDPOINT = API_URL + DELETE_URL;
   
}
