import React, { Component } from 'react'

export default class Child extends Component {
    shouldComponentUpdate(nextProps) {
        // console.log(this.props,nextProps)
        if (this.props.num2 !== nextProps.num2)
            return true
        else
            return false
    }
    render() {
        console.log("Child Component is rendered")
        return (
            <>
                <h2>This is Child Componenet</h2>
                <hr />
                <h3>Num1= {this.props.num1} Num2= {this.props.num2}</h3>
            </>
        )
    }
}




// import React, { PureComponent } from 'react'    // props ya state change ho tab component render hoga

// export default class Child extends PureComponent {
//   render() {
//     console.log("Child Component is rendered")
//     return (
//       <>
//       <h2>This is Child Componenet</h2>
//       </>
//     )
//   }
// }





// import React, { Component } from 'react'

// export default class Child extends Component {
//     shouldComponentUpdate(){                      // static ho jayega kabhi render nhi hoga component
//         return false
//     }
//   render() {
//     console.log("Child Component is rendered")
//     return (
//       <>
//       <h2>This is Child Componenet</h2>
//       </>
//     )
//   }
// }
