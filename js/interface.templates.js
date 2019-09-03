this["Fliplet"] = this["Fliplet"] || {};
this["Fliplet"]["Widget"] = this["Fliplet"]["Widget"] || {};
this["Fliplet"]["Widget"]["Templates"] = this["Fliplet"]["Widget"]["Templates"] || {};

this["Fliplet"]["Widget"]["Templates"]["templates.image"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " title-default-text ";
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data}) : helper)));
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-4 col-sm-3 col-md-2 item-holder file image\" data-file-id=\""
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "\" data-file-ext=\""
    + alias4(((helper = (helper = helpers.ext || (depth0 != null ? depth0.ext : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ext","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"image-holder\" style=\"background-image: url('"
    + alias4(((helper = (helper = helpers.urlSmall || (depth0 != null ? depth0.urlSmall : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"urlSmall","hash":{},"data":data}) : helper)))
    + "');\"\n         style=\"{color: blue; background: white}\">\n        <div class=\"image-overlay\">\n            <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n        </div>\n    </div>\n    <div class=\"image-title\">\n        <p>\n            <span class=\"title-text "
    + ((stack1 = helpers.unless.call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"unless","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " \">"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</span>\n        </p>\n    </div>\n</div>";
},"useData":true});