const menuItems = document.querySelector('.menu-items')

const btnContainer = document.querySelector('.btn-container')
// console.log(filterbtns);

 
  window.addEventListener('DOMContentLoaded', function(){
    displayMenuItems(menu);
  })

const btnCategory = menu.reduce(function(value,item){
    console.log(item);
    if(!value.includes(item.category)){
        value.push(item.category)
    }
    return value
},['all'])

const filterCategory = btnCategory.map(function(cat){
    return `<button class="filter-btn" type='button' data-id="${cat}">${cat}</button>`
})
console.log(filterCategory);
btnContainer.innerHTML=filterCategory.join('');

const filterbtns= document.querySelectorAll('.filter-btn')


filterbtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const category = e.target.dataset.id;
        // console.log(catog);
        const menuCatogary = menu.filter(function(menuItems){
            if(menuItems.category === category){
                console.log(menuItems);
                return menuItems;
            }
        });
        if(category==='all'){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCatogary); 
        }
    });
})


  function displayMenuItems(menuItem){
    let displayMenu = menuItem.map(function(item){
        console.log(item);
        return `<article class="item">
                <img src="${item.img}" alt="" class="photo">
                <div class="menu-info">
                        <div class="discription">
                        <h2>${item.title}</h2>
                        <p class="price">${item.price}</p>
                        </div>
                    <p class="menu-desc">${item.desc}.</p>
                </div>
                </article>`;
    })
    displayMenu = displayMenu.join('');
    menuItems.innerHTML = displayMenu;
  }
