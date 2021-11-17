//==========================(navbar)=============================

const linksContainer = document.querySelector(".links-container");
const links = document.querySelector('.links');
const navToggle = document.querySelector('.side-bar');
const arrow = document.querySelector('.top-link')



navToggle.addEventListener('click', function(){
    const containerHeight = linksContainer.clientHeight;
    // console.log(containerHeight);
    const linksHight = links.clientHeight;
    // console.log(linksHight);
    if(containerHeight===0){
      linksContainer.style.height = `${linksHight}px`
    }
    else{
      linksContainer.style.height = 0
    }
// links.classList.toggle('show-links');
});

const navbar = document.querySelector('.navbar');
  


window.addEventListener('scroll', function(){
  const scrollHeight = window.pageYOffset;
  console.log(scrollHeight);
  
  
  console.log(navHeight);
  if(scrollHeight>navHeight){
    navbar.classList.add('')
    arrow.classList.add('show-link')

  }
  else{navbar.classList.remove('')
  arrow.classList.remove('show-link')}
})
//smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-links')
scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault()

    const id = e.currentTarget.getAttribute('href').slice(1); 
    const element = document.getElementById(id)
    let position = element.offsetTop-navHeight;
    window.scrollTo({
      left:0,
      top:position,
    })
    linksContainer.style.height = 0;
  })
})



//overlay 
const overlay = document.querySelector('.overlay');
const crosbtn= document.querySelector('.cros');
const click = document.querySelector('.click');

click.addEventListener('click', function(){
    overlay.classList.add('visible')
})
crosbtn.addEventListener('click', function(){
    overlay.classList.remove('visible')
})
// ==============================menu==================================
                                                                                                    


window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu)
})

const menuFilter = menu.reduce(function(value,item){
    if(!value.includes(item.category)){
        value.push(item.category)
    }
    return value
},['all'])
console.log(menuFilter);
//=============================filter-btns-dyinamic=========================
const btnContainer = document.querySelector('.btn-container');

const dynamicBtn = menuFilter.map(function(item){
    return `<button class="filter-btn" type='button' data-id="${item}">${item}</button>`
})

btnContainer.innerHTML = dynamicBtn.join('');















//----------------------------filter-btn-----------------------------------
const filterbtn = document.querySelectorAll('.filter-btn');

filterbtn.forEach(function(btn){
    btn.addEventListener('click',function(e){
        category =e.currentTarget.dataset.id;
        // console.log(category);
        const menuCat = menu.filter(function(cat){
            if(cat.category===category){
                return cat
            }
        })
        if(category==='all')
        {displayMenuItems(menu)}
        else{displayMenuItems(menuCat)}
    })
});


//-----------------------------------(menu items)---------------------------
const color = ['black','rgb(109, 221, 230)','rgb(230, 148, 148)','rgb(133, 228, 133)','rgb(230, 230, 163)']
const menuI = document.querySelector('.menu');

const moon = document.querySelector('.moon-s');

function displayMenuItems(menuItems){
const displayMenu = menuItems.map(function(item){
        // console.log(item);
        return `<article class="item">
        <img src="${item.img}" alt="" class="photo">
        <div class="menu-info">
            <div class="discription">
                <h2>${item.title}</h2>
                <p class="price">${item.price}</p>
            </div>
            <p class="menu-desc">${item.desc}</p>
        </div>
    </article>`
    
    });
    menuItem.innerHTML = displayMenu.join(''); 

    const menuDesc= document.querySelectorAll('.menu-desc');

//===============background flipper=====================================
        function getRandomNum(){
            return Math.floor(Math.random()*color.length)
         }
         
             moon.addEventListener('click', function(){
             const randomNo = getRandomNum();
             menuI.style.backgroundColor = color[randomNo];
             menuDesc.forEach(function(e){
             e.style.color= 'white';
           })
         })
}
//-------------------------------end------------------------------------

//===========================(video-container)===========================
const btnD = document.querySelector(".switch");
const btnOne = document.querySelector(".btn-container1");

const video= document.querySelector(".container1");

btnOne.addEventListener("click", function () {
  if (!btnD.classList.contains("slide")) {
    btnD.classList.add("slide");
    video.pause();
  } else {
    btnD.classList.remove("slide");
    video.play()
  }
});


// ==========================(counter)===================================
let counte=0;

const functionBtn = document.querySelectorAll('.btn');
const number = document.querySelector('.number');

let count = 0;

