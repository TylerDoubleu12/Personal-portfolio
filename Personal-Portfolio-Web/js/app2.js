const navBar = document.querySelector('navbar');
const stn = document.querySelectorAll('section');
const navLink = document.querySelector('ul');


//build dynamic navigation bar...//

function createNavBar(){

    stn.forEach((section)=>{
        
        const h2 = document.querySelector('section h2')
        //create elements and append to the navbar//
        const L = document.createElement('li');
        const A = document.createElement('a');
        A.classList.add("active");
        A.append(L);

        // let dataset for each section = the list nane//
        let sectName = section.dataset.nav;
        L.innerHTML = sectName;
        navLink.appendChild(L);

        //when listLink clicked scroll to section into view // 
        L.addEventListener("click",(e)=>{
            e.preventDefault();
            if(A.classList.contains("active")===true){
                section.scrollIntoView({behavior:"smooth"});
                h2.classList.add("active");
            }
        })

        //when click on listLink make sure active hyperlink is called //
        const lis = document.querySelectorAll('.navtag li ');
        
        for(const li of lis){
            li.onclick = ()=>{
                for(const li of lis){
                    li.className = "";
                }
            li.classList.add("active");
            }
        };

    })
   
    function createActiveState() {
        
        stn.forEach((section) => {
         
          let sVB = section.getBoundingClientRect();
          if (sVB.top <= 900 && sVB.bottom >= 1500) {
            const sVP = document.querySelector(`#${section.id}`);
            sVP.classList.add('active');
          } else {
            const sVP =document.querySelector(`#${section.id}`);
            sVP.classList.remove('active');
          }
        });
        document.addEventListener('scroll', createActiveState);

    }
    createActiveState();
}

createNavBar();

// make all of the subsection Tabs work to show content without having all content completely transparent //
function aboutMe(){

    // let innerHTML of each subsection tab be equivalent to the id of the content provided//
  
    var ssTabs1 = document.getElementById('Education');
    var ssTabs2 = document.getElementById('Courses In Progress')
    var ssTabs3 = document.getElementById('Projects In Progress')

    var contentBis1 = document.getElementById('Education1')
    var contentBis2 = document.getElementById('Courses In Progress1')
    var contentBis3 = document.getElementById('Projects In Progress1')

    const orgnBackgrd = document.querySelector('div.originBackground');
    

   
    ssTabs1.addEventListener("click", ()=>{
                ssTabs1.classList.add("active")
                contentBis1.classList.add("active-now")
                ssTabs2.classList.remove("active")
                contentBis2.classList.remove("active-now")
                ssTabs3.classList.remove("active")
                contentBis3.classList.remove("active-now")
                orgnBackgrd.remove("originBackground")
                
    })
        
       
    ssTabs2.addEventListener("click", ()=>{
                ssTabs2.classList.add("active")
                contentBis2.classList.add("active-now")
                ssTabs1.classList.remove("active")
                contentBis1.classList.remove("active-now")
                ssTabs3.classList.remove("active")
                contentBis3.classList.remove("active-now")
                orgnBackgrd.remove("originBackground")
                
    })

       
    ssTabs3.addEventListener("click", ()=>{
                ssTabs3.classList.add("active")
                contentBis3.classList.add("active-now")
                ssTabs1.classList.remove("active")
                contentBis1.classList.remove("active-now")
                ssTabs2.classList.remove("active")
                contentBis2.classList.remove("active-now")
                orgnBackgrd.remove("originBackground")
                
    })
        
        
  
    

    
};

   

aboutMe();
