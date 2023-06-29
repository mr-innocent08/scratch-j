import React,{useState} from 'react'
import UndoIcon from "@material-ui/icons/Undo"
import { Paper } from '@material-ui/core'
import { setCharacterAngle } from '../../reducers/character/characterActions';
import { connect } from 'react-redux';
//** 
const TurnAntiClockwise = ({character,characterAngle,comp_id}) => {
    const [angle,setAngle]=useState(0);

    const handleClick=()=>{
        let anti_angle= -1*angle;
        const e1=document.getElementById(character.active);
        const character_angle=character.characters.find((x)=>x.id===character.active);
        if(character_angle){
            e1.style.transform=`rotate(${character_angle.angle+anti_angle} deg)`
            characterAngle(character_angle.angle+anti_angle);
        }
    }
 return (
    <Paper elevation={3}>
        <div className="text-center rounded bg-blue-500 p-2 my-3">
            <div className="grid grid-cols-2">
                <div className="text-white">Rotate By</div>
                <input type="number" value={angle} onChange={(e)=>{setAngle(parseInt(e.target.value))}} className="mx-2 p-1 py-0 text-center" />
            </div>
            <div id={comp_id} className="flex bg-blue-700 text-white px-2 py-1 mt-3 mb-1 text-sm cursor-pointer" onClick={()=>handleClick()}>
                <div className="flex mx-auto">
                    Turn 
                    <UndoIcon className="mx-2"/>
                    {angle} degrees
                </div>
            </div>
        </div>
    </Paper>
  )
}

const mapStateToProps=(state)=>{
    return{
        character:state.character,
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        characterAngle:(angle)=>dispatch(setCharacterAngle(angle))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TurnAntiClockwise)