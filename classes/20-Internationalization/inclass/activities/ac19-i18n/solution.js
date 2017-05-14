  // The title
  $("#title").html("My shopping list");

  // Or the localized title from the message files
  $("#title").html(t("title"));

  // The instructions
  $("#instructions").html(t("instructions", {store: "Whole Foods"}));

  // The list
  $("#list").html("");
  $("#list").append("<li>"+t("items.apple", {count:5})+"</li>");
  $("#list").append("<li>"+t("items.milk", {count:1})+"</li>");
  $("#list").append("<li>"+t("items.icecream", {count:2})+"</li>");
  $("#list").append("<li>"+t("items.steak", {count:2})+"</li>");

  // The date
  $("#date").html("<b>Date: </b>" + moment().format("L"));

  // The price
  $("#price").html("<b>Price: </b>" + numeral(1022.23).format("$0,0.00"));
