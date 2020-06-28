import React from 'react';

import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';


const controls = [
    { label:'Salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'}
];

const BuildControls = (props) =>{
    return(
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {controls.map(cntrl =>{
            return <BuildControl 
                key={cntrl.label} 
                label={cntrl.label}
                added={()=>{props.ingredientAdded(cntrl.type)}} 
                removed={()=>props.ingredientRemoved(cntrl.type)} 
                disabled={props.disabled[cntrl.type]} />
        })}
    </div>
    )
};

export default BuildControls;
