const mongoose = require('mongoose');
const { Question } = require('./models/quizModel');
require('dotenv').config();

// Connect to DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected for seeding...'))
  .catch(err => console.error('MongoDB connection error:', err));

const questions = [
  // =============== HTML Questions ===============
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'What does HTML stand for?',
    options: [
      'Hyper Text Markup Language',
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
      'Hyper Text Makeup Language'
    ],
    correctAnswer: 'Hyper Text Markup Language'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to create a hyperlink?',
    options: ['<link>', '<a>', '<href>', '<hyperlink>'],
    correctAnswer: '<a>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to create an unordered list?',
    options: ['<ol>', '<ul>', '<li>', '<list>'],
    correctAnswer: '<ul>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which attribute is used to provide a unique identifier for an HTML element?',
    options: ['class', 'id', 'name', 'type'],
    correctAnswer: 'id'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a table row?',
    options: ['<td>', '<tr>', '<th>', '<table-row>'],
    correctAnswer: '<tr>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to embed an image?',
    options: ['<img>', '<image>', '<picture>', '<src>'],
    correctAnswer: '<img>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to create a paragraph?',
    options: ['<p>', '<para>', '<paragraph>', '<text>'],
    correctAnswer: '<p>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used for the largest heading?',
    options: ['<h6>', '<h1>', '<head>', '<heading>'],
    correctAnswer: '<h1>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to create a line break?',
    options: ['<br>', '<lb>', '<break>', '<newline>'],
    correctAnswer: '<br>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a form?',
    options: ['<form>', '<input>', '<submit>', '<fieldset>'],
    correctAnswer: '<form>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which attribute is used to specify the URL in a hyperlink?',
    options: ['src', 'link', 'href', 'url'],
    correctAnswer: 'href'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a table header cell?',
    options: ['<td>', '<th>', '<thead>', '<header>'],
    correctAnswer: '<th>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a list item?',
    options: ['<li>', '<item>', '<list>', '<ol>'],
    correctAnswer: '<li>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a division or section?',
    options: ['<section>', '<div>', '<span>', '<block>'],
    correctAnswer: '<div>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to create a horizontal rule?',
    options: ['<hr>', '<line>', '<hl>', '<rule>'],
    correctAnswer: '<hr>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define metadata about an HTML document?',
    options: ['<meta>', '<head>', '<info>', '<data>'],
    correctAnswer: '<meta>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a button?',
    options: ['<btn>', '<button>', '<input type="button">', 'Both B and C'],
    correctAnswer: 'Both B and C'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a dropdown list?',
    options: ['<input>', '<list>', '<dropdown>', '<select>'],
    correctAnswer: '<select>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a text input field?',
    options: ['<text>', '<input type="text">', '<textfield>', '<input>'],
    correctAnswer: '<input type="text">'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a multi-line text input?',
    options: ['<textarea>', '<input type="textarea">', '<multiline>', '<textbox>'],
    correctAnswer: '<textarea>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a checkbox?',
    options: ['<checkbox>', '<input type="checkbox">', '<check>', '<input type="check">'],
    correctAnswer: '<input type="checkbox">'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a radio button?',
    options: ['<radio>', '<input type="radio">', '<input type="radiobutton">', '<radiobutton>'],
    correctAnswer: '<input type="radio">'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a label for an input element?',
    options: ['<label>', '<description>', '<caption>', '<title>'],
    correctAnswer: '<label>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a footer for a document or section?',
    options: ['<bottom>', '<footer>', '<foot>', '<end>'],
    correctAnswer: '<footer>'
  },
  {
    topic: 'HTML',
    difficulty: 'easy',
    question: 'Which tag is used to define a navigation section?',
    options: ['<nav>', '<navigation>', '<menu>', '<links>'],
    correctAnswer: '<nav>'
  },

  // HTML Medium
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'What is the correct HTML for adding a background color?',
    options: [
      '<body style="background-color:yellow;">',
      '<background>yellow</background>',
      '<body bg="yellow">',
      '<body color="yellow">'
    ],
    correctAnswer: '<body style="background-color:yellow;">'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'What is the correct HTML for creating a checkbox that is checked by default?',
    options: [
      '<checkbox checked>',
      '<input type="checkbox" default>',
      '<input type="checkbox" checked>',
      '<input type="checkbox" selected>'
    ],
    correctAnswer: '<input type="checkbox" checked>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which attribute specifies that an input field must be filled out?',
    options: ['required', 'validate', 'mandatory', 'necessary'],
    correctAnswer: 'required'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to display a scalar measurement within a known range?',
    options: ['<range>', '<meter>', '<measure>', '<gauge>'],
    correctAnswer: '<meter>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used for playing video files?',
    options: ['<media>', '<video>', '<movie>', '<play>'],
    correctAnswer: '<video>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used for playing audio files?',
    options: ['<sound>', '<audio>', '<mp3>', '<music>'],
    correctAnswer: '<audio>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which attribute is used to specify that an input field should be disabled?',
    options: ['disabled', 'readonly', 'inactive', 'static'],
    correctAnswer: 'disabled'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to draw graphics on a web page via scripting?',
    options: ['<paint>', '<draw>', '<canvas>', '<graphics>'],
    correctAnswer: '<canvas>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define marked/highlighted text?',
    options: ['<highlight>', '<mark>', '<strong>', '<em>'],
    correctAnswer: '<mark>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define navigation links?',
    options: ['<links>', '<navigation>', '<nav>', '<menu>'],
    correctAnswer: '<nav>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define the header of a document or section?',
    options: ['<head>', '<header>', '<heading>', '<top>'],
    correctAnswer: '<header>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a section in a document?',
    options: ['<div>', '<section>', '<block>', '<area>'],
    correctAnswer: '<section>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a self-contained composition in a document?',
    options: ['<article>', '<content>', '<composition>', '<self>'],
    correctAnswer: '<article>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define content aside from the page content?',
    options: ['<aside>', '<sidebar>', '<extra>', '<secondary>'],
    correctAnswer: '<aside>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a dialog box or window?',
    options: ['<dialog>', '<popup>', '<window>', '<box>'],
    correctAnswer: '<dialog>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a caption for a figure element?',
    options: ['<caption>', '<figcaption>', '<description>', '<legend>'],
    correctAnswer: '<figcaption>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which attribute is used to specify that an input field is read-only?',
    options: ['readonly', 'disabled', 'static', 'fixed'],
    correctAnswer: 'readonly'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a date/time control?',
    options: ['<time>', '<date>', '<datetime>', '<input type="datetime-local">'],
    correctAnswer: '<input type="datetime-local">'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a progress bar?',
    options: ['<progress>', '<meter>', '<bar>', '<status>'],
    correctAnswer: '<progress>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a thematic break between paragraph-level elements?',
    options: ['<break>', '<hr>', '<separator>', '<divider>'],
    correctAnswer: '<hr>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a list of commands/menu items?',
    options: ['<menu>', '<list>', '<commands>', '<items>'],
    correctAnswer: '<menu>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define ruby annotations (for East Asian typography)?',
    options: ['<ruby>', '<annotation>', '<east>', '<asian>'],
    correctAnswer: '<ruby>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define text that should be isolated from its surroundings for bidirectional text formatting?',
    options: ['<bdi>', '<isolate>', '<direction>', '<bidi>'],
    correctAnswer: '<bdi>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a container for external (non-HTML) content?',
    options: ['<object>', '<embed>', '<external>', '<content>'],
    correctAnswer: '<object>'
  },
  {
    topic: 'HTML',
    difficulty: 'medium',
    question: 'Which HTML5 element is used to define a visible heading for a details element?',
    options: ['<heading>', '<summary>', '<title>', '<caption>'],
    correctAnswer: '<summary>'
  },

  // HTML Hard
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What does the <canvas> element do?',
    options: [
      'Creates a draggable element',
      'Draws graphics on the fly via JavaScript',
      'Displays database records',
      'Creates a container for Flash content'
    ],
    correctAnswer: 'Draws graphics on the fly via JavaScript'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the data-* attribute in HTML5?',
    options: [
      'To store custom data private to the page or application',
      'To connect to a database',
      'To define metadata about the document',
      'To create data visualizations'
    ],
    correctAnswer: 'To store custom data private to the page or application'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <template> tag in HTML5?',
    options: [
      'To define a template for a database connection',
      'To hold client-side content that is not rendered when a page is loaded',
      'To create a reusable layout for printing',
      'To define a template for server-side includes'
    ],
    correctAnswer: 'To hold client-side content that is not rendered when a page is loaded'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <slot> element in HTML?',
    options: [
      'To define a placeholder in a web component',
      'To create a time slot for scheduling',
      'To reserve space for future content',
      'To define a slot machine animation'
    ],
    correctAnswer: 'To define a placeholder in a web component'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <picture> element in HTML5?',
    options: [
      'To display a single image with multiple sources',
      'To create a photo gallery',
      'To define a container for multiple images',
      'To create a slideshow of pictures'
    ],
    correctAnswer: 'To display a single image with multiple sources'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <datalist> element in HTML5?',
    options: [
      'To create a list of data items',
      'To provide an "autocomplete" feature for input elements',
      'To define a list of database records',
      'To create a dropdown menu'
    ],
    correctAnswer: 'To provide an "autocomplete" feature for input elements'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <output> element in HTML5?',
    options: [
      'To display the result of a calculation',
      'To define an output stream to a server',
      'To create a print-friendly version of a page',
      'To export data to a file'
    ],
    correctAnswer: 'To display the result of a calculation'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <main> element in HTML5?',
    options: [
      'To define the main content of a document',
      'To create a container for important elements',
      'To specify the primary navigation area',
      'To define the main script file'
    ],
    correctAnswer: 'To define the main content of a document'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <time> element in HTML5?',
    options: [
      'To create a timer',
      'To define a human-readable date/time',
      'To measure execution time of scripts',
      'To synchronize with a server clock'
    ],
    correctAnswer: 'To define a human-readable date/time'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <wbr> element in HTML?',
    options: [
      'To define a word break opportunity',
      'To create a line break',
      'To wrap text in a box',
      'To define a whitespace character'
    ],
    correctAnswer: 'To define a word break opportunity'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <details> element in HTML5?',
    options: [
      'To define additional details that the user can view or hide',
      'To create a detailed description list',
      'To provide metadata about the document',
      'To define technical specifications'
    ],
    correctAnswer: 'To define additional details that the user can view or hide'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <figure> element in HTML5?',
    options: [
      'To create a mathematical figure',
      'To group a caption with an image, diagram, etc.',
      'To define a geometric shape',
      'To create a figure for statistical data'
    ],
    correctAnswer: 'To group a caption with an image, diagram, etc.'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <fieldset> element in HTML?',
    options: [
      'To create a field in a database',
      'To group related elements in a form',
      'To define a set of input fields',
      'To create a border around form elements'
    ],
    correctAnswer: 'To group related elements in a form'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <legend> element in HTML?',
    options: [
      'To create a story or narrative',
      'To define a caption for a <fieldset> element',
      'To create a key for a chart or graph',
      'To define a list of important items'
    ],
    correctAnswer: 'To define a caption for a <fieldset> element'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <optgroup> element in HTML?',
    options: [
      'To create a group of options in a select list',
      'To define a group of optimization parameters',
      'To create a group of operational elements',
      'To define a group of optional features'
    ],
    correctAnswer: 'To create a group of options in a select list'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <colgroup> element in HTML?',
    options: [
      'To define a group of columns in a table',
      'To create a color group for styling',
      'To group collaborative elements',
      'To define a collection of items'
    ],
    correctAnswer: 'To define a group of columns in a table'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <cite> element in HTML?',
    options: [
      'To cite a legal statute',
      'To define the title of a creative work',
      'To create a citation for a book',
      'To reference a city'
    ],
    correctAnswer: 'To define the title of a creative work'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <dfn> element in HTML?',
    options: [
      'To define a term in a definition list',
      'To mark the defining instance of a term',
      'To create a default value',
      'To define a function'
    ],
    correctAnswer: 'To mark the defining instance of a term'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <kbd> element in HTML?',
    options: [
      'To define keyboard input',
      'To create a keyboard layout',
      'To define a key binding',
      'To mark up a keyboard shortcut'
    ],
    correctAnswer: 'To define keyboard input'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <samp> element in HTML?',
    options: [
      'To define sample output from a computer program',
      'To create a sample document',
      'To mark up a sample of code',
      'To define a sampling rate'
    ],
    correctAnswer: 'To define sample output from a computer program'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <var> element in HTML?',
    options: [
      'To define a variable in programming code',
      'To create a variable font',
      'To mark up a mathematical variable',
      'To define a variable in a statistical context'
    ],
    correctAnswer: 'To define a variable in programming code'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <pre> element in HTML?',
    options: [
      'To define preformatted text',
      'To create a preamble section',
      'To mark up preliminary content',
      'To define a prefix for names'
    ],
    correctAnswer: 'To define preformatted text'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <code> element in HTML?',
    options: [
      'To define a piece of computer code',
      'To create a code of conduct',
      'To mark up a postal code',
      'To define a cipher'
    ],
    correctAnswer: 'To define a piece of computer code'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <ins> and <del> elements in HTML?',
    options: [
      'To insert and delete database records',
      'To mark text that has been inserted or deleted in a document',
      'To create installation and deletion scripts',
      'To define insurance and delivery information'
    ],
    correctAnswer: 'To mark text that has been inserted or deleted in a document'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <abbr> element in HTML?',
    options: [
      'To define an abbreviation or acronym',
      'To create an abstract',
      'To mark up an abnormal condition',
      'To define an absolute value'
    ],
    correctAnswer: 'To define an abbreviation or acronym'
  },
  {
    topic: 'HTML',
    difficulty: 'hard',
    question: 'What is the purpose of the <q> element in HTML?',
    options: [
      'To create a quick reference',
      'To define a short quotation',
      'To mark up a query',
      'To define a question'
    ],
    correctAnswer: 'To define a short quotation'
  },

  // HTML Advanced
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the Shadow DOM in HTML?',
    options: [
      'To create shadow effects on elements',
      'To provide encapsulation for web components',
      'To define the dark mode of a website',
      'To create drop shadows on text'
    ],
    correctAnswer: 'To provide encapsulation for web components'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Components specification?',
    options: [
      'To create reusable custom elements with encapsulated functionality',
      'To define components for web servers',
      'To create composite images for the web',
      'To define standard components for all websites'
    ],
    correctAnswer: 'To create reusable custom elements with encapsulated functionality'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 History API?',
    options: [
      'To track user browsing history',
      'To manipulate the browser session history',
      'To store historical data in the browser',
      'To create history charts and graphs'
    ],
    correctAnswer: 'To manipulate the browser session history'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Drag and Drop API?',
    options: [
      'To create draggable elements and drop targets',
      'To drag files from the desktop to the browser',
      'To create drag racing games',
      'To enable drag operations between different browsers'
    ],
    correctAnswer: 'To create draggable elements and drop targets'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Web Storage API?',
    options: [
      'To store large files on the client side',
      'To store data in a SQL database on the client side',
      'To store key-value pairs on the client side',
      'To create storage servers on the web'
    ],
    correctAnswer: 'To store key-value pairs on the client side'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Web Workers API?',
    options: [
      'To create worker threads that run in the background',
      'To manage human resources for web projects',
      'To create collaborative editing tools',
      'To track work hours for web developers'
    ],
    correctAnswer: 'To create worker threads that run in the background'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Geolocation API?',
    options: [
      'To create geographical maps',
      'To share location information with websites',
      'To track user movements across the web',
      'To create location-based games'
    ],
    correctAnswer: 'To share location information with websites'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 WebSocket API?',
    options: [
      'To create real-time, two-way communication between client and server',
      'To create socket connections to hardware devices',
      'To enable web pages to connect to each other',
      'To create secure connections between web servers'
    ],
    correctAnswer: 'To create real-time, two-way communication between client and server'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Server-Sent Events (SSE)?',
    options: [
      'To send events from the server to the browser',
      'To send events from the browser to the server',
      'To create server-side event handlers',
      'To synchronize events across multiple servers'
    ],
    correctAnswer: 'To send events from the server to the browser'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 WebRTC API?',
    options: [
      'To create real-time communication capabilities in web applications',
      'To create remote terminal connections',
      'To enable web-based remote control of computers',
      'To create real-time charts and graphs'
    ],
    correctAnswer: 'To create real-time communication capabilities in web applications'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 IndexedDB API?',
    options: [
      'To create indexed documents for search engines',
      'To provide a client-side database for storing significant amounts of structured data',
      'To index web pages for faster searching',
      'To create database indexes on the server side'
    ],
    correctAnswer: 'To provide a client-side database for storing significant amounts of structured data'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 File API?',
    options: [
      'To create file upload forms',
      'To provide secure file storage on servers',
      'To enable web applications to interact with files on the user\'s local system',
      'To manage files on a web server'
    ],
    correctAnswer: 'To enable web applications to interact with files on the user\'s local system'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Fullscreen API?',
    options: [
      'To create fullscreen advertisements',
      'To display an element in fullscreen mode',
      'To create fullscreen slideshows',
      'To enable fullscreen mode for the entire operating system'
    ],
    correctAnswer: 'To display an element in fullscreen mode'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Pointer Lock API?',
    options: [
      'To lock the mouse pointer to a specific element',
      'To create password-protected areas of a website',
      'To lock screen orientation on mobile devices',
      'To prevent pointer events from being intercepted'
    ],
    correctAnswer: 'To lock the mouse pointer to a specific element'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Page Visibility API?',
    options: [
      'To track which pages are visible to search engines',
      'To determine when a webpage is visible or in focus',
      'To create visible page transitions',
      'To manage visibility of elements on a page'
    ],
    correctAnswer: 'To determine when a webpage is visible or in focus'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Web Audio API?',
    options: [
      'To create background music for websites',
      'To provide advanced audio processing and synthesis in the browser',
      'To enable voice recognition on web pages',
      'To create audio streaming services'
    ],
    correctAnswer: 'To provide advanced audio processing and synthesis in the browser'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Battery Status API?',
    options: [
      'To monitor the battery status of the user\'s device',
      'To track battery usage of web applications',
      'To create battery-saving modes for websites',
      'To display battery levels of mobile devices'
    ],
    correctAnswer: 'To monitor the battery status of the user\'s device'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Vibration API?',
    options: [
      'To create vibrating effects in games',
      'To enable vibration on mobile devices',
      'To create haptic feedback for touch screens',
      'To simulate earthquakes on web pages'
    ],
    correctAnswer: 'To enable vibration on mobile devices'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Network Information API?',
    options: [
      'To provide information about the user\'s network connection',
      'To create network diagrams for websites',
      'To monitor network traffic to and from a web page',
      'To provide information about social networks'
    ],
    correctAnswer: 'To provide information about the user\'s network connection'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Clipboard API?',
    options: [
      'To create clipboard managers for web applications',
      'To provide secure access to the system clipboard',
      'To create copy and paste functionality within a web page',
      'To manage clipboard history'
    ],
    correctAnswer: 'To provide secure access to the system clipboard'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Credential Management API?',
    options: [
      'To manage user credentials and authentication',
      'To create credential databases',
      'To verify professional credentials',
      'To manage security certificates'
    ],
    correctAnswer: 'To manage user credentials and authentication'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Payment Request API?',
    options: [
      'To request payments from users',
      'To provide a standardized way to collect payment information',
      'To create payment processing systems',
      'To manage payment gateways'
    ],
    correctAnswer: 'To provide a standardized way to collect payment information'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Performance Timeline API?',
    options: [
      'To create timelines for performance metrics',
      'To provide detailed performance metrics about web applications',
      'To track user performance on websites',
      'To create performance charts and graphs'
    ],
    correctAnswer: 'To provide detailed performance metrics about web applications'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 Resource Timing API?',
    options: [
      'To time how long resources take to load',
      'To create resource allocation timelines',
      'To manage resource caching',
      'To track resource usage on servers'
    ],
    correctAnswer: 'To time how long resources take to load'
  },
  {
    topic: 'HTML',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML5 User Timing API?',
    options: [
      'To track how long users spend on a website',
      'To measure custom performance metrics in applications',
      'To create user activity timelines',
      'To time user interactions with forms'
    ],
    correctAnswer: 'To measure custom performance metrics in applications'
  },

  // =============== CSS Questions ===============
  // CSS Easy
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'What does CSS stand for?',
    options: [
      'Colorful Style Sheets',
      'Creative Style Sheets',
      'Cascading Style Sheets',
      'Computer Style Sheets'
    ],
    correctAnswer: 'Cascading Style Sheets'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to change the background color?',
    options: ['bgcolor', 'color', 'background-color', 'bg-color'],
    correctAnswer: 'background-color'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to change the text color?',
    options: ['text-color', 'font-color', 'color', 'text-style'],
    correctAnswer: 'color'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to change the font of an element?',
    options: ['font-family', 'font-style', 'font-weight', 'text-font'],
    correctAnswer: 'font-family'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to change the size of the text?',
    options: ['text-size', 'font-size', 'text-style', 'size'],
    correctAnswer: 'font-size'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to make text bold?',
    options: ['font-weight', 'text-bold', 'bold', 'font-style'],
    correctAnswer: 'font-weight'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add a background image?',
    options: ['background-image', 'image', 'bg-image', 'background'],
    correctAnswer: 'background-image'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to control the repetition of a background image?',
    options: ['background-repeat', 'repeat', 'image-repeat', 'bg-repeat'],
    correctAnswer: 'background-repeat'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to set the text alignment?',
    options: ['text-align', 'align', 'text-position', 'alignment'],
    correctAnswer: 'text-align'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add space between the border and content?',
    options: ['margin', 'spacing', 'padding', 'border-space'],
    correctAnswer: 'padding'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add space outside the border?',
    options: ['margin', 'spacing', 'padding', 'border-space'],
    correctAnswer: 'margin'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add a border to an element?',
    options: ['border', 'border-style', 'border-line', 'border-width'],
    correctAnswer: 'border'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to change the left margin of an element?',
    options: ['margin-left', 'left-margin', 'indent', 'padding-left'],
    correctAnswer: 'margin-left'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to make a list not display bullet points?',
    options: ['list-style-type', 'list-bullet', 'list-points', 'bullet-style'],
    correctAnswer: 'list-style-type'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to control the display type of an element?',
    options: ['display', 'visibility', 'show', 'type'],
    correctAnswer: 'display'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which display property value is used to make an element inline?',
    options: ['inline', 'block', 'inline-block', 'flex'],
    correctAnswer: 'inline'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which display property value is used to make an element a block?',
    options: ['inline', 'block', 'inline-block', 'flex'],
    correctAnswer: 'block'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to hide an element?',
    options: ['display: none', 'visibility: hidden', 'opacity: 0', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to set the width of an element?',
    options: ['width', 'size', 'element-width', 'dimension'],
    correctAnswer: 'width'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to set the height of an element?',
    options: ['height', 'size', 'element-height', 'dimension'],
    correctAnswer: 'height'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to set the maximum width of an element?',
    options: ['max-width', 'maximum-width', 'width-max', 'width-limit'],
    correctAnswer: 'max-width'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to set the minimum height of an element?',
    options: ['min-height', 'minimum-height', 'height-min', 'height-limit'],
    correctAnswer: 'min-height'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to create rounded corners?',
    options: ['border-radius', 'corner-radius', 'round-corner', 'border-round'],
    correctAnswer: 'border-radius'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add shadow to text?',
    options: ['text-shadow', 'shadow', 'font-shadow', 'text-effect'],
    correctAnswer: 'text-shadow'
  },
  {
    topic: 'CSS',
    difficulty: 'easy',
    question: 'Which property is used to add shadow to elements?',
    options: ['box-shadow', 'shadow', 'element-shadow', 'div-shadow'],
    correctAnswer: 'box-shadow'
  },

  // CSS Medium
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'What does the z-index property control?',
    options: [
      'The vertical stacking order of elements',
      'The horizontal position of elements',
      'The opacity of elements',
      'The font size of elements'
    ],
    correctAnswer: 'The vertical stacking order of elements'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'What is the correct CSS syntax for making all <p> elements bold?',
    options: [
      'p {text-size: bold;}',
      'p {font-weight: bold;}',
      '<p style="font-size: bold;">',
      'p {style: bold;}'
    ],
    correctAnswer: 'p {font-weight: bold;}'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'How do you select an element with id "demo" in CSS?',
    options: [
      '.demo',
      '*demo',
      '#demo',
      'demo'
    ],
    correctAnswer: '#demo'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'How do you select elements with class "test" in CSS?',
    options: [
      '*test',
      '.test',
      '#test',
      'test'
    ],
    correctAnswer: '.test'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'How do you group selectors in CSS?',
    options: [
      'Separate each selector with a plus sign',
      'Separate each selector with a comma',
      'Separate each selector with a space',
      'Separate each selector with a semicolon'
    ],
    correctAnswer: 'Separate each selector with a comma'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'What is the default value of the position property?',
    options: [
      'static',
      'relative',
      'fixed',
      'absolute'
    ],
    correctAnswer: 'static'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to change the opacity of an element?',
    options: [
      'transparency',
      'opacity',
      'visibility',
      'alpha'
    ],
    correctAnswer: 'opacity'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to specify the space between lines?',
    options: [
      'line-height',
      'line-spacing',
      'spacing',
      'text-space'
    ],
    correctAnswer: 'line-height'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to specify the space between letters?',
    options: [
      'letter-spacing',
      'character-spacing',
      'text-spacing',
      'word-spacing'
    ],
    correctAnswer: 'letter-spacing'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to specify the space between words?',
    options: [
      'word-spacing',
      'text-spacing',
      'letter-spacing',
      'character-spacing'
    ],
    correctAnswer: 'word-spacing'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to capitalize text?',
    options: [
      'text-transform',
      'text-capitalize',
      'text-style',
      'font-transform'
    ],
    correctAnswer: 'text-transform'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to create a transition effect?',
    options: [
      'transition',
      'transform',
      'animation',
      'effect'
    ],
    correctAnswer: 'transition'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to rotate an element?',
    options: [
      'rotate',
      'transform',
      'spin',
      'turn'
    ],
    correctAnswer: 'transform'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to change the cursor type?',
    options: [
      'cursor',
      'pointer',
      'mouse',
      'click'
    ],
    correctAnswer: 'cursor'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the overflow of content in a box?',
    options: [
      'overflow',
      'content-flow',
      'scroll',
      'visible'
    ],
    correctAnswer: 'overflow'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to create a sticky element?',
    options: [
      'position: sticky',
      'position: fixed',
      'position: relative',
      'position: static'
    ],
    correctAnswer: 'position: sticky'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to create a fixed element?',
    options: [
      'position: fixed',
      'position: sticky',
      'position: absolute',
      'position: relative'
    ],
    correctAnswer: 'position: fixed'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to create a relative positioned element?',
    options: [
      'position: relative',
      'position: absolute',
      'position: fixed',
      'position: static'
    ],
    correctAnswer: 'position: relative'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to create an absolute positioned element?',
    options: [
      'position: absolute',
      'position: relative',
      'position: fixed',
      'position: static'
    ],
    correctAnswer: 'position: absolute'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the order of flex items?',
    options: [
      'order',
      'flex-order',
      'item-order',
      'sequence'
    ],
    correctAnswer: 'order'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the direction of flex items?',
    options: [
      'flex-direction',
      'direction',
      'flex-flow',
      'flex-orientation'
    ],
    correctAnswer: 'flex-direction'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the wrapping of flex items?',
    options: [
      'flex-wrap',
      'wrap',
      'flex-flow',
      'flex-line'
    ],
    correctAnswer: 'flex-wrap'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used as a shorthand for flex-direction and flex-wrap?',
    options: [
      'flex-flow',
      'flex-direction-wrap',
      'flex',
      'flex-layout'
    ],
    correctAnswer: 'flex-flow'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the alignment of flex items along the main axis?',
    options: [
      'justify-content',
      'align-items',
      'align-content',
      'flex-align'
    ],
    correctAnswer: 'justify-content'
  },
  {
    topic: 'CSS',
    difficulty: 'medium',
    question: 'Which property is used to control the alignment of flex items along the cross axis?',
    options: [
      'align-items',
      'justify-content',
      'align-content',
      'flex-align'
    ],
    correctAnswer: 'align-items'
  },

  // CSS Hard
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the CSS specificity hierarchy?',
    options: [
      'Inline styles > IDs > Classes > Elements',
      'IDs > Inline styles > Classes > Elements',
      'Classes > IDs > Inline styles > Elements',
      'Elements > Classes > IDs > Inline styles'
    ],
    correctAnswer: 'Inline styles > IDs > Classes > Elements'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the CSS Box Model?',
    options: [
      'A model for creating 3D boxes in CSS',
      'A model that describes the rectangular boxes for elements',
      'A model for box shadows',
      'A model for flexbox layout'
    ],
    correctAnswer: 'A model that describes the rectangular boxes for elements'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What does the "box-sizing: border-box" property do?',
    options: [
      'Includes padding and border in the element\'s total width and height',
      'Excludes padding and border from the element\'s total width and height',
      'Creates a box around the element',
      'Adds a border to the element'
    ],
    correctAnswer: 'Includes padding and border in the element\'s total width and height'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "content" property?',
    options: [
      'To insert generated content',
      'To set the content of an element',
      'To specify the content type',
      'To load external content'
    ],
    correctAnswer: 'To insert generated content'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "calc()" function?',
    options: [
      'To perform calculations to determine CSS property values',
      'To calculate the size of an element',
      'To create a calculator widget',
      'To perform mathematical operations in JavaScript'
    ],
    correctAnswer: 'To perform calculations to determine CSS property values'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "var()" function?',
    options: [
      'To declare variables in CSS',
      'To insert the value of a custom property',
      'To perform variable calculations',
      'To create variations of a property'
    ],
    correctAnswer: 'To insert the value of a custom property'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "::before" pseudo-element?',
    options: [
      'To insert content before an element',
      'To select the first child of an element',
      'To style the first letter of an element',
      'To create a tooltip before an element'
    ],
    correctAnswer: 'To insert content before an element'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "::after" pseudo-element?',
    options: [
      'To insert content after an element',
      'To select the last child of an element',
      'To style the last letter of an element',
      'To create a tooltip after an element'
    ],
    correctAnswer: 'To insert content after an element'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "nth-child()" selector?',
    options: [
      'To select the nth child of an element',
      'To select children based on a pattern',
      'To select all children of an element',
      'To select the first n children of an element'
    ],
    correctAnswer: 'To select the nth child of an element'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "grid-template-areas" property?',
    options: [
      'To define named grid areas',
      'To create templates for grid layouts',
      'To specify areas for grid items',
      'To define the template of a grid'
    ],
    correctAnswer: 'To define named grid areas'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "clip-path" property?',
    options: [
      'To create clipping paths for elements',
      'To define paths for animations',
      'To create path-based borders',
      'To define clickable areas'
    ],
    correctAnswer: 'To create clipping paths for elements'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "mix-blend-mode" property?',
    options: [
      'To specify how an element\'s content should blend with its background',
      'To mix different CSS properties',
      'To create gradient blends',
      'To blend animation keyframes'
    ],
    correctAnswer: 'To specify how an element\'s content should blend with its background'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "will-change" property?',
    options: [
      'To hint to browsers how an element is expected to change',
      'To define animation changes',
      'To create transition effects',
      'To specify responsive breakpoints'
    ],
    correctAnswer: 'To hint to browsers how an element is expected to change'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "backface-visibility" property?',
    options: [
      'To control visibility of an element\'s back face during 3D transforms',
      'To create background visibility effects',
      'To control visibility of elements behind other elements',
      'To create face detection in CSS'
    ],
    correctAnswer: 'To control visibility of an element\'s back face during 3D transforms'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "perspective" property?',
    options: [
      'To create 3D perspective for transformed elements',
      'To provide a philosophical view of elements',
      'To create perspective in 2D space',
      'To define the viewpoint for animations'
    ],
    correctAnswer: 'To create 3D perspective for transformed elements'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "transform-style" property?',
    options: [
      'To control how nested elements are rendered in 3D space',
      'To define transformation styles',
      'To create style transformations',
      'To control the style of transformed elements'
    ],
    correctAnswer: 'To control how nested elements are rendered in 3D space'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "contain" property?',
    options: [
      'To indicate that an element and its contents are independent of the rest of the document',
      'To contain overflow content',
      'To create container elements',
      'To define content containment'
    ],
    correctAnswer: 'To indicate that an element and its contents are independent of the rest of the document'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "isolation" property?',
    options: [
      'To create a new stacking context',
      'To isolate elements from each other',
      'To create isolated components',
      'To prevent style inheritance'
    ],
    correctAnswer: 'To create a new stacking context'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "scroll-snap-type" property?',
    options: [
      'To control scroll snapping behavior',
      'To create snap points for scrolling',
      'To define scroll types',
      'To control the speed of scrolling'
    ],
    correctAnswer: 'To control scroll snapping behavior'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "scroll-behavior" property?',
    options: [
      'To control smooth scrolling',
      'To define scrollbar behavior',
      'To create scroll animations',
      'To control scroll direction'
    ],
    correctAnswer: 'To control smooth scrolling'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "overscroll-behavior" property?',
    options: [
      'To control what happens when you scroll past the boundary of a scrolling area',
      'To create overscroll effects',
      'To define scroll behavior beyond boundaries',
      'To prevent scrolling beyond boundaries'
    ],
    correctAnswer: 'To control what happens when you scroll past the boundary of a scrolling area'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "gap" property in Grid and Flexbox?',
    options: [
      'To control the spacing between rows and columns',
      'To create gaps in elements',
      'To define empty spaces',
      'To control the space around elements'
    ],
    correctAnswer: 'To control the spacing between rows and columns'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "aspect-ratio" property?',
    options: [
      'To control the ratio of width to height of an element',
      'To define the ratio of elements',
      'To create aspect-based layouts',
      'To control the scaling of elements'
    ],
    correctAnswer: 'To control the ratio of width to height of an element'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "accent-color" property?',
    options: [
      'To set the accent color for form controls',
      'To define color accents',
      'To create accent effects',
      'To control the color of accents'
    ],
    correctAnswer: 'To set the accent color for form controls'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "@supports" rule?',
    options: [
      'To apply styles based on browser feature support',
      'To support older browsers',
      'To create fallback styles',
      'To define supported properties'
    ],
    correctAnswer: 'To apply styles based on browser feature support'
  },
  {
    topic: 'CSS',
    difficulty: 'hard',
    question: 'What is the purpose of the CSS "counter()" function?',
    options: [
      'To display the value of a counter',
      'To count elements',
      'To create numbered lists',
      'To increment counters'
    ],
    correctAnswer: 'To display the value of a counter'
  },

  // CSS Advanced
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Custom Properties (CSS Variables)?',
    options: [
      'To define reusable values that can be used throughout a document',
      'To create custom CSS properties',
      'To define variables for JavaScript',
      'To create dynamic styles'
    ],
    correctAnswer: 'To define reusable values that can be used throughout a document'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Houdini?',
    options: [
      'A set of APIs that expose parts of the CSS engine to developers',
      'A CSS magic trick library',
      'A performance optimization technique',
      'A new CSS specification'
    ],
    correctAnswer: 'A set of APIs that expose parts of the CSS engine to developers'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of the CSS Paint API?',
    options: [
      'To programmatically generate images for CSS properties',
      'To create painting effects',
      'To style canvas elements',
      'To create custom paint tools'
    ],
    correctAnswer: 'To programmatically generate images for CSS properties'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of the CSS Layout API?',
    options: [
      'To define custom layout algorithms',
      'To create layout templates',
      'To manage CSS grid layouts',
      'To control flexbox layouts'
    ],
    correctAnswer: 'To define custom layout algorithms'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of the CSS Animation Worklet API?',
    options: [
      'To create high-performance procedural animations',
      'To animate worklets',
      'To create worker threads for animations',
      'To optimize CSS animations'
    ],
    correctAnswer: 'To create high-performance procedural animations'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of the CSS Typed OM?',
    options: [
      'To represent CSS values as typed JavaScript objects',
      'To create typographic effects',
      'To optimize font rendering',
      'To manage OpenType features'
    ],
    correctAnswer: 'To represent CSS values as typed JavaScript objects'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Container Queries?',
    options: [
      'To apply styles based on the size of a containing element',
      'To query container elements',
      'To create responsive containers',
      'To manage container sizes'
    ],
    correctAnswer: 'To apply styles based on the size of a containing element'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Subgrid?',
    options: [
      'To create nested grids that inherit the parent grid\'s tracks',
      'To create sub-grids within grids',
      'To define secondary grids',
      'To create grid hierarchies'
    ],
    correctAnswer: 'To create nested grids that inherit the parent grid\'s tracks'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Masonry Layout?',
    options: [
      'To create masonry-style layouts (like Pinterest)',
      'To create brick-like patterns',
      'To manage masonry structures',
      'To create grid-based masonry effects'
    ],
    correctAnswer: 'To create masonry-style layouts (like Pinterest)'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Scroll Snap?',
    options: [
      'To create precise scroll stopping points',
      'To snap elements to positions',
      'To create scroll animations',
      'To control scroll behavior'
    ],
    correctAnswer: 'To create precise scroll stopping points'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Logical Properties?',
    options: [
      'To control layout based on the flow of text (rather than physical directions)',
      'To create logical layouts',
      'To define properties based on logic',
      'To manage conditional styles'
    ],
    correctAnswer: 'To control layout based on the flow of text (rather than physical directions)'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Color Level 4 features?',
    options: [
      'To provide advanced color manipulation capabilities',
      'To create color levels',
      'To define color hierarchies',
      'To manage color schemes'
    ],
    correctAnswer: 'To provide advanced color manipulation capabilities'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Nesting?',
    options: [
      'To nest style rules within other style rules',
      'To create nested elements',
      'To manage component hierarchies',
      'To define nested selectors'
    ],
    correctAnswer: 'To nest style rules within other style rules'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Cascade Layers?',
    options: [
      'To provide more control over the cascade with explicit layers',
      'To create layered designs',
      'To manage z-index hierarchies',
      'To define cascade rules'
    ],
    correctAnswer: 'To provide more control over the cascade with explicit layers'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Scope?',
    options: [
      'To limit the scope of style rules to specific subtrees',
      'To create scoped styles',
      'To manage style encapsulation',
      'To define style boundaries'
    ],
    correctAnswer: 'To limit the scope of style rules to specific subtrees'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Anchor Positioning?',
    options: [
      'To position elements relative to anchor points',
      'To create anchored elements',
      'To manage fixed positioning',
      'To define anchor points'
    ],
    correctAnswer: 'To position elements relative to anchor points'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS Viewport Units?',
    options: [
      'To size elements relative to the viewport dimensions',
      'To create viewport-based layouts',
      'To manage responsive designs',
      'To define viewport sizes'
    ],
    correctAnswer: 'To size elements relative to the viewport dimensions'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS prefers-color-scheme media feature?',
    options: [
      'To detect if the user prefers a light or dark color scheme',
      'To create color schemes',
      'To manage dark mode',
      'To define preferred colors'
    ],
    correctAnswer: 'To detect if the user prefers a light or dark color scheme'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS prefers-reduced-motion media feature?',
    options: [
      'To detect if the user prefers reduced motion',
      'To create motion effects',
      'To manage animations',
      'To define motion preferences'
    ],
    correctAnswer: 'To detect if the user prefers reduced motion'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS color-contrast() function?',
    options: [
      'To ensure sufficient color contrast for accessibility',
      'To create contrast effects',
      'To manage color palettes',
      'To define color contrasts'
    ],
    correctAnswer: 'To ensure sufficient color contrast for accessibility'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS :has() pseudo-class?',
    options: [
      'To select elements that contain specific descendants',
      'To check if elements have attributes',
      'To manage element states',
      'To define element relationships'
    ],
    correctAnswer: 'To select elements that contain specific descendants'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS :is() and :where() pseudo-classes?',
    options: [
      'To reduce selector specificity and group selectors',
      'To create conditional styles',
      'To manage pseudo-elements',
      'To define selector groups'
    ],
    correctAnswer: 'To reduce selector specificity and group selectors'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS @layer rule?',
    options: [
      'To define cascade layers for controlling specificity',
      'To create layered designs',
      'To manage z-index hierarchies',
      'To define style layers'
    ],
    correctAnswer: 'To define cascade layers for controlling specificity'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS @container rule?',
    options: [
      'To apply styles based on the size of a containing element',
      'To define container elements',
      'To create responsive containers',
      'To manage container queries'
    ],
    correctAnswer: 'To apply styles based on the size of a containing element'
  },
  {
    topic: 'CSS',
    difficulty: 'advanced',
    question: 'What is the purpose of CSS @property rule?',
    options: [
      'To explicitly define custom properties with type checking',
      'To create new CSS properties',
      'To define property rules',
      'To manage custom properties'
    ],
    correctAnswer: 'To explicitly define custom properties with type checking'
  },

  // =============== JavaScript Questions ===============
  // JS Easy
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you declare a JavaScript variable?',
    options: [
      'variable carName;',
      'v carName;',
      'let carName;',
      'const carName;'
    ],
    correctAnswer: 'let carName;'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which operator is used to assign a value to a variable?',
    options: ['*', '-', '=', 'x'],
    correctAnswer: '='
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What will this code return: Boolean(10 > 9)',
    options: ['true', 'false', 'NaN', 'undefined'],
    correctAnswer: 'true'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you write an IF statement in JavaScript?',
    options: [
      'if i = 5 then',
      'if (i == 5)',
      'if i == 5 then',
      'if i = 5'
    ],
    correctAnswer: 'if (i == 5)'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How does a WHILE loop start?',
    options: [
      'while (i <= 10; i++)',
      'while i = 1 to 10',
      'while (i <= 10)',
      'while i <= 10'
    ],
    correctAnswer: 'while (i <= 10)'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you create a function in JavaScript?',
    options: [
      'function = myFunction()',
      'function myFunction()',
      'function:myFunction()',
      'function myFunction[]'
    ],
    correctAnswer: 'function myFunction()'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you call a function named "myFunction"?',
    options: [
      'call myFunction()',
      'myFunction()',
      'call function myFunction',
      'execute myFunction()'
    ],
    correctAnswer: 'myFunction()'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
    options: [
      'if (i != 5)',
      'if i <> 5',
      'if (i <> 5)',
      'if i =! 5'
    ],
    correctAnswer: 'if (i != 5)'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What is the correct way to write a JavaScript array?',
    options: [
      'var colors = ["red", "green", "blue"]',
      'var colors = "red", "green", "blue"',
      'var colors = (1:"red", 2:"green", 3:"blue")',
      'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")'
    ],
    correctAnswer: 'var colors = ["red", "green", "blue"]'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you round the number 7.25 to the nearest integer?',
    options: [
      'Math.round(7.25)',
      'round(7.25)',
      'Math.rnd(7.25)',
      'rnd(7.25)'
    ],
    correctAnswer: 'Math.round(7.25)'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you find the number with the highest value of x and y?',
    options: [
      'Math.max(x, y)',
      'Math.ceil(x, y)',
      'top(x, y)',
      'ceil(x, y)'
    ],
    correctAnswer: 'Math.max(x, y)'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What is the correct JavaScript syntax to change the content of the HTML element below? <p id="demo">This is a demonstration.</p>',
    options: [
      'document.getElementById("demo").innerHTML = "Hello World!";',
      'document.getElementByName("p").innerHTML = "Hello World!";',
      '#demo.innerHTML = "Hello World!";',
      'document.getElement("p").innerHTML = "Hello World!";'
    ],
    correctAnswer: 'document.getElementById("demo").innerHTML = "Hello World!";'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you write a comment in JavaScript?',
    options: [
      '<!--This is a comment-->',
      "'This is a comment",
      '//This is a comment',
      '**This is a comment**'
    ],
    correctAnswer: '//This is a comment'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which operator is used to concatenate two strings?',
    options: ['+', '&', '.', '*'],
    correctAnswer: '+'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which event occurs when the user clicks on an HTML element?',
    options: ['onchange', 'onclick', 'onmouseover', 'onmouseclick'],
    correctAnswer: 'onclick'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you declare a JavaScript variable that cannot be reassigned?',
    options: ['var', 'let', 'const', 'static'],
    correctAnswer: 'const'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What will this code return: typeof "John"',
    options: ['"string"', '"number"', '"object"', '"undefined"'],
    correctAnswer: '"string"'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What is the correct syntax for referring to an external script called "script.js"?',
    options: [
      '<script href="script.js">',
      '<script name="script.js">',
      '<script src="script.js">',
      '<script file="script.js">'
    ],
    correctAnswer: '<script src="script.js">'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'How do you create a new line in a popup box?',
    options: ['\n', '/n', 'newline', 'br'],
    correctAnswer: '\n'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which method removes the last element from an array and returns that element?',
    options: ['pop()', 'last()', 'get()', 'remove()'],
    correctAnswer: 'pop()'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which method adds new elements to the end of an array and returns the new length?',
    options: ['push()', 'add()', 'append()', 'insert()'],
    correctAnswer: 'push()'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which method converts an array to a string of comma separated values?',
    options: ['toString()', 'join()', 'split()', 'toText()'],
    correctAnswer: 'toString()'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What is the correct way to create a Date object for the current date and time?',
    options: [
      'var d = new Date();',
      'var d = Date();',
      'var d = new Date(current);',
      'var d = Date.now();'
    ],
    correctAnswer: 'var d = new Date();'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'What is the correct way to create a RegExp object that matches any digit?',
    options: [
      'var re = new RegExp("\\d");',
      'var re = /\d/;',
      'var re = new RegExp("[0-9]");',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which property returns the length of a string?',
    options: ['length', 'size', 'count', 'len'],
    correctAnswer: 'length'
  },
  {
    topic: 'JS',
    difficulty: 'easy',
    question: 'Which method extracts a part of a string and returns the extracted part in a new string?',
    options: ['slice()', 'cut()', 'split()', 'extract()'],
    correctAnswer: 'slice()'
  },

  // JS Medium
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What will this output: console.log(typeof null);',
    options: ['"null"', '"undefined"', '"object"', '"number"'],
    correctAnswer: '"object"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(1 + "2" + "2");',
    options: ['"122"', '5', '"32"', '"14"'],
    correctAnswer: '"122"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log([] + []);',
    options: ['"[]"', '[]', '""', '0'],
    correctAnswer: '""'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(typeof NaN);',
    options: ['"NaN"', '"undefined"', '"number"', '"string"'],
    correctAnswer: '"number"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log("hello" instanceof String);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(0.1 + 0.2 === 0.3);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log("5" - 3);',
    options: ['2', '8', '"53"', 'NaN'],
    correctAnswer: '2'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log("5" + 3);',
    options: ['8', '2', '"53"', 'NaN'],
    correctAnswer: '"53"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(null == undefined);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'true'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(null === undefined);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log([] == ![]);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'true'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(+"1" + +"2");',
    options: ['"12"', '3', 'NaN', '"3"'],
    correctAnswer: '3'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log("b" + "a" + +"a" + "a");',
    options: ['"baaa"', '"baNaNa"', '"baNaN"', 'NaN'],
    correctAnswer: '"baNaNa"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log([] == 0);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'true'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log({} == 0);',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(!!"");',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'false'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(!!"false");',
    options: ['true', 'false', 'TypeError', 'undefined'],
    correctAnswer: 'true'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(+"Infinity");',
    options: ['Infinity', 'NaN', 'TypeError', 'undefined'],
    correctAnswer: 'Infinity'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(1 / 0);',
    options: ['Infinity', 'NaN', 'TypeError', 'undefined'],
    correctAnswer: 'Infinity'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(0 / 0);',
    options: ['Infinity', 'NaN', 'TypeError', 'undefined'],
    correctAnswer: 'NaN'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(Math.max());',
    options: ['Infinity', 'NaN', '-Infinity', 'undefined'],
    correctAnswer: '-Infinity'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(Math.min());',
    options: ['Infinity', 'NaN', '-Infinity', 'undefined'],
    correctAnswer: 'Infinity'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log([] + {});',
    options: ['"[object Object]"', '{}', '[]', 'TypeError'],
    correctAnswer: '"[object Object]"'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log({} + []);',
    options: ['"[object Object]"', '0', '[]', 'TypeError'],
    correctAnswer: '0'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(new Date(0) - 0);',
    options: ['0', 'NaN', 'TypeError', 'undefined'],
    correctAnswer: '0'
  },
  {
    topic: 'JS',
    difficulty: 'medium',
    question: 'What is the output of: console.log(new Array(3).toString());',
    options: ['",,"', '"[]"', '"[undefined, undefined, undefined]"', 'TypeError'],
    correctAnswer: '",,"'
  },

  // JS Hard
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is a closure in JavaScript?',
    options: [
      'A function that has access to its outer function scope',
      'A way to close a browser window',
      'A method to encapsulate private data',
      'A built-in JavaScript object'
    ],
    correctAnswer: 'A function that has access to its outer function scope'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the difference between == and === in JavaScript?',
    options: [
      '== compares values only, === compares values and types',
      '== compares values and types, === compares values only',
      'There is no difference',
      '== is for numbers, === is for strings'
    ],
    correctAnswer: '== compares values only, === compares values and types'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is hoisting in JavaScript?',
    options: [
      'The process of moving variable and function declarations to the top of their scope',
      'The process of lifting heavy objects in code',
      'A way to optimize JavaScript performance',
      'A method for raising events'
    ],
    correctAnswer: 'The process of moving variable and function declarations to the top of their scope'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the "this" keyword in JavaScript?',
    options: [
      'A reference to the current object',
      'A reference to the parent object',
      'A reference to the global object',
      'It depends on how a function is called'
    ],
    correctAnswer: 'It depends on how a function is called'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is event delegation in JavaScript?',
    options: [
      'Attaching event listeners to a parent element to handle events for child elements',
      'Assigning events to multiple elements',
      'Creating custom events',
      'Delegating event handling to another function'
    ],
    correctAnswer: 'Attaching event listeners to a parent element to handle events for child elements'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the prototype chain in JavaScript?',
    options: [
      'The mechanism by which objects inherit features from one another',
      'A way to chain function calls',
      'A method for creating object copies',
      'A security feature in JavaScript'
    ],
    correctAnswer: 'The mechanism by which objects inherit features from one another'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the difference between let, const, and var?',
    options: [
      'let and const are block-scoped, var is function-scoped',
      'var and let are block-scoped, const is function-scoped',
      'They are all the same',
      'const is block-scoped, let and var are function-scoped'
    ],
    correctAnswer: 'let and const are block-scoped, var is function-scoped'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the event loop in JavaScript?',
    options: [
      'The mechanism that handles asynchronous callbacks',
      'A loop that processes all events',
      'A way to iterate over event listeners',
      'A method for handling click events'
    ],
    correctAnswer: 'The mechanism that handles asynchronous callbacks'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is a promise in JavaScript?',
    options: [
      'An object representing the eventual completion or failure of an asynchronous operation',
      'A guarantee that code will execute',
      'A type of function',
      'A way to handle synchronous operations'
    ],
    correctAnswer: 'An object representing the eventual completion or failure of an asynchronous operation'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is async/await in JavaScript?',
    options: [
      'Syntactic sugar for working with promises',
      'A way to create asynchronous functions',
      'A replacement for promises',
      'A method for handling synchronous code'
    ],
    correctAnswer: 'Syntactic sugar for working with promises'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the difference between null and undefined?',
    options: [
      'undefined means a variable has been declared but not assigned a value, null is an assignment value',
      'null means a variable has been declared but not assigned a value, undefined is an assignment value',
      'They are the same',
      'undefined is for variables, null is for objects'
    ],
    correctAnswer: 'undefined means a variable has been declared but not assigned a value, null is an assignment value'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is memoization in JavaScript?',
    options: [
      'An optimization technique that stores the results of expensive function calls',
      'A way to memorize code',
      'A method for creating memory leaks',
      'A technique for memoizing variable names'
    ],
    correctAnswer: 'An optimization technique that stores the results of expensive function calls'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is currying in JavaScript?',
    options: [
      'A technique of evaluating functions with multiple arguments into sequences of functions with single arguments',
      'A way to cook functions',
      'A method for currying favor with the JavaScript engine',
      'A technique for creating curved shapes'
    ],
    correctAnswer: 'A technique of evaluating functions with multiple arguments into sequences of functions with single arguments'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the difference between .call() and .apply()?',
    options: [
      '.call() takes arguments separately, .apply() takes arguments as an array',
      '.apply() takes arguments separately, .call() takes arguments as an array',
      'They are the same',
      '.call() is for functions, .apply() is for methods'
    ],
    correctAnswer: '.call() takes arguments separately, .apply() takes arguments as an array'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the bind() method?',
    options: [
      'To create a new function with a specific this value',
      'To bind variables to functions',
      'To bind events to elements',
      'To bind objects together'
    ],
    correctAnswer: 'To create a new function with a specific this value'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is a generator function in JavaScript?',
    options: [
      'A function that can be paused and resumed',
      'A function that generates random numbers',
      'A function that generates other functions',
      'A function that generates HTML'
    ],
    correctAnswer: 'A function that can be paused and resumed'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the Symbol type in JavaScript?',
    options: [
      'To create unique identifiers',
      'To represent mathematical symbols',
      'To create symbolic links',
      'To represent special characters'
    ],
    correctAnswer: 'To create unique identifiers'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the Proxy object in JavaScript?',
    options: [
      'To create a proxy for another object to intercept and customize operations',
      'To create proxy servers',
      'To proxy network requests',
      'To create placeholder objects'
    ],
    correctAnswer: 'To create a proxy for another object to intercept and customize operations'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the Reflect object in JavaScript?',
    options: [
      'To provide methods for interceptable JavaScript operations',
      'To reflect object properties',
      'To create mirrored objects',
      'To handle reflection in 3D graphics'
    ],
    correctAnswer: 'To provide methods for interceptable JavaScript operations'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the WeakMap object in JavaScript?',
    options: [
      'To create a collection of key/value pairs with weak references to the keys',
      'To create a map with weak values',
      'To create a weakly typed map',
      'To create a map that can be easily garbage collected'
    ],
    correctAnswer: 'To create a collection of key/value pairs with weak references to the keys'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the WeakSet object in JavaScript?',
    options: [
      'To create a collection of objects with weak references',
      'To create a set with weak values',
      'To create a weakly typed set',
      'To create a set that can be easily garbage collected'
    ],
    correctAnswer: 'To create a collection of objects with weak references'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the Intl object in JavaScript?',
    options: [
      'To provide language sensitive string comparison, number formatting, and date/time formatting',
      'To handle internationalization of code',
      'To create international variables',
      'To manage international standards'
    ],
    correctAnswer: 'To provide language sensitive string comparison, number formatting, and date/time formatting'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the ArrayBuffer object in JavaScript?',
    options: [
      'To represent a generic, fixed-length raw binary data buffer',
      'To buffer array operations',
      'To create arrays with fixed buffers',
      'To handle binary array data'
    ],
    correctAnswer: 'To represent a generic, fixed-length raw binary data buffer'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the SharedArrayBuffer object in JavaScript?',
    options: [
      'To represent a generic, fixed-length raw binary data buffer that can be shared between workers',
      'To share array buffers between functions',
      'To create shared arrays',
      'To handle shared binary data'
    ],
    correctAnswer: 'To represent a generic, fixed-length raw binary data buffer that can be shared between workers'
  },
  {
    topic: 'JS',
    difficulty: 'hard',
    question: 'What is the purpose of the Atomics object in JavaScript?',
    options: [
      'To provide atomic operations as static methods',
      'To handle atomic physics calculations',
      'To create atomic variables',
      'To manage atomic operations'
    ],
    correctAnswer: 'To provide atomic operations as static methods'
  },

  // JS Advanced
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the Temporal Dead Zone in JavaScript?',
    options: [
      'The period between entering scope and being declared where let/const variables cannot be accessed',
      'A time when JavaScript stops working',
      'A zone where variables are temporarily dead',
      'A period during garbage collection'
    ],
    correctAnswer: 'The period between entering scope and being declared where let/const variables cannot be accessed'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the difference between microtasks and macrotasks in the event loop?',
    options: [
      'Microtasks have higher priority and are executed after the current task and before the next macrotask',
      'Macrotasks have higher priority than microtasks',
      'They are the same',
      'Microtasks are for small tasks, macrotasks for large tasks'
    ],
    correctAnswer: 'Microtasks have higher priority and are executed after the current task and before the next macrotask'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is a Web Worker in JavaScript?',
    options: [
      'A script that runs in the background independently of other scripts',
      'A worker that processes web requests',
      'A function that works with web APIs',
      'A specialized worker for web development'
    ],
    correctAnswer: 'A script that runs in the background independently of other scripts'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Service Worker API?',
    options: [
      'To act as a proxy between web applications and the network',
      'To provide services to web workers',
      'To work with server-side code',
      'To manage web services'
    ],
    correctAnswer: 'To act as a proxy between web applications and the network'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the WebAssembly JavaScript API?',
    options: [
      'To provide a way to run code written in other languages at near-native speed',
      'To assemble web components',
      'To work with assembly code in JavaScript',
      'To create web assembly lines'
    ],
    correctAnswer: 'To provide a way to run code written in other languages at near-native speed'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Components standard?',
    options: [
      'To create reusable custom elements with encapsulated functionality',
      'To componentize web applications',
      'To create components for web servers',
      'To manage web application components'
    ],
    correctAnswer: 'To create reusable custom elements with encapsulated functionality'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Shadow DOM?',
    options: [
      'To provide encapsulation for DOM trees',
      'To create shadow effects in the DOM',
      'To manage DOM shadows',
      'To create hidden DOM elements'
    ],
    correctAnswer: 'To provide encapsulation for DOM trees'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Custom Elements API?',
    options: [
      'To define custom HTML elements',
      'To create custom events',
      'To work with custom properties',
      'To manage custom JavaScript elements'
    ],
    correctAnswer: 'To define custom HTML elements'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the HTML Templates specification?',
    options: [
      'To declare fragments of markup that can be cloned and inserted',
      'To create HTML templates for websites',
      'To manage template engines',
      'To work with templated HTML'
    ],
    correctAnswer: 'To declare fragments of markup that can be cloned and inserted'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Intersection Observer API?',
    options: [
      'To observe changes in the intersection of a target element with an ancestor or viewport',
      'To observe intersections in data',
      'To manage intersecting elements',
      'To work with geometric intersections'
    ],
    correctAnswer: 'To observe changes in the intersection of a target element with an ancestor or viewport'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Resize Observer API?',
    options: [
      'To observe changes to the dimensions of elements',
      'To observe window resizing',
      'To manage responsive designs',
      'To work with element resizing'
    ],
    correctAnswer: 'To observe changes to the dimensions of elements'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Mutation Observer API?',
    options: [
      'To observe changes to the DOM tree',
      'To observe genetic mutations',
      'To manage DOM mutations',
      'To work with changing elements'
    ],
    correctAnswer: 'To observe changes to the DOM tree'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Performance API?',
    options: [
      'To access performance-related information',
      'To measure code performance',
      'To manage application performance',
      'To work with high-performance code'
    ],
    correctAnswer: 'To access performance-related information'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Audio API?',
    options: [
      'To process and synthesize audio in web applications',
      'To work with audio files',
      'To manage web audio',
      'To create audio streams'
    ],
    correctAnswer: 'To process and synthesize audio in web applications'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the WebRTC API?',
    options: [
      'To enable real-time communication in web applications',
      'To work with remote terminals',
      'To manage real-time clocks',
      'To create real-time charts'
    ],
    correctAnswer: 'To enable real-time communication in web applications'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the WebGL API?',
    options: [
      'To render interactive 2D and 3D graphics',
      'To work with GL styles',
      'To manage web graphics',
      'To create graphical layouts'
    ],
    correctAnswer: 'To render interactive 2D and 3D graphics'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the WebVR API?',
    options: [
      'To create virtual reality experiences in the browser',
      'To work with virtual reality',
      'To manage VR content',
      'To create virtual tours'
    ],
    correctAnswer: 'To create virtual reality experiences in the browser'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the WebSocket API?',
    options: [
      'To create two-way interactive communication sessions',
      'To work with socket programming',
      'To manage web sockets',
      'To create socket connections'
    ],
    correctAnswer: 'To create two-way interactive communication sessions'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Fetch API?',
    options: [
      'To make network requests similar to XMLHttpRequest but with a more powerful feature set',
      'To fetch data from servers',
      'To manage data fetching',
      'To work with remote data'
    ],
    correctAnswer: 'To make network requests similar to XMLHttpRequest but with a more powerful feature set'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Streams API?',
    options: [
      'To work with streams of data',
      'To create data streams',
      'To manage streaming content',
      'To work with continuous data'
    ],
    correctAnswer: 'To work with streams of data'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the File API?',
    options: [
      'To work with files on the client side',
      'To manage file uploads',
      'To work with file systems',
      'To create file interfaces'
    ],
    correctAnswer: 'To work with files on the client side'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the IndexedDB API?',
    options: [
      'To provide a client-side database for storing significant amounts of structured data',
      'To index databases',
      'To work with indexed data',
      'To create database indexes'
    ],
    correctAnswer: 'To provide a client-side database for storing significant amounts of structured data'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Cryptography API?',
    options: [
      'To perform cryptographic operations in web applications',
      'To work with cryptography',
      'To manage encryption',
      'To create secure connections'
    ],
    correctAnswer: 'To perform cryptographic operations in web applications'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Payment Request API?',
    options: [
      'To provide a consistent user experience for payments',
      'To request payments',
      'To manage payment processing',
      'To work with payment systems'
    ],
    correctAnswer: 'To provide a consistent user experience for payments'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Credential Management API?',
    options: [
      'To manage user credentials',
      'To work with credentials',
      'To manage authentication',
      'To create credential systems'
    ],
    correctAnswer: 'To manage user credentials'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Share API?',
    options: [
      'To share text, links, and files to other apps installed on the user\'s device',
      'To work with shared content',
      'To manage sharing',
      'To create shareable content'
    ],
    correctAnswer: 'To share text, links, and files to other apps installed on the user\'s device'
  },
  {
    topic: 'JS',
    difficulty: 'advanced',
    question: 'What is the purpose of the Web Bluetooth API?',
    options: [
      'To communicate with Bluetooth devices',
      'To work with Bluetooth',
      'To manage Bluetooth connections',
      'To create Bluetooth interfaces'
    ],
    correctAnswer: 'To communicate with Bluetooth devices'
  },

  // =============== React Questions ===============
  // React Easy
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is React?',
    options: [
      'A server-side framework',
      'A JavaScript library for building user interfaces',
      'A programming language',
      'A database management system'
    ],
    correctAnswer: 'A JavaScript library for building user interfaces'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'Which company developed React?',
    options: ['Google', 'Facebook', 'Twitter', 'Microsoft'],
    correctAnswer: 'Facebook'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is JSX?',
    options: [
      'A syntax extension for JavaScript',
      'A templating language',
      'A type of CSS',
      'A JavaScript framework'
    ],
    correctAnswer: 'A syntax extension for JavaScript'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is used to pass data to a component from outside?',
    options: ['setState', 'render with arguments', 'props', 'PropTypes'],
    correctAnswer: 'props'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'How do you create a component in React?',
    options: [
      'React.createComponent()',
      'React.makeComponent()',
      'React.component()',
      'By extending React.Component'
    ],
    correctAnswer: 'By extending React.Component'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'Which method is used to render React elements to the DOM?',
    options: [
      'ReactDOM.render()',
      'React.render()',
      'DOM.render()',
      'render()'
    ],
    correctAnswer: 'ReactDOM.render()'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to write "Hello World" in React?',
    options: [
      '<div>Hello World</div>',
      'React.createElement("div", null, "Hello World")',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to import React?',
    options: [
      'import React from "react";',
      'import React, { Component } from "react";',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to create a functional component?',
    options: [
      'function MyComponent() { return <div />; }',
      'const MyComponent = () => { return <div />; }',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to access a prop inside a component?',
    options: [
      'this.props.propName',
      'props.propName',
      'Both A and B (depending on component type)',
      'None of the above'
    ],
    correctAnswer: 'Both A and B (depending on component type)'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to render a child component?',
    options: [
      '<ChildComponent />',
      '{ChildComponent()}',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to add inline styles in React?',
    options: [
      'style={{ color: "red" }}',
      'style="color: red"',
      'style={color: "red"}',
      'style={{"color": "red"}}'
    ],
    correctAnswer: 'style={{ color: "red" }}'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to add a class in React?',
    options: [
      'class="my-class"',
      'className="my-class"',
      'class={"my-class"}',
      'className={"my-class"}'
    ],
    correctAnswer: 'className="my-class"'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to handle a click event?',
    options: [
      'onClick={this.handleClick}',
      'onclick={this.handleClick}',
      'onClick="handleClick()"',
      'onClick={handleClick()}'
    ],
    correctAnswer: 'onClick={this.handleClick}'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to bind a method in a class component?',
    options: [
      'this.method = this.method.bind(this); in constructor',
      'method = () => { ... }',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to set a default prop value?',
    options: [
      'Component.defaultProps = { prop: value };',
      'static defaultProps = { prop: value };',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct syntax to define prop types?',
    options: [
      'Component.propTypes = { prop: PropTypes.type };',
      'static propTypes = { prop: PropTypes.type };',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to conditionally render a component?',
    options: [
      '{condition && <Component />}',
      '{condition ? <Component /> : null}',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to render a list of items?',
    options: [
      '{items.map(item => <Item key={item.id} />)}',
      '{items.forEach(item => <Item key={item.id} />)}',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: '{items.map(item => <Item key={item.id} />)}'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the purpose of keys in React?',
    options: [
      'To help React identify which items have changed',
      'To provide unique identifiers for elements',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to update state in a class component?',
    options: [
      'this.setState({ key: value });',
      'this.state.key = value;',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'this.setState({ key: value });'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to update state based on previous state?',
    options: [
      'this.setState(prevState => ({ count: prevState.count + 1 }));',
      'this.setState({ count: this.state.count + 1 });',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to use state in a functional component?',
    options: [
      'const [state, setState] = useState(initialValue);',
      'const state = useState(initialValue);',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'const [state, setState] = useState(initialValue);'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to perform side effects in a functional component?',
    options: [
      'useEffect(() => { effect });',
      'useEffect(() => { effect }, [dependencies]);',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to create a context?',
    options: [
      'const MyContext = React.createContext(defaultValue);',
      'const MyContext = new React.Context(defaultValue);',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'const MyContext = React.createContext(defaultValue);'
  },
  {
    topic: 'React',
    difficulty: 'easy',
    question: 'What is the correct way to use a context in a class component?',
    options: [
      'static contextType = MyContext; then this.context',
      '<MyContext.Consumer>{value => ()}</MyContext.Consumer>',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // React Medium
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the virtual DOM?',
    options: [
      'A DOM representation maintained by the browser',
      'A lightweight copy of the actual DOM',
      'A special DOM used for mobile devices',
      'A backup of the real DOM'
    ],
    correctAnswer: 'A lightweight copy of the actual DOM'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of shouldComponentUpdate()?',
    options: [
      'To determine if the component should re-render',
      'To update the component state',
      'To force a component update',
      'To handle component mounting'
    ],
    correctAnswer: 'To determine if the component should re-render'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.Fragment?',
    options: [
      'To group multiple elements without adding extra nodes to the DOM',
      'To create document fragments',
      'To improve performance',
      'To handle component fragments'
    ],
    correctAnswer: 'To group multiple elements without adding extra nodes to the DOM'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.PureComponent?',
    options: [
      'To implement shouldComponentUpdate with a shallow prop and state comparison',
      'To create pure functions',
      'To optimize performance',
      'To handle pure components'
    ],
    correctAnswer: 'To implement shouldComponentUpdate with a shallow prop and state comparison'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.memo?',
    options: [
      'To memoize functional components',
      'To memorize component state',
      'To create memo components',
      'To handle memory optimization'
    ],
    correctAnswer: 'To memoize functional components'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useCallback?',
    options: [
      'To memoize functions',
      'To handle callbacks',
      'To create callback functions',
      'To optimize function calls'
    ],
    correctAnswer: 'To memoize functions'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useMemo?',
    options: [
      'To memoize values',
      'To memorize component state',
      'To create memoized components',
      'To handle memory optimization'
    ],
    correctAnswer: 'To memoize values'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useRef?',
    options: [
      'To create a mutable ref object',
      'To reference elements',
      'To handle references',
      'To create reference variables'
    ],
    correctAnswer: 'To create a mutable ref object'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of forwardRef?',
    options: [
      'To forward refs to child components',
      'To create forward references',
      'To handle ref forwarding',
      'To optimize ref usage'
    ],
    correctAnswer: 'To forward refs to child components'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useReducer?',
    options: [
      'To manage complex state logic',
      'To reduce state',
      'To handle reducer functions',
      'To optimize state management'
    ],
    correctAnswer: 'To manage complex state logic'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useContext?',
    options: [
      'To consume context in functional components',
      'To create context',
      'To handle context providers',
      'To optimize context usage'
    ],
    correctAnswer: 'To consume context in functional components'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of useLayoutEffect?',
    options: [
      'To perform side effects after DOM mutations but before paint',
      'To handle layout effects',
      'To create layout components',
      'To optimize layout performance'
    ],
    correctAnswer: 'To perform side effects after DOM mutations but before paint'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.lazy?',
    options: [
      'To lazy load components',
      'To create lazy components',
      'To handle lazy loading',
      'To optimize component loading'
    ],
    correctAnswer: 'To lazy load components'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of Suspense?',
    options: [
      'To handle loading states for lazy components',
      'To suspend component rendering',
      'To create suspenseful components',
      'To optimize suspense handling'
    ],
    correctAnswer: 'To handle loading states for lazy components'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of Error Boundaries?',
    options: [
      'To catch JavaScript errors in their child component tree',
      'To handle error states',
      'To create error components',
      'To optimize error handling'
    ],
    correctAnswer: 'To catch JavaScript errors in their child component tree'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of Portals?',
    options: [
      'To render children into a DOM node outside the parent component',
      'To create portal components',
      'To handle portal rendering',
      'To optimize DOM rendering'
    ],
    correctAnswer: 'To render children into a DOM node outside the parent component'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.StrictMode?',
    options: [
      'To highlight potential problems in the application',
      'To enforce strict coding standards',
      'To create strict components',
      'To optimize strict rendering'
    ],
    correctAnswer: 'To highlight potential problems in the application'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of React.Children utilities?',
    options: [
      'To handle props.children opaque data structure',
      'To create child components',
      'To handle children rendering',
      'To optimize children usage'
    ],
    correctAnswer: 'To handle props.children opaque data structure'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of cloneElement?',
    options: [
      'To clone and return a new React element',
      'To create element clones',
      'To handle element cloning',
      'To optimize element rendering'
    ],
    correctAnswer: 'To clone and return a new React element'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of createElement?',
    options: [
      'To create and return a new React element',
      'To create DOM elements',
      'To handle element creation',
      'To optimize element rendering'
    ],
    correctAnswer: 'To create and return a new React element'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of isValidElement?',
    options: [
      'To verify an object is a React element',
      'To validate element properties',
      'To handle element validation',
      'To optimize element checking'
    ],
    correctAnswer: 'To verify an object is a React element'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of ReactDOM.createPortal?',
    options: [
      'To create a React portal',
      'To create DOM portals',
      'To handle portal creation',
      'To optimize portal rendering'
    ],
    correctAnswer: 'To create a React portal'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of ReactDOM.findDOMNode?',
    options: [
      'To access the underlying DOM node of a component',
      'To find DOM nodes',
      'To handle DOM node finding',
      'To optimize DOM access'
    ],
    correctAnswer: 'To access the underlying DOM node of a component'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of ReactDOM.hydrate?',
    options: [
      'To hydrate a container rendered on the server',
      'To handle hydration',
      'To create hydrated components',
      'To optimize hydration'
    ],
    correctAnswer: 'To hydrate a container rendered on the server'
  },
  {
    topic: 'React',
    difficulty: 'medium',
    question: 'What is the purpose of ReactDOM.unmountComponentAtNode?',
    options: [
      'To unmount a React component from the DOM',
      'To handle component unmounting',
      'To create unmount components',
      'To optimize unmounting'
    ],
    correctAnswer: 'To unmount a React component from the DOM'
  },

  // React Hard
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'How does React implement the virtual DOM diffing algorithm?',
    options: [
      'By using a heuristic O(n) algorithm based on two assumptions',
      'By comparing the entire DOM tree recursively',
      'By using a hash map of all elements',
      'By comparing element IDs only'
    ],
    correctAnswer: 'By using a heuristic O(n) algorithm based on two assumptions'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the reconciliation process in React?',
    options: [
      'The algorithm React uses to diff one tree with another',
      'The process of reconciling state and props',
      'The method React uses to update the DOM',
      'The way React handles component updates'
    ],
    correctAnswer: 'The algorithm React uses to diff one tree with another'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What are the limitations of the virtual DOM diffing algorithm?',
    options: [
      'It assumes two elements of different types will produce different trees',
      'It can only diff trees of the same depth',
      'It cannot handle dynamic children',
      'All of the above'
    ],
    correctAnswer: 'It assumes two elements of different types will produce different trees'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of keys in the reconciliation algorithm?',
    options: [
      'To help React identify which items have changed, are added, or removed',
      'To provide unique identifiers for elements',
      'To optimize the diffing process',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the significance of the "key" prop in React lists?',
    options: [
      'It helps React identify which items have changed',
      'It provides a stable identity for elements',
      'It improves performance by minimizing DOM operations',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React Fiber?',
    options: [
      'A reimplementation of React\'s core algorithm',
      'A new reconciliation engine',
      'A way to enable incremental rendering',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What are the benefits of React Fiber?',
    options: [
      'The ability to split rendering work into chunks',
      'The ability to prioritize certain types of updates',
      'The ability to pause, abort, or reuse work',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of time slicing in React Fiber?',
    options: [
      'To split rendering work into chunks spread over multiple frames',
      'To slice time into smaller intervals',
      'To improve performance by slicing components',
      'To handle time-based rendering'
    ],
    correctAnswer: 'To split rendering work into chunks spread over multiple frames'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of suspense for data fetching?',
    options: [
      'To let components "wait" for something before rendering',
      'To handle loading states for data fetching',
      'To enable concurrent data fetching',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of concurrent mode in React?',
    options: [
      'To enable interruptible rendering',
      'To improve the user experience of React applications',
      'To prepare React for concurrent features',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of transitions in concurrent React?',
    options: [
      'To mark certain updates as transitions',
      'To keep the UI responsive during high-cost updates',
      'To enable smoother user experiences',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of useTransition hook?',
    options: [
      'To start transitions',
      'To track pending states of transitions',
      'To enable concurrent transitions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of useDeferredValue hook?',
    options: [
      'To defer updates that aren\'t urgent',
      'To keep the UI responsive',
      'To enable concurrent deferring',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of server components in React?',
    options: [
      'To run components on the server',
      'To reduce bundle size by keeping server components out of the client bundle',
      'To enable new server-side capabilities',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What are the limitations of server components?',
    options: [
      'They can\'t use client-side features like state or effects',
      'They can\'t use browser-only APIs',
      'They have limited interactivity',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React Server Components?',
    options: [
      'To enable zero-bundle-size components',
      'To have full access to the server-side ecosystem',
      'To enable automatic code splitting',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s new JSX transform?',
    options: [
      'To enable using JSX without importing React',
      'To improve bundle size',
      'To enable new JSX features',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s experimental "use" hook?',
    options: [
      'To read the value of a resource like a Promise or context',
      'To enable new concurrent features',
      'To handle async operations in components',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s cache API?',
    options: [
      'To memoize async operations',
      'To enable data caching in React',
      'To improve performance of data fetching',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s "use" hook for promises?',
    options: [
      'To handle promises in components',
      'To enable suspense for data fetching',
      'To simplify async data handling',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s "useOptimistic" hook?',
    options: [
      'To enable optimistic UI updates',
      'To improve user experience during mutations',
      'To handle pending states optimistically',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s "useActionState" hook?',
    options: [
      'To handle form actions with state',
      'To manage state for actions',
      'To enable progressive enhancement',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s "useFormStatus" hook?',
    options: [
      'To access the status of a form',
      'To handle form submission states',
      'To enable form status tracking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'hard',
    question: 'What is the purpose of React\'s "useFormState" hook?',
    options: [
      'To handle form state',
      'To manage state for forms',
      'To enable form state tracking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },

  // React Advanced
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s concurrent rendering work under the hood?',
    options: [
      'By using a fiber-based reconciliation algorithm that can pause and resume work',
      'By rendering components concurrently in threads',
      'By using web workers for rendering',
      'By parallelizing the rendering process'
    ],
    correctAnswer: 'By using a fiber-based reconciliation algorithm that can pause and resume work'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s lane model in concurrent rendering?',
    options: [
      'To prioritize different types of updates',
      'To enable concurrent features',
      'To manage the scheduling of updates',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s suspense for data fetching work internally?',
    options: [
      'By throwing promises that React catches and waits for',
      'By using special hooks that handle async operations',
      'By pausing rendering until data is ready',
      'By managing async states internally'
    ],
    correctAnswer: 'By throwing promises that React catches and waits for'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "startTransition" API?',
    options: [
      'To mark non-urgent state updates as transitions',
      'To keep the UI responsive during heavy updates',
      'To enable concurrent transitions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s server components architecture work?',
    options: [
      'By streaming component trees from server to client',
      'By keeping server components out of the client bundle',
      'By enabling direct server access from components',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "use" hook for context?',
    options: [
      'To read context in a way that works with concurrent features',
      'To simplify context usage',
      'To enable context reading in server components',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s new compiler (React Forget) work?',
    options: [
      'By automatically memoizing components and hooks',
      'By optimizing re-renders at compile time',
      'By analyzing code to prevent unnecessary updates',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "use" hook for promises?',
    options: [
      'To integrate promises with suspense',
      'To simplify async data handling in components',
      'To enable concurrent data fetching',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s server components handle client components?',
    options: [
      'By treating them as references that stay on the client',
      'By automatically splitting them into separate bundles',
      'By enabling seamless interop between server and client components',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useOptimistic" hook?',
    options: [
      'To enable optimistic UI updates during mutations',
      'To improve perceived performance',
      'To handle pending states optimistically',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s action system work with forms?',
    options: [
      'By handling form submissions as async actions',
      'By enabling progressive enhancement',
      'By integrating with suspense for loading states',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useFormStatus" hook?',
    options: [
      'To access the status of a form action',
      'To handle pending states during form submissions',
      'To enable better form UX',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s "useActionState" hook work?',
    options: [
      'By managing state tied to form actions',
      'By handling form submissions with state',
      'By enabling stateful actions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useFormState" hook?',
    options: [
      'To manage state for forms',
      'To handle form state updates',
      'To enable form state tracking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s new document metadata features work?',
    options: [
      'By allowing components to render into the head',
      'By enabling title and meta tags as components',
      'By handling metadata updates during navigation',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s asset loading system?',
    options: [
      'To optimize loading of stylesheets, fonts, and scripts',
      'To enable resource preloading',
      'To handle asset dependencies',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s new navigation system work?',
    options: [
      'By handling client-side navigation as transitions',
      'By enabling suspense during navigation',
      'By optimizing route transitions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "use" hook for resources?',
    options: [
      'To read the value of a resource like a Promise or context',
      'To enable resource consumption in components',
      'To integrate with suspense for loading states',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s cache API work internally?',
    options: [
      'By memoizing async operations based on their inputs',
      'By creating a cache boundary for data',
      'By enabling shared cache between components',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useOptimistic" state?',
    options: [
      'To show optimistic updates before confirmation',
      'To improve perceived performance during mutations',
      'To handle pending states optimistically',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s action system handle errors?',
    options: [
      'By providing error boundaries for actions',
      'By enabling error states in forms',
      'By handling submission errors gracefully',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useActionState" hook?',
    options: [
      'To manage state tied to form actions',
      'To handle form submissions with state',
      'To enable stateful actions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'How does React\'s "useFormStatus" hook work internally?',
    options: [
      'By tracking the status of form actions',
      'By providing pending states during submissions',
      'By integrating with the action system',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'React',
    difficulty: 'advanced',
    question: 'What is the purpose of React\'s "useFormState" hook?',
    options: [
      'To manage state for forms',
      'To handle form state updates',
      'To enable form state tracking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },

  // =============== Node.js Questions ===============
  // Node Easy
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'What is Node.js?',
    options: [
      'A JavaScript runtime built on Chrome\'s V8 JavaScript engine',
      'A JavaScript library',
      'A JavaScript framework',
      'A package manager'
    ],
    correctAnswer: 'A JavaScript runtime built on Chrome\'s V8 JavaScript engine'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which of the following is NOT a built-in module in Node.js?',
    options: ['fs', 'http', 'path', 'react'],
    correctAnswer: 'react'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'How do you include a built-in module in Node.js?',
    options: [
      'require("module-name")',
      'import "module-name"',
      'include "module-name"',
      'using "module-name"'
    ],
    correctAnswer: 'require("module-name")'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to create a new directory in Node.js?',
    options: [
      'fs.mkdir()',
      'fs.createDirectory()',
      'fs.newDir()',
      'fs.makeDirectory()'
    ],
    correctAnswer: 'fs.mkdir()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to read a file in Node.js?',
    options: [
      'fs.readFile()',
      'fs.read()',
      'fs.open()',
      'fs.getFile()'
    ],
    correctAnswer: 'fs.readFile()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to write to a file in Node.js?',
    options: [
      'fs.writeFile()',
      'fs.write()',
      'fs.append()',
      'fs.createFile()'
    ],
    correctAnswer: 'fs.writeFile()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which module is used to handle file paths in Node.js?',
    options: ['fs', 'path', 'os', 'util'],
    correctAnswer: 'path'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to join path segments?',
    options: [
      'path.join()',
      'path.combine()',
      'path.concat()',
      'path.merge()'
    ],
    correctAnswer: 'path.join()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to create a basic HTTP server in Node.js?',
    options: [
      'http.createServer()',
      'http.newServer()',
      'http.server()',
      'http.makeServer()'
    ],
    correctAnswer: 'http.createServer()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to parse a URL in Node.js?',
    options: [
      'url.parse()',
      'url.split()',
      'url.decode()',
      'url.analyze()'
    ],
    correctAnswer: 'url.parse()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to read command line arguments in Node.js?',
    options: [
      'process.argv',
      'process.args',
      'process.arguments',
      'process.params'
    ],
    correctAnswer: 'process.argv'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which global object is available in all Node.js modules?',
    options: ['global', 'window', 'document', 'navigator'],
    correctAnswer: 'global'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to export functionality from a module?',
    options: [
      'module.exports',
      'exports',
      'export',
      'Both A and B'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to include a local module?',
    options: [
      'require("./module")',
      'import "./module"',
      'include "./module"',
      'using "./module"'
    ],
    correctAnswer: 'require("./module")'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to execute a callback after a delay?',
    options: [
      'setTimeout()',
      'setInterval()',
      'setImmediate()',
      'process.nextTick()'
    ],
    correctAnswer: 'setTimeout()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to execute a callback at regular intervals?',
    options: [
      'setTimeout()',
      'setInterval()',
      'setImmediate()',
      'process.nextTick()'
    ],
    correctAnswer: 'setInterval()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to execute a callback in the next iteration of the event loop?',
    options: [
      'setTimeout()',
      'setInterval()',
      'setImmediate()',
      'process.nextTick()'
    ],
    correctAnswer: 'process.nextTick()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to execute a callback immediately after the current operation?',
    options: [
      'setTimeout()',
      'setInterval()',
      'setImmediate()',
      'process.nextTick()'
    ],
    correctAnswer: 'setImmediate()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which module is used to handle operating system related operations?',
    options: ['fs', 'path', 'os', 'util'],
    correctAnswer: 'os'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to get the current working directory?',
    options: [
      'process.cwd()',
      'process.pwd()',
      'process.dir()',
      'process.workingDir()'
    ],
    correctAnswer: 'process.cwd()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to exit the current process?',
    options: [
      'process.exit()',
      'process.stop()',
      'process.terminate()',
      'process.kill()'
    ],
    correctAnswer: 'process.exit()'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to get environment variables?',
    options: [
      'process.env',
      'process.environment',
      'process.getEnv()',
      'process.vars()'
    ],
    correctAnswer: 'process.env'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which module is used to handle child processes?',
    options: ['child', 'process', 'child_process', 'spawn'],
    correctAnswer: 'child_process'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which method is used to spawn a new process?',
    options: [
      'child_process.spawn()',
      'child_process.fork()',
      'child_process.exec()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'easy',
    question: 'Which module is used to handle streams?',
    options: ['stream', 'fs', 'buffer', 'data'],
    correctAnswer: 'stream'
  },

  // Node Medium
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the __dirname variable in Node.js?',
    options: [
      'It returns the directory name of the current module',
      'It returns the global directory name',
      'It returns the root directory name',
      'It returns the home directory name'
    ],
    correctAnswer: 'It returns the directory name of the current module'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the __filename variable in Node.js?',
    options: [
      'It returns the filename of the current module',
      'It returns the global filename',
      'It returns the root filename',
      'It returns the home filename'
    ],
    correctAnswer: 'It returns the filename of the current module'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the require.cache object?',
    options: [
      'It caches all required modules',
      'It clears the module cache',
      'It lists all cached modules',
      'It manages the module cache'
    ],
    correctAnswer: 'It caches all required modules'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the require.resolve() method?',
    options: [
      'To resolve the full path of a module',
      'To resolve module dependencies',
      'To resolve module conflicts',
      'To resolve module versions'
    ],
    correctAnswer: 'To resolve the full path of a module'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the module wrapper function in Node.js?',
    options: [
      'To provide module scoping',
      'To wrap module code',
      'To provide module variables',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the Buffer class in Node.js?',
    options: [
      'To handle binary data',
      'To handle text data',
      'To handle network data',
      'To handle file data'
    ],
    correctAnswer: 'To handle binary data'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the EventEmitter class in Node.js?',
    options: [
      'To handle events',
      'To emit events',
      'To manage event listeners',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the Stream class in Node.js?',
    options: [
      'To handle streaming data',
      'To read/write data sequentially',
      'To process large datasets efficiently',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the pipe() method in Node.js streams?',
    options: [
      'To connect readable and writable streams',
      'To transfer data between streams',
      'To automate data flow management',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the cluster module in Node.js?',
    options: [
      'To create child processes',
      'To enable load balancing',
      'To take advantage of multi-core systems',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the worker_threads module in Node.js?',
    options: [
      'To run JavaScript in parallel',
      'To handle CPU-intensive tasks',
      'To enable true multithreading',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the util.promisify() method?',
    options: [
      'To convert callback-based functions to promises',
      'To handle promise utilities',
      'To manage promise conversions',
      'To create promise helpers'
    ],
    correctAnswer: 'To convert callback-based functions to promises'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the util.inherits() method?',
    options: [
      'To implement inheritance between classes',
      'To handle utility inheritance',
      'To manage class utilities',
      'To create inheritance helpers'
    ],
    correctAnswer: 'To implement inheritance between classes'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the crypto module in Node.js?',
    options: [
      'To handle cryptographic operations',
      'To manage encryption',
      'To work with hashes',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the zlib module in Node.js?',
    options: [
      'To handle compression',
      'To work with zip files',
      'To manage file compression',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the net module in Node.js?',
    options: [
      'To create TCP servers and clients',
      'To handle network operations',
      'To work with sockets',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the dgram module in Node.js?',
    options: [
      'To create UDP servers and clients',
      'To handle datagram operations',
      'To work with UDP sockets',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the dns module in Node.js?',
    options: [
      'To perform DNS lookups',
      'To handle domain name resolution',
      'To work with DNS records',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the vm module in Node.js?',
    options: [
      'To run JavaScript code in a virtual machine',
      'To handle sandboxed execution',
      'To work with virtual contexts',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the repl module in Node.js?',
    options: [
      'To create a Read-Eval-Print-Loop',
      'To handle interactive execution',
      'To work with command line interfaces',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the assert module in Node.js?',
    options: [
      'To write tests',
      'To make assertions',
      'To validate conditions',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the perf_hooks module in Node.js?',
    options: [
      'To measure performance',
      'To create performance hooks',
      'To work with performance metrics',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the async_hooks module in Node.js?',
    options: [
      'To track asynchronous resources',
      'To handle async operations',
      'To work with async contexts',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the inspector module in Node.js?',
    options: [
      'To enable debugging',
      'To work with the V8 inspector',
      'To provide debugging capabilities',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'medium',
    question: 'What is the purpose of the querystring module in Node.js?',
    options: [
      'To parse and format URL query strings',
      'To handle query parameters',
      'To work with URL queries',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },

  // Node Hard
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'How does the Node.js event loop work?',
    options: [
      'It handles asynchronous operations using a single-threaded, non-blocking model',
      'It uses multiple threads to handle operations',
      'It blocks on I/O operations',
      'It runs all operations synchronously'
    ],
    correctAnswer: 'It handles asynchronous operations using a single-threaded, non-blocking model'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What are the phases of the Node.js event loop?',
    options: [
      'Timers, pending callbacks, idle/prepare, poll, check, close callbacks',
      'Input, processing, output',
      'Read, evaluate, print, loop',
      'Start, execute, end'
    ],
    correctAnswer: 'Timers, pending callbacks, idle/prepare, poll, check, close callbacks'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is libuv in Node.js?',
    options: [
      'A multi-platform support library focused on asynchronous I/O',
      'A JavaScript engine',
      'A module system',
      'A package manager'
    ],
    correctAnswer: 'A multi-platform support library focused on asynchronous I/O'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the difference between setImmediate() and process.nextTick()?',
    options: [
      'process.nextTick() runs before setImmediate() in the event loop',
      'setImmediate() runs before process.nextTick() in the event loop',
      'They are the same',
      'process.nextTick() is deprecated'
    ],
    correctAnswer: 'process.nextTick() runs before setImmediate() in the event loop'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the V8 engine in Node.js?',
    options: [
      'To execute JavaScript code',
      'To provide a runtime environment',
      'To optimize performance',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'How does Node.js handle child processes?',
    options: [
      'By spawning new instances of the V8 engine',
      'By using operating system processes',
      'By creating lightweight threads',
      'By using web workers'
    ],
    correctAnswer: 'By using operating system processes'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the --inspect flag in Node.js?',
    options: [
      'To enable the Node.js debugger',
      'To inspect modules',
      'To check for errors',
      'To analyze performance'
    ],
    correctAnswer: 'To enable the Node.js debugger'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the N-API in Node.js?',
    options: [
      'To provide a stable API for native addons',
      'To handle network operations',
      'To manage npm packages',
      'To create new APIs'
    ],
    correctAnswer: 'To provide a stable API for native addons'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the AsyncLocalStorage class in Node.js?',
    options: [
      'To store context throughout the lifetime of a web request or other asynchronous operation',
      'To handle local storage asynchronously',
      'To manage async storage operations',
      'To create async storage contexts'
    ],
    correctAnswer: 'To store context throughout the lifetime of a web request or other asynchronous operation'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Diagnostic Channel in Node.js?',
    options: [
      'To provide a pub/sub API for diagnostic data',
      'To handle diagnostic operations',
      'To manage diagnostic tools',
      'To create diagnostic reports'
    ],
    correctAnswer: 'To provide a pub/sub API for diagnostic data'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Source Map V3 support in Node.js?',
    options: [
      'To map minified code back to original source code',
      'To handle source maps',
      'To manage source code mapping',
      'To create source maps'
    ],
    correctAnswer: 'To map minified code back to original source code'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the WASI (WebAssembly System Interface) in Node.js?',
    options: [
      'To provide a system interface for WebAssembly applications',
      'To handle WebAssembly operations',
      'To manage WebAssembly modules',
      'To create WebAssembly interfaces'
    ],
    correctAnswer: 'To provide a system interface for WebAssembly applications'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Report feature in Node.js?',
    options: [
      'To generate diagnostic reports',
      'To handle reporting operations',
      'To manage report generation',
      'To create diagnostic tools'
    ],
    correctAnswer: 'To generate diagnostic reports'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Policy mechanism in Node.js?',
    options: [
      'To create security policies for modules',
      'To handle policy enforcement',
      'To manage module policies',
      'To create security rules'
    ],
    correctAnswer: 'To create security policies for modules'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the QUIC protocol support in Node.js?',
    options: [
      'To enable experimental QUIC protocol support',
      'To handle QUIC operations',
      'To manage QUIC connections',
      'To create QUIC servers'
    ],
    correctAnswer: 'To enable experimental QUIC protocol support'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Timers Promises API in Node.js?',
    options: [
      'To provide promise-based versions of the timers functions',
      'To handle timer promises',
      'To manage timer operations',
      'To create timer utilities'
    ],
    correctAnswer: 'To provide promise-based versions of the timers functions'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the AbortController in Node.js?',
    options: [
      'To abort fetch requests and other operations',
      'To handle abort operations',
      'To manage abort controllers',
      'To create abort utilities'
    ],
    correctAnswer: 'To abort fetch requests and other operations'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the EventTarget and Event APIs in Node.js?',
    options: [
      'To provide DOM-compatible Event APIs',
      'To handle event targets',
      'To manage event operations',
      'To create event utilities'
    ],
    correctAnswer: 'To provide DOM-compatible Event APIs'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Web Crypto API in Node.js?',
    options: [
      'To provide cryptographic functionality',
      'To handle web crypto operations',
      'To manage crypto modules',
      'To create crypto utilities'
    ],
    correctAnswer: 'To provide cryptographic functionality'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the BroadcastChannel API in Node.js?',
    options: [
      'To enable communication between different Node.js processes',
      'To handle broadcast operations',
      'To manage channel communication',
      'To create broadcast utilities'
    ],
    correctAnswer: 'To enable communication between different Node.js processes'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the CustomEvent API in Node.js?',
    options: [
      'To create and dispatch custom events',
      'To handle custom event operations',
      'To manage event customization',
      'To create event utilities'
    ],
    correctAnswer: 'To create and dispatch custom events'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the MessageChannel and MessagePort APIs in Node.js?',
    options: [
      'To enable communication between different contexts',
      'To handle message channels',
      'To manage port communication',
      'To create messaging utilities'
    ],
    correctAnswer: 'To enable communication between different contexts'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Performance Timing API in Node.js?',
    options: [
      'To measure performance metrics',
      'To handle timing operations',
      'To manage performance tools',
      'To create timing utilities'
    ],
    correctAnswer: 'To measure performance metrics'
  },
  {
    topic: 'Node',
    difficulty: 'hard',
    question: 'What is the purpose of the Structured Clone algorithm in Node.js?',
    options: [
      'To clone complex JavaScript objects',
      'To handle structured cloning',
      'To manage object cloning',
      'To create clone utilities'
    ],
    correctAnswer: 'To clone complex JavaScript objects'
  },

  // Node Advanced
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle memory management?',
    options: [
      'Through garbage collection in the V8 engine',
      'Through manual memory management',
      'Through reference counting',
      'Through memory pools'
    ],
    correctAnswer: 'Through garbage collection in the V8 engine'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --max-old-space-size flag in Node.js?',
    options: [
      'To set the maximum size of the old memory space in MB',
      'To limit the memory usage',
      'To optimize garbage collection',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle C++ addons?',
    options: [
      'Through the N-API or native V8 APIs',
      'Through direct system calls',
      'Through JavaScript wrappers',
      'Through web assembly'
    ],
    correctAnswer: 'Through the N-API or native V8 APIs'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the Node.js binding layer?',
    options: [
      'To connect JavaScript and C++ code',
      'To handle module binding',
      'To manage native addons',
      'To create binding utilities'
    ],
    correctAnswer: 'To connect JavaScript and C++ code'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle thread pooling?',
    options: [
      'Through libuv\'s thread pool',
      'Through native threads',
      'Through worker threads',
      'Through process forking'
    ],
    correctAnswer: 'Through libuv\'s thread pool'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --experimental-worker flag in Node.js?',
    options: [
      'To enable the worker_threads module',
      'To handle experimental workers',
      'To manage worker operations',
      'To create worker utilities'
    ],
    correctAnswer: 'To enable the worker_threads module'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle HTTP/2?',
    options: [
      'Through the http2 module',
      'Through native HTTP/2 support',
      'Through third-party modules',
      'Through protocol upgrades'
    ],
    correctAnswer: 'Through the http2 module'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --experimental-modules flag in Node.js?',
    options: [
      'To enable ECMAScript modules support',
      'To handle experimental modules',
      'To manage module operations',
      'To create module utilities'
    ],
    correctAnswer: 'To enable ECMAScript modules support'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle ES modules and CommonJS interoperability?',
    options: [
      'Through special import/export handling',
      'Through file extensions',
      'Through package.json configuration',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --loader flag in Node.js?',
    options: [
      'To specify a custom ES module loader',
      'To handle module loading',
      'To manage loader operations',
      'To create loader utilities'
    ],
    correctAnswer: 'To specify a custom ES module loader'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle WebAssembly modules?',
    options: [
      'Through the WebAssembly API',
      'Through native WASM support',
      'Through third-party modules',
      'Through compilation'
    ],
    correctAnswer: 'Through the WebAssembly API'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --experimental-vm-modules flag in Node.js?',
    options: [
      'To enable ES module support in the vm module',
      'To handle experimental VM modules',
      'To manage VM operations',
      'To create VM utilities'
    ],
    correctAnswer: 'To enable ES module support in the vm module'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle native crypto operations?',
    options: [
      'Through OpenSSL',
      'Through native crypto modules',
      'Through third-party libraries',
      'Through system crypto APIs'
    ],
    correctAnswer: 'Through OpenSSL'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --tls-cipher-list flag in Node.js?',
    options: [
      'To specify alternative TLS cipher list',
      'To handle TLS cipher operations',
      'To manage TLS configuration',
      'To create TLS utilities'
    ],
    correctAnswer: 'To specify alternative TLS cipher list'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle DNS resolution?',
    options: [
      'Through c-ares library',
      'Through native DNS resolution',
      'Through system DNS APIs',
      'Through third-party modules'
    ],
    correctAnswer: 'Through c-ares library'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --dns-result-order flag in Node.js?',
    options: [
      'To specify DNS resolution order',
      'To handle DNS result operations',
      'To manage DNS configuration',
      'To create DNS utilities'
    ],
    correctAnswer: 'To specify DNS resolution order'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle file system watching?',
    options: [
      'Through platform-specific APIs',
      'Through polling',
      'Through inotify on Linux',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --preserve-symlinks flag in Node.js?',
    options: [
      'To preserve symbolic links when resolving modules',
      'To handle symlink operations',
      'To manage symlink configuration',
      'To create symlink utilities'
    ],
    correctAnswer: 'To preserve symbolic links when resolving modules'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle process clustering?',
    options: [
      'Through the cluster module',
      'Through native process management',
      'Through third-party modules',
      'Through system process APIs'
    ],
    correctAnswer: 'Through the cluster module'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --trace-sync-io flag in Node.js?',
    options: [
      'To print a stack trace whenever synchronous I/O is detected',
      'To handle sync I/O operations',
      'To manage I/O tracing',
      'To create I/O utilities'
    ],
    correctAnswer: 'To print a stack trace whenever synchronous I/O is detected'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle process signals?',
    options: [
      'Through the process.on() API',
      'Through native signal handling',
      'Through third-party modules',
      'Through system signal APIs'
    ],
    correctAnswer: 'Through the process.on() API'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --unhandled-rejections flag in Node.js?',
    options: [
      'To control behavior for unhandled promise rejections',
      'To handle rejection operations',
      'To manage promise configuration',
      'To create promise utilities'
    ],
    correctAnswer: 'To control behavior for unhandled promise rejections'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle process termination?',
    options: [
      'Through process.exit() and signals',
      'Through native termination',
      'Through third-party modules',
      'Through system termination APIs'
    ],
    correctAnswer: 'Through process.exit() and signals'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'What is the purpose of the --trace-deprecation flag in Node.js?',
    options: [
      'To print stack traces for deprecated APIs',
      'To handle deprecation operations',
      'To manage deprecation configuration',
      'To create deprecation utilities'
    ],
    correctAnswer: 'To print stack traces for deprecated APIs'
  },
  {
    topic: 'Node',
    difficulty: 'advanced',
    question: 'How does Node.js handle process debugging?',
    options: [
      'Through the inspector protocol',
      'Through native debugging',
      'Through third-party modules',
      'Through system debugging APIs'
    ],
    correctAnswer: 'Through the inspector protocol'
  },

  // =============== Express Questions ===============
  // Express Easy
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'What is Express.js?',
    options: [
      'A web application framework for Node.js',
      'A programming language',
      'A database management system',
      'A template engine'
    ],
    correctAnswer: 'A web application framework for Node.js'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you create an Express application?',
    options: [
      'const express = require("express"); const app = express();',
      'const app = new Express();',
      'const app = Express.create();',
      'const app = require("express").create();'
    ],
    correctAnswer: 'const express = require("express"); const app = express();'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you start an Express server?',
    options: [
      'app.listen(port, callback);',
      'app.start(port, callback);',
      'app.run(port, callback);',
      'app.serve(port, callback);'
    ],
    correctAnswer: 'app.listen(port, callback);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you define a route for GET requests?',
    options: [
      'app.get(path, handler);',
      'app.route(path).get(handler);',
      'app.GET(path, handler);',
      'Both A and B'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you define a route for POST requests?',
    options: [
      'app.post(path, handler);',
      'app.route(path).post(handler);',
      'app.POST(path, handler);',
      'Both A and B'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you access route parameters?',
    options: [
      'req.params',
      'req.query',
      'req.body',
      'req.param'
    ],
    correctAnswer: 'req.params'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you access query string parameters?',
    options: [
      'req.params',
      'req.query',
      'req.body',
      'req.param'
    ],
    correctAnswer: 'req.query'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you access the request body?',
    options: [
      'req.params',
      'req.query',
      'req.body',
      'req.param'
    ],
    correctAnswer: 'req.body'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'Which middleware is needed to parse JSON request bodies?',
    options: [
      'express.json()',
      'bodyParser.json()',
      'express.text()',
      'Both A and B'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'Which middleware is needed to parse URL-encoded request bodies?',
    options: [
      'express.urlencoded()',
      'bodyParser.urlencoded()',
      'express.text()',
      'Both A and B'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you serve static files in Express?',
    options: [
      'express.static(root)',
      'app.static(root)',
      'express.files(root)',
      'app.files(root)'
    ],
    correctAnswer: 'express.static(root)'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you set the port for an Express application?',
    options: [
      'app.set("port", port);',
      'app.port = port;',
      'app.listen(port);',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you send a response in Express?',
    options: [
      'res.send(data);',
      'res.json(data);',
      'res.end(data);',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you set response headers?',
    options: [
      'res.set(field, value);',
      'res.header(field, value);',
      'res.setHeader(field, value);',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you set the response status code?',
    options: [
      'res.status(code);',
      'res.code = code;',
      'res.statusCode = code;',
      'All of the above'
    ],
    correctAnswer: 'res.status(code);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you redirect a request?',
    options: [
      'res.redirect([status,] path);',
      'res.forward(path);',
      'res.go(path);',
      'res.route(path);'
    ],
    correctAnswer: 'res.redirect([status,] path);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you handle 404 errors in Express?',
    options: [
      'Add a middleware at the end of all routes',
      'Express handles 404s automatically',
      'Use app.error(404)',
      'Use app.catch(404)'
    ],
    correctAnswer: 'Add a middleware at the end of all routes'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you handle errors in Express?',
    options: [
      'Middleware with 4 parameters: (err, req, res, next)',
      'app.error(handler)',
      'try/catch blocks',
      'All of the above'
    ],
    correctAnswer: 'Middleware with 4 parameters: (err, req, res, next)'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you chain route handlers for a path?',
    options: [
      'app.route(path).get(handler).post(handler);',
      'app.get(path, handler1, handler2);',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you use middleware in Express?',
    options: [
      'app.use(middleware);',
      'app.add(middleware);',
      'app.middleware(middleware);',
      'app.attach(middleware);'
    ],
    correctAnswer: 'app.use(middleware);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you mount a router at a specific path?',
    options: [
      'app.use(path, router);',
      'app.route(path, router);',
      'app.mount(path, router);',
      'app.attach(path, router);'
    ],
    correctAnswer: 'app.use(path, router);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you create an Express router?',
    options: [
      'express.Router()',
      'express.Route()',
      'express.createRouter()',
      'express.newRouter()'
    ],
    correctAnswer: 'express.Router()'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you set the view engine in Express?',
    options: [
      'app.set("view engine", engine);',
      'app.engine = engine;',
      'app.viewEngine = engine;',
      'app.useViewEngine(engine);'
    ],
    correctAnswer: 'app.set("view engine", engine);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you render a view in Express?',
    options: [
      'res.render(view [, locals]);',
      'res.view(view [, locals]);',
      'res.sendView(view [, locals]);',
      'res.show(view [, locals]);'
    ],
    correctAnswer: 'res.render(view [, locals]);'
  },
  {
    topic: 'Express',
    difficulty: 'easy',
    question: 'How do you set the views directory in Express?',
    options: [
      'app.set("views", path);',
      'app.views = path;',
      'app.viewsDir = path;',
      'app.useViews(path);'
    ],
    correctAnswer: 'app.set("views", path);'
  },

  // Express Medium
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you define a route parameter in Express?',
    options: [
      '/users/:id',
      '/users/{id}',
      '/users/[id]',
      '/users/<id>'
    ],
    correctAnswer: '/users/:id'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'What is middleware in Express?',
    options: [
      'Functions that have access to the request and response objects',
      'Software that sits between the OS and applications',
      'Database middleware',
      'All of the above'
    ],
    correctAnswer: 'Functions that have access to the request and response objects'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you create custom middleware in Express?',
    options: [
      'app.use(function(req, res, next) { ... });',
      'app.middleware(function(req, res, next) { ... });',
      'app.addMiddleware(function(req, res, next) { ... });',
      'app.createMiddleware(function(req, res, next) { ... });'
    ],
    correctAnswer: 'app.use(function(req, res, next) { ... });'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you handle CORS in Express?',
    options: [
      'Use the cors middleware',
      'Manually set Access-Control-Allow-* headers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement rate limiting in Express?',
    options: [
      'Use the express-rate-limit middleware',
      'Implement custom rate limiting logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you handle file uploads in Express?',
    options: [
      'Use the multer middleware',
      'Use the express-fileupload middleware',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement authentication in Express?',
    options: [
      'Use the passport middleware',
      'Implement custom authentication logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement sessions in Express?',
    options: [
      'Use the express-session middleware',
      'Use the cookie-session middleware',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement logging in Express?',
    options: [
      'Use the morgan middleware',
      'Use the winston middleware',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement compression in Express?',
    options: [
      'Use the compression middleware',
      'Implement custom compression logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement HTTPS in Express?',
    options: [
      'Use the https module to create a server',
      'Use a reverse proxy like Nginx',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement WebSockets with Express?',
    options: [
      'Use the ws library',
      'Use the socket.io library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement API versioning in Express?',
    options: [
      'By using different routes (/v1/users, /v2/users)',
      'By using custom headers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement request validation in Express?',
    options: [
      'Use the express-validator middleware',
      'Implement custom validation logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement caching in Express?',
    options: [
      'Use the apicache middleware',
      'Implement custom caching logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement database connections in Express?',
    options: [
      'Use connection pooling',
      'Implement custom connection logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement environment variables in Express?',
    options: [
      'Use the dotenv package',
      'Use process.env directly',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement testing for Express applications?',
    options: [
      'Use the supertest library',
      'Use the jest testing framework',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement error handling in Express?',
    options: [
      'Use error-handling middleware',
      'Use try/catch blocks',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement request timeouts in Express?',
    options: [
      'Use the connect-timeout middleware',
      'Implement custom timeout logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement response caching in Express?',
    options: [
      'Use the apicache middleware',
      'Implement custom caching logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement request throttling in Express?',
    options: [
      'Use the express-rate-limit middleware',
      'Implement custom throttling logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement response compression in Express?',
    options: [
      'Use the compression middleware',
      'Implement custom compression logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement CSRF protection in Express?',
    options: [
      'Use the csurf middleware',
      'Implement custom CSRF protection',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement content security policy in Express?',
    options: [
      'Use the helmet middleware',
      'Implement custom CSP headers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'medium',
    question: 'How do you implement request/response logging in Express?',
    options: [
      'Use the morgan middleware',
      'Implement custom logging logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Express Hard
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How does Express middleware execution order work?',
    options: [
      'In the order they are defined with app.use()',
      'In reverse order of definition',
      'Randomly',
      'Based on priority values'
    ],
    correctAnswer: 'In the order they are defined with app.use()'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'What is the purpose of the next() function in Express middleware?',
    options: [
      'To pass control to the next middleware function',
      'To end the request-response cycle',
      'To skip to the route handler',
      'To jump to error handling'
    ],
    correctAnswer: 'To pass control to the next middleware function'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement custom error handling middleware in Express?',
    options: [
      'By defining middleware with 4 parameters: (err, req, res, next)',
      'By using app.errorHandler()',
      'By extending the Error class',
      'By using try/catch blocks'
    ],
    correctAnswer: 'By defining middleware with 4 parameters: (err, req, res, next)'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement route-specific middleware in Express?',
    options: [
      'By passing middleware as additional arguments to route methods',
      'By using app.routeMiddleware()',
      'By extending the Router class',
      'By using route decorators'
    ],
    correctAnswer: 'By passing middleware as additional arguments to route methods'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement middleware that only runs for certain routes in Express?',
    options: [
      'By mounting the middleware at a specific path with app.use()',
      'By using route-specific middleware',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement async error handling in Express?',
    options: [
      'By wrapping async handlers with a function that catches errors',
      'By using express-async-errors',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement a custom view engine in Express?',
    options: [
      'By using app.engine(ext, callback)',
      'By implementing the __express method',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement sub-applications in Express?',
    options: [
      'By mounting them with app.use()',
      'By using express.Router()',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement WebSocket upgrades with Express?',
    options: [
      'By handling the upgrade event on the HTTP server',
      'By using express-ws',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement server-sent events with Express?',
    options: [
      'By setting appropriate headers and keeping the connection open',
      'By using the eventsource library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement GraphQL with Express?',
    options: [
      'By using express-graphql',
      'By using apollo-server-express',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement gRPC with Express?',
    options: [
      'By running gRPC alongside Express',
      'By using grpc-express',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement microservices with Express?',
    options: [
      'By creating separate Express applications',
      'By using express-gateway',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement API documentation with Express?',
    options: [
      'By using swagger-jsdoc',
      'By using apidoc',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement request/response transformation in Express?',
    options: [
      'By using middleware to modify req/res objects',
      'By implementing custom transformation logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement circuit breakers in Express?',
    options: [
      'By using opossum',
      'By implementing custom circuit breaking logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement health checks in Express?',
    options: [
      'By creating a /health endpoint',
      'By using express-healthcheck',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement distributed tracing in Express?',
    options: [
      'By using jaeger-client',
      'By using zipkin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement A/B testing in Express?',
    options: [
      'By using middleware to assign variants',
      'By implementing custom routing logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement feature flags in Express?',
    options: [
      'By using unleash-client',
      'By implementing custom flag logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement canary deployments with Express?',
    options: [
      'By using middleware to route traffic',
      'By implementing custom deployment logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement blue-green deployments with Express?',
    options: [
      'By using a load balancer',
      'By implementing custom deployment logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement request validation at the API gateway level with Express?',
    options: [
      'By using express-gateway',
      'By implementing custom validation logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement JWT authentication at the API gateway level with Express?',
    options: [
      'By using express-jwt',
      'By implementing custom authentication logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Express',
    difficulty: 'hard',
    question: 'How do you implement rate limiting at the API gateway level with Express?',
    options: [
      'By using express-rate-limit',
      'By implementing custom rate limiting logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Express Advanced
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the middleware stack internally?',
    options: [
      'As a layered system where each layer can handle or pass on the request',
      'As a linear sequence of functions',
      'As a tree structure',
      'As a graph of interconnected handlers'
    ],
    correctAnswer: 'As a layered system where each layer can handle or pass on the request'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle route matching internally?',
    options: [
      'By using a routing table that matches paths in order',
      'By using a trie data structure for efficient matching',
      'By using regular expressions for all routes',
      'By using a hash map of all possible routes'
    ],
    correctAnswer: 'By using a routing table that matches paths in order'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle template rendering internally?',
    options: [
      'By delegating to the configured view engine',
      'By using its own built-in templating',
      'By converting templates to JavaScript functions',
      'By preprocessing templates at startup'
    ],
    correctAnswer: 'By delegating to the configured view engine'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle error propagation in middleware?',
    options: [
      'By skipping to the next error-handling middleware when an error occurs',
      'By stopping all middleware execution',
      'By logging errors and continuing',
      'By converting errors to HTTP responses automatically'
    ],
    correctAnswer: 'By skipping to the next error-handling middleware when an error occurs'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle async errors in middleware?',
    options: [
      'They need to be caught and passed to next() manually',
      'They are caught automatically by Express',
      'They are converted to 500 errors',
      'They stop the application'
    ],
    correctAnswer: 'They need to be caught and passed to next() manually'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the req and res objects across middleware?',
    options: [
      'The same objects are passed through all middleware',
      'New objects are created for each middleware',
      'Objects are cloned for each middleware',
      'Objects are proxied through each middleware'
    ],
    correctAnswer: 'The same objects are passed through all middleware'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the "trust proxy" setting?',
    options: [
      'It determines how X-Forwarded-* headers are interpreted',
      'It enables HTTPS automatically',
      'It trusts all proxy headers by default',
      'It disables proxy headers'
    ],
    correctAnswer: 'It determines how X-Forwarded-* headers are interpreted'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the "x-powered-by" header?',
    options: [
      'It can be disabled with app.disable("x-powered-by")',
      'It always shows "Express"',
      'It cannot be changed',
      'It shows the Express version'
    ],
    correctAnswer: 'It can be disabled with app.disable("x-powered-by")'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the "etag" setting?',
    options: [
      'It controls how ETags are generated for responses',
      'It enables ETags by default',
      'It cannot be configured',
      'It only works with static files'
    ],
    correctAnswer: 'It controls how ETags are generated for responses'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the "query parser" setting?',
    options: [
      'It controls how URL query strings are parsed',
      'It enables query parsing by default',
      'It cannot be configured',
      'It only works with extended syntax'
    ],
    correctAnswer: 'It controls how URL query strings are parsed'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the "subdomain offset" setting?',
    options: [
      'It controls how subdomains are determined from the host',
      'It enables subdomain routing by default',
      'It cannot be configured',
      'It only works with wildcard domains'
    ],
    correctAnswer: 'It controls how subdomains are determined from the host'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle route path matching with regular expressions?',
    options: [
      'By converting route paths to regular expressions internally',
      'By requiring explicit regex patterns',
      'By not supporting regex in paths',
      'By using a separate regex router'
    ],
    correctAnswer: 'By converting route paths to regular expressions internally'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the app.locals and res.locals objects?',
    options: [
      'app.locals are application-wide, res.locals are request-specific',
      'They are the same thing',
      'res.locals are application-wide, app.locals are request-specific',
      'They are not used in Express'
    ],
    correctAnswer: 'app.locals are application-wide, res.locals are request-specific'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the router.param() method?',
    options: [
      'It adds callback triggers to route parameters',
      'It defines new parameters for routes',
      'It validates route parameters',
      'It converts route parameters'
    ],
    correctAnswer: 'It adds callback triggers to route parameters'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the app.all() method?',
    options: [
      'It matches all HTTP methods for a path',
      'It matches only GET and POST methods',
      'It matches only idempotent methods',
      'It matches only safe methods'
    ],
    correctAnswer: 'It matches all HTTP methods for a path'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the response.format() method?',
    options: [
      'It performs content negotiation based on the Accept header',
      'It formats the response body',
      'It converts the response to different formats',
      'It sets the Content-Type header'
    ],
    correctAnswer: 'It performs content negotiation based on the Accept header'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the response.download() method?',
    options: [
      'It prompts the client to download a file',
      'It downloads a file from a remote server',
      'It converts the response to a download',
      'It streams a file to the client'
    ],
    correctAnswer: 'It prompts the client to download a file'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the response.attachment() method?',
    options: [
      'It sets the Content-Disposition header',
      'It attaches a file to the response',
      'It converts the response to an attachment',
      'It streams a file as an attachment'
    ],
    correctAnswer: 'It sets the Content-Disposition header'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the response.append() method?',
    options: [
      'It appends additional headers to the response',
      'It appends content to the response body',
      'It adds middleware to the response chain',
      'It appends data to a file'
    ],
    correctAnswer: 'It appends additional headers to the response'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.accepts() method?',
    options: [
      'It performs content negotiation based on the Accept header',
      'It checks if a request is acceptable',
      'It validates the request format',
      'It sets the Accept header'
    ],
    correctAnswer: 'It performs content negotiation based on the Accept header'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.is() method?',
    options: [
      'It checks the Content-Type header',
      'It validates the request type',
      'It determines if the request is secure',
      'It checks the request method'
    ],
    correctAnswer: 'It checks the Content-Type header'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.range() method?',
    options: [
      'It parses the Range header',
      'It checks if a value is in range',
      'It validates the request range',
      'It sets the Range header'
    ],
    correctAnswer: 'It parses the Range header'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.ip property?',
    options: [
      'It gets the remote IP address, considering trust proxy',
      'It always gets the direct remote IP',
      'It gets the first proxy IP',
      'It gets the local IP'
    ],
    correctAnswer: 'It gets the remote IP address, considering trust proxy'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.fresh property?',
    options: [
      'It checks if the request is fresh based on cache headers',
      'It checks if the request is new',
      'It validates the request freshness',
      'It sets cache headers'
    ],
    correctAnswer: 'It checks if the request is fresh based on cache headers'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.stale property?',
    options: [
      'It is the inverse of request.fresh',
      'It checks if the request is old',
      'It validates the request staleness',
      'It sets cache headers'
    ],
    correctAnswer: 'It is the inverse of request.fresh'
  },
  {
    topic: 'Express',
    difficulty: 'advanced',
    question: 'How does Express handle the request.secure property?',
    options: [
      'It checks if the connection is HTTPS, considering trust proxy',
      'It always checks the direct connection',
      'It validates the request security',
      'It enables HTTPS'
    ],
    correctAnswer: 'It checks if the connection is HTTPS, considering trust proxy'
  },

  // =============== MongoDB Questions ===============
  // MongoDB Easy
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'MongoDB is a ____ database',
    options: [
      'relational',
      'NoSQL',
      'graph-based',
      'key-value store'
    ],
    correctAnswer: 'NoSQL'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command shows all databases in MongoDB?',
    options: [
      'show dbs',
      'show databases',
      'db.showDatabases()',
      'All of the above'
    ],
    correctAnswer: 'show dbs'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command shows the current database in MongoDB?',
    options: [
      'db',
      'show current',
      'db.current()',
      'current db'
    ],
    correctAnswer: 'db'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command switches to a database in MongoDB?',
    options: [
      'use <dbname>',
      'switch <dbname>',
      'db.use(<dbname>)',
      'change <dbname>'
    ],
    correctAnswer: 'use <dbname>'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command shows collections in the current database?',
    options: [
      'show collections',
      'show tables',
      'db.getCollectionNames()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command creates a new collection in MongoDB?',
    options: [
      'db.createCollection("name")',
      'db.addCollection("name")',
      'db.newCollection("name")',
      'db.collection("name").create()'
    ],
    correctAnswer: 'db.createCollection("name")'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command inserts a document into a collection?',
    options: [
      'db.collection.insertOne()',
      'db.collection.insert()',
      'db.collection.add()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command finds documents in a collection?',
    options: [
      'db.collection.find()',
      'db.collection.search()',
      'db.collection.query()',
      'db.collection.get()'
    ],
    correctAnswer: 'db.collection.find()'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command updates a document in a collection?',
    options: [
      'db.collection.updateOne()',
      'db.collection.update()',
      'db.collection.modify()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command deletes a document from a collection?',
    options: [
      'db.collection.deleteOne()',
      'db.collection.remove()',
      'db.collection.drop()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command counts documents in a collection?',
    options: [
      'db.collection.count()',
      'db.collection.countDocuments()',
      'db.collection.size()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command limits the number of documents returned?',
    options: [
      'db.collection.find().limit(n)',
      'db.collection.limit(n)',
      'db.collection.find(n)',
      'db.collection.top(n)'
    ],
    correctAnswer: 'db.collection.find().limit(n)'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command skips documents in the result set?',
    options: [
      'db.collection.find().skip(n)',
      'db.collection.skip(n)',
      'db.collection.offset(n)',
      'db.collection.jump(n)'
    ],
    correctAnswer: 'db.collection.find().skip(n)'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command sorts documents in the result set?',
    options: [
      'db.collection.find().sort({field: 1})',
      'db.collection.sort({field: 1})',
      'db.collection.order({field: 1})',
      'db.collection.arrange({field: 1})'
    ],
    correctAnswer: 'db.collection.find().sort({field: 1})'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command projects only specific fields in the result set?',
    options: [
      'db.collection.find({}, {field: 1})',
      'db.collection.project({field: 1})',
      'db.collection.select({field: 1})',
      'db.collection.fields({field: 1})'
    ],
    correctAnswer: 'db.collection.find({}, {field: 1})'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command creates an index on a field?',
    options: [
      'db.collection.createIndex({field: 1})',
      'db.collection.addIndex({field: 1})',
      'db.collection.makeIndex({field: 1})',
      'db.collection.index({field: 1})'
    ],
    correctAnswer: 'db.collection.createIndex({field: 1})'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command shows indexes on a collection?',
    options: [
      'db.collection.getIndexes()',
      'db.collection.showIndexes()',
      'db.collection.listIndexes()',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command drops an index?',
    options: [
      'db.collection.dropIndex("index")',
      'db.collection.removeIndex("index")',
      'db.collection.deleteIndex("index")',
      'db.collection.destroyIndex("index")'
    ],
    correctAnswer: 'db.collection.dropIndex("index")'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command performs an aggregation?',
    options: [
      'db.collection.aggregate([...])',
      'db.collection.group([...])',
      'db.collection.pipeline([...])',
      'db.collection.process([...])'
    ],
    correctAnswer: 'db.collection.aggregate([...])'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which aggregation stage filters documents?',
    options: [
      '$match',
      '$filter',
      '$where',
      '$find'
    ],
    correctAnswer: '$match'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which aggregation stage groups documents?',
    options: [
      '$group',
      '$aggregate',
      '$collect',
      '$bundle'
    ],
    correctAnswer: '$group'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which aggregation stage sorts documents?',
    options: [
      '$sort',
      '$order',
      '$arrange',
      '$sequence'
    ],
    correctAnswer: '$sort'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which aggregation stage limits documents?',
    options: [
      '$limit',
      '$top',
      '$take',
      '$restrict'
    ],
    correctAnswer: '$limit'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which aggregation stage skips documents?',
    options: [
      '$skip',
      '$offset',
      '$jump',
      '$pass'
    ],
    correctAnswer: '$skip'
  },
  {
    topic: 'MongoDB',
    difficulty: 'easy',
    question: 'Which command creates a user in MongoDB?',
    options: [
      'db.createUser()',
      'db.addUser()',
      'db.newUser()',
      'db.makeUser()'
    ],
    correctAnswer: 'db.createUser()'
  },

  // MongoDB Medium
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a MongoDB document?',
    options: [
      'A record in a collection, stored in BSON format',
      'A file in the database',
      'A table in the database',
      'A JSON string'
    ],
    correctAnswer: 'A record in a collection, stored in BSON format'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a MongoDB collection?',
    options: [
      'A group of documents',
      'A group of databases',
      'A group of indexes',
      'A group of fields'
    ],
    correctAnswer: 'A group of documents'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the _id field in MongoDB?',
    options: [
      'A unique identifier for a document',
      'An automatically generated index',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is sharding in MongoDB?',
    options: [
      'Splitting data across multiple machines',
      'Replicating data across multiple machines',
      'Backing up data',
      'Compressing data'
    ],
    correctAnswer: 'Splitting data across multiple machines'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is replication in MongoDB?',
    options: [
      'Maintaining multiple copies of data',
      'Splitting data across multiple machines',
      'Backing up data',
      'Compressing data'
    ],
    correctAnswer: 'Maintaining multiple copies of data'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a replica set in MongoDB?',
    options: [
      'A group of mongod instances that maintain the same data set',
      'A set of replicated collections',
      'A backup set',
      'A sharded cluster'
    ],
    correctAnswer: 'A group of mongod instances that maintain the same data set'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the primary node in a replica set?',
    options: [
      'The node that receives all write operations',
      'The first node in the set',
      'The master node',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a secondary node in a replica set?',
    options: [
      'A node that replicates the primary node\'s data',
      'A read-only node',
      'A backup node',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is an arbiter in a replica set?',
    options: [
      'A node that votes in elections but doesn\'t store data',
      'A node that resolves conflicts',
      'A backup node',
      'A read-only node'
    ],
    correctAnswer: 'A node that votes in elections but doesn\'t store data'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a mongos in MongoDB?',
    options: [
      'A router for sharded clusters',
      'A shell interface',
      'A monitoring tool',
      'A backup utility'
    ],
    correctAnswer: 'A router for sharded clusters'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a config server in MongoDB?',
    options: [
      'A server that stores metadata for sharded clusters',
      'A server that stores configuration',
      'A server that manages users',
      'A server that monitors performance'
    ],
    correctAnswer: 'A server that stores metadata for sharded clusters'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a chunk in MongoDB sharding?',
    options: [
      'A subset of sharded data',
      'A unit of storage',
      'A data block',
      'A partition'
    ],
    correctAnswer: 'A subset of sharded data'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a shard key in MongoDB?',
    options: [
      'A field used to distribute data across shards',
      'A unique identifier',
      'An encryption key',
      'A password'
    ],
    correctAnswer: 'A field used to distribute data across shards'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is hashed sharding in MongoDB?',
    options: [
      'Sharding based on a hash of the shard key',
      'Sharding based on ranges',
      'Sharding based on values',
      'Sharding based on indexes'
    ],
    correctAnswer: 'Sharding based on a hash of the shard key'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is range-based sharding in MongoDB?',
    options: [
      'Sharding based on ranges of the shard key',
      'Sharding based on hashes',
      'Sharding based on values',
      'Sharding based on indexes'
    ],
    correctAnswer: 'Sharding based on ranges of the shard key'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a zone in MongoDB sharding?',
    options: [
      'A range of shard key values',
      'A physical location',
      'A network segment',
      'A security area'
    ],
    correctAnswer: 'A range of shard key values'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a covered query in MongoDB?',
    options: [
      'A query that can be satisfied using an index alone',
      'A query that covers all fields',
      'A query that uses multiple indexes',
      'A query that scans the entire collection'
    ],
    correctAnswer: 'A query that can be satisfied using an index alone'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the explain() method in MongoDB?',
    options: [
      'A method that provides information on query execution',
      'A method that explains errors',
      'A method that documents queries',
      'A method that validates queries'
    ],
    correctAnswer: 'A method that provides information on query execution'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a sparse index in MongoDB?',
    options: [
      'An index that only contains entries for documents with the indexed field',
      'An index with gaps',
      'An incomplete index',
      'A partial index'
    ],
    correctAnswer: 'An index that only contains entries for documents with the indexed field'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a TTL index in MongoDB?',
    options: [
      'An index that automatically removes documents after a period',
      'A time-based index',
      'A temporary index',
      'A test index'
    ],
    correctAnswer: 'An index that automatically removes documents after a period'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a text index in MongoDB?',
    options: [
      'An index for text search',
      'An index for string fields',
      'An index for documentation',
      'An index for comments'
    ],
    correctAnswer: 'An index for text search'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is a geospatial index in MongoDB?',
    options: [
      'An index for location-based queries',
      'An index for geographical data',
      'An index for maps',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the $lookup aggregation stage in MongoDB?',
    options: [
      'A stage that performs a left outer join',
      'A stage that looks up references',
      'A stage that queries other collections',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the $graphLookup aggregation stage in MongoDB?',
    options: [
      'A stage that performs recursive searches',
      'A stage that traverses graphs',
      'A stage that looks up hierarchies',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the $facet aggregation stage in MongoDB?',
    options: [
      'A stage that processes multiple pipelines',
      'A stage that creates facets',
      'A stage that groups by multiple fields',
      'A stage that splits data'
    ],
    correctAnswer: 'A stage that processes multiple pipelines'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the $bucket aggregation stage in MongoDB?',
    options: [
      'A stage that groups by ranges',
      'A stage that creates buckets',
      'A stage that partitions data',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'medium',
    question: 'What is the $merge aggregation stage in MongoDB?',
    options: [
      'A stage that writes results to a collection',
      'A stage that merges pipelines',
      'A stage that combines results',
      'A stage that joins collections'
    ],
    correctAnswer: 'A stage that writes results to a collection'
  },

  // MongoDB Hard
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is the MongoDB oplog?',
    options: [
      'A log of all write operations for replication',
      'An operations log',
      'A change stream',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is the MongoDB journal?',
    options: [
      'A write-ahead log for crash recovery',
      'A transaction log',
      'An operations log',
      'A change log'
    ],
    correctAnswer: 'A write-ahead log for crash recovery'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s read concern?',
    options: [
      'A setting that determines which data is visible to reads',
      'A concern about read performance',
      'A read isolation level',
      'A read consistency level'
    ],
    correctAnswer: 'A setting that determines which data is visible to reads'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s write concern?',
    options: [
      'A setting that determines acknowledgment of write operations',
      'A concern about write performance',
      'A write isolation level',
      'A write consistency level'
    ],
    correctAnswer: 'A setting that determines acknowledgment of write operations'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s read preference?',
    options: [
      'A setting that determines which replica set members handle reads',
      'A preference for read performance',
      'A read routing setting',
      'A read balancing setting'
    ],
    correctAnswer: 'A setting that determines which replica set members handle reads'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s causal consistency?',
    options: [
      'A consistency model that preserves causal relationships',
      'A consistency level',
      'An isolation level',
      'A transaction model'
    ],
    correctAnswer: 'A consistency model that preserves causal relationships'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s change streams feature?',
    options: [
      'A way to watch for changes in real-time',
      'A stream of changes',
      'A notification system',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s transactions feature?',
    options: [
      'A way to perform multi-document ACID transactions',
      'A batch operation',
      'A multi-statement operation',
      'A bulk operation'
    ],
    correctAnswer: 'A way to perform multi-document ACID transactions'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s retryable writes feature?',
    options: [
      'Automatic retry of certain write operations',
      'A way to make writes more reliable',
      'A write recovery mechanism',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s retryable reads feature?',
    options: [
      'Automatic retry of certain read operations',
      'A way to make reads more reliable',
      'A read recovery mechanism',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s aggregation pipeline optimization?',
    options: [
      'Automatic optimization of aggregation pipelines',
      'A way to make aggregations faster',
      'A query planner for aggregations',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s collation feature?',
    options: [
      'Language-specific rules for string comparison',
      'A sorting mechanism',
      'A string processing feature',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s view feature?',
    options: [
      'A read-only aggregation pipeline on a collection',
      'A virtual collection',
      'A saved query',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $expr operator?',
    options: [
      'An operator that allows use of aggregation expressions in queries',
      'An expression operator',
      'A query operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $jsonSchema operator?',
    options: [
      'An operator for JSON schema validation',
      'A schema validation operator',
      'A document validator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $where operator?',
    options: [
      'An operator that allows JavaScript expressions in queries',
      'A conditional operator',
      'A JavaScript operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $mod operator?',
    options: [
      'An operator for modulo operations',
      'A mathematical operator',
      'A remainder operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $regex operator?',
    options: [
      'An operator for regular expression matching',
      'A pattern matching operator',
      'A string matching operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $text operator?',
    options: [
      'An operator for text search',
      'A full-text search operator',
      'A string search operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $geoWithin operator?',
    options: [
      'An operator for geospatial queries within a shape',
      'A geospatial operator',
      'A location operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $near operator?',
    options: [
      'An operator for geospatial queries near a point',
      'A proximity operator',
      'A distance operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $geoIntersects operator?',
    options: [
      'An operator for geospatial queries that intersect a shape',
      'A geospatial intersection operator',
      'A geometry operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $all operator?',
    options: [
      'An operator that matches arrays containing all specified elements',
      'An array operator',
      'A set operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $elemMatch operator?',
    options: [
      'An operator that matches documents containing array elements that match all criteria',
      'An array element operator',
      'A subdocument operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'hard',
    question: 'What is MongoDB\'s $size operator?',
    options: [
      'An operator that matches arrays of a specified size',
      'An array size operator',
      'A length operator',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },

  // MongoDB Advanced
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle horizontal scaling?',
    options: [
      'Through sharding',
      'Through replication',
      'Through partitioning',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle failover in a replica set?',
    options: [
      'Through automatic election of a new primary',
      'Through heartbeat mechanisms',
      'Through consensus protocols',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data consistency in a sharded cluster?',
    options: [
      'Through config servers and mongos routers',
      'Through distributed transactions',
      'Through eventual consistency',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle distributed transactions?',
    options: [
      'Through two-phase commit across shards',
      'Through atomic operations',
      'Through snapshot isolation',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data locality?',
    options: [
      'Through zone sharding',
      'Through tag-aware sharding',
      'Through geographic sharding',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle query routing in a sharded cluster?',
    options: [
      'Through mongos routers',
      'Through config servers',
      'Through shard primaries',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle chunk migration in a sharded cluster?',
    options: [
      'Through background processes',
      'Through balancing rounds',
      'Through data transfer protocols',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle index intersection?',
    options: [
      'By using multiple indexes to satisfy a query',
      'By combining index results',
      'By intersecting index bounds',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle covered queries?',
    options: [
      'By using only indexes to satisfy the query',
      'By avoiding collection scans',
      'By projecting only indexed fields',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle query planning?',
    options: [
      'By generating and caching query plans',
      'By evaluating multiple plans',
      'By using statistics and heuristics',
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle write conflicts in a sharded cluster?',
    options: [
      'Through timestamp ordering',
      'Through versioning',
      'Through conflict resolution protocols',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data compression?',
    options: [
      'Through snappy compression by default',
      'Through zlib compression optionally',
      'Through columnar compression',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle encryption at rest?',
    options: [
      'Through storage engine encryption',
      'Through filesystem encryption',
      'Through transparent data encryption',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle in-memory computing?',
    options: [
      'Through the in-memory storage engine',
      'Through RAM-based collections',
      'Through memory-mapped files',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle change data capture?',
    options: [
      'Through change streams',
      'Through the oplog',
      'Through triggers',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle time series data?',
    options: [
      'Through time series collections',
      'Through optimized storage for time-stamped data',
      'Through specialized aggregation operators',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle full-text search?',
    options: [
      'Through text indexes',
      'Through the $text operator',
      'Through integration with external search engines',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle graph processing?',
    options: [
      'Through the $graphLookup operator',
      'Through adjacency list pattern',
      'Through integration with graph databases',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle columnar processing?',
    options: [
      'Through columnar compression',
      'Through projection optimizations',
      'Through specialized storage formats',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle multi-document ACID transactions?',
    options: [
      'Through snapshot isolation',
      'Through two-phase commit',
      'Through distributed transaction protocols',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle schema validation?',
    options: [
      'Through JSON schema validation',
      'Through document validation rules',
      'Through schema enforcement',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data federation?',
    options: [
      'Through the $lookup operator',
      'Through MongoDB Atlas Data Lake',
      'Through external data sources',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data archiving?',
    options: [
      'Through TTL indexes',
      'Through capped collections',
      'Through tiered storage',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data versioning?',
    options: [
      'Through document version fields',
      'Through the oplog',
      'Through change streams',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data lineage?',
    options: [
      'Through change streams',
      'Through the oplog',
      'Through metadata tracking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data masking?',
    options: [
      'Through field-level redaction',
      'Through aggregation pipelines',
      'Through views',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'MongoDB',
    difficulty: 'advanced',
    question: 'How does MongoDB handle data tokenization?',
    options: [
      'Through client-side field-level encryption',
      'Through field-level encryption',
      'Through encryption at rest',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
},
  // =============== TypeScript Questions ===============
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'TypeScript is a superset of which language?',
    options: ['JavaScript', 'Java', 'Python', 'C#'],
    correctAnswer: 'JavaScript'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What command compiles a TypeScript file?',
    options: ['tsc', 'compile', 'typescript', 'node'],
    correctAnswer: 'tsc'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which keyword is used to declare a variable with a fixed type in TypeScript?',
    options: ['var', 'let', 'const', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What file extension is used for TypeScript files?',
    options: ['.js', '.ts', '.txt', '.script'],
    correctAnswer: '.ts'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which of these is NOT a TypeScript basic type?',
    options: ['number', 'string', 'boolean', 'array'],
    correctAnswer: 'array'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you define an array of numbers in TypeScript?',
    options: [
      'let arr: Array<number>',
      'let arr: number[]',
      'Both A and B',
      'let arr: [number]'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the purpose of the "any" type?',
    options: [
      'To allow any type',
      'To represent an unknown type',
      'To disable type checking',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which operator is used for type assertion in TypeScript?',
    options: ['as', ':', '=>', '=='],
    correctAnswer: 'as'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What does the "void" type represent?',
    options: [
      'No type at all',
      'The absence of a value',
      'A function that returns nothing',
      'All of the above'
    ],
    correctAnswer: 'A function that returns nothing'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you define an optional property in an interface?',
    options: [
      'property?: type',
      'property: type?',
      'optional property: type',
      '?property: type'
    ],
    correctAnswer: 'property?: type'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the correct way to define a function type?',
    options: [
      '(param: type) => returnType',
      'function(param: type): returnType',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: '(param: type) => returnType'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which TypeScript feature helps catch errors during compilation?',
    options: [
      'Static typing',
      'Dynamic typing',
      'Type inference',
      'Both A and C'
    ],
    correctAnswer: 'Both A and C'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you install TypeScript globally?',
    options: [
      'npm install -g typescript',
      'npm install typescript',
      'yarn add typescript',
      'install typescript'
    ],
    correctAnswer: 'npm install -g typescript'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the default value of a boolean variable in TypeScript?',
    options: ['true', 'false', 'undefined', 'null'],
    correctAnswer: 'undefined'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you define a tuple in TypeScript?',
    options: [
      '[type1, type2]',
      'Array<type1 | type2>',
      'Tuple<type1, type2>',
      '(type1, type2)'
    ],
    correctAnswer: '[type1, type2]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the purpose of the "never" type?',
    options: [
      'For functions that never return',
      'For variables that should never occur',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you define an enum in TypeScript?',
    options: [
      'enum Name { key = value }',
      'enum Name { key }',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the correct way to import a module in TypeScript?',
    options: [
      'import * as name from "module"',
      'import { name } from "module"',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which TypeScript compiler option generates declaration files?',
    options: ['--declaration', '--d', '--types', '--def'],
    correctAnswer: '--declaration'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What does the "readonly" keyword do?',
    options: [
      'Makes a property immutable',
      'Prevents property assignment',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you define a type alias in TypeScript?',
    options: [
      'type Name = ...',
      'interface Name { ... }',
      'class Name { ... }',
      'alias Name = ...'
    ],
    correctAnswer: 'type Name = ...'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'Which symbol is used for type intersection?',
    options: ['&', '|', '+', '&&'],
    correctAnswer: '&'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What does the "keyof" operator do?',
    options: [
      'Gets property names of a type',
      'Creates a key-value pair',
      'Validates object keys',
      'None of the above'
    ],
    correctAnswer: 'Gets property names of a type'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'How do you specify multiple types for a variable?',
    options: [
      'type1 | type2',
      'type1 & type2',
      'type1, type2',
      '[type1, type2]'
    ],
    correctAnswer: 'type1 | type2'
  },
  {
    topic: 'TypeScript',
    difficulty: 'easy',
    question: 'What is the purpose of the "as const" assertion?',
    options: [
      'To make an object readonly',
      'To narrow literal types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // TypeScript Medium (26-50)
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you define a custom type in TypeScript?',
    options: [
      'using the "type" keyword',
      'using the "interface" keyword',
      'both "type" and "interface"',
      'using the "class" keyword'
    ],
    correctAnswer: 'both "type" and "interface"'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the difference between "interface" and "type" in TypeScript?',
    options: [
      'Interfaces can be extended, types cannot',
      'Types can use union/intersection, interfaces cannot',
      'Interfaces can be merged, types cannot',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you make all properties of a type optional?',
    options: [
      'Partial<Type>',
      'Optional<Type>',
      'Type?',
      'MakeOptional<Type>'
    ],
    correctAnswer: 'Partial<Type>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the purpose of generics in TypeScript?',
    options: [
      'To create reusable components',
      'To work with multiple types',
      'To maintain type safety',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you define a generic function?',
    options: [
      'function name<T>(arg: T): T',
      'function name(arg: generic): generic',
      'generic function name<T>(arg: T)',
      'None of the above'
    ],
    correctAnswer: 'function name<T>(arg: T): T'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is a decorator in TypeScript?',
    options: [
      'A special declaration',
      'A design pattern',
      'A way to add metadata',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you make a class property private in TypeScript?',
    options: [
      'private property: type',
      '#property: type',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'private property: type'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the "unknown" type?',
    options: [
      'A type-safe counterpart of "any"',
      'A type that must be checked before use',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you extract the return type of a function?',
    options: [
      'ReturnType<typeof function>',
      'function.returnType',
      'typeof function.return',
      'None of the above'
    ],
    correctAnswer: 'ReturnType<typeof function>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is a namespace in TypeScript?',
    options: [
      'A way to organize code',
      'A named container',
      'Similar to modules',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you create type guards?',
    options: [
      'Using typeof/instanceof checks',
      'Using user-defined functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the "in" operator used for in TypeScript?',
    options: [
      'To check property existence',
      'To narrow union types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you make a property required in TypeScript?',
    options: [
      'Required<Type>',
      'NotOptional<Type>',
      'Type!',
      'MustHave<Type>'
    ],
    correctAnswer: 'Required<Type>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the "satisfies" operator used for?',
    options: [
      'To validate types without changing inference',
      'To satisfy type constraints',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'To validate types without changing inference'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you create a mapped type?',
    options: [
      '{ [K in keyof T]: ... }',
      'Map<T, U>',
      'T.map(...)',
      'None of the above'
    ],
    correctAnswer: '{ [K in keyof T]: ... }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the "as" keyword used for?',
    options: [
      'Type assertions',
      'Type casting',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you exclude properties from a type?',
    options: [
      'Omit<Type, Keys>',
      'Exclude<Type, Keys>',
      'Remove<Type, Keys>',
      'Delete<Type, Keys>'
    ],
    correctAnswer: 'Omit<Type, Keys>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the difference between "extends" and "implements"?',
    options: [
      'extends is for inheritance, implements is for interfaces',
      'extends can add behavior, implements enforces a contract',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you create a utility type that makes all properties nullable?',
    options: [
      'type Nullable<T> = { [P in keyof T]: T[P] | null }',
      'type Nullable<T> = T | null',
      'Nullable<T>',
      'None of the above'
    ],
    correctAnswer: 'type Nullable<T> = { [P in keyof T]: T[P] | null }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the purpose of "declare" keyword?',
    options: [
      'For ambient declarations',
      'To tell TypeScript something exists',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you create a type from an object\'s values?',
    options: [
      'type Values = typeof obj[keyof typeof obj]',
      'type Values = obj.values()',
      'type Values = ValueOf<obj>',
      'None of the above'
    ],
    correctAnswer: 'type Values = typeof obj[keyof typeof obj]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What is the "non-null assertion operator"?',
    options: ['!', '?', '??', '?:'],
    correctAnswer: '!'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you extract the parameter types of a function?',
    options: [
      'Parameters<typeof function>',
      'function.parameters',
      'typeof function.parameters',
      'None of the above'
    ],
    correctAnswer: 'Parameters<typeof function>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'What does "strictNullChecks" do?',
    options: [
      'Makes null/undefined explicit in the type system',
      'Prevents accidental null/undefined usage',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'medium',
    question: 'How do you create a recursive type?',
    options: [
      'type Tree = { value: number; children: Tree[] }',
      'type Tree = Recursive<...>',
      'recursive type Tree = ...',
      'None of the above'
    ],
    correctAnswer: 'type Tree = { value: number; children: Tree[] }'
  },

  // TypeScript Hard (51-75)
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you implement a type-safe curry function?',
    options: [
      'Using recursive conditional types',
      'Using variadic tuple types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is the purpose of "template literal types"?',
    options: [
      'To create string literal types',
      'To combine strings in the type system',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that removes methods from a class?',
    options: [
      'type Properties<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]',
      'OmitMethods<T>',
      'FilterMethods<T>',
      'None of the above'
    ],
    correctAnswer: 'type Properties<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "conditional type inference"?',
    options: [
      'Using "infer" in conditional types',
      'Extracting types from other types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a deep readonly type?',
    options: [
      'type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }',
      'DeepReadonly<T> utility',
      'readonly deep T',
      'None of the above'
    ],
    correctAnswer: 'type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What are "variadic tuple types"?',
    options: [
      'Tuple types with spread elements',
      'Generic spreads in tuple types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that excludes null and undefined?',
    options: [
      'type NoEmpty<T> = T extends null | undefined ? never : T',
      'NonNullable<T>',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "type branding"?',
    options: [
      'A technique to make types unique',
      'Adding a phantom property to types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you implement recursive type constraints?',
    options: [
      'Using recursive conditional types',
      'With a base case in the type definition',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is the "awaited" type used for?',
    options: [
      'To unwrap Promise types',
      'For recursive unwrapping of Promises',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type-safe dictionary with enum keys?',
    options: [
      'type EnumDictionary<T extends string | number, U> = { [K in T]?: U }',
      'Record<Enum, Type>',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'type EnumDictionary<T extends string | number, U> = { [K in T]?: U }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is the purpose of "assertion signatures"?',
    options: [
      'For user-defined type guards',
      'To assert types in functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that extracts all function types from an object?',
    options: [
      'type FunctionProperties<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]',
      'FilterFunctions<T>',
      'ExtractFunctions<T>',
      'None of the above'
    ],
    correctAnswer: 'type FunctionProperties<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "control flow analysis" in TypeScript?',
    options: [
      'How TypeScript narrows types',
      'Type inference based on code paths',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that makes all properties mutable?',
    options: [
      'type Mutable<T> = { -readonly [P in keyof T]: T[P] }',
      'Mutable<T> utility',
      'readonly remove T',
      'None of the above'
    ],
    correctAnswer: 'type Mutable<T> = { -readonly [P in keyof T]: T[P] }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "declaration merging"?',
    options: [
      'When multiple declarations contribute to a single type',
      'Merging interfaces with the same name',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that extracts the constructor parameters?',
    options: [
      'ConstructorParameters<typeof Class>',
      'Class.constructorParameters',
      'Parameters<Class>',
      'None of the above'
    ],
    correctAnswer: 'ConstructorParameters<typeof Class>'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "mapped type modifiers"?',
    options: [
      '+ and - operators in mapped types',
      'Adding/removing readonly or optional',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that requires at least one property?',
    options: [
      'type AtLeastOne<T> = { [K in keyof T]: Required<Pick<T, K>> & Partial<T> }[keyof T]',
      'RequireAtLeastOne<T>',
      'PartialButOne<T>',
      'None of the above'
    ],
    correctAnswer: 'type AtLeastOne<T> = { [K in keyof T]: Required<Pick<T, K>> & Partial<T> }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "distributive conditional types"?',
    options: [
      'When conditionals distribute over union types',
      'Conditional types applied to each union member',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that recursively makes all properties optional?',
    options: [
      'type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }',
      'DeepPartial<T> utility',
      'partial deep T',
      'None of the above'
    ],
    correctAnswer: 'type DeepPartial<T> = { [P in keyof T]?: DeepPartial<T[P]> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is the "override" keyword for?',
    options: [
      'To explicitly override inherited methods',
      'For safer inheritance',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that extracts all optional properties?',
    options: [
      'type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]',
      'ExtractOptional<T>',
      'OptionalProperties<T>',
      'None of the above'
    ],
    correctAnswer: 'type OptionalKeys<T> = { [K in keyof T]-?: {} extends Pick<T, K> ? K : never }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'What is "intrinsic string manipulation types"?',
    options: [
      'Uppercase, Lowercase, Capitalize, Uncapitalize',
      'Built-in string type utilities',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'hard',
    question: 'How do you create a type that requires exactly one property?',
    options: [
      'type ExactlyOne<T> = { [K in keyof T]: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]',
      'RequireExactlyOne<T>',
      'OnlyOne<T>',
      'None of the above'
    ],
    correctAnswer: 'type ExactlyOne<T> = { [K in keyof T]: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, never>> }[keyof T]'
  },

  // TypeScript Advanced (76-100)
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that recursively transforms all Date objects to strings?',
    options: [
      'type DateToString<T> = { [K in keyof T]: T[K] extends Date ? string : DateToString<T[K]> }',
      'DeepDateToString<T>',
      'TransformDates<T>',
      'None of the above'
    ],
    correctAnswer: 'type DateToString<T> = { [K in keyof T]: T[K] extends Date ? string : DateToString<T[K]> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that validates a string is a valid CSS hex color?',
    options: [
      'type HexColor = `#${string}` & { readonly __brand: unique symbol }',
      'type HexColor = string & { pattern: /^#[0-9A-F]{6}$/i }',
      'Both A and B approaches could work',
      'Not possible in TypeScript'
    ],
    correctAnswer: 'Both A and B approaches could work'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type-safe event emitter with listener type inference?',
    options: [
      'Using mapped types and conditional types',
      'With a generic interface and event map',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that infers the return type of all methods in a class?',
    options: [
      'type ReturnTypes<T> = { [K in keyof T]: T[K] extends (...args: any) => infer R ? R : never }',
      'MethodReturns<T>',
      'InferReturns<T>',
      'None of the above'
    ],
    correctAnswer: 'type ReturnTypes<T> = { [K in keyof T]: T[K] extends (...args: any) => infer R ? R : never }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that converts a union to an intersection?',
    options: [
      'type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never',
      'UnionToIntersect<U>',
      'ConvertUnion<U>',
      'None of the above'
    ],
    correctAnswer: 'type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that validates an array has at least N elements?',
    options: [
      'type MinLength<T extends any[], N extends number> = T & { length: N }',
      'ArrayWithMinLength<T, N>',
      'ValidateLength<T, N>',
      'None of the above'
    ],
    correctAnswer: 'type MinLength<T extends any[], N extends number> = T & { length: N }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that recursively replaces all types matching a condition?',
    options: [
      'type ReplaceType<T, From, To> = { [K in keyof T]: T[K] extends From ? To : ReplaceType<T[K], From, To> }',
      'DeepReplace<T, From, To>',
      'RecursiveReplace<T>',
      'None of the above'
    ],
    correctAnswer: 'type ReplaceType<T, From, To> = { [K in keyof T]: T[K] extends From ? To : ReplaceType<T[K], From, To> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that extracts all non-method properties from a class?',
    options: [
      'type NonMethodKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]',
      'ExtractProperties<T>',
      'FilterMethods<T>',
      'None of the above'
    ],
    correctAnswer: 'type NonMethodKeys<T> = { [K in keyof T]: T[K] extends Function ? never : K }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a discriminated union from an object of handlers?',
    options: [
      'type HandlersToUnion<T> = { [K in keyof T]: { type: K } & Parameters<T[K]>[0] }[keyof T]',
      'CreateDiscriminatedUnion<T>',
      'HandlersUnion<T>',
      'None of the above'
    ],
    correctAnswer: 'type HandlersToUnion<T> = { [K in keyof T]: { type: K } & Parameters<T[K]>[0] }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that makes all properties writable and required recursively?',
    options: [
      'type DeepRequired<T> = { -readonly [P in keyof T]-?: DeepRequired<T[P]> }',
      'DeepRequired<T> utility',
      'RecursiveRequired<T>',
      'None of the above'
    ],
    correctAnswer: 'type DeepRequired<T> = { -readonly [P in keyof T]-?: DeepRequired<T[P]> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that validates a string is a valid email format?',
    options: [
      'type Email = string & { __brand: "Email" } with runtime validation',
      'Using template literal types with pattern matching',
      'Both approaches could work together',
      'Not possible in TypeScript'
    ],
    correctAnswer: 'Both approaches could work together'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that flattens a nested object type?',
    options: [
      'type Flatten<T> = { [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K] }',
      'FlattenObject<T>',
      'DeepFlatten<T>',
      'None of the above'
    ],
    correctAnswer: 'type Flatten<T> = { [K in keyof T]: T[K] extends object ? Flatten<T[K]> : T[K] }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a type-safe builder pattern?',
    options: [
      'Using recursive generic types with method chaining',
      'With a fluent interface and conditional types',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that extracts all numeric properties from an object?',
    options: [
      'type NumericKeys<T> = { [K in keyof T]: T[K] extends number ? K : never }[keyof T]',
      'ExtractNumbers<T>',
      'FilterNumbers<T>',
      'None of the above'
    ],
    correctAnswer: 'type NumericKeys<T> = { [K in keyof T]: T[K] extends number ? K : never }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a union of all possible paths in an object?',
    options: [
      'type Paths<T> = T extends object ? { [K in keyof T]: K | `${K & string}.${Paths<T[K]>}` }[keyof T] : never',
      'ObjectPaths<T>',
      'DeepKeys<T>',
      'None of the above'
    ],
    correctAnswer: 'type Paths<T> = T extends object ? { [K in keyof T]: K | `${K & string}.${Paths<T[K]>}` }[keyof T] : never'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that makes all properties immutable recursively?',
    options: [
      'type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }',
      'Immutable<T>',
      'RecursiveReadonly<T>',
      'None of the above'
    ],
    correctAnswer: 'type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> }'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that validates a string is a valid URL?',
    options: [
      'Using branded types with runtime validation',
      'With complex template literal types',
      'Both approaches could work',
      'Not possible in TypeScript'
    ],
    correctAnswer: 'Both approaches could work'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that extracts all optional properties recursively?',
    options: [
      'type DeepOptionalKeys<T> = { [K in keyof T]-?: T[K] extends object ? DeepOptionalKeys<T[K]> : {} extends Pick<T, K> ? K : never }[keyof T]',
      'RecursiveOptional<T>',
      'DeepExtractOptional<T>',
      'None of the above'
    ],
    correctAnswer: 'type DeepOptionalKeys<T> = { [K in keyof T]-?: T[K] extends object ? DeepOptionalKeys<T[K]> : {} extends Pick<T, K> ? K : never }[keyof T]'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a type-safe state machine?',
    options: [
      'Using discriminated unions and transition maps',
      'With conditional types and generics',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that validates a string is a valid UUID?',
    options: [
      'type UUID = string & { __brand: "UUID" } with pattern matching',
      'Using template literal types for each segment',
      'Both approaches could work',
      'Not possible in TypeScript'
    ],
    correctAnswer: 'Both approaches could work'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a type-safe query builder for SQL?',
    options: [
      'Using chained generics with conditional types',
      'With mapped types for table schemas',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that extracts all leaf nodes from a nested object?',
    options: [
      'type Leaves<T> = T extends object ? { [K in keyof T]: Leaves<T[K]> }[keyof T] : T',
      'LeafNodes<T>',
      'DeepLeaves<T>',
      'None of the above'
    ],
    correctAnswer: 'type Leaves<T> = T extends object ? { [K in keyof T]: Leaves<T[K]> }[keyof T] : T'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How would you implement a type that creates a type-safe event bus with listener type inference?',
    options: [
      'Using mapped types for event types',
      'With conditional types for payload inference',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'TypeScript',
    difficulty: 'advanced',
    question: 'How do you create a type that validates a string is a valid ISO date string?',
    options: [
      'Using branded types with runtime validation',
      'With complex template literal types',
      'Both approaches could work',
      'Not possible in TypeScript'
    ],
    correctAnswer: 'Both approaches could work'
  },

  // =============== Tailwind Questions ===============
  // Easy (101-125)
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What is Tailwind CSS?',
    options: [
      'A utility-first CSS framework',
      'A component library',
      'A JavaScript framework',
      'A build tool'
    ],
    correctAnswer: 'A utility-first CSS framework'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you apply padding on all sides in Tailwind?',
    options: ['p-4', 'padding-4', 'pad-4', 'pt-4'],
    correctAnswer: 'p-4'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which utility sets text color to white?',
    options: ['text-white', 'color-white', 'font-white', 'white-text'],
    correctAnswer: 'text-white'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you make a flex container?',
    options: ['flex', 'display-flex', 'flexbox', 'flex-container'],
    correctAnswer: 'flex'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "m-4" do?',
    options: [
      'Adds margin on all sides',
      'Adds margin only top',
      'Adds margin left and right',
      'Adds max-width'
    ],
    correctAnswer: 'Adds margin on all sides'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you center text horizontally?',
    options: ['text-center', 'center', 'align-center', 'text-middle'],
    correctAnswer: 'text-center'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which class makes an element hidden?',
    options: ['hidden', 'invisible', 'display-none', 'hide'],
    correctAnswer: 'hidden'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a full width?',
    options: ['w-full', 'width-full', 'full-width', 'w-100'],
    correctAnswer: 'w-full'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "bg-blue-500" do?',
    options: [
      'Sets blue background color',
      'Sets blue text color',
      'Sets blue border',
      'Adds blue shadow'
    ],
    correctAnswer: 'Sets blue background color'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you add rounded corners?',
    options: ['rounded', 'round', 'border-radius', 'rounded-corners'],
    correctAnswer: 'rounded'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which class adds a shadow?',
    options: ['shadow', 'box-shadow', 'drop-shadow', 'shadow-md'],
    correctAnswer: 'shadow'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set font weight to bold?',
    options: ['font-bold', 'text-bold', 'bold', 'weight-bold'],
    correctAnswer: 'font-bold'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "hover:bg-gray-100" do?',
    options: [
      'Changes background on hover',
      'Changes text color on hover',
      'Adds hover effect',
      'None of the above'
    ],
    correctAnswer: 'Changes background on hover'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a fixed width?',
    options: ['w-[100px]', 'width-100', 'fixed-width', 'w-fixed'],
    correctAnswer: 'w-[100px]'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which class adds a border?',
    options: ['border', 'add-border', 'border-1', 'outline'],
    correctAnswer: 'border'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set flex direction to column?',
    options: ['flex-col', 'flex-column', 'col-flex', 'direction-column'],
    correctAnswer: 'flex-col'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "justify-between" do?',
    options: [
      'Distributes space between items',
      'Centers items',
      'Aligns items to start',
      'Aligns items to end'
    ],
    correctAnswer: 'Distributes space between items'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a responsive grid?',
    options: ['grid', 'display-grid', 'grid-cols-3', 'All of the above'],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which class sets opacity?',
    options: ['opacity-50', 'transparent-50', 'alpha-50', 'fade-50'],
    correctAnswer: 'opacity-50'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a transition?',
    options: ['transition', 'animate', 'transit', 'move'],
    correctAnswer: 'transition'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "items-center" do?',
    options: [
      'Aligns items vertically center',
      'Aligns items horizontally center',
      'Centers text',
      'None of the above'
    ],
    correctAnswer: 'Aligns items vertically center'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a custom color?',
    options: [
      'bg-[#ff0000]',
      'color-custom',
      'custom-color',
      'None of the above'
    ],
    correctAnswer: 'bg-[#ff0000]'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'Which class sets z-index?',
    options: ['z-10', 'layer-10', 'depth-10', 'stack-10'],
    correctAnswer: 'z-10'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'How do you set a max-width?',
    options: ['max-w-md', 'maximum-width', 'width-max', 'mw-md'],
    correctAnswer: 'max-w-md'
  },
  {
    topic: 'Tailwind',
    difficulty: 'easy',
    question: 'What does "duration-300" do?',
    options: [
      'Sets transition duration',
      'Sets animation duration',
      'Delays transition',
      'None of the above'
    ],
    correctAnswer: 'Sets transition duration'
  },

  // Tailwind Medium (126-150)
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a responsive layout that changes at the "md" breakpoint?',
    options: [
      'md:flex',
      'responsive-flex',
      'breakpoint-flex',
      'None of the above'
    ],
    correctAnswer: 'md:flex'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of @apply in Tailwind?',
    options: [
      'To extract repeated utilities into CSS',
      'To apply JavaScript functions',
      'To import components',
      'None of the above'
    ],
    correctAnswer: 'To extract repeated utilities into CSS'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom animation in Tailwind?',
    options: [
      'Define in tailwind.config.js',
      'Use @keyframes in CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "group-hover" do?',
    options: [
      'Styles child elements on parent hover',
      'Creates a hover group',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Styles child elements on parent hover'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you extend the default color palette?',
    options: [
      'In tailwind.config.js',
      'Using CSS variables',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'In tailwind.config.js'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of "dark:" variant?',
    options: [
      'For dark mode styles',
      'For low-light conditions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'For dark mode styles'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom spacing scale?',
    options: [
      'In tailwind.config.js',
      'Using arbitrary values',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'In tailwind.config.js'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "ring-2" do?',
    options: [
      'Adds a focus ring',
      'Adds a circular element',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Adds a focus ring'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom font family?',
    options: [
      'In tailwind.config.js',
      'Using @font-face',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of "prose" class?',
    options: [
      'For typography defaults',
      'For professional styling',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'For typography defaults'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a gradient background?',
    options: [
      'bg-gradient-to-r',
      'gradient-background',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'bg-gradient-to-r'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "aspect-video" do?',
    options: [
      'Sets 16:9 aspect ratio',
      'For video elements',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Sets 16:9 aspect ratio'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you customize breakpoints?',
    options: [
      'In tailwind.config.js',
      'Using CSS media queries',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'In tailwind.config.js'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of "peer" class?',
    options: [
      'To style based on sibling state',
      'For peer-to-peer connections',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'To style based on sibling state'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom transition property?',
    options: [
      'transition-[property]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "backdrop-blur" do?',
    options: [
      'Applies blur to element backdrop',
      'For background blur',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Applies blur to element backdrop'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom variant?',
    options: [
      'Using plugin system',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of "min-h-screen"?',
    options: [
      'Minimum height of viewport',
      'For screen readers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Minimum height of viewport'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom box shadow?',
    options: [
      'shadow-[value]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "divide-x" do?',
    options: [
      'Adds borders between children',
      'Divides element horizontally',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Adds borders between children'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom transform?',
    options: [
      'transform-[value]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What is the purpose of "space-x-4"?',
    options: [
      'Adds horizontal space between children',
      'For spacing elements',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Adds horizontal space between children'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom aspect ratio?',
    options: [
      'aspect-[ratio]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'What does "placeholder-opacity-50" do?',
    options: [
      'Sets placeholder text opacity',
      'For input placeholders',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Sets placeholder text opacity'
  },
  {
    topic: 'Tailwind',
    difficulty: 'medium',
    question: 'How do you create a custom ring color?',
    options: [
      'ring-[color]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Tailwind Hard (151-175)
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex responsive grid with varying columns at different breakpoints?',
    options: [
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'responsive-grid',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom plugin to add new utilities?',
    options: [
      'Using tailwind.config.js plugins',
      'With PostCSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using tailwind.config.js plugins'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a dark mode toggle with persistent preference?',
    options: [
      'Using dark: variant and localStorage',
      'With a custom plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using dark: variant and localStorage'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you optimize Tailwind for production?',
    options: [
      'Purge unused CSS',
      'Minify and compress',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex animation sequence?',
    options: [
      'Using @keyframes with animation utilities',
      'With a JavaScript library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using @keyframes with animation utilities'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom variant that targets only IE11?',
    options: [
      'Using a plugin with @supports',
      'With a custom selector',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'With a custom selector'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a theme switcher with custom themes?',
    options: [
      'Using CSS variables and JavaScript',
      'With a Tailwind plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using CSS variables and JavaScript'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a complex gradient with multiple color stops?',
    options: [
      'Using bg-gradient-to-r with custom colors',
      'With arbitrary values',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a responsive typography scale?',
    options: [
      'Using text-sm md:text-base lg:text-lg',
      'With a custom plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom component with @apply that supports variants?',
    options: [
      'Using @layer components',
      'With a plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using @layer components'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a masonry layout?',
    options: [
      'Using columns utilities',
      'With CSS Grid and custom breakpoints',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom transform origin?',
    options: [
      'transform-origin-[value]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex hover effect that affects multiple elements?',
    options: [
      'Using group-hover and peer-hover',
      'With JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using group-hover and peer-hover'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom transition timing function?',
    options: [
      'ease-[name]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a responsive aspect ratio that changes at breakpoints?',
    options: [
      'aspect-square md:aspect-video',
      'With custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'aspect-square md:aspect-video'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom scroll behavior?',
    options: [
      'scroll-smooth',
      'With a plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex form validation styling?',
    options: [
      'Using peer-invalid and peer-valid',
      'With JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using peer-invalid and peer-valid'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom backdrop filter?',
    options: [
      'backdrop-blur-[value]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a responsive text clamp?',
    options: [
      'Using line-clamp with breakpoints',
      'With custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using line-clamp with breakpoints'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom scroll snap alignment?',
    options: [
      'snap-[alignment]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex tooltip system?',
    options: [
      'Using group-hover with absolute positioning',
      'With a JavaScript library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using group-hover with absolute positioning'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom filter effect?',
    options: [
      'filter-[value]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a responsive navigation that changes layout at breakpoints?',
    options: [
      'Using hidden and block with breakpoints',
      'With JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using hidden and block with breakpoints'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How do you create a custom mix blend mode?',
    options: [
      'mix-blend-[mode]',
      'In tailwind.config.js',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Tailwind',
    difficulty: 'hard',
    question: 'How would you implement a complex card with layered hover effects?',
    options: [
      'Using transform and transition utilities',
      'With a JavaScript library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform and transition utilities'
  },

  // Tailwind Advanced (176-200)
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a design system with Tailwind that supports theming and component variants?',
    options: [
      'Using tailwind.config.js with plugins and CSS variables',
      'With a custom JavaScript framework',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using tailwind.config.js with plugins and CSS variables'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom JIT (Just-In-Time) mode plugin that generates utilities based on content analysis?',
    options: [
      'Using the Tailwind plugin API with safelist',
      'With a custom PostCSS processor',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using the Tailwind plugin API with safelist'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a performant, animated 3D card flip using only Tailwind utilities?',
    options: [
      'Using transform and perspective utilities with transition',
      'With a WebGL library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform and perspective utilities with transition'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets only when an element has a specific number of children?',
    options: [
      'Using a plugin with :has selector',
      'With custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with :has selector'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a real-time theme editor that modifies Tailwind configuration on the fly?',
    options: [
      'Using CSS variables and JavaScript to update the config',
      'With a server-side compiler',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using CSS variables and JavaScript to update the config'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates CSS Grid templates based on a configuration object?',
    options: [
      'Using a Tailwind plugin with dynamic utility generation',
      'With a custom PostCSS plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a Tailwind plugin with dynamic utility generation'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive data visualization using only Tailwind utilities?',
    options: [
      'Using transform, transition, and arbitrary values',
      'With a dedicated charting library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform, transition, and arbitrary values'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that responds to container queries?',
    options: [
      'Using a plugin with @container',
      'With JavaScript resize observers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with @container'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a performant infinite scroll animation using only Tailwind utilities?',
    options: [
      'Using animation utilities with keyframes',
      'With a JavaScript animation library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using animation utilities with keyframes'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive typography based on viewport units?',
    options: [
      'Using a plugin with clamp() and viewport units',
      'With JavaScript resize handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with clamp() and viewport units'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive game UI using only Tailwind utilities?',
    options: [
      'Using transform, transition, and group utilities',
      'With a game engine',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform, transition, and group utilities'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets elements based on their scroll position?',
    options: [
      'Using Intersection Observer in a plugin',
      'With JavaScript scroll handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using Intersection Observer in a plugin'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a real-time collaborative whiteboard with interactive elements using Tailwind?',
    options: [
      'Using transform and transition utilities with WebSockets',
      'With a dedicated canvas library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform and transition utilities with WebSockets'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, fluid spacing based on container width?',
    options: [
      'Using a plugin with CSS clamp() and container queries',
      'With JavaScript resize handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with CSS clamp() and container queries'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a complex, animated SVG infographic using only Tailwind utilities?',
    options: [
      'Using transform and animation utilities with SVG',
      'With a dedicated SVG library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform and animation utilities with SVG'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets elements based on their position in a grid?',
    options: [
      'Using :nth-child selectors in a plugin',
      'With JavaScript DOM traversal',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using :nth-child selectors in a plugin'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a performant, interactive virtual scroll list using Tailwind?',
    options: [
      'Using transform utilities with windowing',
      'With a dedicated virtualization library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform utilities with windowing'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, aspect-ratio constrained typography?',
    options: [
      'Using a plugin with viewport units and clamp()',
      'With JavaScript resize handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with viewport units and clamp()'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive timeline component using only Tailwind utilities?',
    options: [
      'Using grid, transform, and transition utilities',
      'With a dedicated timeline library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using grid, transform, and transition utilities'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets elements based on their visibility in the viewport?',
    options: [
      'Using Intersection Observer in a plugin',
      'With JavaScript scroll handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using Intersection Observer in a plugin'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a performant, animated particle system using only Tailwind utilities?',
    options: [
      'Using animation utilities with transform',
      'With WebGL',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using animation utilities with transform'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, fluid typography based on multiple breakpoints?',
    options: [
      'Using a plugin with CSS clamp() and multiple breakpoints',
      'With JavaScript resize handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using a plugin with CSS clamp() and multiple breakpoints'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive dashboard with draggable components using Tailwind?',
    options: [
      'Using transform and transition utilities with drag events',
      'With a dedicated drag-and-drop library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform and transition utilities with drag events'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets elements based on their relationship to the active element?',
    options: [
      'Using :has and :focus-within in a plugin',
      'With JavaScript DOM traversal',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using :has and :focus-within in a plugin'
  },
  {
    topic: 'Tailwind',
    difficulty: 'advanced',
    question: 'How would you implement a performant, animated 3D carousel using only Tailwind utilities?',
    options: [
      'Using transform-style and perspective utilities',
      'With a 3D animation library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using transform-style and perspective utilities'
  },

  // =============== Bootstrap Questions ===============
  // Easy (201-225)
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'What is Bootstrap?',
    options: [
      'A CSS framework',
      'A JavaScript library',
      'A programming language',
      'A database'
    ],
    correctAnswer: 'A CSS framework'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you include Bootstrap in your project?',
    options: [
      'CDN link',
      'npm install',
      'Downloading CSS/JS files',
      'All of the above'
    ],
    correctAnswer: 'All of the above'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class creates a container with max-width at each breakpoint?',
    options: ['.container', '.container-fluid', '.container-fixed', '.box'],
    correctAnswer: '.container'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a full-width container?',
    options: [
      '.container-fluid',
      '.container-full',
      '.container-wide',
      '.container'
    ],
    correctAnswer: '.container-fluid'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class creates a row in the grid system?',
    options: ['.row', '.grid-row', '.flex-row', '.col-row'],
    correctAnswer: '.row'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a column that takes up 6 units on medium screens?',
    options: ['.col-md-6', '.col-6', '.md-col-6', '.col6-md'],
    correctAnswer: '.col-md-6'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class adds padding to all sides?',
    options: ['.p-3', '.padding-3', '.pad-3', '.pt-3'],
    correctAnswer: '.p-3'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you make text bold?',
    options: ['.fw-bold', '.bold', '.text-bold', '.font-bold'],
    correctAnswer: '.fw-bold'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class centers text?',
    options: ['.text-center', '.center', '.align-center', '.text-middle'],
    correctAnswer: '.text-center'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a primary button?',
    options: [
      '.btn-primary',
      '.button-primary',
      '.primary-btn',
      '.btn.btn-primary'
    ],
    correctAnswer: '.btn-primary'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class creates a card component?',
    options: ['.card', '.panel', '.box', '.container-card'],
    correctAnswer: '.card'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a navigation bar?',
    options: ['.navbar', '.nav', '.navigation', '.nav-bar'],
    correctAnswer: '.navbar'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class adds a light background color?',
    options: ['.bg-light', '.light-bg', '.background-light', '.bg-color-light'],
    correctAnswer: '.bg-light'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a flex container?',
    options: ['.d-flex', '.flex', '.display-flex', '.flex-container'],
    correctAnswer: '.d-flex'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class adds margin to the bottom?',
    options: ['.mb-3', '.margin-bottom-3', '.m-bottom-3', '.m-b-3'],
    correctAnswer: '.mb-3'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a responsive image?',
    options: ['.img-fluid', '.responsive-img', '.img-responsive', '.fluid-img'],
    correctAnswer: '.img-fluid'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class creates a dropdown menu?',
    options: ['.dropdown', '.select-menu', '.drop-menu', '.menu-drop'],
    correctAnswer: '.dropdown'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a tooltip?',
    options: [
      'data-bs-toggle="tooltip"',
      'data-tooltip',
      'data-toggle="tooltip"',
      'tooltip="true"'
    ],
    correctAnswer: 'data-bs-toggle="tooltip"'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class adds rounded corners?',
    options: ['.rounded', '.round', '.border-radius', '.rounded-corners'],
    correctAnswer: '.rounded'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a modal?',
    options: ['.modal', '.dialog', '.popup', '.window'],
    correctAnswer: '.modal'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class adds a shadow?',
    options: ['.shadow', '.box-shadow', '.drop-shadow', '.shadow-sm'],
    correctAnswer: '.shadow'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a form group?',
    options: ['.form-group', '.group-form', '.form-control-group', '.fg'],
    correctAnswer: '.form-group'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class makes an element sticky to the top?',
    options: ['.sticky-top', '.fixed-top', '.stick-top', '.top-sticky'],
    correctAnswer: '.sticky-top'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'How do you create a spinner?',
    options: ['.spinner-border', '.loader', '.spinner', '.loading'],
    correctAnswer: '.spinner-border'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'easy',
    question: 'Which class creates a badge?',
    options: ['.badge', '.tag', '.label', '.chip'],
    correctAnswer: '.badge'
  },

  // Bootstrap Medium (226-250)
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you customize Bootstrap using Sass?',
    options: [
      'Override Sass variables',
      'Create a custom Sass file',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s breakpoints?',
    options: [
      'Responsive design',
      'Media queries',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom button variant?',
    options: [
      'Using Sass maps',
      'Creating custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s utility API?',
    options: [
      'Generate custom utilities',
      'Modify existing utilities',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a responsive navbar that collapses on mobile?',
    options: [
      '.navbar-expand-* classes',
      'JavaScript toggle',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s grid gutter system?',
    options: [
      'Space between columns',
      'Responsive spacing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom theme color?',
    options: [
      'Modify $theme-colors map',
      'Create custom CSS variables',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s z-index system?',
    options: [
      'Layering components',
      'Consistent stacking',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a responsive table?',
    options: [
      '.table-responsive',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s spacing utilities?',
    options: [
      'Margin and padding',
      'Responsive spacing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you customize Bootstrap\'s default breakpoints?',
    options: [
      'Modify $grid-breakpoints',
      'Override media queries',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s display utilities?',
    options: [
      'Control visibility',
      'Responsive display',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom form control?',
    options: [
      'Extend .form-control',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s flex utilities?',
    options: [
      'Flexbox layout',
      'Responsive flex',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom alert variant?',
    options: [
      'Modify $alert-variants',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s position utilities?',
    options: [
      'Element positioning',
      'Responsive positioning',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom border utility?',
    options: [
      'Modify $border-* variables',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s text utilities?',
    options: [
      'Text styling',
      'Responsive text',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom shadow utility?',
    options: [
      'Modify $box-shadow',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s overflow utilities?',
    options: [
      'Content overflow',
      'Scroll behavior',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom opacity utility?',
    options: [
      'Modify $utilities',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s ratio utilities?',
    options: [
      'Aspect ratios',
      'Responsive media',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom transition utility?',
    options: [
      'Modify $transition-*',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'What is the purpose of Bootstrap\'s visibility utilities?',
    options: [
      'Element visibility',
      'Responsive visibility',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'medium',
    question: 'How do you create a custom z-index utility?',
    options: [
      'Modify $z-index',
      'Create custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Bootstrap Hard (251-275)
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex responsive layout with multiple nested grids?',
    options: [
      'Using nested .row and .col-*',
      'Custom CSS Grid',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you optimize Bootstrap for production?',
    options: [
      'Purge unused CSS',
      'Minify and compress',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a custom component that extends Bootstrap\'s functionality?',
    options: [
      'Using Sass and JavaScript',
      'Creating a plugin',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a theme system with multiple color schemes?',
    options: [
      'Using CSS variables',
      'Sass mixins and maps',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex form with conditional fields?',
    options: [
      'Using Bootstrap\'s form validation',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom utility that responds to container queries?',
    options: [
      'Using a PostCSS plugin',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex dashboard layout?',
    options: [
      'Using Bootstrap grid and utilities',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom build of Bootstrap with only needed components?',
    options: [
      'Using Sass imports',
      'Custom build process',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex animation sequence?',
    options: [
      'Using Bootstrap\'s transition utilities',
      'Custom CSS/JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom responsive typography system?',
    options: [
      'Using Sass maps and mixins',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex navigation system with mega menus?',
    options: [
      'Extending Bootstrap\'s navbar',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom breakpoint that isn\'t in Bootstrap\'s defaults?',
    options: [
      'Modifying $grid-breakpoints',
      'Custom media queries',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex card layout with hover effects?',
    options: [
      'Using Bootstrap utilities',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom spacing scale that differs from Bootstrap\'s?',
    options: [
      'Modifying $spacer',
      'Custom utilities',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex modal with multiple steps?',
    options: [
      'Extending Bootstrap\'s modal',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom variant of Bootstrap\'s alert component?',
    options: [
      'Using Sass maps',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex carousel with custom controls?',
    options: [
      'Extending Bootstrap\'s carousel',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom grid system that extends Bootstrap\'s?',
    options: [
      'Modifying Sass variables',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex tooltip system with custom templates?',
    options: [
      'Extending Bootstrap\'s tooltip',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom variant of Bootstrap\'s button component?',
    options: [
      'Using Sass maps',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex accordion with nested items?',
    options: [
      'Extending Bootstrap\'s accordion',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom transition that isn\'t in Bootstrap\'s defaults?',
    options: [
      'Modifying $transition-*',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex table with sorting and filtering?',
    options: [
      'Extending Bootstrap\'s table',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How do you create a custom variant of Bootstrap\'s badge component?',
    options: [
      'Using Sass maps',
      'Custom CSS',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'hard',
    question: 'How would you implement a complex dropdown with custom content?',
    options: [
      'Extending Bootstrap\'s dropdown',
      'Custom JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Bootstrap Advanced (276-300)
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a design system that extends Bootstrap with custom theming, components, and utilities?',
    options: [
      'Using Sass, CSS variables, and JavaScript',
      'Creating a custom framework',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom build system that treeshakes unused Bootstrap components?',
    options: [
      'Using Sass imports and PurgeCSS',
      'Custom Webpack/Rollup config',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive dashboard with draggable components?',
    options: [
      'Extending Bootstrap with drag-and-drop libraries',
      'Custom JavaScript implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a plugin system that extends Bootstrap\'s JavaScript components?',
    options: [
      'Using Bootstrap\'s plugin architecture',
      'Custom event-driven JavaScript',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a real-time theme editor that modifies Bootstrap variables on the fly?',
    options: [
      'Using CSS variables and JavaScript',
      'Server-side compilation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using CSS variables and JavaScript'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a utility generator that produces custom responsive utilities?',
    options: [
      'Using Bootstrap\'s utility API',
      'Custom Sass mixins',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, animated 3D card flip using Bootstrap utilities?',
    options: [
      'Combining transform and transition utilities',
      'Custom CSS 3D transforms',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom variant that targets elements based on their scroll position?',
    options: [
      'Using Intersection Observer',
      'Custom scroll event handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a performant, animated particle system using Bootstrap utilities?',
    options: [
      'Using animation utilities with transform',
      'Custom WebGL implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using animation utilities with transform'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, fluid typography based on viewport units?',
    options: [
      'Using Sass mixins with clamp()',
      'Custom JavaScript calculations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive timeline component?',
    options: [
      'Extending Bootstrap\'s list group',
      'Custom SVG implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a variant that targets elements based on their visibility in the viewport?',
    options: [
      'Using Intersection Observer',
      'Custom scroll handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a performant, animated 3D carousel?',
    options: [
      'Combining transform and perspective utilities',
      'Custom 3D animation library',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, fluid spacing based on container width?',
    options: [
      'Using CSS clamp() and container queries',
      'Custom JavaScript resize handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using CSS clamp() and container queries'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive data visualization?',
    options: [
      'Extending Bootstrap\'s components with SVG',
      'Custom canvas implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a variant that targets elements based on their relationship to the active element?',
    options: [
      'Using :has and :focus-within',
      'Custom JavaScript DOM traversal',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using :has and :focus-within'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a performant, infinite scroll animation?',
    options: [
      'Using animation utilities with keyframes',
      'Custom JavaScript animation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, aspect-ratio constrained typography?',
    options: [
      'Using viewport units and clamp()',
      'Custom JavaScript calculations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive game UI?',
    options: [
      'Extending Bootstrap with game-specific components',
      'Custom canvas implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a variant that targets elements based on their position in a grid?',
    options: [
      'Using :nth-child selectors',
      'Custom JavaScript DOM traversal',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Using :nth-child selectors'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a real-time collaborative whiteboard with interactive elements?',
    options: [
      'Combining Bootstrap with WebSockets',
      'Custom canvas implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a custom utility that generates responsive, fluid typography based on multiple breakpoints?',
    options: [
      'Using Sass mixins with clamp()',
      'Custom JavaScript calculations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a complex, interactive dashboard with draggable components?',
    options: [
      'Extending Bootstrap with drag-and-drop libraries',
      'Custom JavaScript implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How do you create a variant that targets elements based on their scroll position relative to a container?',
    options: [
      'Using Intersection Observer',
      'Custom scroll handlers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Bootstrap',
    difficulty: 'advanced',
    question: 'How would you implement a performant, virtual scroll list?',
    options: [
      'Extending Bootstrap\'s list components',
      'Custom JavaScript implementation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // =============== Firebase Questions ===============
  // Easy (301-325)
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Firebase is owned by which company?',
    options: ['Microsoft', 'Google', 'Amazon', 'Facebook'],
    correctAnswer: 'Google'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides realtime database functionality?',
    options: [
      'Firestore',
      'Realtime Database',
      'Cloud Storage',
      'Both Firestore and Realtime Database'
    ],
    correctAnswer: 'Both Firestore and Realtime Database'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you initialize Firebase in a web app?',
    options: [
      'firebase.initializeApp(config)',
      'new Firebase(config)',
      'Firebase.init(config)',
      'initializeFirebase(config)'
    ],
    correctAnswer: 'firebase.initializeApp(config)'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides authentication?',
    options: [
      'Firebase Auth',
      'Firebase Identity',
      'Firebase Users',
      'Firebase Login'
    ],
    correctAnswer: 'Firebase Auth'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which method signs in a user with email/password?',
    options: [
      'signInWithEmailAndPassword',
      'loginWithEmailAndPassword',
      'authenticateWithEmailAndPassword',
      'authWithEmailAndPassword'
    ],
    correctAnswer: 'signInWithEmailAndPassword'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you listen for realtime data changes in Firestore?',
    options: [
      'onSnapshot',
      'addListener',
      'realtimeUpdate',
      'watchChanges'
    ],
    correctAnswer: 'onSnapshot'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides file storage?',
    options: [
      'Cloud Storage',
      'Firebase Storage',
      'File Storage',
      'Storage Bucket'
    ],
    correctAnswer: 'Cloud Storage'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you add a document to a Firestore collection?',
    options: [
      'addDoc',
      'setDoc',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides hosting?',
    options: [
      'Firebase Hosting',
      'Cloud Hosting',
      'Web Hosting',
      'Static Hosting'
    ],
    correctAnswer: 'Firebase Hosting'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you deploy to Firebase Hosting?',
    options: [
      'firebase deploy',
      'firebase push',
      'firebase upload',
      'firebase publish'
    ],
    correctAnswer: 'firebase deploy'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides serverless functions?',
    options: [
      'Cloud Functions',
      'Firebase Functions',
      'Serverless Functions',
      'Lambda Functions'
    ],
    correctAnswer: 'Cloud Functions'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you get a reference to a Firestore document?',
    options: [
      'doc()',
      'getDoc()',
      'document()',
      'getDocument()'
    ],
    correctAnswer: 'doc()'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides analytics?',
    options: [
      'Firebase Analytics',
      'Google Analytics',
      'App Analytics',
      'Data Analytics'
    ],
    correctAnswer: 'Firebase Analytics'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you sign out a user in Firebase Auth?',
    options: [
      'signOut',
      'logout',
      'endSession',
      'disconnect'
    ],
    correctAnswer: 'signOut'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides crash reporting?',
    options: [
      'Crashlytics',
      'Firebase Crash',
      'Error Reporting',
      'Crash Reports'
    ],
    correctAnswer: 'Crashlytics'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you query documents in Firestore?',
    options: [
      'where',
      'filter',
      'query',
      'find'
    ],
    correctAnswer: 'where'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides performance monitoring?',
    options: [
      'Performance Monitoring',
      'App Performance',
      'Firebase Performance',
      'Performance Insights'
    ],
    correctAnswer: 'Performance Monitoring'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you upload a file to Firebase Storage?',
    options: [
      'put',
      'upload',
      'send',
      'push'
    ],
    correctAnswer: 'put'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides remote configuration?',
    options: [
      'Remote Config',
      'App Config',
      'Firebase Config',
      'Dynamic Config'
    ],
    correctAnswer: 'Remote Config'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you delete a Firestore document?',
    options: [
      'deleteDoc',
      'removeDoc',
      'eraseDoc',
      'destroyDoc'
    ],
    correctAnswer: 'deleteDoc'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides A/B testing?',
    options: [
      'Firebase A/B Testing',
      'App Experiments',
      'Feature Testing',
      'Experiment Framework'
    ],
    correctAnswer: 'Firebase A/B Testing'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you get the current user in Firebase Auth?',
    options: [
      'currentUser',
      'getUser',
      'auth.currentUser',
      'Both A and C'
    ],
    correctAnswer: 'Both A and C'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides in-app messaging?',
    options: [
      'In-App Messaging',
      'App Messages',
      'Firebase Messaging',
      'User Messages'
    ],
    correctAnswer: 'In-App Messaging'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'How do you update a Firestore document?',
    options: [
      'updateDoc',
      'modifyDoc',
      'changeDoc',
      'setDoc with merge'
    ],
    correctAnswer: 'updateDoc'
  },
  {
    topic: 'Firebase',
    difficulty: 'easy',
    question: 'Which Firebase service provides dynamic links?',
    options: [
      'Dynamic Links',
      'Smart Links',
      'App Links',
      'Firebase Links'
    ],
    correctAnswer: 'Dynamic Links'
  },

  // Firebase Medium (326-350)
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the difference between Firestore and Realtime Database?',
    options: [
      'Firestore is document-based, Realtime DB is JSON tree',
      'Firestore has more complex querying',
      'Both A and B',
      'No difference'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Authentication with Google Sign-In?',
    options: [
      'GoogleAuthProvider',
      'signInWithPopup',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is a Firestore transaction used for?',
    options: [
      'Atomic operations',
      'Batch writes',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Atomic operations'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you secure Firestore data?',
    options: [
      'Security Rules',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firestore batch writes?',
    options: [
      'Multiple atomic operations',
      'Faster writes',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Multiple atomic operations'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement pagination in Firestore?',
    options: [
      'startAfter with query cursors',
      'limit and offset',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'startAfter with query cursors'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is Firebase Emulator Suite used for?',
    options: [
      'Local development',
      'Testing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Authentication state persistence?',
    options: [
      'setPersistence',
      'local/session storage',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'setPersistence'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firestore collection group queries?',
    options: [
      'Query across subcollections',
      'Better performance',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Query across subcollections'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Storage security?',
    options: [
      'Security Rules',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firebase Cloud Functions triggers?',
    options: [
      'Respond to events',
      'Run backend code',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement offline persistence in Firestore?',
    options: [
      'enablePersistence',
      'Local caching',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'enablePersistence'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is Firebase Hosting rewrite configuration used for?',
    options: [
      'SPA routing',
      'Cloud Functions integration',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Authentication custom claims?',
    options: [
      'Cloud Functions',
      'Admin SDK',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firestore arrayUnion and arrayRemove?',
    options: [
      'Update array fields',
      'Atomic array operations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Performance Monitoring custom traces?',
    options: [
      'trace API',
      'Custom metrics',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is Firebase Extensions?',
    options: [
      'Pre-packaged solutions',
      'Easy integrations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firestore data aggregation?',
    options: [
      'Cloud Functions',
      'Batch processing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firebase Remote Config?',
    options: [
      'Change app behavior remotely',
      'A/B testing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Authentication phone verification?',
    options: [
      'signInWithPhoneNumber',
      'Recaptcha',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is Firebase App Check used for?',
    options: [
      'Protect against abuse',
      'Verify app integrity',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firestore complex queries with multiple conditions?',
    options: [
      'Multiple where clauses',
      'Composite indexes',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is the purpose of Firebase Cloud Messaging?',
    options: [
      'Push notifications',
      'App messaging',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'How do you implement Firebase Hosting multiple sites?',
    options: [
      'Multiple targets',
      'Different configs',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'medium',
    question: 'What is Firebase Predictions?',
    options: [
      'User behavior prediction',
      'ML-based analytics',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Firebase Hard (351-375)
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a real-time chat application with Firebase?',
    options: [
      'Firestore with onSnapshot',
      'Realtime Database',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you optimize Firestore queries for performance?',
    options: [
      'Composite indexes',
      'Query limitations',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex role-based authorization system?',
    options: [
      'Custom claims',
      'Security Rules',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you handle large file uploads in Firebase Storage?',
    options: [
      'Chunking',
      'Resumable uploads',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a full-text search in Firestore?',
    options: [
      'Third-party service integration',
      'Algolia extension',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firestore data migration at scale?',
    options: [
      'Admin SDK scripts',
      'Batch processing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a leaderboard with real-time updates?',
    options: [
      'Firestore with queries',
      'Realtime Database',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you secure Firebase Cloud Functions HTTP endpoints?',
    options: [
      'CORS',
      'Authentication',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex data aggregation pipeline?',
    options: [
      'Cloud Functions triggers',
      'Batch processing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firebase Authentication with custom tokens?',
    options: [
      'Admin SDK',
      'Custom auth server',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex social network features (friends, feeds)?',
    options: [
      'Firestore relationships',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firestore offline-first applications?',
    options: [
      'enablePersistence',
      'Cache management',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex e-commerce system?',
    options: [
      'Stripe extension',
      'Custom Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firebase Authentication with multi-factor auth?',
    options: [
      'MFA enrollment',
      'SMS/authenticator apps',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex notification system?',
    options: [
      'Cloud Messaging',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firestore data validation at scale?',
    options: [
      'Security Rules',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex analytics dashboard?',
    options: [
      'BigQuery integration',
      'Data Studio',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firebase Storage with image processing?',
    options: [
      'Cloud Functions triggers',
      'ImageMagick/Sharp',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex document approval workflow?',
    options: [
      'Cloud Functions',
      'Firestore transactions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firebase Authentication with SAML/OIDC?',
    options: [
      'Custom provider',
      'Identity Platform',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex data export/import system?',
    options: [
      'Cloud Functions',
      'Admin SDK',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firestore with geospatial queries?',
    options: [
      'Geohashes',
      'Third-party libraries',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex user presence system?',
    options: [
      'Realtime Database',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How do you implement Firebase with CI/CD pipelines?',
    options: [
      'Firebase CLI',
      'GitHub Actions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'hard',
    question: 'How would you implement a complex rate-limiting system?',
    options: [
      'Security Rules',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },

  // Firebase Advanced (376-400)
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a distributed counter in Firestore to handle high write volumes?',
    options: [
      'Sharded counters',
      'Cloud Functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom scalable real-time presence system across multiple devices per user?',
    options: [
      'Realtime Database with onDisconnect',
      'Cloud Functions triggers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firestore data model for a multi-tenant SaaS application?',
    options: [
      'Collection per tenant',
      'Tenant ID in documents',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a real-time collaborative editor with conflict resolution?',
    options: [
      'Operational transforms',
      'CRDTs in Firestore',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a complex event-sourcing system with Firebase?',
    options: [
      'Firestore as event store',
      'Cloud Functions projections',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom scalable analytics pipeline with Firebase?',
    options: [
      'BigQuery export',
      'Custom aggregation functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firestore security rules architecture for complex hierarchical permissions?',
    options: [
      'Recursive functions in rules',
      'Role-based access control',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a real-time multiplayer game backend with Firebase?',
    options: [
      'Realtime Database for state',
      'Cloud Functions for game logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a custom machine learning pipeline using Firebase ML with AutoML?',
    options: [
      'Custom model training',
      'Cloud Functions integration',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a complex data migration strategy for a live Firestore database with zero downtime?',
    options: [
      'Dual-write strategy',
      'Migration functions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firebase architecture for a globally distributed application with data locality requirements?',
    options: [
      'Multi-region Firestore',
      'Location-based sharding',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom real-time bidding system with Firebase?',
    options: [
      'Firestore transactions',
      'Cloud Functions triggers',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a complex workflow engine with Firebase?',
    options: [
      'Firestore documents as state',
      'Cloud Functions as transitions',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom video processing pipeline with Firebase Storage?',
    options: [
      'Cloud Functions triggers',
      'FFmpeg processing',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firebase security model for a complex healthcare application with HIPAA compliance?',
    options: [
      'Custom claims for roles',
      'Audit logging',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a real-time inventory management system with Firestore?',
    options: [
      'Transactions for stock',
      'Cloud Functions for alerts',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a complex document collaboration system with version history?',
    options: [
      'Firestore subcollections for versions',
      'Operational transforms',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom recommendation engine with Firebase?',
    options: [
      'Firestore for user data',
      'Cloud Functions for ML',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firebase architecture for a high-traffic social media application?',
    options: [
      'Sharded counters for likes',
      'Denormalized data',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a complex fraud detection system with Firebase?',
    options: [
      'Cloud Functions analytics',
      'Machine Learning',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a real-time financial trading platform with Firebase?',
    options: [
      'Firestore for order book',
      'Cloud Functions for matching',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you design a Firebase security rules architecture for a complex content moderation system?',
    options: [
      'Custom claims for moderators',
      'Pre-moderation queues',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you implement a complex IoT data processing pipeline with Firebase?',
    options: [
      'Realtime Database for device data',
      'Cloud Functions for aggregation',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How do you implement a custom real-time analytics dashboard with Firebase?',
    options: [
      'Firestore for metrics',
      'BigQuery for historical',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
  {
    topic: 'Firebase',
    difficulty: 'advanced',
    question: 'How would you design a Firebase architecture for a massive multiplayer online game?',
    options: [
      'Realtime Database for game state',
      'Cloud Functions for logic',
      'Both A and B',
      'None of the above'
    ],
    correctAnswer: 'Both A and B'
  },
];

const seedDB = async () => {
  try {
    // Clear existing questions
    await Question.deleteMany();
    console.log('Existing questions removed');
    
    // Insert new questions
    await Question.insertMany(questions);
    console.log('Database seeded successfully!');
    
    // Get counts by topic
    const counts = await Question.aggregate([
      { $group: { _id: '$topic', count: { $sum: 1 } } }
    ]);
    console.log('Question counts by topic:');
    counts.forEach(c => console.log(`- ${c._id}: ${c.count}`));
    
    process.exit();
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDB();