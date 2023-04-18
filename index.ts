function findMissItem(data:number[]) {
    let missItems:number[]=[]
    for (let i = 0; i <= 10; i++) {
        if(data.indexOf(i)===-1){
            missItems.push(i)
        }
    }
    return missItems
}
let data1=[1,3,5,7,9]
console.log(findMissItem(data1))