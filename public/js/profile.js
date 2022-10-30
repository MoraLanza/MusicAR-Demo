window.addEventListener('load', function(){

    // show and hide forms div 

    const btnFormEdit = document.querySelector('#edit-profile-btn')
  
    const divFormEdit = document.querySelector('#editProfile')
  
    const btnFormCancel = document.querySelector('#cancelEditForm')

    btnFormEdit.addEventListener('click', function(e){
        e.preventDefault();
        divFormEdit.classList.remove('element-animation-back');        
        divFormEdit.classList.remove('d-none');
    });

    btnFormCancel.addEventListener('click', function(e){
        e.preventDefault();
        divFormEdit.classList.add('element-animation-back')
        setTimeout(function(){
            divFormEdit.classList.add('d-none'); 
        }, 1800)
    });


    const btnFormPassword = document.querySelector('#edit-password-btn')
  
    const divFormPassword = document.querySelector('#editPassword')
  
    const btnFormCancelPassword = document.querySelector('#cancelPasswordForm')

    btnFormPassword.addEventListener('click', function(e){
        e.preventDefault();
        divFormPassword.classList.remove('element-animation-back');        
        divFormPassword.classList.remove('d-none');
    });

    btnFormCancelPassword.addEventListener('click', function(e){
        e.preventDefault();
        divFormPassword.classList.add('element-animation-back')
        setTimeout(function(){
            divFormPassword.classList.add('d-none'); 
        }, 1800)
    });


    // Paginador

    const paginationNumbers = document.getElementById("pagination-numbers");
    const paginatedList = document.getElementById("paginated-list");
    const listItems = paginatedList.querySelectorAll("tr");
    const nextButton = document.getElementById("next-button");
    const prevButton = document.getElementById("prev-button");
    
    const paginationLimit = 10;
    const pageCount = Math.ceil(listItems.length / paginationLimit);
    let currentPage = 1;
    
    const disableButton = (button) => {
      button.classList.add("disabled");
      button.setAttribute("disabled", true);
    };
    
    const enableButton = (button) => {
      button.classList.remove("disabled");
      button.removeAttribute("disabled");
    };
    
    const handlePageButtonsStatus = () => {
      if (currentPage === 1) {
        disableButton(prevButton);
      } else {
        enableButton(prevButton);
      }
    
      if (pageCount === currentPage) {
        disableButton(nextButton);
      } else {
        enableButton(nextButton);
      }
    };
    
    const handleActivePageNumber = () => {
      document.querySelectorAll(".pagination-number").forEach((button) => {
        button.classList.remove("active");
        const pageIndex = Number(button.getAttribute("page-index"));
        if (pageIndex == currentPage) {
          button.classList.add("active");
        }
      });
    };
    
    const appendPageNumber = (index) => {
      const pageNumber = document.createElement("button");
      pageNumber.className = "pagination-number";
      pageNumber.innerHTML = index;
      pageNumber.setAttribute("page-index", index);
      pageNumber.setAttribute("type", 'button');
      pageNumber.setAttribute("aria-label", "Page " + index);
    
      paginationNumbers.appendChild(pageNumber);
    };
    
    const getPaginationNumbers = () => {
      for (let i = 1; i <= pageCount; i++) {
        appendPageNumber(i);
      }
    };
    
    const setCurrentPage = (pageNum) => {
      currentPage = pageNum;
    
      handleActivePageNumber();
      handlePageButtonsStatus();
      
      const prevRange = (pageNum - 1) * paginationLimit;
      const currRange = pageNum * paginationLimit;
    
      listItems.forEach((item, index) => {
        item.classList.add("d-none");
        if (index >= prevRange && index < currRange) {
          item.classList.remove("d-none");
        }
      });
    };

    getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });


});