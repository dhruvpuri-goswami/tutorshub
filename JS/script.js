function moveToAuthPage(){
    console.log("reach1")
    window.location.href = "./Auth/"
}


const currentLink = document.querySelectorAll('.nav-list-wrap ul li a');

currentLink.forEach((a) => {
    if (a.href.split("?")[0] == window.location.href.split("?")[0]){
        a.children[0].style.color = '#ff9800';
        a.children[1].style.color = '#ff9800';
    }else{
        a.classList.remove('currentLink');
        a.children[0].style.color = 'rgba(52, 52, 52, 0.874)';
        a.children[1].style.color = 'rgba(52, 52, 52, 0.874)';
    }
}) 

