<pre class='code-toolbar line-numbers'><code class='language-javascript'>angular.module("ServicesApp").controller("ServicesController", function(){
    var self=this;
    this.remise="Code promo invalide";
    this.codePromo="";
    this.services = [
        {
            name: 'Web Development',
            price: 300,
            active:true
        },{
            name: 'Design',
            price: 400,
            active:false
        },{
            name: 'Integration',
            price: 250,
            active:false
        },{
            name: 'Formation',
            price: 220,
            active:false
        }
    ];
    http.get('promo.json').success(function(response) {
        self.codesPromo = response.data;
    });
    this.IsNumeric=function(input){
        return (input - 0) == input && (''+input).trim().length > 0;
    };
    this.applyCode=function(){
        self.remise="Code promo invalide";
        if(self.codePromo in self.codesPromo){
            self.remise=self.codesPromo[self.codePromo]*self.total();
        }
    };
    self.toggleActive = function(s){
        s.active = !s.active;
        self.applyCode();
    };
    self.total = function(){

        var total = 0;
        self.count=0;

        angular.forEach(self.services, function(s){
            if (s.active){
                total+= s.price;
                self.count++;
            }
        });

        return total;
    };
} ]);
</pre>
