import React, { Component } from 'react'
import Card from './cardUI'

class Cards extends React.Component{
    render(){
        return (
            <div className='container-fluid d-flex justify-content-center'>
                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc = '/assets/covid-essentials.jpg' title = 'Covid Essential'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc = '/assets/electronics.jpg' title = 'Electronics'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc = '/assets/first-aid.jpg' title = 'Health Care'/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;