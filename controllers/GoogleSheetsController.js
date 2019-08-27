const GoogleSpreadSheet = require("google-spreadsheet");
const { promisify } = require("util");
const creds = require("./client_secret.json");

GoogleSheetsController = {
  getCampaings: async function accessSpreadsheet(amount) {
    const campaigns = [];
    const doc = new GoogleSpreadSheet(
      "1qFJzC_RkAjwMLu2xFMmZORFAoFW0AtHByDlSkbrJ1X4"
    );
    await promisify(doc.useServiceAccountAuth)(creds);
    const info = await promisify(doc.getInfo)();
    const campaingsSheet = info.worksheets[0];
    console.log('Title: ${sheet.title}, Rows: ${sheets.rowCount}')
    const cells = await promisify(campaingsSheet.getCells)({
      "min-row": 2,
      "max-row": 2 + (amount - 1),
      "min-col": 15,
      "max-col": 15
    });
    for (const cell of cells) {
      let campaign = JSON.parse(cell.value);
      campaigns.push(campaign);
    }
    return campaigns;
  }
};

module.exports = GoogleSheetsController;


 // const GoogleSpreadSheet = require("google-spreadsheet");
 // const { promisify } = require("util");
 // const creds = require("./client_secret.json");

 // async function accessSpreadsheet(){

 //   const doc = new GoogleSpreadSheet('1qFJzC_RkAjwMLu2xFMmZORFAoFW0AtHByDlSkbrJ1X4');
 //   await promisify(doc.useServiceAccountAuth)(creds)
 //   const info = await promisify(doc.getInfo)();
 //   const sheet = info.worksheets[0];
 //   console.log(`Title: ${sheet.Title}, Rows: ${sheets.rowCount}`)
 // }

 // accessSpreadsheet();