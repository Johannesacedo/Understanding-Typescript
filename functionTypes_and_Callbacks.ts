function AddandHandle(n1:number , n2:number , callback:(num:number)=>void){
    const result = n1 + n2;
    callback(result);
}

AddandHandle(10,20,(result)=>{
    console.log(result);
});