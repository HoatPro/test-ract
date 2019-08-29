'use strict';

const elk = require('./facade/elastic-facade');
const Mysql = require('../my-sql/facade/backend')
const mysql = new Mysql(console)

async function testSearch() {
    const data = await elk.search({
        index: 'raca-log*',
        body: {
            "query": {
                "bool": {
                    "must": [
                        {
                            "term": {
                                "function.keyword": {
                                    "value": "surveyDC"
                                }
                            }
                        }
                    ]
                }
            },
            from: 0,
            size: 1000

        }
    });


//     const dataNew = data.hits.hits;
//     console.log(dataNew);
//     dataNew.map(data => {
//         // let item = data._source.data.body;
//         // console.log(item)
//
//         function getSurveyDC() {
//             // const body = req.body;
//             let result = {};
//             const getData = data;
//             console.log(getData);
//             try {
//                 const query = `insert into tbl_SurveyDevice (ID, ACCESSSTATUSID, PRIORITYTYPEID, updatedby, DESCRIPTIONEXCESS, ISREQUESTNOC, ISREQUESTNOC, ADDRESSIP,
// DATACENTERDEPLOYID,DATACENTERDEPLOYID,REGISTRATIONDETAILCODE,SERVICETYPEID,LOCATIONID,CUSTOMERNAME,CONTRACTNUMBER,CONTRACTDATE,USERNAME,FROMDATE_CONTRACT,TODATE_CONTRACT,SALEPROMOTIONINFORMATION,
// CONTACTNAME,CONTACTPHONENUMBER,CREATEDBY,CREATEDDATE,SALENAME,SALENAME,CAPACITYONEPOWER,APACITYTWOPOWER,IPNUMBER,BRANDNAME,CPU,RAM,HDD,BANDWIDTHLOCAL,
// BANDWIDTHINTER,NETWORKSOCKET,INTERNETCABLE,MANAGERSERVERADD,FIREWALLADD,CPANELADD,OSADD,DESIGNRACK,CAPACITYRACK,RENTSPACE,SERVERINSTALLEDNUMBER,POWERSUPPYRACK,PDUSTANDARD,capacitytotaL1RACK,capacitymaX1RACK,IPFREE,IPNOTFREE) values ?`;
//                 mysql.query(query, [[[item.ID, item.ACCESSSTATUSID, item.PRIORITYTYPEID, item.updatedby, item.DESCRIPTIONEXCESS, item.ISREQUESTNOC, item.ISREQUESTNOC, item.ADDRESSIP,
//                     item.DATACENTERDEPLOYID, item.DATACENTERDEPLOYID, item.REGISTRATIONDETAILCODE, item.SERVICETYPEID, item.LOCATIONID, item.CUSTOMERNAME, item.CONTRACTNUMBER, item.CONTRACTDATE, item.USERNAME, item.FROMDATE_CONTRACT, item.TODATE_CONTRACT, SALEPROMOTIONINFORMATION,
//                     item.CONTACTNAME, item.CONTACTPHONENUMBER, item.CREATEDBY, item.CREATEDDATE, item.SALENAME, item.DEVICESIZE, item.CAPACITYONEPOWER, item.APACITYTWOPOWER, item.IPNUMBER, item.BRANDNAME, item.CPU, item.RAM, item.HDD, item.BANDWIDTHLOCAL,
//                     item.BANDWIDTHINTER, item.NETWORKSOCKET, item.INTERNETCABLE, item.MANAGERSERVERADD, item.FIREWALLADD, item.CPANELADD, item.OSADD, item.DESIGNRACK, item.CAPACITYRACK, item.RENTSPACE, item.SERVERINSTALLEDNUMBER, item.POWERSUPPYRACK, item.PDUSTANDARD, item.capacitytotaL1RACK, item.capacitymaX1RACK, item.IPFREE, item.IPNOTFREE]]], resp => {
//                     if (_.isNull(resp)) {
//                         result = {
//                             status: 500,
//                             message: "Insert failed!"
//                         };
//                     } else {
//                         result = {
//                             status: 200,
//                             message: "Insert sucessful!",
//                             data: {
//                                 contractId: resp.insertId
//                             }
//                         };
//                     }
//                     // res.json(result);
//                 });
//
//
//             } catch (error) {
//                 // elk.error({
//                 //     controller: 'init-controller',
//                 //     function: 'surveyDC',
//                 //     error: {
//                 //         message: error.message,
//                 //         stack: error.stack
//                 //     },
//                 //     // data: {
//                 //     //     body: body,
//                 //     // }
//                 // });
//                 result = {
//                     status: 500,
//                     message: "Failed!"
//                 };
//                 // res.json(result);
//             }
//         }
//         const a=getSurveyDC();
//         console.log(a)
//     })
//

}

testSearch();

