let n=5;
let arr1=[8,5,3,0,1]
let arr2=[5,2,0,0,0]
let ans = arrayGame(n,arr1,arr2)
      if(ans)
      {
          console.log("YES");
      }
      else
      {
          console.log("NO");
      }

function arrayGame(n,arr1,arr2)
{
while(true)
{
   for(let i=0;i<n;i++)
   {
    //   console.log(arr1[i],"         ",arr2[i]);
       if(arr1[i]<arr2[i])
       {
           return false;
       }
       else if(arr1[i]==0 && arr2[i]!=0)
       {
            console.log(arr1[i],"         ",arr2[i]);
           return false;
       }
       else if(arr1[i]==0 && arr2[i]==0)
       {
           continue;
       }
       else
       {
           arr1[i]=arr1[i]-1;
       }
   }
   
       if(JSON.stringify(arr1) === JSON.stringify(arr2))
       {
           return true;
       }
   }
}