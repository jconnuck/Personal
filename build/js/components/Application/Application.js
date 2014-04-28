/** @jsx React.DOM */
var React = require('React');
var ArbiterMixin = require('mixins/ArbiterMixin');

/** Stores */

/** Components */

var Application = React.createClass({displayName: 'Application',
  mixins: [ArbiterMixin],
  
  render: function () {
    return (
      React.DOM.div( {className:"Application"}, 
        React.DOM.div( {className:"header"}, "John Connuck"),
		React.DOM.div( {className:"fg"}, 
			React.DOM.img( {className:"pic", src:"gameday2.jpg", alt:""}),
			React.DOM.div( {className:"circle"}, "John Connuck"),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}, React.DOM.a( {href:"mailto:johnconnuck@gmail.com"}, "johnconnuck@gmail.com")),
			React.DOM.div( {className:"circle"}, "Facebook Engineer"),
			React.DOM.div( {className:"circle"}, "Maker: ", React.DOM.a( {href:"www.tableslip.com"}, "Tableslip.com")),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}, "New York City Kid"),
			React.DOM.div( {className:"circle"}, "3x Fantasy Baseball Champ"),
			React.DOM.div( {className:"circle"}, "Brand Enthusiast"),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}, "Stanley Kubrick Fan"),
			React.DOM.div( {className:"circle"}, React.DOM.a( {href:"https://www.duolingo.com/jconnuck"}, "Duolingo Italian Level 12")),
			React.DOM.div( {className:"circle"}, "Diet Coke Guzzler"),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}, "Guitar Amateur"),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}, "Vegetarian"),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"}),
			React.DOM.div( {className:"circle"})

		)
			    	// <div class="links">
			    	// 	<a href="" class="projects">Projects</a>
			    	// 	<a href="" class="about">About Me</a>
			    	// </div>
      )
    );
  }
});

module.exports = Application;