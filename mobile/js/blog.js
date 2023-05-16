//$(document).ready(function(){
//    $('.your-class').slick({
//      setting-name: setting-value
//    });
//  });


window.addEventListener('scroll', function() {
  var articleAlsolike = document.querySelector('.article_alsolike');
  var leftArticle = document.querySelector('.left_article');

  var articleAlsolikePosition = articleAlsolike.getBoundingClientRect().top;
  var windowHeight = window.innerHeight;

  if (articleAlsolikePosition < windowHeight) {
    leftArticle.classList.add('hidden-text');
  } else {
    leftArticle.classList.remove('hidden-text');
  }
});