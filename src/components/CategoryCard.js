import React from "react";

const CategoryCard = () => {

    return (
        <div style={{height: '330px', width: '250px',overflow: 'hidden', margin: '0px 10%', display: 'inline-block', backgroundColor: "blue", border: '3px solid green'}}>
            <div style={{height: '80%', width: '100%', overflow: 'hidden', backgroundColor: 'green'}}>
                <img style={{height: '318', width: '250px', objectFit: 'cover'}} src={"./assets/electronics.jpg"} alt="First Image" />
            </div>
            <div style={{height: '20%', textAlign: 'center'}}>
                <h3>electronic items</h3>
            </div>
        </div>
    )
}

export default CategoryCard;