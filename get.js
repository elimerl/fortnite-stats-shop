$.get("https://fortnite-api.com/v2/shop/br/combined", function(data, status){
    
    // to make this easier
    console.log(data);
    var shop = data;
    var output;

    // the processing of the json
    // daily
    for (let index = 0; index < shop.data.daily.entries.length; index++) {
      var entry = shop.data.daily.entries[index];
      // console logs
      console.log(entry.items[0].name);
      console.log(entry.regularPrice);
      console.log(entry.items[0].rarity.value);
      console.log(getImage(index, entry));
      // generate html/css
      document.getElementById("d" + index).innerHTML += "<a href='https://fnbr.co/"+ entry.items[0].type.value +"/"+ entry.items[0].name.replace(/\s+/g, '-').toLowerCase() +"'><img src='" + entry.items[0].images.icon + "' width='250' height='250'  style='background-color: " + getRarityColor(entry.items[0].rarity.value) + "' /></a><p>" + entry.items[0].name + "</p> <p>" + entry.regularPrice + "   <img src='https://purepng.com/public/uploads/medium/one-v-buck-izo.png'width='25px' height='25px'/>  </p><p>"+ entry.items[0].description +"</p>     <p><i>" + entry.items[0].introduction.text + "</i></p><p>This item has come back " + entry.items[0].shopHistory.length + " times. DAILY<p/>"
    }
    // featured
    for (let index = 0; index < shop.data.featured.entries.length; index++) {
      var entry = shop.data.featured.entries[index];
      // console logs
      console.log(entry.items[0].name);
      console.log(entry.regularPrice);
      console.log(entry.items[0].rarity.value);
      if (entry.items[0].images.featured!=null) {
        console.log(entry.items[0].images.featured);
      } else {
        console.log(entry.items[0].images.icon);
      }
      // generate html/css
      document.getElementById("f" + index).innerHTML += "<a href='https://fnbr.co/"+ entry.items[0].type.value +"/"+ entry.items[0].name.replace(/\s+/g, '-').toLowerCase() +"'><img src='" + getImage(index,entry) + "' width='250' height='250'  style='background-color: " + getRarityColor(entry.items[0].rarity.value) + "' /></a><p>" + entry.items[0].name + "</p> <p>" + entry.regularPrice + "    <img src='https://purepng.com/public/uploads/medium/one-v-buck-izo.png' width='25px' height='25px'/>   </p><p>"+ entry.items[0].description +"</p>     <p><i>" + entry.items[0].introduction.text + "</i></p><p>This item has come back " + entry.items[0].shopHistory.length + " times. FEATURED</p>"
    }
  });
function getRarityColor(rarity) {
  if (rarity=="legendary") {
    return "#d1ba24"
  }
  if (rarity=="epic") {
    return "#a323e8"
  }
  if (rarity=="rare") {
    return "#1d95d1"
  }
  if (rarity=="uncommon") {
    return "#1fd146"
  }
}
function getImage(index, entry) {
  if (entry.items[0].images.featured!=null) {
    return entry.items[0].images.featured;
  } else {
    return entry.items[0].images.icon;
  }
}