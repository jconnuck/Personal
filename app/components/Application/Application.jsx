/** @jsx React.DOM */
var React = require('React');
var ArbiterMixin = require('mixins/ArbiterMixin');

/** Stores */

/** Components */

var Application = React.createClass({
  mixins: [ArbiterMixin],
  
  render: function () {
    return (
      <div class="Application">
        <div class="header">John Connuck</div>
		<div class="fg">
			<img class="pic" src="gameday2.jpg" alt=""/>
			<div class="circle">John Connuck</div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"><a href="mailto:johnconnuck@gmail.com">johnconnuck@gmail.com</a></div>
			<div class="circle">Facebook Engineer</div>
			<div class="circle">Maker: <a href="www.tableslip.com">Tableslip.com</a></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle">3x Fantasy Baseball Champ</div>
			<div class="circle">Brand Enthusiast: <a class="link" href="http://www.underconsideration.com/brandnew/#.U12TFK1dUkk">Brand New</a></div>
			<div class="circle">Stanley Kubrick Fan</div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle">Diet Coke Guzzler</div>
			<div class="circle">Italian Food Lover</div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>
			<div class="circle"></div>

		</div>
			    	// <div class="links">
			    	// 	<a href="" class="projects">Projects</a>
			    	// 	<a href="" class="about">About Me</a>
			    	// </div>
      </div>
    );
  }
});

module.exports = Application;