const template = document.createElement('template');
template.innerHTML = `
       <div class="header">
  <a href="#default" class="logo">flowerfields.com</a>
  <div class="header-right">
    <a class="active" href="index.html"> welcome | </a> 
    <a href="daisy.html">recent blogs | </a> </div>
    <a href = "tulip.html">programmer blogs | </a>
    <a href = "poppy.html"> writing blogs | </a> 
    <a href = "jasmine.html">normal blogs | </a> 
    <a href = "storage.html">all blogs | </a> 
    <a href="visit.html">about me </a> 
  </div>
</div>
`

document.body.appendChild(template.content);
