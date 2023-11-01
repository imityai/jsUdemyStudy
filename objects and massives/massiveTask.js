const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';
    
    if (arr.length === 0) {
        return 'Семья пуста';
    } else {
        str = 'Семья состоит из: '
        arr.forEach(function(member){
            str +=`${member} `
        })
        return str;
    }
}

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase())
    })
}