function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const ColoredLine = ({ color, height }) => /*#__PURE__*/
React.createElement("hr", {
  style: {
    color: color,
    backgroundColor: color,
    height: height,
    margin: 0 } });




class Message extends React.Component {
  render() {
    const { title } = this.props;
    const { description } = this.props;

    return /*#__PURE__*/React.createElement("div", { className: 'box content dark-mode' }, /*#__PURE__*/
    React.createElement("h1", null, title), /*#__PURE__*/
    React.createElement("p", null, description));

  }}


const Loader = () => /*#__PURE__*/
React.createElement("div", { className: "loader component", key: "loader" }, /*#__PURE__*/
React.createElement("div", { className: "loader__dots" }, /*#__PURE__*/
React.createElement("span", { className: "loader__dots__dot" }), /*#__PURE__*/
React.createElement("span", { className: "loader__dots__dot" }), /*#__PURE__*/
React.createElement("span", { className: "loader__dots__dot" })));




const Card = ({ title, subtitle, imgUrl, linkUrl, description }) => /*#__PURE__*/
React.createElement("div", { className: "card" }, /*#__PURE__*/
React.createElement("a", { href: linkUrl || '#' }, /*#__PURE__*/React.createElement("img", { className: "cardImg", src: imgUrl })), /*#__PURE__*/
React.createElement("div", { style: {
    margin: '10px 10px 0px 0px' } }, /*#__PURE__*/


React.createElement("h4", { style: { margin: '0px' } }, /*#__PURE__*/React.createElement("strong", null, title)), /*#__PURE__*/
React.createElement("span", null, subtitle),
description));




const NewsDisplay = ({ article }) => /*#__PURE__*/
React.createElement("div", { className: "newsDisplay" }, /*#__PURE__*/
React.createElement("h1", { className: "newsDisplayTitle" }, article.title), /*#__PURE__*/
React.createElement("p", { className: "newsDisplayAuthor" }, article.byline || '', " ", article.published_date), /*#__PURE__*/
React.createElement("img", { src: article !== null && article !== void 0 && article.multimedia && article.multimedia.length > 0 && article.multimedia[0].type === "image" ? article.multimedia[0].url : '' }), /*#__PURE__*/
React.createElement("p", { className: "newsDisplayDescription" }, article.abstract || ''), /*#__PURE__*/
React.createElement("a", { href: article.url }, "Read More"));



class App extends React.Component {







  constructor(props) {
    super(props);_defineProperty(this, "state", { isLoading: true, isNewsFetchError: false, articles: null });_defineProperty(this, "fetchNews",


































    () => {
      const url = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=1DXptGlOlyf3XOLM5EI0DRM9h19KLWLS';
      const req = new Request(url);
      return fetch(req).
      then(response => response.json());
    });this.resumeRef = React.createRef();}getRandomArticle() {const { articles } = this.state;if (!articles) {return {};}const min = 0;const max = articles.length - 1;const index = Math.floor(Math.random() * (max - min)) + min;return articles[index];}componentDidMount() {setTimeout(async () => {const news = await this.fetchNews();if (news.status === "OK" && Array.isArray(news.results)) {this.setState({ isLoading: false, articles: news.results });} else {this.setState({ isLoading: false, isNewsFetchError: true });}}, 1000);}

  render() {
    const { isLoading, isNewsFetchError, articles } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "app" }, /*#__PURE__*/
      React.createElement("header", { className: "header" }, /*#__PURE__*/
      React.createElement("div", { id: "logoContainer" }, /*#__PURE__*/
      React.createElement("div", { id: "quoteOfTheDay" }, /*#__PURE__*/
      React.createElement("h5", null, "\"You can do anything you set your mind to\" - Eminem")), /*#__PURE__*/

      React.createElement("img", { className: "logo", src: "https://pngimage.net/wp-content/uploads/2018/06/the-new-york-times-logo-png-3.png" })), /*#__PURE__*/

      React.createElement(ColoredLine, { color: "black", height: 0.5 }), /*#__PURE__*/
      React.createElement("div", { className: "headerInfo" }, /*#__PURE__*/
      React.createElement("div", { className: "headerInfoItem", style: {
          marginRight: 'auto' } }, "VOL. CLXII... No. 1993"), /*#__PURE__*/

      React.createElement("div", { className: "headerInfoItem", style: {
          margin: 'auto' } }, "\xA9 ",
      new Date().getFullYear(), " The New York Times"), /*#__PURE__*/
      React.createElement("div", { className: "headerInfoItem", style: {
          margin: 'auto' } }, "NEW YORK, ",
      new Date().toDateString().toUpperCase()), /*#__PURE__*/
      React.createElement("div", { className: "headerInfoItem", style: {
          marginLeft: 'auto' } }, "$1")), /*#__PURE__*/


      React.createElement(ColoredLine, { color: "black", height: 1.5 })), /*#__PURE__*/