functionBtn.forEach(function(btns){
  // console.log(btns);
  btns.addEventListener('click', function(e){
    const clas =e.currentTarget.classList[1];
    if(clas =='decrease'){
      count--;
    }
    else if(clas =='increase'){
      count++;
    }
    else{count = 0
    }
    if(count<0){
      number.style.color = 'red';
    }
    else if(count>0){
      number.style.color = 'green';
    }
    else{number.style.color = 'black'}
  
    
    number.textContent = count;
  })
  
});
//-----------------------------------(counter end)-----------------------------------

//===================================(review)========================================
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//================================(review)=================================
const images = document.querySelector('.images')
const name1 = document.querySelector('.name1');
const position = document.querySelector('.position');
const descp = document.querySelector('.descp');
const back = document.querySelector('.back');
const forward = document.querySelector('.forward');
const randome = document.querySelector('.randome');

// console.log(reviews);

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
  const items = reviews[currentItem];
  images.src =items.img
  name1.textContent = items.name;
  position.textContent = items.job;
  descp.textContent = items.text;  
})

function person(current){
  const items = reviews[current];
  images.src =items.img
  name1.textContent = items.name;
  position.textContent = items.job;
  descp.textContent = items.text;  
}

forward.addEventListener('click', function(){
  currentItem++
  if(currentItem>reviews.length-1){
    currentItem = 0
  }
  // console.log(currentItem);
  person(currentItem);
})

back.addEventListener('click', function(){
  currentItem--
  if(currentItem<0){
    currentItem = reviews.length-1;
  }
  // console.log(currentItem);
  person(currentItem);
})

randome.addEventListener('click', function(){
  const randomN = Math.floor(Math.random()*reviews.length);
  // console.log(randomN);
  person(randomN);
})
// =================================(general question)=======================================
const questions = document.querySelectorAll('.one');

