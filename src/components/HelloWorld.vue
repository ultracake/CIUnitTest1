<template>
  <div class="hello">
    <div class="text-center">
      <h1>KEANet</h1>
      <div>
        <input type="checkbox" id="chkInternetConnection" v-model="internet">
        <label for="chkInternetConnection">Internet connection</label>
        <br>
        <label for="txtPhoneLines">Phone lines</label>
        <input type="number" id="txtPhoneLines" value="0" min="0" max="8" v-model="phoneLines">
        <br>
        <label>Cell phones:</label>
        <br>
        <table>
          <tr>
            <td>
              <select id="txtCellPhones" size="5" v-model="phoneToSelect">
                <option value="Motorola G99">Motorola G99</option>
                <option value="iPhone 99">iPhone 99</option>
                <option value="Samsung Galaxy 99">Samsung Galaxy 99</option>
                <option value="Sony Xperia 99">Sony Xperia 99</option>
                <option value="Huawei 99">Huawei 99</option>
              </select>
            </td>
            <td>
              <input type="button" value="&gt;" v-on:click="selectPhone()">
              <br>
              <input type="button" value="&lt;" v-on:click="deselectPhone(phoneToDeselect)">
            </td>
            <td>
              <select id="txtChosenCellPhones" size="5" style="width: 150px" v-model="phoneToDeselect">
                <option v-bind:key="phone" v-for="phone in phones">{{phone}}</option>
              </select>
            </td>
          </tr>
        </table>
        <br>
        Total price: {{price}} DKK
        <br>
        <input type="submit" value="Buy" v-on:click="buy">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      phoneToSelect: "",
      phoneToDeselect: "",
      phones: [],
      internet: false,
      phoneLines: 0,
      phonePrices: {
        "Motorola G99": 800,
        "iPhone 99": 6000,
        "Samsung Galaxy 99": 1000,
        "Sony Xperia 99": 900,
        "Huawei 99": 900
      }
    }
  },
  methods: {
    selectPhone() {
      this.phones.push(this.phoneToSelect)
    },
    deselectPhone(){
      this.phones.splice(this.phones.indexOf(this.phoneToDeselect), 1)
    },
    buy() {
      if(this.price === 0) {
        alert("You have not selected to buy anything")

      }
      var tempString = "";
      if(this.internet) tempString += "Internet selected\n"
      if(this.phoneLines > 0) tempString += "Selected phone lines: " + this.phoneLines + "\n"
      if(this.phones.length>0) tempString += "Phones selected: \n"
      for (let i = 0; i <this.phones.length ; i++) {
        tempString += this.phones[i] + "\n"
      }
      tempString += "Total price: " + this.price + "DKK"
      alert(tempString)
    }
  },
  computed: {
    price() {
      var tempPrice = 0;
      if (this.internet) tempPrice += 200;
      tempPrice += (150 * this.phoneLines);
      for (let i = 0; i < this.phones.length; i++) {
        tempPrice += this.phonePrices[this.phones[i]]
      }
      return tempPrice
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
