let port = 8085;
let myServiceLink = `http://localhost:${port}`;
let myMockApiLink = "https://private-3fc19-insaatapi1.apiary-mock.com/";

let getCityLink = `${myServiceLink}/getCityListService`;
let postCityLink = `${myServiceLink}/postCityService`;
let putCityLink = `${myServiceLink}/putCityService`;
let deleteCityLink = `${myServiceLink}/deleteCityService`;
let getCustomerLink = `${myServiceLink}/getCustomerListService`;
let postCustomerLink = `${myServiceLink}/postCustomerService`;
let putCustomerLink = `${myServiceLink}/putCustomerService`;
let deleteCustomerLink = `${myServiceLink}/deleteCustomerService`;
let getEmployeeLink = `${myServiceLink}/getEmployeeListService`;
let postEmployeeLink = `${myServiceLink}/postEmployeeService`;
let putEmployeeLink = `${myServiceLink}/putEmployeeService`;
let deleteEmployeeLink = `${myServiceLink}/deleteEmployeeService`;
let getProjectLink = `${myServiceLink}/getProjectListService`;
let postProjectLink = `${myServiceLink}/postProjectService`;
let putProjectLink = `${myServiceLink}/putProjectService`;
let deleteProjectLink = `${myServiceLink}/deleteProjectService`;
let getProjectStatusLink = `${myServiceLink}/getProjectStatusListService`;
let postProjectStatusLink = `${myServiceLink}/postProjectStatusService`;
let putProjectStatusLink = `${myServiceLink}/putProjectStatusService`;
let deleteProjectStatusLink = `${myServiceLink}/deleteProjectStatus`;
let getFlatLink = `${myServiceLink}/getFlatListService`;
let postFlatLink = `${myServiceLink}/postFlatService`;
let putFlatLink = `${myServiceLink}/putFlatService`;
let deleteFlatLink = `${myServiceLink}/deleteFlatService`;
let getFlatTypeLink = `${myServiceLink}/getFlatTypeListService`;
let postFlatTypeLink = `${myServiceLink}/postFlatTypeService`;
let putFlatTypeLink = `${myServiceLink}/putFlatTypeService`;
let deleteFlatTypeLink = `${myServiceLink}/deleteFlatTypeService`;
let getFlatStatusLink = `${myServiceLink}/getFlatStatusListService`;
let postFlatStatusLink = `${myServiceLink}/postFlatStatusService`;
let putFlatStatusLink = `${myServiceLink}/putFlatStatusService`;
let deleteFlatStatusLink = `${myServiceLink}/deleteFlatStatusService`;
let getGenderLink = `${myServiceLink}/getGenderListService`;
let postGenderLink = `${myServiceLink}/postGenderService`;
let putGenderLink = `${myServiceLink}/putGenderService`;
let deleteGenderLink = `${myServiceLink}/deleteGenderService`;
let getIncomeTypeLink = `${myServiceLink}/getIncomeTypeListService`;
let postIncomeTypeLink = `${myServiceLink}/postIncomeTypeService`;
let putIncomeTypeLink = `${myServiceLink}/putIncomeTypeService`;
let deleteIncomeTypeLink = `${myServiceLink}/deleteIncomeTypeService`;
let getSaleLink = `${myServiceLink}/getSaleListService`;
let postSaleLink = `${myServiceLink}/postSaleService`;
let putSaleLink = `${myServiceLink}/putSaleService`;
let deleteSaleLink = `${myServiceLink}/deleteSaleService`;
let getVisitLink = `${myServiceLink}/getVisitListService`;
let postVisitLink = `${myServiceLink}/postVisitService`;
let putVisitLink = `${myServiceLink}/putVisitService`;
let deleteVisitLink = `${myServiceLink}/deleteVisitService`;
let postLoginLink = `${myServiceLink}/postLogin`;


module.exports = {
  GetCityLink: getCityLink,
  PostCityLink: postCityLink,
  PutCityLink: putCityLink,
  DeleteCityLink: deleteCityLink,
  GetCustomerLink: getCustomerLink,
  PostCustomerLink: postCustomerLink,
  PutCustomerLink: putCustomerLink,
  DeleteCustomerLink: deleteCustomerLink,
  GetEmployeeLink: getEmployeeLink,
  PostEmployeeLink: postEmployeeLink,
  PutEmployeeLink: putEmployeeLink,
  DeleteEmployeeLink: deleteEmployeeLink,
  GetProjectLink: getProjectLink,
  PostProjectLink: postProjectLink,
  PutProjectLink: putProjectLink,
  DeleteProjectLink: deleteProjectLink,
  GetProjectStatusLink: getProjectStatusLink,
  PostProjectStatusLink: postProjectStatusLink,
  PutProjectStatusLink: putProjectStatusLink,
  DeleteProjectStatusLink: deleteProjectStatusLink,
  GetGenderLink: getGenderLink,
  PostGenderLink: postGenderLink,
  PutGenderLink: putGenderLink,
  DeleteGenderLink: deleteGenderLink,
  GetIncomeTypeLink: getIncomeTypeLink,
  PostIncomeTypeLink: postIncomeTypeLink,
  PutIncomeTypeLink: putIncomeTypeLink,
  DeleteIncomeTypeLink: deleteIncomeTypeLink,
  GetFlatLink: getFlatLink,
  PostFlatLink: postFlatLink,
  PutFlatLink: putFlatLink,
  DeleteFlatLink: deleteFlatLink,
  GetFlatTypeLink: getFlatTypeLink,
  PostFlatTypeLink: postFlatTypeLink,
  PutFlatTypeLink: putFlatTypeLink,
  DeleteFlatTypeLink: deleteFlatTypeLink,
  GetFlatStatusLink: getFlatStatusLink,
  PostFlatStatusLink: postFlatStatusLink,
  PutFlatStatusLink: putFlatStatusLink,
  DeleteFlatStatusLink: deleteFlatStatusLink,
  GetSaleLink: getSaleLink,
  PostSaleLink: postSaleLink,
  PutSaleLink: putSaleLink,
  DeleteSaleLink: deleteSaleLink,
  GetVisitLink: getVisitLink,
  PostVisitLink: postVisitLink,
  PutVisitLink: putVisitLink,
  DeleteVisitLink: deleteVisitLink,
  postLoginLink: postLoginLink
};