      React.createElement("div", { className: "headlineContainer" }, /*#__PURE__*/
      React.createElement("div", { id: "resumeIntro" }, /*#__PURE__*/
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h3", { className: "heading" }, "CLASSIFIEDS"), /*#__PURE__*/
      React.createElement(ColoredLine, { color: "white", height: 1.5 }), /*#__PURE__*/
      React.createElement("div", { style: { padding: '5px' } }, /*#__PURE__*/
      React.createElement("h5", { style: { margin: '5px 0px' } }, "FOR HIRE!"), /*#__PURE__*/
      React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Senior Software Engineer")), /*#__PURE__*/
      React.createElement("p", null, "A Senior Software Engineer with 7+ years of skin in the game is available for hire in just 3 months notice. He has worked in some of the top companies in the world and delivered products for Small Businesses to Big Enterprise Customers. Reach him today at ", /*#__PURE__*/React.createElement("a", { href: "mailto:adityak368@gmail.com" }, "adityak368@gmail.com"), " or via ", /*#__PURE__*/React.createElement("a", { href: "https://linkedin.com/in/aditya-k-b896165a" }, /*#__PURE__*/React.createElement("img", { width: "25px", height: "25px", src: "https://media-exp1.licdn.com/dms/image/C4E0BAQGBBp0LaObq0A/company-logo_200_200/0?e=2159024400&v=beta&t=tyrD06lDsdOelMjanHDd2gC1iqekh_JWTaXny9bAT4o" })), ". Get to know him ", /*#__PURE__*/React.createElement("a", { href: '#resumeDetails' }, "here."))))), /*#__PURE__*/



