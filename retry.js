function retry(fn,opt = { max:3 }){
  let count = 0;
  fn().catch(e => {
    count ++ ;
    if(count <= max)
    fn();
  })
}