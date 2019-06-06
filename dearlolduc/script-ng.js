angular.module('Tutorials', []).controller('getAnswers', function ($scope, $element) {
	$scope.sections = sections;
	$scope.loadFromParent = function (tut) {
      alert('parent index = ' + tut);
		};
});

var sections = [{
    name: "Reading Korean",
    tutorials: [{
        active: "inactive",
        name: "Vowels"
    },{
        active: "inactive",
        name: "Consonants"
    },{
        active: "inactive",
        name: "Simple Words"
    },{
        active: "inactive",
        name: "Harder Words"
    }]
},{
	name: "Conjugations",
	tutorials: [{
		active: "inactive",
		name: "ㅗ and ㅏ regular"
		}, {
		active: "inactive",
		name: "ㅜ, ㅓ and ㅣ regular"
		}, {
		active: "inactive",
		name: "ㅏ and ㅓ reductive"
	}, {
		active: "inactive",
		name: "ㅗ and ㅜ reductive"
	}, {
		active: "inactive",
		name: "ㅣ reductive"
	}]
}, {
	name: "Sentence Building",
	tutorials: [{
		active: "inactive",
		name: "Particles"
	}, {
		active: "inactive",
		name: "Word Order"
	}]
}];