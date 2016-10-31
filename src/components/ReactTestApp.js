'use strict';

var React = require('react/addons');

// CSS
//引入资源方式
require('normalize.css');
require('../styles/main.scss');

//获取图片相关数据
var imageDatas = require('../data/imageDatas.json');

function genIamgeURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++){
        var singleImageData = imageDatasArr[i];
        singleImageData.imageURL = require('../images/' + singleImageData.fileName);

        imageDatasArr[i] = singleImageData;

    }
    return imageDatasArr;
}

imageDatas = genIamgeURL(imageDatas);

var ReactTestApp = React.createClass({
  render: function() {
    return (
       <section>
           <section className="img-sec">

           </section>
           <nav className="controller-nav">

           </nav>
       </section>
    );
  }
});
React.render(<ReactTestApp />, document.getElementById('content')); // jshint ignore:line

//暴露出去
module.exports = ReactTestApp;

