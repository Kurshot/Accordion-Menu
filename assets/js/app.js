let acc = document.querySelectorAll('.btn')

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");

      var icon = this.firstElementChild;
      var parentDiv = this.parentElement;

      if(!parentDiv.classList.contains('active')){
        icon.classList.remove('fa-circle-plus');
        icon.classList.add('fa-circle-minus');
        parentDiv.classList.add('active');
      }
      else{
        icon.classList.remove('fa-circle-minus');
        icon.classList.add('fa-circle-plus');
        parentDiv.classList.remove('active');
      }



    });
  }