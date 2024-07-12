import React, { useEffect, useState } from 'react'

const Dummy = () => {
    const [one,setone]=useState(0);
    const [two,setTwo]=useState(0);
    console.log(two,"two data---")
    const [verify,setverify]=useState(null);


    const submitdata=async()=>{
    
        const main=two()
        console.log(main,"main----")
        const data=await one()
        const somedata=data.json()
        console.log(somedata,"somedata");
        const singleDigit=123;
        const doubledigit=456;
        if(data?.isLogin?.singleDigit===true && singleDigit && doubledigit && doubledigit )
            {
                setTwo("THIS LOGIN IS SUCCESS..")
                console.log(doubledigit,"this is double digit")
                setverify("token  verify..")
            }
        else{
            setone('THIS IS NOT VALID LOGIN...')
        }
        console.log(verify,"verify all the data...")

        
    }

    useEffect(()=>{
        submitdata()
    },[])



  return (
    <div>

    </div>
  )
}

export default Dummy