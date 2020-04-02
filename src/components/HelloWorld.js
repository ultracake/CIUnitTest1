const functions = 
{
  selectPhone(phones, phoneToSelect) 
  {
    phones.push(phoneToSelect)
  },
  
  deselectPhone(phones, phoneToDeselect)
  {
    phones.splice(phones.indexOf(phoneToDeselect), 1)
  },

  buy(price, internet, phoneLines, phones)
  {
    if(price === 0) 
    {
      alert("You have not selected to buy anything")
    }

    var tempString = "";
    if(internet) tempString += "Internet selected\n"
    if(phoneLines > 0) tempString += "Selected phone lines: " + phoneLines + "\n"
    if(phones.length>0) tempString += "Phones selected: \n"
    
    for (let i = 0; i <phones.length ; i++)
    {
      tempString += phones[i] + "\n"
    }
    tempString += "Total price: " + price + "DKK"
    alert(tempString)
  },

  price(internet, phoneLines, phones, phonePrices) 
  {
      var tempPrice = 0;
      if (internet) tempPrice += 200;
      tempPrice += (150 * phoneLines);

      for (let i = 0; i < phones.length; i++)
      {
        tempPrice += phonePrices[phones[i]]
      }
      return tempPrice
  }
}

module.exports = functions;




