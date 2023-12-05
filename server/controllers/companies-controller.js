const Companies = require('../models/companies.js');

const companies = new Companies();

const allCompanies = async (_, res) => {
  try {
    const allCompany = await companies.getCompanies();
    res.status(200).json(allCompany);
  } catch (err) {
    console.error(err);
  }
};

const getCurrentCompanyInfo = async (_, res) => {
  try {
    const currentInfo = await companies.getCurrentInfo();
    res.status(200).json(currentInfo);
  } catch (error) {
    console.error(error.message);
  }
};

const getCurrentCompanyOffers = async (req, res) => {
  try {
    const { companyId } = req.params;
    const offers = await companies.getCurrentOffers(companyId);
    res.status(200).json(offers);
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = {
  allCompanies,
  getCurrentCompanyInfo,
  getCurrentCompanyOffers,
};