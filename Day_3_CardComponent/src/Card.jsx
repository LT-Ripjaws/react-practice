import profilePic from './assets/profile-picture.jpg';

function Card(){
    return( 
        // class is reserved for JS so we use className in JSX. This is how we add CSS classes to JSX elements.
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2>Ripjaws</h2>
            <p>Practising Reactu</p>
        </div>
    );
}

export default Card;