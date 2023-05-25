const features_dropdown_menu = document.getElementById('features_dropdown_menu')
const company_dropdown_menu = document.getElementById('company_dropdown_menu')
const arrow_company = document.getElementById('arrow_company')
const arrow_feature = document.getElementById('arrow_feature')

function features_dropdown(){
    if (features_dropdown_menu.style.display == 'none'){
        features_dropdown_menu.style.display = 'flex'
        arrow_feature.style.transform = "rotate(" + 180 + "deg)"
    /*----fecha as outras abas-----*/
        if (company_dropdown_menu.style.display == 'flex')
        company_dropdown_menu.style.display = 'none'
    }
    else{
        features_dropdown_menu.style.display = 'none'
        arrow_feature.style.transform = "rotate(" + 0 + "deg)"
    }
}
function company_dropdown(){
    if (company_dropdown_menu.style.display == 'none'){
        company_dropdown_menu.style.display = 'flex'
        arrow_company.style.transform = "rotate(" + 180 + "deg)"
    /*----fecha as outras abas-----*/
        if (features_dropdown_menu.style.display == 'flex'){
            features_dropdown_menu.style.display = 'none'
        }
    }
    else{
        company_dropdown_menu.style.display = 'none'
        arrow_company.style.transform = "rotate(" + 0 + "deg)"
    }
}



/*---------burger menu---------*/
const burgerScreen = document.getElementById("burger_menu")
const burgerIcon = document.getElementById("burger_icon")


burgerIcon.addEventListener("click", function(){

    if (burgerScreen.style.display == 'block'){
        burgerScreen.style.display = 'none'
    }
    else{
        burgerScreen.style.display = 'block'
    }
})




/*ListItems-actions*/
const features_burger_menu = document.getElementById('features_burger_menu')
const company_burger_menu = document.getElementById('company_burger_menu')
const arrow_company_bg = document.getElementById('arrow_company_bg')
const arrow_feature_bg = document.getElementById('arrow_feature_bg')

function features_burger(){
    if (features_burger_menu.style.display == 'none'){
        features_burger_menu.style.display = 'flex'
        arrow_feature_bg.style.transform = "rotate(" + 180 + "deg)"
    /*----fecha as outras abas-----*/
        if (company_burger_menu.style.display == 'flex')
        company_burger_menu.style.display = 'none'
    }
    else{
        features_burger_menu.style.display = 'none'
        arrow_feature_bg.style.transform = "rotate(" + 0 + "deg)"
    }
}
function company_burger(){
    if (company_burger_menu.style.display == 'none'){
        company_burger_menu.style.display = 'flex'
        arrow_company_bg.style.transform = "rotate(" + 180 + "deg)"
    /*----fecha as outras abas-----*/
        if (features_burger_menu.style.display == 'flex'){
            features_burger_menu.style.display = 'none'
        }
    }
    else{
        company_burger_menu.style.display = 'none'
        arrow_company_bg.style.transform = "rotate(" + 0 + "deg)"
    }
}