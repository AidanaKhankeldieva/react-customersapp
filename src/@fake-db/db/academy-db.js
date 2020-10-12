import mock from './../mock';
import _ from '@lodash';
import { amber, blue, blueGrey, green } from '@material-ui/core/colors';
// import dataStructuresDb from './data-structures-db';
// import marked from 'marked';

const orientationSteps = {
  orientation: [
    {
      id: '0',
      title: 'Orientation',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/orientation/orientation.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/fPGOwsCKHGE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  tool: [
    {
      id: '1',
      title: 'Front-End Preparation',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/orientation/prep.html" frameborder="0" class="slide-frame">',
    },
  ],
  webConcept: [
    {
      id: '1',
      title: 'Web Concept',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/orientation/web-concept.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/fzTU-MdN7EU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
};

const reactSteps = [
  {
    id: '0--1',
    title: 'Javascript',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/javascript.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0--2',
    title: 'ES6',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/es6.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0--3',
    title: 'Into to React',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/introduction.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-1',
    title: 'Video',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/2i3pSAoCLgY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '0-2',
    title: 'Video-Props-State',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Ncs5wCXW9-A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '0-3',
    title: 'Pagination, Counter',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/UTBFvED1Yjs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '0-4',
    title: 'State, Events, and Forms',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/StateAndEvents.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-5',
    title: 'Rendering List',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/ConditionalRenderingAndLists.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0',
    title: 'Higher Order Components',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/HigherOrderComponents.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-6',
    title: 'React Lifecycle',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/reactLifecycle.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-7',
    title: 'Redux',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/Redux.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-8',
    title: 'Thinking in React',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/react.html" frameborder="0" class="slide-frame">',
  },
  {
    id: '0-9',
    title: 'Testing React',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/react/testing-react.html" frameborder="0" class="slide-frame">',
  },
];

const fundamentalSteps = {
  html: [
    {
      id: '1-0',
      title: 'Class 1',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class1-intro-to-html/reference-sheet.pdf" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'Intro to HTML',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class1-intro-to-html/intro-to-html.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-7',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class1-intro-to-html/practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-5',
      title: 'Practice - Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/kO15HWL68r0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1-4',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/HnYFcgBO8Gc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1-3-1',
      title: 'Homework 1',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148710/06e21a37e63a387354405ca949769d16"></iframe>',
    },
    {
      id: '1-3-2',
      title: 'Homework 2',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148717/5aef6f78dee93fbd868080190a6ceb1d"></iframe>',
    },
  ],
  css: [
    {
      id: '2-0',
      title: 'Class 2',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class2-intro-to-css/reference-sheet.pdf" frameborder="0" class="slide-frame">',
    },
    {
      id: '2-1',
      title: 'Intro to CSS',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class2-intro-to-css/intro-to-css.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2-7',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class2-intro-to-css/practice.html" frameborder="0" class="slide-frame">',
    },

    {
      id: '2-7',
      title: 'Practice Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315"src="https://www.youtube.com/embed/OGn9vEoj1Wo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2-4',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/7aBtR8txXuo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2-3-1',
      title: 'Homework 1',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148721/9738c8f1b6b9fcfbdb12b7930c888fdc"></iframe>',
    },
    {
      id: '2-3-2',
      title: 'Homework 2',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148722/8d772a076be41cae504524298f018016"></iframe>',
    },
  ],
  basics: [
    {
      id: '3-0',
      title: 'Class 3',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class3-beyond-the-basics/reference-sheet.pdf" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-1',
      title: 'Beyond The Basics',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class3-beyond-the-basics/beyond-the-basics.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-2',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class3-beyond-the-basics/practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-4',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/9yJk8laZpzo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3-3-1',
      title: 'Homework 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148829/284a032a6675b5ad247cbab7dbea090d"></iframe>',
    },
    {
      id: '3-3-2',
      title: 'Homework 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148845/c96a5174b2da0d702b5d84d1862c6633"></iframe>',
    },
  ],
  layouts: [
    {
      id: '4-0',
      title: 'Class 4',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class4-layouts/reference-sheet.pdf" frameborder="0" class="slide-frame">',
    },
    {
      id: '4-1',
      title: 'Layouts Formatting',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class4-layouts/layouts.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-3',
      title: 'Practice 1',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class4-layouts/practice1/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-2',
      title: 'Practice 2',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class4-layouts/practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4-3',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Iyg8JNwa0Yc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4-4',
      title: 'Video 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/0KVQwPJqOW0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4-2',
      title: 'Homework 1',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148846/53ace8040883d43746d9acdba7779a0c"></iframe>'
    },
    {
      id: '4-2-2',
      title: 'Homework 2',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148848/785f9aa5155b34eef8e9caf62f220c24"></iframe>'
    },
    {
      id: '4-2-3',
      title: 'Homework 3',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148849/b2d75070a5d013ec35ea4bb967042100"></iframe>'
    },
    {
      id: '4-2-4',
      title: 'Homework 4',
      type: 'slide',
      content:
      '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148850/3556feea7758f9e443e7d6e6296f9c36"></iframe>'
    },
  ],
  responsive: [
    {
      id: '7-0',
      title: 'Responsive Web',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class7-responsive/responsive.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '7-1',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class7-responsive/practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '7-3',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/yzFvCC65A_0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '7-2-1',
      title: 'Homework 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148858/d447ef230ac1925bdbc9d4768e4f79e2"></iframe>'
    },
    {
      id: '7-2-2',
      title: 'Homework 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148857/f96fb2eacac0e168d5e57d19e93a2437"></iframe>'
    },
    {
      id: '7-2-3',
      title: 'Homework 3',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148856/3d5d1132e4dfcca0f39b30fc16d8061c"></iframe>'
    },
  ],
  forms: [
    {
      id: '5-11',
      title: 'HTML Forms Slides',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class5-html-forms/html-forms.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '5-4',
      title: 'Practice 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="/assets/slides/html-css/class5-html-forms/practice1.html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5-5',
      title: 'Practice 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="/assets/slides/html-css/class5-html-forms/practice2.html" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5-2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/6MIAZAk9PiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5-1',
      title: 'Homework 1',
      type: 'slide',
      content:
        '<iframe  class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148851/f92adcccf6c7bb9557c4acf2054fdf1f"></iframe>',
    },
    {
      id: '5-111',
      title: 'Homework 2',
      type: 'slide',
      content:
        '<iframe  class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6148854/81135d95c7bd9ce25c58caaf4e407142"></iframe>',
    },
  ],
  flexbox: [
    {
      id: '6-0',
      title: 'CSS Flexbox',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class6-flexbox/flexbox.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '6-1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/5nXBWQGh50M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '6-2',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class6-flexbox/practice/practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '6-3',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/class6-flexbox/homework/index.html" frameborder="0" class="slide-frame">',
    },
  ],
  extra_projects: [
    {
      id: '0',
      title: 'Projects',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/extra/index.html" frameborder="0" class="slide-frame">',
    },
  ],
  group_projects: [
    {
      id: '1-2',
      title: 'Portfolio - Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/portfolio/slide.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'Portfolio - Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/wl0pDvjMylo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1-1',
      title: 'Portfolio',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/portfolio/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Resume',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/cv/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'Resume 2',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/cv2/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Todo',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/todo/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Social Network',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/social-network/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Whatsapp',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/whatsapp/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '50',
      title: 'Product Listing',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/product-listing/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '55',
      title: 'E-Commerce 1',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/e-commerce/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '5',
      title: 'E-Commerce 2',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/e-commerce-advanced/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '6',
      title: 'Dashboard',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/dashboard/index.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '7',
      title: 'Movie',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/practice-projects/movie/index.html" frameborder="0" class="slide-frame">',
    },
  ],
  html_css_interview_questions: [
    {
      id: '1',
      title: 'Practice Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/interviews/index.html" frameborder="0" class="slide-frame">',
    },
  ],
  advanced_web: [
    {
      id: '1',
      title: 'Advanced HTML/CSS',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/html-css/html-concept-slide.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/htUEETX7OCM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  practice_projects: [
    {
      id: '1',
      title: 'Practice 1',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/BaKagoQ" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Practice 2',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/xxVxoGM" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Practice 2',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/RwNmvMG" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/1nsjfgaGNdU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
};
const handbookSteps = {
  jsBasic: [
    {
      id: '1-0',
      title: 'JS Introduction',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/01-introduction.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'JS Getting Started',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/02-getting-started.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'JS Syntax',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/03-syntax.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-3',
      title: 'JS Generating Output',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/05-generating-output.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-4',
      title: 'JS Data Types',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/06-data-types.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-5',
      title: 'JS Operators',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/07-operators.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-6',
      title: 'JS Events',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/08-events.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-7',
      title: 'JS Strings',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/09-strings.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-8',
      title: 'JS Numbers ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/10-numbers.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-9',
      title: 'JS If else ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/11-if-else.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-10',
      title: 'JS Switch Case ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/12-switch-case.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-11',
      title: 'JS Arrays ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/13-arrays.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-12',
      title: 'JS Sorting Arrays ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/14-sorting-arrays.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-13',
      title: 'JS Loops',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/15-loops.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-14',
      title: 'JS Functions ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/16-functions.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-15',
      title: 'JS Objects ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-basic/17-objects.html" frameborder="0" class="slide-frame">',
    },
  ],
  jsDom: [
    {
      id: '1-0',
      title: 'JS ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/01-dom-nodes.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'JS DOM Selectors ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/02-dom-selectors.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'JS DOM Styling',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/03-dom-styling.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-3',
      title: 'JS DOM Get Set Attributes',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/04-dom-get-set-attributes.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-4',
      title: 'JS DOM Manipulation ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/05-dom-manipulation.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-0',
      title: 'JS DOM Navigation',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-dom/06-dom-navigation.html" frameborder="0" class="slide-frame">',
    },
  ],
  jsBom: [
    {
      id: '1-0',
      title: 'JS Window ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/01-js-window.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'JS Screen ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/02-js-screen.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'JS Location ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/03-js-location.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-3',
      title: 'JS History ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/04-js-history.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-4',
      title: 'JS Navigator',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/05-js-havigator.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-5',
      title: 'JS Dialog boxes',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/06-js-dialog-boxes.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-6',
      title: 'JS Timers ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-bom/07-js-timers.html" frameborder="0" class="slide-frame">',
    },
  ],
  jsAdvanced: [
    {
      id: '1-0',
      title: 'JS Date and Time  ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/01-js-date-and-time.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-1',
      title: 'JS Math Operations ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/02-js-math-operations.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'JS Type Conversions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/03-js-type-conversions.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-3',
      title: 'JS Event Listeners',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/04-js-event-listeners.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-4',
      title: 'JS Event Propagation',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/05-js-event-propagation.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-5',
      title: 'JS Borrowing Methods ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/06-js-borrowing-methods.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-6',
      title: 'JS Hoisting Behavior',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/07-js-hoisting-behavior.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-7',
      title: 'JS Closures  ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/08-js-closures.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-8',
      title: 'JS Strict Mode ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/09-js-strict-mode.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-9',
      title: 'JS JSON Parsing ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/10-js-json-parsing.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-10',
      title: 'JS Error Handling  ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/11-js-error-handling.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-11',
      title: 'JS Regular Expressions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/12-js-regular-expressions.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-12',
      title: 'JS Form Validation',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/13-js-form-validation.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-13',
      title: 'JS Cookies ',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/14-js-cookies.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-14',
      title: 'JS AJAX',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/15-js-ajax.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-15',
      title: 'JS ES6 Features',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/handbook/js-advanced/16-js-es6-features.html" frameborder="0" class="slide-frame">',
    },
  ],
};

const backEndSteps = [
  {
    id: '0',
    title: '1 - Intro',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/back-end/1.pdf" frameborder="0" class="slide-frame">',
  },
  {
    id: '0',
    title: '2-DB Concept, Terminal',
    type: 'slide',
    content:
      '<iframe src="/assets/slides/back-end/2.pdf" frameborder="0" class="slide-frame">',
  },
  {
    id: '0',
    title: 'Video',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/h05BiwFUsw4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];
const dataStructures = [
  {
    id: '0',
    title: 'Algorithms and Problem Solving Patterns',
    type: 'slide',
    content:
      '<iframe src="//cs.slides.com/colt_steele/problem-solving-patterns/embed?style=light" frameborder="0" class="slide-frame" scrolling="no" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    id: '1',
    title: 'Video',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/AdhLSolVKzc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
  {
    id: '0',
    title: 'Built-in Data Structures',
    type: 'slide',
    content:
      '<iframe src="//cs.slides.com/colt_steele/built-in-data-structures-25/embed" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
  },
  {
    id: '1',
    title: 'Video',
    type: 'slide',
    content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/FppuMmrvbp0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
  },
];
const interviewSubCoursesSteps = {
  intro1: [
    {
      id: '1',
      title: 'Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/interviews/1.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Project-1',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/wvGvarG" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Project-2',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/KKwEwjG" frameborder="0" class="slide-frame">',
    },
    {
      id: '5',
      title: 'Project-3',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/eYmXYje" frameborder="0" class="slide-frame">',
    },
    {
      id: '6',
      title: 'Video Answer',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/hkvXBhdov5E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  realInterviews: [
    {
      id: '1',
      title: 'Amazon Phone Screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/CzZbkIhto0I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'TripleByte 1',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/zNC0CiDTdeE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'TripleByte 2',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/bs8GKP3wDqs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  mockInterviews: [
    {
      id: '1',
      title: '1 Media Company',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/--VwfXR8mjQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: '2 Amazon',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/6MRjhSnhRJ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: '3 Mid Level',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/UCOXYQABlGo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: '4 Phone Screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/81pPhG49Db8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5',
      title: '5 Phone Screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/DyAy19o_l1Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '6',
      title: '6 Amazon Onsite',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/rIkCZrD4jEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '7',
      title: '7 Amazon Phone screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/0XrnmFtvH9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '8',
      title: '8 Phone screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/fVw-108DEAA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '9',
      title: '9 Phone screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/oSM3tgoqMzI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '10',
      title: '10 Amazon Phone screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/VpL7dP_OypE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '11',
      title: '11 Amazon Phone screen',
      type: 'slide',
      content:
      '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/W5uuAfJ8SnY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  interviewProjects: [
    {
      id: '1',
      title: 'Trade - React',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/real-interviews/homeworks/trade/trade.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Component - JS',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/real-interviews/homeworks/component/component.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Tweetsaver - React',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/real-interviews/homeworks/tweetsaver/tweetsaver.pdf" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Netflix - JS',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/real-interviews/homeworks/netflix/netflix.pdf" frameborder="0" class="slide-frame">',
    },
  ],
  second: [
    {
      id: '1',
      title: '1',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/interviews/second/1.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: '2',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/html-css/interviews/second/2.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const behavioralSubCoursesSteps = {
  guideline: [
    {
      id: '1',
      title: 'Star',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/star.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Prepare',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/prepare.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Communicate',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/communicate.html" frameborder="0" class="slide-frame">',
    },
  ],
  selfAwareness: [
    {
      id: '1',
      title: 'Strength & Weakness',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/strength-weakness.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Co-workers',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/co-workers.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Role model',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/role-model.html" frameborder="0" class="slide-frame">',
    },
  ],
  motivationAndValues: [
    {
      id: '1',
      title: 'Why',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/why.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'What',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/what.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/questions.html" frameborder="0" class="slide-frame">',
    },
  ],
  conflictResolution: [
    {
      id: '1',
      title: 'Conflict Resolution with a Colleague',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/conflict-colleague.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Disagree with Leadership',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/disagree.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Experience of Compromising',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/compromising.html" frameborder="0" class="slide-frame">',
    },
  ],
  prioritizationAndTimeManagement: [
    {
      id: '1',
      title: 'Prioritize',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/prioritize.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Overcome Project Delay',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/project-delay.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Daily Routine',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/daily-routine.html" frameborder="0" class="slide-frame">',
    },
  ],
  teamwork: [
    {
      id: '1',
      title: 'Difficult People',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/difficult-people.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Drive Success',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/drive-success.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Influencing',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/influencing.html" frameborder="0" class="slide-frame">',
    },
  ],
  abilityToLearnAndAdapt: [
    {
      id: '1',
      title: 'Unexpected',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/unexpected.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Learned',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/learned.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Failure',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/failure.html" frameborder="0" class="slide-frame">',
    },
  ],
  leadership: [
    {
      id: '1',
      title: 'Leadership Experience',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/leadership-experience.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Leadership Style',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/leadership-style.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Mentor',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/mentor.html" frameborder="0" class="slide-frame">',
    },
  ],
  management: [
    {
      id: '1',
      title: 'Firing',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/firing.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Escalations',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/escalations.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Empowering',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/behavioral/empowering.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const reactSubCoursesSteps = {
  reactProjects: [
    {
      id: '1',
      title: 'Todo',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/JFvlnmbvi7Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Todo - Components',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/o6YPrGDbJNA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Thinking in React',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/tGmq3in9lN4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'TODO - 3',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/nGsd6IdJbis" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5',
      title: 'TODO - 4',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/9Y2QSV_2P-M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '6',
      title: 'Movie Depot',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/L-5A9etxr7U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '7',
      title: 'World Clocks',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Holt2AvjJpk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '8',
      title: 'Employees - Day 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/gI6RSCNut4M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '9',
      title: 'Employees - Day 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/SZtVTT5wwEk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '10',
      title: 'Employees - Day 3',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/UaGE2dmZBK0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '11',
      title: 'Employees - Day 4-1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/edIvbZRke4w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '110',
      title: 'Employees - Day 4-2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/yd0pplu4mIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '12',
      title: 'Employees - Day 5',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/m01s3_nb1uU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '13',
      title: 'Employees - Day 6',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/htuTB2e7MPw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '14',
      title: 'Employees - Day 7',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/w4xA6fg_Ew8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '15',
      title: 'Employees - Day 8',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/YeGikG3vK1A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '16',
      title: 'Employees - Day 9',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/2Lq87PlQzcM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '17',
      title: 'Employees - Day 10',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/soZmoswiTFw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '18',
      title: 'Employees - Day 11',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Hq4xir89xgU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '19',
      title: 'Employees - Day 12',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/h0K0Lbib7nE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  introReact: [
    {
      id: '0',
      title: 'Intro to React',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/introduction.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/kdtkQhvqP_s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  jsx: [
    {
      id: '0',
      title: 'React JSX',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/jsx.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/OdkRZoRP0fQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/g5nGDiTZgkI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  conditionalRenderingAndLists: [
    {
      id: '0',
      title: 'Conditional Rendering',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/ConditionalRenderingAndLists.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'CR Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Avq6s2B5Krc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'List and Keys Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/1ujnZaq4310" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  stateAndEvents: [
    {
      id: '0',
      title: 'State & Events',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/state-events.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/CtESB2UehDw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  reactLifecycle: [
    {
      id: '0',
      title: 'React Lifecycles',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/reactLifecycle.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React Lifecycles',
      type: 'slide',
      content:
        '<iframe width="560" height="315" src="https://www.youtube.com/embed/TL5XHKm2r2E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  higherOrderComponents: [
    {
      id: '0',
      title: 'Higher Order Components',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/higherOrderComponents.html" frameborder="0" class="slide-frame">',
    },
  ],
  thinkinginreact: [
    {
      id: '0',
      title: 'Thinking in React',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/react.html" frameborder="0" class="slide-frame">',
    },
  ],
  redux: [
    {
      id: '0',
      title: 'Redux',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/redux.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '0-1',
      title: 'Redux Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/nXKc5ztdTBw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  testingreact: [
    {
      id: '0-9',
      title: 'Testing React',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/react/testing-react.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const jsSubCoursesSteps = {
  intro: [
    {
      id: '0',
      title: 'Introduction to JavaScript and Basic Programming Concepts',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class1.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Eeazy3pY838" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/hw1.html" frameborder="0" class="slide-frame">',
    },
  ],
  functions: [
    {
      id: '0',
      title: 'Functions and Control Flow',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class2.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/aIXR6seRrnI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/which_number_is_bigger.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Practice - Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/C919KLini4Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '5',
      title: 'Practice - Video 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/VmoBPoPxr9U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/hw2.html" frameborder="0" class="slide-frame">',
    },
  ],
  speakers: [
    {
      id: '1',
      title: 'Sanjar',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/xTk41epeToY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  es6: [
    {
      id: '0',
      title: 'ES6',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-advanced/es6.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'ES6 Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/vK8AMSr000U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'ES6 Video 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Sf4nWmlz9-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  advancedJS: [
    {
      id: '2-4',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Sf4nWmlz9-0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  loop: [
    {
      id: '0',
      title: 'Loops, Arrays, and Objects',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class3.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/HCLEp8tQb6U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Practice - Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Kp9Ijuxu2B0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Practice - My Top Companies',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/my_top_companies.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Practice - My Peers',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/my_peers.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/hw3.html" frameborder="0" class="slide-frame">',
    },
  ],
  dom: [
    {
      id: '0',
      title: 'Introduction to the DOM',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class4.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/RO7Nly2FJNI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Practice - Grocery List',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/grocery_list.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '5',
      title: 'Video - Grocery List',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/yMPM1V4GNaU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Practice - CSS in JS',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/css_in_js.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '6',
      title: 'Video - CSS in JS',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/C9CbYNAISSU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/hw4.html" frameborder="0" class="slide-frame">',
    },
  ],
  dataTypes: [
    {
      id: '0',
      title: 'Data Types - Primitive',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class5.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Lq1opYruX5o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/hw5.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Data Types - Objects',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class55.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1-2',
      title: 'Video 2-1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/sSe5y92lpX8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1-3',
      title: 'Video 2-2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/XGnVzAAYxVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  methods: [
    {
      id: '0',
      title: 'JavaScript Methods',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class6.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/NdA3NsZEJnU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Practice - Pokemon',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/practice-projects/pokemon.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Homework 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6158766/f660ef7eafd2650fa0203291299b0560"></iframe>',
    },
    {
      id: '4',
      title: 'Homework 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6160021/ff1918b6579e018a0928b8ed49bfe602"></iframe>',
    },
    {
      id: '5',
      title: 'Homework 3',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6149228/4fad7f62de405831c45d9167f7e454d0"></iframe>',
    },
    {
      id: '6',
      title: 'Homework 4',
      type: 'slide',
      content:
        '<iframe class="slide-frame" frameborder="0" width="100%" height="600px" src="https://repl.it/student_embed/assignment/6160115/637fc5be655c2e12a9bb1d821bd21200"></iframe>',
    },
  ],
  concepts: [
    {
      id: '0',
      title: 'JavaScript Concepts',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class7.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/P9J4_Rmlu1o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Video 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/mZpvDqined0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Video 3',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/bxDHriVM-ks" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  async: [
    {
      id: '0',
      title: 'Async JS',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/async.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/RIWieWJdp9w" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Video - Janat',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/wJyWUNpzAhA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Practice 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/oxgFeamUr98" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'Practice 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/OW2FFWrC_3s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  practice_projects: [
    {
      id: '1--1',
      title: 'Basic Todo List',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/gOrZeaX" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Weather Kevin',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/weather.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Buttons',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/buttons.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3-1',
      title: 'Chat',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/chat.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Counter',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/counter.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Tabs',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/tabs.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Todo',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/todo.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '5',
      title: 'Typeahead',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/typeahead.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '6',
      title: 'Off Canvas Menu',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/off-canvas-menu.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '7',
      title: 'Modal',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/projects-components/modal.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '8',
      title: 'Todo List',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/mdJpqNx" frameborder="0" class="slide-frame">',
    },
    {
      id: '8-1',
      title: 'Todo List 2',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/projects-components/todo.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '8-2',
      title: 'Kanban',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/projects-components/kanban.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '9',
      title: 'Add Student',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/RwPQrjB" frameborder="0" class="slide-frame">',
    },
    {
      id: '10',
      title: 'Counter',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/ulan13/pen/BaNYPrm" frameborder="0" class="slide-frame">',
    },
    {
      id: '11',
      title: 'Tic Tac Toe',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/PoqeVgr" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '12',
      title: 'Sliding Puzzle',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/zYGawKq" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '13',
      title: 'Minesweeper',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/full/yLNErvR" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '14',
      title: 'Day of app',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/day-of-week-app/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '15',
      title: 'Pass a Message',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/Pass-the-Message-Project/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '16',
      title: 'Generate Quote',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/Random-Quotes-Project/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '17',
      title: 'Change Bg color 1',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/project_change_color_background/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '18',
      title: 'Change Bg color 2',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/hex-color-background-project/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '19',
      title: 'Mortgage Calculator',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/mortgage-loan-calculator/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '20',
      title: 'Sticky Nav',
      type: 'slide',
      content:
        '<iframe src="https://marina-ferreira.github.io/javascript30/exercises/24_sticky-nav/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '21',
      title: 'HTML5 Video player',
      type: 'slide',
      content:
        '<iframe src="https://marina-ferreira.github.io/javascript30/exercises/11_HTML5-video-player/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '22',
      title: 'Hangman',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/hangman-app-project/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '23',
      title: 'Calculator',
      type: 'slide',
      content:
        '<iframe src="https://romeojeremiah.github.io/Calculator-JavaScript-Project/" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '24',
      title: 'Word Count',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/ulan13/pen/MWwBebb?editors=1111" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '25',
      title: 'Weight Converter',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/marattig/pen/wvaxWPa?editors=0010" frameborder="0" class="slide-frame"></iframe>',
    },
    {
      id: '26',
      title: 'Products List',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/projects-components/products-list.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '27',
      title: 'Image Slider',
      type: 'slide',
      content:
        '<iframe src="https://codepen.io/ulan13/pen/MWwBeEp?editors=0010" frameborder="0" class="slide-frame"></iframe>',
    },
  ],
  terminal: [
    {
      id: '2',
      title: 'Terminal',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/terminal.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '0',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/9s6PveMIl6c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Practice',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/terminal-practice.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/terminal-homework.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Terminal-Cheat-Sheet',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/terminal-markdown.html" frameborder="0" class="slide-frame">',
    },
  ],
  nodejs: [
    {
      id: '0',
      title: 'Nodejs - 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/s7-kUPqvaZ4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Nodejs - 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/F1slvuRE4Zw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  shortcuts: [
    {
      id: '2',
      title: 'Shortcuts',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/shortcuts.html" frameborder="0" class="slide-frame">',
    },
  ],
  github: [
    {
      id: '2',
      title: 'Github',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/github.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '0',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/mZetKXI7Qso" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '0',
      title: 'Practice - Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/dnWaDEBjjsU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Git-Cheat-Sheet',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/general/github-markdown.html" frameborder="0" class="slide-frame">',
    },
  ],
  callbacks: [
    {
      id: '0',
      title: 'Callbacks',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/FX-YcQClkqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/callbacks.html" frameborder="0" class="slide-frame">',
    },
  ],
  closure: [
    {
      id: '0',
      title: 'Closure, Scope, Hoisting, IIFE',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/618SMulCOJs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/closure.html" frameborder="0" class="slide-frame">',
    },
  ],
  coercion: [
    {
      id: '0',
      title: 'Coercion, typeof',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/8zHI3Wsj29o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/coercion.html" frameborder="0" class="slide-frame">',
    },
  ],
  jquery: [
    {
      id: '0',
      title: 'jQuery 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/RF0HelnEQZw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'jQuery 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/ba0bGRYPHFM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  curry: [
    {
      id: '0',
      title: 'Curry',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/ks4Mq186IWA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Equal',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/-K6-EIkBRSg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/jquery.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const algoSubCoursesSteps = {
  bigo: [
    {
      id: '0',
      title: 'Big O Notation',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/big-o-notation/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Video 1',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Yxb7IObh2zo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1-1',
      title: 'Video 2',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/KBzUI98b2WM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/data-structures/ds-homeworks/bigo.html" frameborder="0" class="slide-frame">',
    },
  ],
  analyze: [
    {
      id: '0',
      title: 'Analyzing Performance of Arrays and Objects',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/built-in-data-structures-25/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/HjFztkFSs2A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  problemSolvingApproach: [
    {
      id: '0',
      title: 'Problem Solving Approach & Patterns',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/problem-solving-patterns/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/RVoGMvVzhN0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/kkt6Xk1jn6g " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/data-structures/ds-homeworks/problem-solving-approach.html" frameborder="0" class="slide-frame">',
    },
  ],
  challenges: [
    {
      id: '0',
      title: 'Challenges',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/problem-solving-patterns/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  recursion: [
    {
      id: '0',
      title: 'Recursion',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '20',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/data-structures/ds-homeworks/recursive.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '21',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/nkI2pmCUYNU " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '22',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/u1KMLAArI3E " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Exercise 1 - Power',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Exercise 2 - Factorial',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'Exercise 2 - Product of Array',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '4',
      title: 'Exercise 2 - Recursive Range',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '5',
      title: 'Exercise 2 - Fibonacci',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '6',
      title: 'Exercise 2 - Reverse',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '7',
      title: 'Exercise 2 - isPalindrome',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '8',
      title: 'Exercise 2 - someRecursive',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '9',
      title: 'Exercise 2 - Flatten',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '10',
      title: 'Exercise 2 - Capitalize First',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '11',
      title: 'Exercise 2 - Nested Even Sum',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '12',
      title: 'Exercise 2 - Nested Even Sum',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '13',
      title: 'Exercise 2 - Capitalize Words',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '14',
      title: 'Exercise 2 - Stringify Numbers',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '15',
      title: 'Exercise 2 - Collective Strings',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/searching-algorithms-22/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  searching: [
    {
      id: '0',
      title: 'Searching Algorithms',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/tries-21/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  sorting: [
    {
      id: '0',
      title: 'Sorting Algorithms',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/elementary-sorting-algorithms/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  dataStructures: [
    {
      id: '0',
      title: 'Data Structures',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/es2015-class-syntax/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  singlyLinkedLists: [
    {
      id: '0',
      title: 'Singly Linked Lists',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/singly-linked-lists/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Y_wAvU2uoCY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '2',
      title: 'Homework',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/data-structures/ds-homeworks/singly-linked-list.html" frameborder="0" class="slide-frame">',
    },
  ],
  doublyLinkedLists: [
    {
      id: '0',
      title: 'Doubly Linked Lists',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/doubly-linked-lists/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  stacksQueues: [
    {
      id: '0',
      title: 'Stacks',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/stacks/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'Queues',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/queues/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  binarySearchTrees: [
    {
      id: '0',
      title: 'Binary Search Trees',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/trees/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  hashTables: [
    {
      id: '0',
      title: 'Hash Tables',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/hash-tables/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  graphs: [
    {
      id: '0',
      title: 'graphs',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/graphs/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
  dynamicProgramming: [
    {
      id: '0',
      title: 'dynamic-programming',
      type: 'slide',
      content:
        '<iframe src="https://cs.slides.com/colt_steele/dynamic-programming/embed" frameborder="0" class="slide-frame" scrolling="no" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    },
  ],
};
const mentorshipSteps = {
  slides: [
    {
      id: '0',
      title: 'DOM - Rachel - Slide',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class1.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'DOM - Rachel - Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/dAG81k7WQaE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  homeworks: [
    {
      id: '0',
      title: 'Functions and Control Flow',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/js-intro/class2.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Y9mr09VwHKg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  speakers: [
    {
      id: '1',
      title: 'Sanjar',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/xTk41epeToY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
};

const interviewPrepSubCoursesSteps = {
  top100: [
    {
      id: '0',
      title: 'Easy',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/leetcode/top100-easy.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Medium',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/leetcode/top100-medium.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '0',
      title: 'Hard',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/leetcode/top100-hard.html" frameborder="0" class="slide-frame">',
    },
  ],
  practiceQuestions: [
    {
      id: '00',
      title: 'JS Fundamentals',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/practice/prac-fundamentals.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '0',
      title: 'Methods',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/practice/prac-methods.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '401',
      title: 'Basic Algorithms',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/practice/prac-basic-algo.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '41',
      title: 'Basic Algorithms Solutions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/practice/prac-basic-algo-solutions.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '4',
      title: 'Real Interview Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/practice/prac-prev-studs.html" frameborder="0" class="slide-frame">',
    },
  ],
  htmlcss: [
    {
      id: '0',
      title: 'HTML Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/html-css/html.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '011',
      title: 'HTML Question - Review',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/HCryuYyzEEY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '1',
      title: 'HTML Slide',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/html-css/html-concept-slide.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'CSS Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/html-css/css.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '011',
      title: 'CSS Question - Review',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/ChYlgtlb28M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
      id: '3',
      title: 'CSS Project Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/html-css/css-project.html" frameborder="0" class="slide-frame">',
    },
  ],
  general: [
    {
      id: '0',
      title: 'Concept',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/general/concept.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'General',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/general/general.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'System Design',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/general/system-design.html" frameborder="0" class="slide-frame">',
    },
  ],
  behavioral: [
    {
      id: '1',
      title: 'Behavioral',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/behavioral/behavioral.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'HR Interview',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/Zojgkq47wBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  info: [
    {
      id: '0',
      title: 'Road map',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/info/roadmap.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Info',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/info/info.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'Dictionary',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/info/dictionary.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Links',
      type: 'slide',
      content:
      '<iframe src="/assets/slides/interview-prep/info/links.html" frameborder="0" class="slide-frame">',
    },
  ],
  javascript: [
    {
      id: '0',
      title: 'Concepts',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/js/js-concepts.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Javascript',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/js/javascript.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '2',
      title: 'DOM',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/js/dom.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '3',
      title: 'Debugging',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/js/debugging.html" frameborder="0" class="slide-frame">',
    },
  ],
  system: [
    {
      id: '0',
      title: 'Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/system.html" frameborder="0" class="slide-frame">',
    },
  ],
  reactInterview: [
    {
      id: '0',
      title: 'Core React',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-core.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '011',
      title: 'React Router',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-router.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React Internationalization',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-intl.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React Testing',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-testing.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React Redux',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-redux.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React Native',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-native.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'React supported libraries and Integration',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-libraries.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Miscellaneous',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interview-prep/react/react-miscellaneous.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const interviewsSubCoursesSteps = {
  i0: [
    {
      id: '0',
      title: 'Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interviews/0.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/aJNfSJdRh5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  i1: [
    {
      id: '0',
      title: 'Questions',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interviews/1.html" frameborder="0" class="slide-frame">',
    },
    {
      id: '1',
      title: 'Video',
      type: 'slide',
      content:
        '<iframe class="slide-frame" width="560" height="315" src="https://www.youtube.com/embed/aJNfSJdRh5M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
  ],
  graduation: [
    {
      id: 'graduation',
      title: 'Graduation Quiz',
      type: 'slide',
      content:
        '<iframe src="/assets/slides/interviews/graduation.html" frameborder="0" class="slide-frame">',
    },
  ],
};
const interviewsSteps = [
  {
    id: 'i0',
    title: '1',
    parent: 'interviews',
    description: 'Interview',
    category: 'web',
    length: 'Interview - 1',
    totalSteps: 11,
    activeStep: 0,
    updated: 'August 7, 2019',
    type: 'slide',
    steps: interviewsSubCoursesSteps.i0,
  },
  {
    id: 'i2',
    title: '2',
    parent: 'interviews',
    description: 'Interview',
    category: 'web',
    length: 'Interview - 2',
    totalSteps: 11,
    activeStep: 0,
    updated: 'August 9, 2019',
    type: 'slide',
    steps: interviewsSubCoursesSteps.i1,
  },
  {
    id: 'i3',
    title: 'Graduation Quiz',
    parent: 'interviews',
    description: 'Interview',
    category: 'web',
    length: 'Interview - 2',
    totalSteps: 11,
    activeStep: 0,
    updated: 'August 9, 2019',
    type: 'slide',
    steps: interviewsSubCoursesSteps.graduation,
  },
];

const academyDB = {
  categories: [
    {
      id: 0,
      value: 'pre-bootcamp',
      label: 'Pre Bootcamp',
      color: blue[500],
    },
    {
      id: 1,
      value: 'web-fundamentals',
      label: 'Web Fundamentals',
      color: amber[500],
    },
    {
      id: 2,
      value: 'javascript-fundamentals',
      label: 'JavaScript Fundamentals',
      color: blueGrey[500],
    },
    {
      id: 3,
      value: 'react',
      label: 'React JS',
      color: green[500],
    },
    {
      id: 4,
      value: 'algo',
      label: 'Algorithms and Data Structures',
      color: green[500],
    },
    {
      id: 5,
      value: 'mentorship',
      label: 'Mentorship',
      color: green[500],
    },
    {
      id: 6,
      value: 'tools',
      label: 'Tools / Libraries',
      color: green[500],
    },
    {
      id: 7,
      value: 'interview',
      label: 'Interview Preparation',
      color: green[500],
    },
    {
      id: 8,
      value: 'behavioral',
      label: 'Behavioral',
      color: green[500],
    },
    {
      id: 9,
      value: 'hand-books',
      label: 'Hand Books',
      color: green[500],
    },
  ],
  getAllCourses: function () {
    let allCourses = [];
    academyDB.section.forEach(
      (sec) => (allCourses = allCourses.concat(sec.courses))
    );
    return allCourses;
  },
  courses: [
    {
      id: 'backend',
      title: 'Back-end',
      slug: 'back-end',
      description: 'Learn Back end.',
      category: 'back-end',
      length: 30,
      totalSteps: 11,
      activeStep: 0,
      updated: 'Jun 28, 2017',
      steps: backEndSteps,
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      slug: 'data-structures',
      description: 'Learn Data Structures.',
      category: 'web',
      length: 30,
      totalSteps: 11,
      activeStep: 0,
      updated: 'Jun 28, 2017',
      steps: dataStructures,
    },
    {
      id: 'interviews',
      title: 'Mock Interviews',
      slug: 'interviews',
      description: 'Mock Interviews',
      category: 'web',
      length: 30,
      totalSteps: 11,
      activeStep: 0,
      updated: 'Jun 28, 2017',
      courses: interviewsSteps,
    },
    {
      id: 'react',
      title: 'React',
      slug: 'react',
      description: 'React',
      category: 'web',
      length: 30,
      totalSteps: 11,
      activeStep: 0,
      updated: 'Aug 28, 2019',
      type: 'slide',
      steps: reactSteps,
    },
  ],
  section: [
    /*{
            name: 'Free HTML-CSS Courses',
            guestOnly: true,
            courses:[
                {
                    'id'         : 'orientation',
                    'title'      : 'Orientation',
                    'slug'       : 'pre',
                    'description': 'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
                    'category'   : 'web',
                    'length'     : 30,
                    'img'   : 'default',
                    'totalSteps' : 11,
                    'activeStep' : 0,
                    'updated'    : 'Jun 28, 2017',
                    'type'       : 'slide',
                    'steps'      : orientationSteps.orientation
                },
                {
                    'id'         : 'web-concept',
                    'title'      : 'Web Concept',
                    'slug'       : 'pre',
                    'description': 'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
                    'category'   : 'web',
                    'length'     : 30,
                    'img'   : 'default',
                    'totalSteps' : 11,
                    'activeStep' : 0,
                    'updated'    : 'Jun 28, 2017',
                    'type'       : 'slide',
                    'steps'      : orientationSteps.webConcept
                },
                {
                    'id'         : 'intro-html',
                    'title'      : 'Intro to HTML',
                    'slug'       : 'web',
                    'description': 'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
                    'category'   : 'web',
                    'img'   : 'html',
                    'length'     : 30,
                    'totalSteps' : 11,
                    'activeStep' : 0,
                    'updated'    : 'Jun 28, 2017',
                    'steps'      : fundamentalSteps.html
                },
                {
                    'id'         : 'intro-css',
                    'title'      : 'Intro to CSS',
                    'slug'       : 'web',
                    'description': 'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
                    'category'   : 'web',
                    'img'   : 'css',
                    'length'     : 30,
                    'totalSteps' : 11,
                    'activeStep' : 0,
                    'updated'    : 'Jun 28, 2017',
                    'steps'      : fundamentalSteps.css
                },
                {
                    'id'         : 'basics',
                    'title'      : 'Beyond the Basics',
                    'slug'       : 'web',
                    'description': 'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
                    'category'   : 'web',
                    'img'   : 'html',
                    'length'     : 30,
                    'totalSteps' : 11,
                    'activeStep' : 0,
                    'updated'    : 'Jun 28, 2017',
                    'steps'      : fundamentalSteps.basics
                },
            ]
        },*/
    {
      id: 1,
			category: 'pre-bootcamp',
      name: 'Pre-Bootcamp',
      subscriptionSection: true,
      courses: [
        {
          id: 'orientation',
          title: 'Orientation',
          slug: 'pre',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          length: 30,
          img: 'default',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          type: 'slide',
          steps: orientationSteps.orientation,
        },
        {
          id: 'tools',
          title: 'Tools',
          slug: 'pre',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          length: 30,
          img: 'default',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          type: 'slide',
          steps: orientationSteps.tool,
        },
        {
          id: 'web-concept',
          title: 'Web Concept',
          slug: 'pre',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          length: 30,
          img: 'default',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          type: 'slide',
          steps: orientationSteps.webConcept,
        },
      ],
    },
    {
      id: 2,
			category: 'web-fundamentals',
      name: 'Web Fundamentals',
      subscriptionSection: true,
      courses: [
        {
          id: 'intro-html',
          title: 'Intro to HTML',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'html',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.html,
        },
        {
          id: 'intro-css',
          title: 'Intro to CSS',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.css,
        },
        {
          id: 'basics',
          title: 'Beyond the Basics',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'html',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.basics,
        },
        {
          id: 'layouts',
          title: 'Layouts',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.layouts,
        },
        {
          id: 'forms',
          title: 'HTML Forms',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.forms,
        },
        {
          id: 'flexbox',
          title: 'CSS Flexbox',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.flexbox,
        },
        {
          id: 'responsive',
          title: 'Responsive Web',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'html',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.responsive,
        },
        {
          id: 'group-projects',
          title: 'Group Projects',
          slug: 'projects',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.group_projects,
        },
        {
          id: 'projects',
          title: 'Practice Projects',
          slug: 'projects',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'css',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: fundamentalSteps.practice_projects,
        },
        {
          id: 'html-css-interview-1',
          title: 'HTML-CSS Prep Questions',
          parent: 'web',
          description: 'Polyfill',
          category: 'web',
          slug: 'interview',
          img: 'html',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: fundamentalSteps.html_css_interview_questions,
        },
        {
          id: 'html-css-interview-answer',
          title: 'HTML-CSS Interview/Answer',
          parent: 'web',
          hideSubscriptionClass: true,
          description: 'Polyfill',
          category: 'web',
          slug: 'interview',
          img: 'html',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.intro1,
        },
        {
          id: 'html-css-interview-2',
          title: 'HTML-CSS Interview/Answer 2',
          parent: 'web',
          description: 'Polyfill',
          hideSubscriptionClass: true,
          category: 'web',
          slug: 'interview',
          img: 'html',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.second,
        },
        {
          id: 'extra-class-projects',
          title: 'Extra Class Projects',
          parent: 'web',
          description: 'Extra Class Projects',
          category: 'web',
          slug: 'web',
          img: 'html',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: fundamentalSteps.extra_projects,
        },
        {
          id: 'advanced-html-css',
          title: 'Advanced HTML/CSS',
          parent: 'web',
          description: 'Advanced HTML/CSS',
          category: 'web',
          slug: 'web',
          img: 'html',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: fundamentalSteps.advanced_web,
        },
      ],
    },
    {
      name: 'JavaScript Fundamentals',
      notReady: false,
      id: 3,
			category: 'javascript-fundamentals',
      subscriptionSection: true,
      courses: [
        {
          id: 'intro',
          title: 'Intro to Programming',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          hide: false,
          steps: jsSubCoursesSteps.intro,
        },
        {
          id: 'function',
          title: 'Functions',
          hide: false,
          parent: 'js',
          slug: 'js',
          img: 'js',
          description: 'Functions and Control Flow',
          category: 'web',
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 11, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.functions,
        },
        {
          id: 'loop',
          title: 'Loops, Arrays & Objects',
          parent: 'js',
          slug: 'js',
          hide: false,
          img: 'js',
          description: 'Loops, Arrays, and Objects',
          category: 'web',
          length: 'Lecture - 3',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 13, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.loop,
        },
        {
          id: 'dom',
          title: 'Intro to the DOM',
          parent: 'js',
          slug: 'dom',
          hide: false,
          img: 'js',
          description: 'Intro to the DOM',
          category: 'web',
          length: 'Lecture - 4',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 18, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.dom,
        },
        {
          id: 'data-types',
          title: 'Data Types',
          parent: 'js',
          description: 'Data Types and More',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 5',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.dataTypes,
        },
        {
          id: 'methods',
          title: 'Methods',
          parent: 'js',
          description: 'JS Methods',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 6',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.methods,
        },
        {
          id: 'concepts',
          title: 'Concepts',
          parent: 'js',
          description: 'JS Concepts',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 6',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.concepts,
        },
        {
          id: 'async',
          title: 'Async',
          parent: 'js',
          description: 'JS Concepts',
          category: 'web',
          hide: false,
          slug: 'js',
          img: 'js',
          length: 'Lecture - 6',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.async,
        },
        {
          id: 'es6',
          title: 'ES6',
          parent: 'js',
          description: 'JS Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          hide: false,
          length: 'Lecture - 6',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.es6,
        },
        {
          id: 'advanced-js',
          title: 'Advanced JS',
          parent: 'js',
          description: 'JS Advanced',
          category: 'web',
          slug: 'js',
          img: 'js',
          length: 'Lecture - 6',
          hide: false,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.advancedJS,
        },
        {
          id: 'jsprojects',
          title: 'Practice Projects',
          parent: 'js',
          hideSubscriptionClass: true,
          slug: 'projects',
          img: 'default',
          description: 'Intro to the DOM',
          hide: false,
          category: 'web',
          length: 'Lecture - 7',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 18, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.practice_projects,
        },
      ],
    },
    {
      name: 'React JS',
      notReady: true,
      id: 4,
			category: 'react',
      courses: [
        {
          id: 'intro-react',
          title: 'Intro to React',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.introReact,
        },
        {
          id: 'react-jsx',
          title: 'React JSX',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.jsx,
        },
        {
          id: 'conditional-rendering-lists',
          title: 'Conditional Rendering And Lists',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.conditionalRenderingAndLists,
        },
        {
          id: 'state-events',
          title: 'State & Events',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          length: 'Lecture - 1',
          hide: false,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.stateAndEvents,
        },
        {
          id: 'react-steps',
          title: 'React Steps',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSteps,
        },
        {
          id: 'react-lifecycle',
          title: 'React Lifecycle',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          hide: false,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.reactLifecycle,
        },
        {
          id: 'higher-Order-components',
          title: 'Higher Order Components',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          length: 'Lecture - 1',
          hide: false,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.higherOrderComponents,
        },
        {
          id: 'redux',
          title: 'Redux',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          hide: false,
          slug: 'js',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.redux,
        },
        {
          id: 'think-react',
          title: 'Thinking in React',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          length: 'Lecture - 1',
          hide: false,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.thinkinginreact,
        },
        {
          id: 'react-projects',
          title: 'React Projects',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: reactSubCoursesSteps.reactProjects,
        },
        {
          id: 'testting-react',
          title: 'Testing React',
          parent: 'js',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'js',
          img: 'js',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'May 11, 2020',
          type: 'slide',
          steps: reactSubCoursesSteps.testingreact,
        },
      ],
    },
    {
      name: 'Algorithms and Data Structures',
      notReady: false,
      id: 5,
			category: 'algo',
      courses: [
        {
          id: 'bigo',
          title: 'Big O Notation',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          hide: false,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.bigo,
        },
        {
          id: 'analyze',
          title: 'Analyze',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.analyze,
        },
        {
          id: 'problem-solving-approach',
          title: 'Problem Solving Approach',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          hide: true,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.problemSolvingApproach,
        },
        {
          id: 'problem-solving-approach',
          title: 'Problem Solving Approach',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          hide: true,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.problemSolvingApproach,
        },
        {
          id: 'challenges',
          title: 'Challenges',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          hide: true,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.challenges,
        },
        {
          id: 'recursion',
          title: 'Recursion',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          hide: true,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.recursion,
        },
        {
          id: 'searching',
          title: 'Searching',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          hide: true,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.searching,
        },
        {
          id: 'sorting',
          title: 'Sorting',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.sorting,
        },
        {
          id: 'data-structures',
          title: 'Data Structures Introduction',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.dataStructures,
        },
        {
          id: 'singly-linked-lists',
          title: 'Singly Linked Lists',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          hide: true,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.singlyLinkedLists,
        },
        {
          id: 'double-linked-lists',
          title: 'Double Linked Lists',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          hide: true,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.doublyLinkedLists,
        },
        {
          id: 'stacks-queues',
          title: 'Stacks + Queues',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.stacksQueues,
        },
        {
          id: 'binary-search-trees',
          title: 'Binary Search Trees',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          hide: true,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.binarySearchTrees,
        },
        {
          id: 'hash-tables',
          title: 'Hash Tables',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.hashTables,
        },
        {
          id: 'graphs',
          title: 'Graphs',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          hide: true,
          slug: 'algo',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.graphs,
        },
        {
          id: 'dynamic-programming',
          title: 'Dynamic Programming',
          parent: 'algo',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'algo',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: algoSubCoursesSteps.dynamicProgramming,
        },
      ],
    },
    {
      id: 6,
			category: 'mentorship',
      name: 'Mentorship',
      notReady: true,
      courses: [
        {
          id: 'Dom',
          title: 'Slides',
          parent: 'js',
          img: 'default',
          slug: 'slides',
          description: 'Slides',
          category: 'web',
          hide: true,
          length: 'Lecture - 6-1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 25, 2019',
          type: 'slide',
          steps: mentorshipSteps.slides,
        },
        {
          id: 'speakers',
          title: 'Speakers',
          parent: 'tool',
          img: 'default',
          hide: true,
          slug: 'tool',
          description: 'Github',
          category: 'web',
          length: 'Lecture - 6-1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 25, 2019',
          type: 'slide',
          steps: mentorshipSteps.speakers,
        },
        {
          id: 'saturday-projects',
          title: 'Saturday Projects',
          parent: 'js',
          img: 'jquery',
          slug: 'library',
          description: 'jQuery',
          hide: true,
          category: 'web',
          length: 'Lecture - 5',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 20, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.jquery,
        },
      ],
    },
    {
      name: 'Tools / Libraries',
      notReady: false,
      id: 7,
			category: 'tools',
      courses: [
        {
          id: 'terminal',
          title: 'Terminal',
          parent: 'js',
          img: 'git',
          slug: 'tool',
          /* hide: true, */
          description: 'Terminal',
          category: 'web',
          length: 'Lecture - 6-1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 25, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.terminal,
        },
        {
          id: 'github',
          title: 'Github',
          parent: 'js',
          img: 'git',
          slug: 'tool',
          description: 'Github',
          /* hide: true, */
          category: 'web',
          length: 'Lecture - 6-1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 25, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.github,
        },
        {
          id: 'shortcuts',
          title: 'Shortcuts',
          parent: 'tool',
          img: 'default',
          slug: 'tool',
          description: 'Shortcuts',
          category: 'web',
          length: 'Lecture - 6-1',
          /* hide: true, */
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 25, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.shortcuts,
        },
        {
          id: 'nodejs',
          title: 'Node.js',
          parent: 'js',
          img: 'jquery',
          slug: 'library',
          description: 'Node.js',
          hide: true,
          category: 'web',
          length: 'Lecture - 5',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 20, 2019',
          type: 'slide',
          steps: jsSubCoursesSteps.nodejs,
        },
      ],
    },
    {
      name: 'Interview Preparation',
      notReady: false,
      id: 8,
			category: 'interview',
      courses: [
        {
          id: 'array',
          title: 'JS Practice Questions',
          parent: 'practice',
          description:
            'Introduction to JavaScript and Basic Programming Concepts',
          category: 'web',
          slug: 'prepation',
          img: 'default',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.practiceQuestions,
        },
        {
          id: 'interview-questions',
          title: 'Top 150 Questions',
          parent: 'js',
          description: 'Polyfill',
          category: 'cloud',
          slug: 'prepation',
          img: 'js',
          hide: false,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.top100,
        },
        {
          id: 'general',
          title: 'General',
          parent: 'practice',
          description: 'General Interview Questions',
          category: 'web',
          slug: 'prepation',
          img: 'default',
          hide: false,
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.general,
        },
        {
          id: 'behavioral',
          title: 'Behavioral',
          parent: 'practice',
          description: 'Behavioral',
          category: 'web',
          slug: 'prepation',
          img: 'default',
          hide: false,
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.behavioral,
        },
        {
          id: 'htmlcss',
          title: 'HTML CSS',
          parent: 'practice',
          description: 'HTML CSS Interview Questions',
          category: 'web',
          slug: 'prepation',
          img: 'default',
          hide: false,
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.htmlcss,
        },
        {
          id: 'javascript',
          title: 'Javascript, DOM',
          parent: 'practice',
          description: 'HTML CSS Interview Questions',
          category: 'web',
          hide: false,
          slug: 'prepation',
          img: 'default',
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.javascript,
        },
        {
          id: 'html-css-interview-1',
          title: 'HTML-CSS Interview 1',
          parent: 'web',
          description: 'Polyfill',
          category: 'web',
          hide: false,
          slug: 'interview',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.intro1,
        },
        {
          id: 'video-interviews-mock',
          title: 'Mock Interviews',
          parent: 'web',
          description: 'Polyfill',
          category: 'web',
          hide: false,
          slug: 'interview',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.mockInterviews,
        },
        {
          id: 'video-interviews',
          title: 'Real Interviews',
          parent: 'web',
          description: 'Polyfill',
          category: 'web',
          hide: false,
          slug: 'interview',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.realInterviews,
        },
        {
          id: 'interviews-projects',
          title: 'Interviews Projects',
          parent: 'web',
          description: 'Polyfill',
          category: 'web',
          hide: false,
          slug: 'interview',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewSubCoursesSteps.interviewProjects,
        },
        {
          id: 'react-interview',
          title: 'React Interview',
          parent: 'web',
          description: 'Polyfill',
          hide: false,
          category: 'web',
          slug: 'interview',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.reactInterview,
        },
        {
          id: 'info',
          title: 'Info, Links',
          parent: 'practice',
          description: 'HTML CSS Interview Questions',
          category: 'web',
          hide: false,
          slug: 'prepation',
          img: 'default',
          length: 'Lecture - 2',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: interviewPrepSubCoursesSteps.info,
        },
      ],
    },
    {
      name: 'Behavioral',
      notReady: false,
      id: 9,
			category: 'behavioral',
      courses: [
        {
          id: 'guideline',
          title: 'Guideline',
          parent: 'web',
          description: 'Guideline',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.guideline,
        },
        {
          id: 'self-awareness',
          title: 'Self-awareness',
          parent: 'web',
          hide: true,
          description: 'Self-awareness',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.selfAwareness,
        },
        {
          id: 'motivation-and-values',
          title: 'Motivation and Values',
          hide: true,
          parent: 'web',
          description: 'Motivation and Values',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.motivationAndValues,
        },
        {
          id: 'conflict-resolution',
          title: 'Conflict Resolution',
          parent: 'web',
          hide: true,
          description: 'Motivation and Values',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.conflictResolution,
        },
        {
          id: 'prioritization',
          title: 'Prioritization and Time Management',
          parent: 'web',
          description: 'Prioritization and Time Management',
          category: 'web',
          slug: 'behavioral',
          hide: true,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.prioritizationAndTimeManagement,
        },
        {
          id: 'teamwork',
          title: 'Teamwork',
          parent: 'web',
          description: 'Teamwork',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          hide: true,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.teamwork,
        },
        {
          id: 'ability',
          title: 'Ability to Learn and Adapt',
          parent: 'web',
          description: 'Ability to Learn and Adapt',
          category: 'web',
          hide: true,
          slug: 'behavioral',
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.abilityToLearnAndAdapt,
        },
        {
          id: 'Leadership',
          title: 'Leadership',
          parent: 'web',
          description: 'Leadership',
          category: 'web',
          slug: 'behavioral',
          hide: true,
          img: 'js',
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.leadership,
        },
        {
          id: 'management',
          title: 'Management',
          parent: 'web',
          description: 'Management',
          category: 'web',
          slug: 'behavioral',
          img: 'js',
          hide: true,
          length: 'Lecture - 1',
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 6, 2019',
          type: 'slide',
          steps: behavioralSubCoursesSteps.management,
        },
      ],
    },
    {
      name: 'Hand Books',
      id: 10,
			category: 'hand-books',
      courses: [
        {
          id: 'handbook-js-basic',
          title: 'JavaScript Basic',
          parent: 'js',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'js',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: handbookSteps.jsBasic,
        },
        {
          id: 'handbook-js-dom',
          title: 'JavaScript & DOM',
          parent: 'js',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'js',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: handbookSteps.jsDom,
        },
        {
          id: 'handbook-js-bom',
          title: 'JavaScript & BOM',
          parent: 'js',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'js',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: handbookSteps.jsBom,
        },
        {
          id: 'handbook-js-advanced',
          title: 'JavaScript Advanced',
          parent: 'js',
          slug: 'web',
          description:
            'Get started as a web developer by learning the basics of HTML, the essential language of the web.',
          category: 'web',
          img: 'js',
          length: 30,
          totalSteps: 11,
          activeStep: 0,
          updated: 'Jun 28, 2017',
          steps: handbookSteps.jsAdvanced,
        },
      ],
    },
  ],
};

mock.onGet('/api/academy-app/categories').reply(() => {
  return [200, academyDB.categories];
});

/*mock.onGet('/api/academy-app/courses').reply(() => {
    return [200, academyDB.courses.map((_course) => _.omit(_course, ['steps']))];
});*/

mock.onGet('/api/academy-app/courses').reply(() => {
  return [200, academyDB.section.map((_course) => _.omit(_course, ['steps']))];
});

mock.onGet('/api/academy-app/course').reply((request) => {
  const { courseId, subId } = request.params;
  const ifSubClass = courseId !== subId;
  let response = _.find(academyDB.getAllCourses(), { id: courseId });
  if (ifSubClass && response.courses) {
    // get sub classess / from courses/js/intro
    // slug = intro
    // id = js
    response = _.find(response.courses, { id: subId });
  }
  return [200, response];
});

mock.onPost('/api/academy-app/course/save').reply((request) => {
  const data = JSON.parse(request.data);
  let course = null;

  academyDB.courses = academyDB.getAllCourses().map((_course) => {
    if (_course.id === data.id) {
      course = data;
      return course;
    }
    return _course;
  });

  if (!course) {
    course = data;
    academyDB.courses = [...academyDB.courses, course];
  }

  return [200, course];
});

mock.onPost('/api/academy-app/course/update').reply((request) => {
  const data = JSON.parse(request.data);
  academyDB.courses = academyDB.courses.map((_course) => {
    if (_course.id === data.id) {
      return _.merge(_course, data);
    }
    return _course;
  });

  return [200, data];
});
