export default function LoadingSkeleton() {

	return(
			<div className="loading-skeleton-wrapper" >
    		<div>
      		<h1>LOADING</h1>
    		</div>
    		<div className="dot-wrapper">
      		<div className="dot"><span className='dot-one'>.</span></div> 
					<div className="dot"><span className=' dot-two'>.</span></div>
      		<div className="dot"><span className=' dot-three'>.</span></div>
   		 </div>
			</div>
	)
}

