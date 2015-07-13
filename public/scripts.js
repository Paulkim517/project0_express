// constructor for blog
function Blog(userName, rant) {
  this.userName = userName;
  this.rant = rant;
  this.items = localStorage.getItem("blogs");
  this.key = "blogs";
  this.items_json = JSON.parse(this.items);
}

SaveRender.prototype.saveToLs = function(obj) {
   this.items_json; // var item =
  if (this.items) {
    item = JSON.parse(this.items);
  } else {
    item = [];
  }
  item.push(obj);
  localStorage.setItem(this.key, JSON.stringify(item));
}
SaveRender.prototype.renderTemplate = function(template_source, where) {
  var template = _.template($(template_source).html());

  _.each(this.items_json, function(item) {
    $(where).append(template(item));
  });
}
Blog.prototype = new SaveRender();
Blog.prototype.constructor = Blog;


$(document).ready(function(){

  // form to create new todo
   var $myBlog = $('#save-book');

  // element to hold our list of todos
  var $blogSpot = $('#blog-template');

   // underscore template
   var template = _.template($("#blog-template").html());
    console.log(template)

  // submit form to create new todo
    $myBlog.on('click', function(event) {
     event.preventDefault();
    

    // create new todo object from form data
    var newNewUser = $('#author').val();
     console.log("suckt it")
    var newRant = $("#rant").val();
    var myBlog = new Blog(newNewUser,newRant);
    myBlog.saveToLs(myBlog);
    myBlog.renderTemplate("#blog-template", "#blog-container");

  
  });


});

///////////////////////////
// render function to fill out information to blog
$(function(){
    var postController = {
      //template compiler
      template: _.template($(template_source).html());

      //pass each post object through the template and append to view
      render: function(postObj){
        var $postHtml = $(postController.template(postObj));
        $("#newBlog").append($postHtml);
      },
      all: function(){
         // send GET request to server to get all phrases
      $.get('/posts', function(data) {
        var allPosts = data;
        
        // iterate through each phrase
        _.each(allPosts, function(post) {
          postController.render(post);
        });
        
        // add event-handers for updating/deleting
        postController.addEventHandlers();
      });
      }
      
    }
});









