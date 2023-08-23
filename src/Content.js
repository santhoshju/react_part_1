import React, { useState } from 'react';

const Content = (props) => {

    const [items] = useState(
    [
        {
            id:1,
            name:"santhosh",
            age:20,
            check:true

        },
        {
            id:2,
            name:"santhosh",
            age:20,
            check:true

        },
        {
            id:3,
            name:"santhosh",
            age:20,
            check:false
        }
    ]
    );

    
    // const [count,setCount] = useState(9)

    // const [name1,setName] = useState('santhosh')

    // function handleState(){
    //  const ames =["santhosh","suba","sountharya"]
    //      setName(ames[1]) 
    // }

    // function handleClick(){
    //     setCount(count-1)
    // }


    // function handleClick2(){
    //      setCount((count) => {return count+1})
    //      setCount(count+1)
    //      setCount(count+1)
    // }


  return (
    <main>

        {/* <button  onClick={handleClick} >-</button>
        <p>{count}</p>
       <button onClick={handleClick2}>+</button> 

       <button onClick={handleState} > button</button>
       <p>{name1}</p> */}

       <h1>{props.title}</h1>
         
       <ul>
        {items.map((item)=> {
        return  (  <li> 
                <input type="checkbox"
                     checked ={item.check}     />

                 <label> {item.name}</label>    
            </li>
        )})}
       </ul>
       
    </main>
  )


}

export default Content