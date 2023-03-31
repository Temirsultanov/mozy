const SHEETDB_API_URL = "https://sheetdb.io/api/v1/auj516dixp1eo";

export const fields = {
  name: "data[name]",
  email: "data[email]",
  phone: "data[phone]",
  description: "data[description]",
};

export const sendRequest = (formData) => {
  const phoneWithSpace = formData.get(fields.phone);
  formData.set(fields.phone, phoneWithSpace);
  fetch(SHEETDB_API_URL, {
    method: "POST",
    body: formData,
  });
};
