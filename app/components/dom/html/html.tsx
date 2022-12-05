import {Link,Element, animateScroll as scroll } from 'react-scroll'

import { Scroll } from "@react-three/drei";
import Section from '../section/section';

export default function HtmlPage() {

	return(
		<Scroll html>
			<h1>Samuel Azevedo</h1> 
			<ul style={{display: 'flex'}}> 
				<Link
					activeClass="active"
					to="four"
					spy={true}
					smooth={true}
					offset={-70}
					duration={500}
				>section</Link>
			</ul>

			<Section title='Section 1' id='section1'/>
			<Section title='Section 1' id='section1'/>
			<Section title='Section 1' id='section1'/>
			<Section title='Section 1' id='four'>
				<Element name="four"/>
				</Section>
		</Scroll>
	)
}

