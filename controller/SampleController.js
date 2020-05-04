module.exports = {


     first:() => {
        
      const arrLike = {0:'foo',1:'bar',2:'baz',length:3};
      // converting array-like object to array
      const arr = Array.from(arrLike);

     let a = [1,2,3].map((x)=>{
          const y = x +1;
          return x*y;
      });

      console.log(a)

    },
    second:() => {

        const arr = [1,2,3,4,5];

       /*  const first = arr[0];
        const second = arr[1];
        use another method */
        const [first,second,fout] = arr;

        console.log(first,'and',second,'last one',fout)

    },
    name:(name1) => {
        
    }

}