// https://stackoverflow.com/questions/16424659/check-if-a-string-contains-an-email-address

export const useContactValidation = (listContact) => {
  const finalListContact = [];
  if (listContact) {
    listContact.forEach((contact) => {
      if (
        contact.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
      ) {
        finalListContact.push(`mailto:${contact}`);
      } else if (contact.includes("www")) {
        finalListContact.push(`https://${contact}`);
      }
      else {
        finalListContact.push(`tel:${contact}`);
      }
    });
  }
  return finalListContact;
};
