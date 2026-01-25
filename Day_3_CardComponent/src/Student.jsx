function Student(props){
        if(!props.isLoggedIn) {
            return(<h2>Please log in to see student details.</h2>);
        }
        else{
            return(  
            <div>
                <p> Name: {props.name}</p>
                <p> Age: {props.age}</p>
                <p> Is Student: {props.isStudent ? "Yes" : "No"}</p>
            </div>);
        }
}
export default Student;