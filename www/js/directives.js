/**
 * Created by horri on 14/05/2016.
 */
angular.module('starter.directives', [])
.directive("sparkline", ['$parse',function($parse) {
  return {
    restrict: "EA",
    link: function(scope, el, attrs) {

      var model = attrs.values || el.text();
      var opts = {};

      if(attrs.opts) angular.extend(opts, angular.fromJson(attrs.opts));
      else {
        angular.extend(opts, attrs);
      }

      var project = scope.$eval(attrs.model);
      // The following options have to be converted to array from string
      // Type 		Options
      // ====			========
      // Bar 			stackedBarColor
      // Bullet		rangeColors
      // Pie 			sliceColors
      // NOte: when sepcifying multiple colors for above attributes, don't put spaces between them
      // Eg: [#4CAF50,#38B4EE,#eee]  // right
      // 	[#4CAF50, #38B4EE, #eee]	// wrong

      // for bar
      if(attrs.stackedBarColor) {
        opts.stackedBarColor = attrs.stackedBarColor.replace("[", "").replace("]", "").split(",");
      }
      // for bullet
      if(attrs.rangeColors) {
        opts.rangeColors = attrs.rangeColors.replace("[", "").replace("]", "").split(",");
      }
      // for pie
      if(attrs.sliceColors) {
        /* opts.sliceColors =(function(){
          var start = moment(project.starts);
          var end = (project.ends)?moment(project.ends):project.ends;
          var diffByDays=  moment().diff(start,'days');
          var duration = (project.ends)? end.diff(start,'days'):20;
          var percent = (diffByDays/parseFloat(duration));
          percent = (percent<0)? 0 : percent;
          percent = (percent>1)? 1 : percent;
          var rgb = "rgb(" + Math.round(255 * percent) + ", " + Math.round(255 * (1-percent)) + ", 0)";
          var hex = rgb2hex(rgb);
          hex = (hex)?hex:"#4CAF50";
          return [hex,"#EEE"];
        }());*/
         attrs.sliceColors.replace("[", "").replace("]", "").split(",");

      }

      var invoker = $parse(attrs.sparkline);
      model = invoker(scope, {param: project});


      if(angular.isString(model)){
        model = JSON.parse("[" + model + "]");

      }

      el.sparkline(model, opts);

    }
  }
}]);

