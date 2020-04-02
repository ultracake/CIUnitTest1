const functions = require('./HelloWorld');

 //setup
 var phoneToSelect = "";
 var phoneToDeselect = "";
 var phones = [];
 var internet = false;
 var phoneLines = 0;
 var phonePrices =
 {
     "Motorola G99": 800,
     "iPhone 99": 6000,
     "Samsung Galaxy 99": 1000,
     "Sony Xperia 99": 900,
     "Huawei 99": 900
 };

test('test price', () => 
{
    functions.selectPhone(phones, "Motorola G99");
    functions.selectPhone(phones, "Samsung Galaxy 99");
    expect(functions.price(internet, phoneLines, phones, phonePrices)).toBe(1800);

    functions.deselectPhone(phones, "Motorola G99");
    expect(functions.price(internet, phoneLines, phones, phonePrices)).toBe(1000);

    internet = true;
    expect(functions.price(internet, phoneLines, phones, phonePrices)).toBe(1200);

    phoneLines = 3;
    expect(functions.price(internet, phoneLines, phones, phonePrices)).toBe(1650);
});


