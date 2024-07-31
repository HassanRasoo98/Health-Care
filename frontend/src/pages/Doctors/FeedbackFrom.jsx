import React from 'react'
import { useState } from 'react'
import { AiFillStar } from 'react-icons/ai'

const FeedbackFrom = () => {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

    return (
    <form action="" >
        <div>
            <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0' >How Would you rate overall experience?</h3>
            <div>
                {[...Array(5).keys()].map((_, index)=> {
                    index +=1;

                    return(
                        <button key={index} type="button"
                        onClick={()=> setRating(index)}
                        className={`${
                            index <= ((rating && hover) || hover)
                            ? "text-yellowColor"
                            : "text-grey-400"
                        } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                            onclick={()=> setRating(index)}
                            onMouseEnter={()=> setHover(index)}
                            onMouseLeave={()=> setHover (rating)}
                            onDoubleClick={()=> {
                                setHover(0);
                                setRating(0)}}
                        >
                            <span>
                                <AiFillStar/> 
                            </span>
                        </button>
                    )
                })}
            </div>
        </div>
        <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0' >Share your Feedback and Suggestions?</h3>
        </div>
    </form>
  )
}

export default FeedbackFrom
