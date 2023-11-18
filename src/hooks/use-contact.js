// https://stackoverflow.com/questions/16424659/check-if-a-string-contains-an-email-address

export const useContactValidation = (listContact) => {
  const finalListContact = [];
  if (listContact) {
    listContact.forEach((contact) => {
      if (
        contact.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi)
      ) {
        finalListContact.append(`mailto:${contact}`);
      } else {
        finalListContact.append(`tel:${contact}`);
      }
    });
  }
  return finalListContact;
};
