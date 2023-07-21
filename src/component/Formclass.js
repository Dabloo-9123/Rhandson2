import React, { Component } from 'react'

class Formclass extends Component{
    
      state={
        Name:"",
        Dept:"",
        Rate:"",
        Empdata:[]
    }
    changeHandle=(event)=>{
       this.setState({[event.target.name]:event.target.value})
      }
      clickHandle=(e)=>{
        e.preventDefault();
        const tempobj={
            name:this.state.Name,
            Dept:this.state.Dept,
            Rate:this.state.Rate
        }
        this.state.Empdata.push(tempobj);
        this.setState({Empdata : this.state.Empdata})
        console.log(this.state.Empdata)
      }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
          <form>
          <label htmlFor='name' >Name :- </label>
            <input  id='name' type="text" placeholder='Enter Name' name='Name'  value={this.state.Name} onChange={this.changeHandle} required></input><br/>
            <label htmlFor='dept' >Dept :- </label>
            <input  id='dept' type="text" placeholder='Enter Department' name='Dept'  value={this.state.Dept} onChange={this.changeHandle} required></input><br/>
            <label htmlFor='rate' >Rating :- </label>
            <input  id='rate' type="number" placeholder='Enter Rating' name='Rate'  value={this.state.Rate} onChange={this.changeHandle} required></input><br/>
            <button  onClick={this.clickHandle}>Submit</button>
          </form>

          <div className='parent'>
          {
            this.state.Empdata.map((item,index)=>{
                return(

                  <div key={index}>
                     <div className='child'> Name:{item.name } || Dept:{item.Dept} || Rating:{item.Rate} </div>
                  </div>
                )   
            })
          }
          </div>
            </>
        )
    }
}
export default Formclass;