//Return true if the user has clicked on the 
//about link, false otherwise.
//TODO: Theres probably a better way to handle this...
Template.content.displayAbout = function() {
  if (Session.get("currentPage") == 'about') {
    return true;
  }else{
    return false;
  }
};
