import Rails from '@rails/ujs';
import $ from 'jquery';

/* ES6 version for this: */
$(() =>
  $('button#ajax_button').on('click', () => thisFunction())
);

function thisFunction() {
  data = [
      { "id": "1", "text": "Chairman & CEO" },
      { "id": "2", "text": "Manager", "parent": "1" },
      { "id": "3", "text": "Technical Director", "parent": "1" },
      { "id": "2.1", "text": "Marketer", "parent": "2" },
      { "id": "3.1", "text": "Team Lead", "parent": "3" }
  ];
  Rails.ajax({
    url: "save",
    type: "post",
    data: data
  //   success: function(data) {},
  //   error: function(data) {}
  });
  console.log("Data transmission successfull");
};


/*
document.addEventListener("turbolinks:load", () => {
  const links = document.querySelectorAll(
    "button[data-save-json]"
  );
  links.forEach((element) => {
    element.addEventListener("click", (event) => {
      event.thisFunction();
    });
  });
  function thisFunction() {
    data = [
        { "id": "1", "text": "Chairman & CEO" },
        { "id": "2", "text": "Manager", "parent": "1" },
        { "id": "3", "text": "Technical Director", "parent": "1" },
        { "id": "2.1", "text": "Marketer", "parent": "2" },
        { "id": "3.1", "text": "Team Lead", "parent": "3" }
    ];
    Rails.ajax({
      url: "diagram/save",
      type: "post",
      data: data
    //   success: function(data) {},
    //   error: function(data) {}
    });
  };
});
*/