questions.forEach(function(question){
  console.log(question);
  const btns = question.querySelector('.question-btn');

  btns.addEventListener('click',function(){
      
    questions.forEach(function (item) {
      console.log(item);
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle('show-text');
  })
})


//-----------------------------------(general question end)----------------------------------

// =====================================(tabs start)=========================================

// const btnss = document.querySelectorAll('.btnss');
// const cont = document.querySelector('.description-section');
// const briefs = document.querySelectorAll('.briefs');

// cont.addEventListener('click', function(e){
//  const id = e.target.dataset.id; 
//  if(id){
//    btnss.forEach(function(btn){
//      btn.classList.remove('active')
//    })
//    e.target.classList.add('active')
//  }
//  briefs.forEach(function(brief){
//    brief.classList.remove('show')
//  })
//  const element =document.getElementById(id);
//  element.classList.add('show')
// })

const btnss = document.querySelectorAll('.btnss');
console.log(btnss);


btnss.forEach(function(btn){
  
  btn.addEventListener('click',function(e){
    const id = e.target.classList;
    
    // const btnss = document.querySelectorAll('.btnss');
    btnss.forEach(function(btn){
      btn.classList.remove('active');
      id.add('active');
    })
    const ids = e.target.dataset.id
    const element = document.getElementById(ids)
    //  const id = e.target;
    const briefs = document.querySelectorAll('.briefs')
    briefs.forEach(function(brief){
         brief.classList.remove('show')
       })

     element.classList.add('show')
  })
})

//====================================(tabs end)============================================
const texte = [
  `Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.`,
  `Next level tbh everyday carry, blog copper mug forage kitsch roof party pickled hammock kale chips tofu. Etsy shoreditch 8-bit microdosing, XOXO viral butcher banh mi humblebrag listicle woke bicycle rights brunch before they sold out ramps. Twee shabby chic taiyaki flannel, enamel pin venmo vape four loko. Hexagon kale chips typewriter kitsch 8-bit organic plaid small batch keffiyeh ethical banh mi narwhal echo park cronut.`,
  `Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.`,
  `Cat gets stuck in tree firefighters try to get cat down firefighters get stuck in tree cat eats firefighters' slippers kitty power ignore the squirrels, you'll never catch them anyway for what a cat-ass-trophy! or purr as loud as possible, be the most annoying cat that you can, and, knock everything off the table. Pretend you want to go out but then don't bite off human's toes, yet disappear for four days and return home with an expensive injury; bite the vet so catch eat throw up catch eat throw up bad birds. `,
  `This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Anyhoo, your net-suits will allow you to experience Fry's worm infested bowels as if you were actually wriggling through them.
 just told you! You've killed me! Fry! Quit doing the right thing, you jerk! Michelle, I don't regret this, but I both rue and lament it. Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat.`,
  `Airedale hard cheese mozzarella. Pecorino melted cheese port-salut emmental babybel cheese and wine melted cheese manchego. Everyone loves blue castello everyone loves fromage cheese slices airedale cheddar cream cheese. Bavarian bergkase who moved my cheese halloumi port-salut gouda jarlsberg ricotta rubber cheese. Stinking bishop smelly cheese brie.`,
  `Salvia glossier subway tile, leggings mustache YOLO semiotics chia. Pitchfork tbh af blog church-key meggings vaporware PBR&B master cleanse post-ironic man bun pabst mustache letterpress synth. Snackwave raw denim godard, 3 wolf moon shaman offal kitsch unicorn live-edge selvage schlitz fashion axe vaporware drinking vinegar prism. Shabby chic tacos artisan, chambray chicharrones cardigan leggings typewriter af pop-up williamsburg meditation PBR&B viral. You probably haven't heard of them DIY jean shorts subway tile fashion axe bushwick kitsch tumeric cloud bread vaporware freegan franzen pork belly chicharrones banh mi.`,
  `Man braid celiac synth freegan readymade, pitchfork fam salvia waistcoat lomo bitters gentrify four loko. Pitchfork semiotics post-ironic vegan. Tofu meditation microdosing hashtag semiotics venmo. Flexitarian vape tilde taiyaki. Prism poutine farm-to-table, messenger bag vegan taxidermy tattooed sartorial squid jean shorts fixie selvage trust fund vape.`,
  `Rutters Plate Fleet boom chandler Brethren of the Coast handsomely lookout marooned brigantine knave. Buccaneer gangway jack rum loot spyglass line Jack Tar fore gaff. Gaff topmast scuttle ballast swab draught measured fer yer chains dance the hempen jig Chain Shot yardarm.`,
];




// ------------------------------------------(tabs end)-------------------------------------
const form = document.querySelector('.lorem-form');
const amount = document.querySelector('#amount');
const loremText = document.querySelector('.lorem-text')



form.addEventListener('submit',function(e){
  e.preventDefault()
  const randome = Math.floor(Math.random()*texte.length);
  const value = parseInt(amount.value);
  
  if(isNaN(value)||value<0||value>9){
    loremText.innerHTML = `<p>${texte[randome]}</p>`
  }
  else{let currValue = texte.slice(0,value);
    currValue = currValue.map((item)=>{
      return `<p>${item}</p>`;
    }).join('')
    loremText.innerHTML = currValue;
    
  }
})

// ========================================(list)========================================
const feed = document.querySelector('#feed');
const groceryListP =document.querySelector('.grocery-listP');
const groceryListG = document.querySelector('.grocery-listG')
const groceryForm = document.querySelector('.grocery-form');
const submitBtn = document.querySelector('.grocery-text');
const clearItem = document.querySelector('.clear-item')

// console.log(clearItem);
let editTag = false;
let editText 
let editID = "";


//events
groceryForm.addEventListener('submit',addItem);

clearItem.addEventListener('click', clearItems)

 




//function(additem)
function addItem(e){
  e.preventDefault()
  const id = new Date().getTime().toString();
  const value = feed.value;

  if(value && !editTag){
    const element = document.createElement('article');
    element.setAttribute('class', 'grocery-list')
    element.setAttribute('data-id',id)
    element.innerHTML = `<p class="grocery-input">${value}</p>
    <div class="button3">
        <button type='button' id='btn3' class='edit-btn'><i class="fas fa-edit"></i></button>
        <button type='button' id="btn3" class='delete-btn'><i class="fas fa-trash"></i></button>
    </div>`
    const edit = element.querySelector('.edit-btn')
    console.log(edit);
    edit.addEventListener('click', editItem)

    const deletee = element.querySelector('.delete-btn')
    deletee.addEventListener('click', deleteItem)

    groceryListP.appendChild(element)

    feed.value = '';
    groceryListG.classList.add('show')

    console.log('editing');
  }
  else if(value && editTag){
    editText.innerHTML = value;
    console.log('edited');
    setBackToDefault()

  }
  else{
    console.log('please enter value');
  }
  
}


function clearItems(){
  const groceryList = document.querySelectorAll('.grocery-list')
    // console.log(groceryList);
    if(groceryList.length>0){
        groceryList.forEach(function(list){
        groceryListP.removeChild(list)
        groceryListG.classList.remove('show')
      })
    }
  }

  function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    console.log(element);
    groceryListG.removeChild(element);

  }

  function editItem(e){
    const element =e.currentTarget.parentElement.parentElement;
    editText = e.currentTarget.parentElement.previousElementSibling;
    feed.value = editText.innerHTML;
    editID = element.dataset.id;
    editTag = true;
    submitBtn.textContent = 'edit';

  }

  function setBackToDefault() {
    feed.value = "";
    editTag = false;
    editID = "";
    submitBtn.textContent = "submit";
  }

// ----------------------------------------(list end)----------------------------------































































































































