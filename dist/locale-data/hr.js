ReactIntlMixin.__addLocaleData({"locale":"hr","pluralRuleFunction":function (n) {var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length,f=parseInt(n.toString().replace(/^[^.]*\.?/,""),10);n=Math.floor(n);if(v===0&&i%10===1&&((i%100!==11)||f%10===1&&(f%100!==11)))return"one";if(v===0&&i%10===Math.floor(i%10)&&i%10>=2&&i%10<=4&&(!(i%100>=12&&i%100<=14)||f%10===Math.floor(f%10)&&f%10>=2&&f%10<=4&&!(f%100>=12&&f%100<=14)))return"few";return"other";},"fields":{"second":{"displayName":"Sekunda","relative":{"0":"sada"},"relativeTime":{"future":{"one":"za {0} sekundu","few":"za {0} sekunde","other":"za {0} sekundi"},"past":{"one":"prije {0} sekundu","few":"prije {0} sekunde","other":"prije {0} sekundi"}}},"minute":{"displayName":"Minuta","relativeTime":{"future":{"one":"za {0} minutu","few":"za {0} minute","other":"za {0} minuta"},"past":{"one":"prije {0} minutu","few":"prije {0} minute","other":"prije {0} minuta"}}},"hour":{"displayName":"Sat","relativeTime":{"future":{"one":"za {0} sat","few":"za {0} sata","other":"za {0} sati"},"past":{"one":"prije {0} sat","few":"prije {0} sata","other":"prije {0} sati"}}},"day":{"displayName":"Dan","relative":{"0":"danas","1":"sutra","2":"prekosutra","-2":"prekjučer","-1":"jučer"},"relativeTime":{"future":{"one":"za {0} dan","few":"za {0} dana","other":"za {0} dana"},"past":{"one":"prije {0} dan","few":"prije {0} dana","other":"prije {0} dana"}}},"month":{"displayName":"Mjesec","relative":{"0":"ovaj mjesec","1":"sljedeći mjesec","-1":"prošli mjesec"},"relativeTime":{"future":{"one":"za {0} mjesec","few":"za {0} mjeseca","other":"za {0} mjeseci"},"past":{"one":"prije {0} mjesec","few":"prije {0} mjeseca","other":"prije {0} mjeseci"}}},"year":{"displayName":"Godina","relative":{"0":"ove godine","1":"sljedeće godine","-1":"prošle godine"},"relativeTime":{"future":{"one":"za {0} godinu","few":"za {0} godine","other":"za {0} godina"},"past":{"one":"prije {0} godinu","few":"prije {0} godine","other":"prije {0} godina"}}}}});