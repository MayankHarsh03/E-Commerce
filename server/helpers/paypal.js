const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AVro5PbXY8NeGMiMZ93J8sH74lzuFw87WF56tgyuitpDWTAwcSLm2CjLAQEHeHC_oV275yxn7GWjATIj",
  client_secret: "EEn-OFeIjFTgQ-kl8j9UEyQsSKYP9QVQkm8JnJEpkyFwVufFCTMhcN_BxR88j7BovWuVCP8cmDLUPhTJ",
});

module.exports = paypal;