const fetch = require("node-fetch");

module.exports = async (req, res) => {
  const apiKey = process.env.ZOHO_API_KEY; // Store your API key in an environment variable
  const url = "https://www.zohoapis.com/crm/v2/Deals";

  const headers = new Headers({
    Authorization: `Zoho-oauthtoken ${apiKey}`,
    "Content-Type": "application/json",
  });

  try {
    const response = await fetch(url, { method: "GET", headers: headers });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching data from Zoho CRM." });
  }
};
