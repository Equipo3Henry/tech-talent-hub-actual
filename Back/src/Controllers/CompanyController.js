const { Company } = require("../db");

const createCompany = async (company) => {
    const { name, image, type, description, employes, jobs } = company;

    const newCompany = await Company.create({
        name: company.name,
        image: company.image,
        type: company.type,
        description: company.description,
        employes: company.employes,
        jobs: company.jobs
    })
}

module.exports = { createCompany }