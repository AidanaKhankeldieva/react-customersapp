import FuseAnimate from '@fuse/core/FuseAnimate';
import FuseAnimateGroup from '@fuse/core/FuseAnimateGroup';
import _ from '@lodash';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import FormControl from '@material-ui/core/FormControl';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';
import LinearProgress from '@material-ui/core/LinearProgress';
import MenuItem from '@material-ui/core/MenuItem';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import clsx from 'clsx';
import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import reducer from '../store';
import { getCategories, selectCategories } from '../store/categoriesSlice';
import { getCourses, selectCourses } from '../store/coursesSlice';

const useStyles = makeStyles(theme => ({
	header: {
		background: `linear-gradient(to left, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
		color: theme.palette.getContrastText(theme.palette.primary.main)
	},
	headerIcon: {
		position: 'absolute',
		top: -64,
		left: 0,
		opacity: 0.04,
		fontSize: 512,
		width: 512,
		height: 512,
		pointerEvents: 'none'
	}
}));

function Courses(props) {
	const dispatch = useDispatch();
	const sections = useSelector(selectCourses);
	const categories = useSelector(selectCategories);
	const classes = useStyles(props);
	const theme = useTheme();
	const [filteredData, setFilteredData] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('all');

	useEffect(() => {
		dispatch(getCategories());
		dispatch(getCourses());
	}, [dispatch]);

	useEffect(() => {
		function getFilteredArray() {
			if (searchText.length === 0 && selectedCategory === 'all') {
				return sections;
			}

			return _.filter(sections, item => {
				if (selectedCategory !== 'all' && item.category !== selectedCategory) {
					return false;
				}
				return true;
			});
		}

		if (sections) {
			setFilteredData(getFilteredArray());
		}
	}, [sections, selectedCategory]);

	function handleSelectedCategory(event) {
		setSelectedCategory(event.target.value);
	}

	function handleSearchText(event) {
		setSearchText(event.target.value);
	}

	function buttonStatus(course) {
		switch (course.activeStep) {
			case course.totalSteps:
				return 'COMPLETED';
			case 0:
				return 'START';
			default:
				return 'CONTINUE';
		}
	}
	return (
		<div className="flex flex-col flex-auto flex-shrink-0 w-full">
			<div className="flex flex-col flex-1 max-w-2xl w-full mx-auto px-8 sm:px-16 py-24">
			<div className="flex flex-col flex-shrink-0 sm:flex-row items-center justify-between py-24">
					<FormControl className="flex w-full sm:w-320 mx-16" variant="outlined">
						<InputLabel htmlFor="category-label-placeholder"> Category </InputLabel>
						<Select
							value={selectedCategory}
							onChange={handleSelectedCategory}
							input={
								<OutlinedInput
									labelWidth={'category'.length * 9}
									name="category"
									id="category-label-placeholder"
								/>
							}
						>
							<MenuItem value="all">
								<em> All </em>
							</MenuItem>
							{categories.map(category => (
								<MenuItem value={category.value} key={category.id}>
									{category.label}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</div>
				{useMemo(
					() =>
						filteredData &&
						(filteredData.length && (
							<FuseAnimateGroup
								enter={{
									animation: 'transition.slideUpBigIn'
								}}
								className="flex-wrap py-24"
							>
								{
				filteredData.map(section=>{
					return (
						<div>
							<h3 className="section-title">{section.name}</h3>
							<FuseAnimateGroup
												enter={{
													animation: 'transition.slideUpBigIn'
												}}
												className="flex-wrap py-24"
											>
				
						{
						section.courses.map(course => {
						//const category = categories.find(_cat => _cat.value === course.category);
						const category = { color: 'red', label: 'Web', value: 'Web', id:1 };
						const courseLink = course.courses ? `/course/${course.id}` : `/courses/${course.id}/${course.slug}`;
						//const courseLink = course.courses ? `/course/${course.id}` : `/courses/${course.id}/${course.slug}`;
						const imgUrl = `/assets/images/courses/${course.img}.png`;
						const coursesClassName = "courses-icon";
						return (
								<Button
									to={courseLink}
									component={Link}
									color="primary"
									>
<Card key={course.id} elevation={1} className="flex flex-col">
									<CardContent className="flex flex-col courses-card-content flex-auto items-center justify-center">
										<img className={coursesClassName} alt={course.title} src={imgUrl} />
									</CardContent>
									<Divider />
									<CardActions className="justify-center">
										<Button
											to={courseLink}
											component={Link}
											color="primary"
										>
											<Typography className="text-center capitalize px-6 text-14 font-400">{course.title}</Typography>
										</Button>
									</CardActions>
								</Card>
									</Button>
								
						);
						})
						}
						</FuseAnimateGroup>
						</div>
				)})
			}
								</FuseAnimateGroup>
						)),
					[categories, filteredData, theme.palette]
				)}
			</div>
		</div>
	);
}

export default withReducer('academyApp', reducer)(Courses);
