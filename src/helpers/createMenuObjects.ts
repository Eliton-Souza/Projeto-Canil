type menuOptions= '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObject = (activeMenu: menuOptions)=>{
    let object= {
        all: false,
        dog: false,
        cat: false,
        fish: false
    }

    if(activeMenu !== ''){
        object[activeMenu]= true;
    }
    
    return object;
}