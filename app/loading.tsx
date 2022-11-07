export default function Loading() {
	return (
		<div className="loading-skeleton-wrapper" >
    		{/* <div className="loading-header">
      		<h1>LOADING</h1>
    		</div> */}
				<div className="logo">
					<h1><span className="logo-p1">Sam </span> <span className="logo-p2"> Azevedo</span></h1>
				</div>
    		<div className="dot-wrapper">
      		<div className="dot"><span className='dot-one'>.</span></div> 
					<div className="dot"><span className=' dot-two'>.</span></div>
      		<div className="dot"><span className=' dot-three'>.</span></div>
   		 </div>
			</div>
	)
}