const campaigns = require("./campaigns"); //mudanca habilitado
//const GoogleSheetsController = require("./GoogleSheetsController"); //mudanca

CreateOnsiteController = {
  campaignCreator: async function createCampaigns(page, amount, browser) {
    console.log("");
    console.log("=======================================");
    console.log("   Upload de campanhas inicializado!   ");
    console.log("=======================================");
    console.log("");
    //const campaigns = await GoogleSheetsController.getCampaings(amount); //mudança 
    for (let i = 0; i < campaigns.length; i++) {
      await page.goto(
        `https://panel.soclminer.com.br/app/${campaigns[i].customer}`,
        { waitUntil: "load", timeout: 0 }
        );
      // go to manual campaign creation
      page.goto(
        "https://panel.soclminer.com.br/plugin/onsite/Create",
        { waitUntil: "load", timeout: 0 }
      );
    //  await page.waitForSelector("#btnTest");
    //  await page.waitFor(2000);
    //  await page.waitForSelector("#linkRedirect");
    //  await page.type("#linkRedirect", campaigns[i].link);
    //  await page.click("#scheduleCampaign");
    //  await page.waitFor(2000);
     // await page.evaluate(
      //  () => (document.querySelector("#campaignStartDate").value = "")
     // );
     // if (campaigns[i].image == "sim") {
      //  await page.click("#campaignImage");
      //}

      const selector = "#formOnsite > section:nth-child(6) > div > div > div.campo > div > button:nth-child(1)"
      await page.waitFor(1000);
      await page.click(selector);
      //await page.click('.btn.m0.f1'); modo antigo de usar 
      await page.waitFor(1000);
      console.log("capturado desktop");

      await page.waitFor(1000);
      await page.waitForSelector("#pluginName");    
      await page.waitFor(1000);
      await page.type("#pluginName", campaigns[i].name);
      console.log("capturado nome do onsite");

      await page.waitFor(1000);
      await page.type("#ruleWhiteText", campaigns[i].text); //selecionar o dominio da WHITELIST
      console.log("capturado o dominio da WHITELIST")

      await page.waitFor(1000);
      const regra1 = "#checkTimeInSite"
      await page.click(regra1);
      console.log("capturado primeira regra de exibição Onsite")

      await page.waitFor(1000);
      await page.type("#pluginLinkView", campaigns[i].link); //selecionar o dominio da WHITELIST
      console.log("capturado link do destino Onsite")

      await page.waitFor(1000);
      const teste = "#formOnsite > section:nth-child(20) > div > p:nth-child(2) > button.btn.ml0.destaque"
      await page.click(teste);
      await page.waitFor(1000);
      console.log("capturado a URL Teste");

      await page.waitFor(2000);
      await page.click("#formOnsite > section:nth-child(20) > div > p:nth-child(2) > button.btn.ml0.destaque");
      await page.waitFor(2000);
      console.log("capturado botão SALVAR");

      await page.waitFor(2000);
      await page.click("#submitOnsiteMessage");
      await page.waitFor(2000);

      //const pages = await browser.pages();
      //const link = pages[pages.length - 1];
      //await page.waitFor(1000);
      //await link.close();
      //wait page.waitFor(1000);


      //await page.type("#title", campaigns[i].title);
      //await page.type("#message", campaigns[i].message);
      //await page.waitFor(1000);
      //await page.click("#AudienceId");
      //await page.select("#AudienceId", campaigns[i].audience);
      //await page.waitFor(2000);
      //await page.click("#btnTest");
      //await page.waitFor(3000);
      
      //console.log(campaigns[i].test);
      //if (campaigns[i].test == 'Não') {
        //await page.waitFor(1000);
        //const pages = await browser.pages();
        //console.log(pages);
        //const link = pages[pages.length - 1];
        //await page.waitFor(1000);
        //await link.close();
        ///await page.waitFor(1000);
      }


      //await page.waitForSelector("#submitAutomaticPush");
      //await page.click("#submitAutomaticPush");
      //console.log(`Campanha '${campaigns[i].name}' concluída!`);
      //onsole.log(`${i + 1} de ${campaigns.length} Feito`);
      console.log("Onsite elaborado");
    }
  };

module.exports = CreateOnsiteController;