      React.createElement("div", { id: "newsHeadlines" },

      isLoading ? /*#__PURE__*/React.createElement(Loader, null) :
      isNewsFetchError || !articles ? /*#__PURE__*/
      React.createElement(Message, { title: "Oops, something went wrong", description: "I could not get the latest breaking news!. But fear not as i am hard at work looking into what just happenned!" }) : /*#__PURE__*/


      React.createElement(NewsDisplay, { article: this.getRandomArticle() }))), /*#__PURE__*/





      React.createElement("div", { ref: this.resumeRef, id: "resumeDetails" }, /*#__PURE__*/
      React.createElement("h3", { className: "heading" }, "ADVERTISEMENTS"), /*#__PURE__*/
      React.createElement("div", { style: { padding: '5px' } }, /*#__PURE__*/
      React.createElement("h3", null, "Meet Aditya!"), /*#__PURE__*/
      React.createElement("p", null, "Aditya loves to code and build complex software. He has worked in software development for 6+ years. He does not limit himself to any particular domain/component/tech stack and considers himself a ", /*#__PURE__*/React.createElement("strong", null, "generalist and language agnostic"), ". He does whatever it takes to get the job done."), /*#__PURE__*/
      React.createElement("p", null, "He also likes to solve algorithmic problems. He likes to optimize the code he writes and also come up with good designs. He considers himself a ", /*#__PURE__*/React.createElement("strong", null, "full stack developer"), " as he has developed applications for mobile/desktop/web and has good idea about the complete ecosystem."), /*#__PURE__*/
      React.createElement("h4", null, "Thats all good, but where has he worked till now? and what has he done?"), /*#__PURE__*/
      React.createElement("ul", { className: "nobullets" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/
      React.createElement(Card, {
        title: 'Software Engineer @ Scalable Capital',
        subtitle: 'July 2021 - Present',
        imgUrl: 'https://onlinebanken.com/wp-content/uploads/2020/08/scalable-capital-logo.png',
        linkUrl: 'https://de.scalable.capital/',
        description: /*#__PURE__*/
        React.createElement("p", null, "Currently he designs and develops features for the Wealth offerings of Scalable Capital. He mainly works on web portal built with React/Typescript/GraphQL/NextJs and Java/Kotlin.") }), /*#__PURE__*/


      React.createElement(Card, {
        title: 'Senior Software Engineer @ TeamViewer',
        subtitle: 'May 2018 - June 2021',
        imgUrl: 'https://static.teamviewer.com/resources/2019/07/TeamViewer_Logo_512x512.png',
        linkUrl: 'https://www.teamviewer.com',
        description: /*#__PURE__*/
        React.createElement("p", null, "He designed and developed features for the enterprise division of TeamViewer called ", /*#__PURE__*/React.createElement("a", { href: "https://www.teamviewer.com/en/teamviewer-tensor/" }, "TeamViewer Tensor"), ". Primarily he worked on the web portal built with React/Typescript and C#. He also worked on the ", /*#__PURE__*/React.createElement("a", { href: "https://www.teamviewer.com/en/" }, "TeamViewer"), " client written in C++. His other responsibilities include mentoring juniors and reviewing code. He also developed and introduced many internal tools to speedup development and testing.") }), /*#__PURE__*/


      React.createElement(Card, {
        title: 'Software Engineer @ Intel',
        subtitle: 'March 2017 - April 2018',
        imgUrl: 'https://e7.pngegg.com/pngimages/41/649/png-clipart-intel-core-i3-logo-transparency-intel-blue-text-thumbnail.png',
        linkUrl: 'https://www.intel.com',
        description: /*#__PURE__*/React.createElement("p", null, "At Intel he was responsible for the development of a tool called ", /*#__PURE__*/React.createElement("a", { href: "https://androidmtk.com/download-intel-phone-flash-tool" }, "Platform Flash Tool"), ". Written in C++/Qt, it is used to flash firmware onto Intel Android, IOT, PC platforms. He was responsible for answering customer requests, product enhancements and supporting the tool for all the major OS.") }), /*#__PURE__*/

      React.createElement(Card, {
        title: 'Software Engineer 2 @ Tektronix',
        subtitle: 'July 2014 - Feb 2017',
        imgUrl: 'https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_kv1rkiwk/def_height/2700/def_width/2700/version/100012/type/1',
        linkUrl: 'https://www.tektronix.com',
        description: /*#__PURE__*/React.createElement("p", null, "During his time in Tektronix Aditya was involved in multiple projects. Most notable is the development of the complete software running on ", /*#__PURE__*/React.createElement("a", { href: "https://in.tek.com/oscilloscope/tbs2000-basic-oscilloscope" }, "TBS200 series"), " oscilloscopes from scratch. Some other projects he was involved includes Mobile App Development for oscilloscopes and prototyping for new product ideas. It was his first company and he learned a lot during this time.") }))), /*#__PURE__*/



      React.createElement("h4", null, "Cool. But the position needs a speciality and i do not know if he has any experience with our stack."), /*#__PURE__*/
      React.createElement("p", null, "Aditya is comfortable with ", /*#__PURE__*/
      React.createElement("strong", null, "C++/Qt, Java, React/Typescript/Nodejs and Go"), ". His C++/Qt experience comes from all the three companies he has worked in whereas React/Typescript/Nodejs comes from TeamViewer (This site is written in React). Java by his Android App Development in Tektronix and on a personal level (10 apps in Google Play store) and Go from personal projects."), /*#__PURE__*/


      React.createElement("p", null, "He is also familiar with the most popular IDEs, CI/CD and agile processes. He follows Scrum for his day to day activities."), /*#__PURE__*/
      React.createElement("h4", null, "Nice. What but did he study?"), /*#__PURE__*/
      React.createElement("p", null, "He has a bachelors degree in Electronics and Communications Engineering from PES Institure of Technology, Bangalore, India. His CGPA was 9.03/10."), /*#__PURE__*/
      React.createElement("h4", null, "Awesome. I have one last question. Why should we hire him?"), /*#__PURE__*/
      React.createElement("p", null, "He is the right guy in your team if you want"), /*#__PURE__*/
      React.createElement("ul", null, /*#__PURE__*/
      React.createElement("li", null, "An experienced engineer who is passionate about software development and loves to solve challenging problems."), /*#__PURE__*/
      React.createElement("li", null, "Someone who knows how to manage releases, meet deadlines, deal with technical debt, mentor juniors and develop quality software."), /*#__PURE__*/
      React.createElement("li", null, "Hardworking and dedicated individual who is open to learning and can get stuff done."), /*#__PURE__*/
      React.createElement("li", null, "A partner in crime to travel, play badminton/volleyball watch MMA or go to an Eminem concert.")), /*#__PURE__*/

      React.createElement("a", { href: "https://drive.google.com/file/d/1yqwMmocZlSropn5ZaomSdwcGSIJaZVBm/view" }, "Download Resume"), /*#__PURE__*/
      React.createElement("h6", null, "Have a look at his works @ ", /*#__PURE__*/React.createElement("a", { href: "https://github.com/adityak368" }, "Github"), " and ", /*#__PURE__*/React.createElement("a", { href: "https://play.google.com/store/apps/developer?id=Aditya+K&hl=en_IN" }, "Google Play")))),



      isLoading ? /*#__PURE__*/React.createElement(Loader, null) :
      isNewsFetchError || !articles ? /*#__PURE__*/
      React.createElement(Message, { title: "Oops, something went wrong", description: "I could not get the latest breaking news!. But fear not as i am hard at work looking into what just happenned!" }) : /*#__PURE__*/


      React.createElement("div", { id: "additionalNews" }, /*#__PURE__*/
      React.createElement(NewsDisplay, { article: this.getRandomArticle() }), /*#__PURE__*/
      React.createElement(NewsDisplay, { article: this.getRandomArticle() }), /*#__PURE__*/
      React.createElement(NewsDisplay, { article: this.getRandomArticle() })), /*#__PURE__*/




      React.createElement("footer", { className: "footer" }, "Powered by NewsAPI.org")));




  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('root'));