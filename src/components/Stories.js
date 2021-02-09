import React, { useContext } from 'react';
import { useGlobalContext } from '../Context';
import './Stories.css';
import { Navbar, Nav, Form, FormControl, Button, Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();

	if (isLoading) {
		return (
			<div>
				<div class='centered'>
					<div class='blob-1'></div>
					<div class='blob-2'></div>
				</div>
			</div>
		);
	}
	return (
		<section className='stories'>
			
			{hits.map((story) => {
				const { objectID, title, num_comments, url, points, author } = story;

				return (
					<article className='story' key={objectID}>
						<Fade bottom>
							<Card border='warning' style={{ width: '25rem' }}>
								<Card.Header className='card-header'>{title}</Card.Header>
								<Card.Body>
									<Card.Text>
										<p>
											{points} points by {author} |
											<span> {num_comments} comments </span>
										</p>
									</Card.Text>
									<div>
										<Button
											variant='dark'
											className='read-btn'
											href={url}
											target='_blank'>
											Read More
										</Button>{' '}
										<Button variant='danger' className='remove-btn' onClick={() => removeStory(objectID)}>
											Remove
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Fade>
					</article>
				);
			})}
		</section>
	);
};

export default Stories;
