import Categories from "./Categories";
import Banner from "./Banner";
// import Popular from './Popular'

const Sidebar = ({ categories }) => {
	return (
		<aside>
			<Banner />
			<Categories categories={categories} />
			{/* <Popular /> */}
		</aside>
	);
};

export default Sidebar;
