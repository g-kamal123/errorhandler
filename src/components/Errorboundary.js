import React, { Component } from 'react'

export class Errorboundary extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
    tryHandler =()=>{
      this.setState({
        hasError:false
      })
      this.props.try()
    }
  render() {
   if(this.state.hasError)
   return(<><h4>Something went wrong!</h4>
   <details style={{cursor:'pointer'}}>{this.props.num}, which is less than 5</details>
   <button onClick={this.tryHandler}>try again</button></>)
   else return(this.props.children)
  }
}

export default Errorboundary