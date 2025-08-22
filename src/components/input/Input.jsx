import React from 'react'

export const Input = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        /*letters that write in input print in console */
        
    }
    const handleChange = (e) =>{
        var inputText = e.target.value;
        console.log(inputText);

    }
  return (
    <div className='inputForm'>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange}/>
            <button>
                <i className="fa fa-plus-square"></i>
            </button>
        </form>
    </div>
  )
}
export default Input