import React from 'react'
import { LuUserCircle2 } from "react-icons/lu";
import { LiaAngleRightSolid } from "react-icons/lia";

const Question = () => {
  return (
    <a className='text-decoration-none text-black' href="#">
    <hr />
  <div className='d-flex justify-content-between '>
    <div className='d-md-flex align-items-center'>        
        <div className='user d-flex flex-column align-items-center'>{/* user/ */}
            <div><LuUserCircle2/></div>
            <div>Etseg Tefe</div>
        </div>

    <div>{/* question */}
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, libero vero veniam animi blanditiis atque pariatur officia non?
          </p>
    </div>
  </div>

  <div>{/* arrow */}
    <span>< LiaAngleRightSolid /></span>
  </div>

    </div>
    </a>
  )
}

export default Question