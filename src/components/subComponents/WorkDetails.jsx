import React from 'react'
import { Items } from '../../Data'
import WorkStation from './WorkStation'

const WorkDetails = () => {
  return (
    <div className='workDetailsWrapper genLayout'>

       {Items[0].workDetails?.map((workDetail) =>{
        return <WorkStation item={workDetail} key={workDetail}/>
       })}
    </div>
  )
}

export default WorkDetails