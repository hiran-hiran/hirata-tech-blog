import { useState, useEffect, useCallback } from "react";
import CategoryIcon from "@material-ui/icons/Category";
import TimelapseIcon from "@material-ui/icons/Timelapse";
import styled from "@emotion/styled";
import Link from "next/link";
import { useGetPostTime } from "../lib/hooks/useGetPostTime";

const Card = ({ post }) => {
	const [bodyText, setBodyText] = useState(post.body);

	const postTime = useGetPostTime(post);

	const cutText = useCallback(() => {
		const max = 100;
		if (bodyText) {
			const newText = bodyText.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "");
			if (newText.length > max) {
				const silceText = newText.substr(0, max) + "...";
				setBodyText(silceText);
			} else {
				setBodyText(newText);
			}
		}
	}, []);

	useEffect(() => {
		cutText();
	}, []);

	return (
		<StyledCard>
			<Link href="/blog/[id]" as={`/blog/${post.id}`}>
				<a>
					<div className="flex">
						{/* <div className="img">
                {post.thumbnail ? <img src={post.thumbnail.url} alt={post.title} /> : <img src="/img/common/not-found.png" alt={post.title} />}
            </div> */}
						<div className="text">
							<div className="info">
								<div className="category">
									<CategoryIcon />
									<p>{post.category[0].category}</p>
								</div>
								<div className="time">
									<TimelapseIcon />
									<time>{postTime}</time>
								</div>
							</div>
							<h2 className="title">{post.title}</h2>
							<p className="body-text">{bodyText}</p>
						</div>
					</div>
				</a>
			</Link>
		</StyledCard>
	);
};

const StyledCard = styled.li`
	border-bottom: 1px solid #eee;
	&:last-child {
		border-bottom: none;
	}
	a {
		display: block;
		padding: 25px 30px;
		background: #fff;
		&:hover {
			.title {
				color: #2db2a4;
			}
			img {
				transform: scale(1.1);
			}
		}
	}

	.flex {
		display: flex;
		.img {
			width: 300px;
			height: 200px;
			border-radius: 5px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				transition: ease-in-out 0.3s;
			}
		}
		.text {
			flex: 1;
			/* padding-left: 20px; */
			.info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 100%;
				margin-bottom: 15px;
				color: #999;
				font-size: 15px;
				/* font-family: 'Noto Sans JP'; */
			}
			.time {
				display: flex;
				align-items: center;
			}
			.category {
				display: flex;
				align-items: center;
			}
			.title {
				margin-bottom: 20px;
				font-size: 28px;
				font-weight: 700;
				transition: ease-in-out 0.3s;
			}
			.body-text {
				color: #999;
				line-height: 1.6;
			}
			svg {
				font-size: 1rem;
				margin-right: 2px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		a {
			padding: 25px 0;
		}
	}
`;

export default Card;
