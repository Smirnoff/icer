!function(){"use strict";for(var t=window.location.href,e=document.querySelectorAll(".nav > ul > li > a"),r=0;r<e.length;r++)e[r].className.replace(" select",""),t.match(/\/\/\S*/)[0]===e[r].href.match(/\/\/\S*/)[0]&&(e[r].className=e[r].className+" select")}();var QRCode;!function(){function t(t){this.mode=u.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;r>e;e++){var o=[],i=this.data.charCodeAt(e);i>65536?(o[0]=240|(1835008&i)>>>18,o[1]=128|(258048&i)>>>12,o[2]=128|(4032&i)>>>6,o[3]=128|63&i):i>2048?(o[0]=224|(61440&i)>>>12,o[1]=128|(4032&i)>>>6,o[2]=128|63&i):i>128?(o[0]=192|(1984&i)>>>6,o[1]=128|63&i):o[0]=i,this.parsedData.push(o)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function r(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var o=0;o<t.length-r;o++)this.num[o]=t[o+r]}function o(t,e){this.totalCount=t,this.dataCount=e}function i(){this.buffer=[],this.length=0}function n(){return"undefined"!=typeof CanvasRenderingContext2D}function a(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}function s(t,e){for(var r=1,o=h(t),i=0,n=p.length;n>=i;i++){var a=0;switch(e){case l.L:a=p[i][0];break;case l.M:a=p[i][1];break;case l.Q:a=p[i][2];break;case l.H:a=p[i][3]}if(a>=o)break;r++}if(r>p.length)throw new Error("Too long data");return r}function h(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;r>e;e++)t.put(this.parsedData[e],8)}},e.prototype={addData:function(e){var r=new t(e);this.dataList.push(r),this.dataCache=null},isDark:function(t,e){if(0>t||this.moduleCount<=t||0>e||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,r){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var o=0;o<this.moduleCount;o++){this.modules[o]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[o][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,r),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,r)},setupPositionProbePattern:function(t,e){for(var r=-1;7>=r;r++)if(!(-1>=t+r||this.moduleCount<=t+r))for(var o=-1;7>=o;o++)-1>=e+o||this.moduleCount<=e+o||(r>=0&&6>=r&&(0==o||6==o)||o>=0&&6>=o&&(0==r||6==r)||r>=2&&4>=r&&o>=2&&4>=o?this.modules[t+r][e+o]=!0:this.modules[t+r][e+o]=!1)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;8>r;r++){this.makeImpl(!0,r);var o=f.getLostPoint(this);(0==r||t>o)&&(t=o,e=r)}return e},createMovieClip:function(t,e,r){var o=t.createEmptyMovieClip(e,r),i=1;this.make();for(var n=0;n<this.modules.length;n++)for(var a=n*i,s=0;s<this.modules[n].length;s++){var h=s*i,u=this.modules[n][s];u&&(o.beginFill(0,100),o.moveTo(h,a),o.lineTo(h+i,a),o.lineTo(h+i,a+i),o.lineTo(h,a+i),o.endFill())}return o},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=f.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var o=t[e],i=t[r];if(null==this.modules[o][i])for(var n=-2;2>=n;n++)for(var a=-2;2>=a;a++)-2==n||2==n||-2==a||2==a||0==n&&0==a?this.modules[o+n][i+a]=!0:this.modules[o+n][i+a]=!1}},setupTypeNumber:function(t){for(var e=f.getBCHTypeNumber(this.typeNumber),r=0;18>r;r++){var o=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=o}for(var r=0;18>r;r++){var o=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=o}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,o=f.getBCHTypeInfo(r),i=0;15>i;i++){var n=!t&&1==(o>>i&1);6>i?this.modules[i][8]=n:8>i?this.modules[i+1][8]=n:this.modules[this.moduleCount-15+i][8]=n}for(var i=0;15>i;i++){var n=!t&&1==(o>>i&1);8>i?this.modules[8][this.moduleCount-i-1]=n:9>i?this.modules[8][15-i-1+1]=n:this.modules[8][15-i-1]=n}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,o=this.moduleCount-1,i=7,n=0,a=this.moduleCount-1;a>0;a-=2)for(6==a&&a--;;){for(var s=0;2>s;s++)if(null==this.modules[o][a-s]){var h=!1;n<t.length&&(h=1==(t[n]>>>i&1));var u=f.getMask(e,o,a-s);u&&(h=!h),this.modules[o][a-s]=h,i--,-1==i&&(n++,i=7)}if(o+=r,0>o||this.moduleCount<=o){o-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,r,n){for(var a=o.getRSBlocks(t,r),s=new i,h=0;h<n.length;h++){var u=n[h];s.put(u.mode,4),s.put(u.getLength(),f.getLengthInBits(u.mode,t)),u.write(s)}for(var l=0,h=0;h<a.length;h++)l+=a[h].dataCount;if(s.getLengthInBits()>8*l)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*l+")");for(s.getLengthInBits()+4<=8*l&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*l)break;if(s.put(e.PAD0,8),s.getLengthInBits()>=8*l)break;s.put(e.PAD1,8)}return e.createBytes(s,a)},e.createBytes=function(t,e){for(var o=0,i=0,n=0,a=new Array(e.length),s=new Array(e.length),h=0;h<e.length;h++){var u=e[h].dataCount,l=e[h].totalCount-u;i=Math.max(i,u),n=Math.max(n,l),a[h]=new Array(u);for(var g=0;g<a[h].length;g++)a[h][g]=255&t.buffer[g+o];o+=u;var d=f.getErrorCorrectPolynomial(l),c=new r(a[h],d.getLength()-1),p=c.mod(d);s[h]=new Array(d.getLength()-1);for(var g=0;g<s[h].length;g++){var m=g+p.getLength()-s[h].length;s[h][g]=m>=0?p.get(m):0}}for(var v=0,g=0;g<e.length;g++)v+=e[g].totalCount;for(var _=new Array(v),C=0,g=0;i>g;g++)for(var h=0;h<e.length;h++)g<a[h].length&&(_[C++]=a[h][g]);for(var g=0;n>g;g++)for(var h=0;h<e.length;h++)g<s[h].length&&(_[C++]=s[h][g]);return _};for(var u={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l={L:1,M:0,Q:3,H:2},g={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;f.getBCHDigit(e)-f.getBCHDigit(f.G15)>=0;)e^=f.G15<<f.getBCHDigit(e)-f.getBCHDigit(f.G15);return(t<<10|e)^f.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;f.getBCHDigit(e)-f.getBCHDigit(f.G18)>=0;)e^=f.G18<<f.getBCHDigit(e)-f.getBCHDigit(f.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return f.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case g.PATTERN000:return(e+r)%2==0;case g.PATTERN001:return e%2==0;case g.PATTERN010:return r%3==0;case g.PATTERN011:return(e+r)%3==0;case g.PATTERN100:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case g.PATTERN101:return e*r%2+e*r%3==0;case g.PATTERN110:return(e*r%2+e*r%3)%2==0;case g.PATTERN111:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new r([1],0),o=0;t>o;o++)e=e.multiply(new r([1,d.gexp(o)],0));return e},getLengthInBits:function(t,e){if(e>=1&&10>e)switch(t){case u.MODE_NUMBER:return 10;case u.MODE_ALPHA_NUM:return 9;case u.MODE_8BIT_BYTE:return 8;case u.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(27>e)switch(t){case u.MODE_NUMBER:return 12;case u.MODE_ALPHA_NUM:return 11;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(41>e))throw new Error("type:"+e);switch(t){case u.MODE_NUMBER:return 14;case u.MODE_ALPHA_NUM:return 13;case u.MODE_8BIT_BYTE:return 16;case u.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,o=0;e>o;o++)for(var i=0;e>i;i++){for(var n=0,a=t.isDark(o,i),s=-1;1>=s;s++)if(!(0>o+s||o+s>=e))for(var h=-1;1>=h;h++)0>i+h||i+h>=e||(0!=s||0!=h)&&a==t.isDark(o+s,i+h)&&n++;n>5&&(r+=3+n-5)}for(var o=0;e-1>o;o++)for(var i=0;e-1>i;i++){var u=0;t.isDark(o,i)&&u++,t.isDark(o+1,i)&&u++,t.isDark(o,i+1)&&u++,t.isDark(o+1,i+1)&&u++,(0==u||4==u)&&(r+=3)}for(var o=0;e>o;o++)for(var i=0;e-6>i;i++)t.isDark(o,i)&&!t.isDark(o,i+1)&&t.isDark(o,i+2)&&t.isDark(o,i+3)&&t.isDark(o,i+4)&&!t.isDark(o,i+5)&&t.isDark(o,i+6)&&(r+=40);for(var i=0;e>i;i++)for(var o=0;e-6>o;o++)t.isDark(o,i)&&!t.isDark(o+1,i)&&t.isDark(o+2,i)&&t.isDark(o+3,i)&&t.isDark(o+4,i)&&!t.isDark(o+5,i)&&t.isDark(o+6,i)&&(r+=40);for(var l=0,i=0;e>i;i++)for(var o=0;e>o;o++)t.isDark(o,i)&&l++;var g=Math.abs(100*l/e/e-50)/5;return r+=10*g}},d={glog:function(t){if(1>t)throw new Error("glog("+t+")");return d.LOG_TABLE[t]},gexp:function(t){for(;0>t;)t+=255;for(;t>=256;)t-=255;return d.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;8>c;c++)d.EXP_TABLE[c]=1<<c;for(var c=8;256>c;c++)d.EXP_TABLE[c]=d.EXP_TABLE[c-4]^d.EXP_TABLE[c-5]^d.EXP_TABLE[c-6]^d.EXP_TABLE[c-8];for(var c=0;255>c;c++)d.LOG_TABLE[d.EXP_TABLE[c]]=c;r.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),o=0;o<this.getLength();o++)for(var i=0;i<t.getLength();i++)e[o+i]^=d.gexp(d.glog(this.get(o))+d.glog(t.get(i)));return new r(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=d.glog(this.get(0))-d.glog(t.get(0)),o=new Array(this.getLength()),i=0;i<this.getLength();i++)o[i]=this.get(i);for(var i=0;i<t.getLength();i++)o[i]^=d.gexp(d.glog(t.get(i))+e);return new r(o,0).mod(t)}},o.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],o.getRSBlocks=function(t,e){var r=o.getRsBlockTable(t,e);if(void 0==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],a=0;i>a;a++)for(var s=r[3*a+0],h=r[3*a+1],u=r[3*a+2],l=0;s>l;l++)n.push(new o(h,u));return n},o.getRsBlockTable=function(t,e){switch(e){case l.L:return o.RS_BLOCK_TABLE[4*(t-1)+0];case l.M:return o.RS_BLOCK_TABLE[4*(t-1)+1];case l.Q:return o.RS_BLOCK_TABLE[4*(t-1)+2];case l.H:return o.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},i.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;e>r;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var p=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],m=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var o in e)e.hasOwnProperty(o)&&r.setAttribute(o,e[o]);return r}var r=this._htOption,o=this._el,i=t.getModuleCount();Math.floor(r.width/i),Math.floor(r.height/i);this.clear();var n=e("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:r.colorLight});n.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),o.appendChild(n),n.appendChild(e("rect",{fill:r.colorLight,width:"100%",height:"100%"})),n.appendChild(e("rect",{fill:r.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;i>a;a++)for(var s=0;i>s;s++)if(t.isDark(a,s)){var h=e("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),n.appendChild(h)}},t.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},t}(),v="svg"===document.documentElement.tagName.toLowerCase(),_=v?m:n()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){var o=document.createElement("img"),i=function(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)},n=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)};return o.onabort=i,o.onerror=i,o.onload=n,void(o.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}r._bSupportDataURI===!0&&r._fSuccess?r._fSuccess.call(r):r._bSupportDataURI===!1&&r._fFail&&r._fFail.call(r)}if(this._android&&this._android<=2.1){var r=1/window.devicePixelRatio,o=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,i,n,a,s,h,u,l){if("nodeName"in t&&/img/i.test(t.nodeName))for(var g=arguments.length-1;g>=1;g--)arguments[g]=arguments[g]*r;else"undefined"==typeof u&&(arguments[1]*=r,arguments[2]*=r,arguments[3]*=r,arguments[4]*=r);o.apply(this,arguments)}}var i=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return i.prototype.draw=function(t){var e=this._elImage,r=this._oContext,o=this._htOption,i=t.getModuleCount(),n=o.width/i,a=o.height/i,s=Math.round(n),h=Math.round(a);e.style.display="none",this.clear();for(var u=0;i>u;u++)for(var l=0;i>l;l++){var g=t.isDark(u,l),f=l*n,d=u*a;r.strokeStyle=g?o.colorDark:o.colorLight,r.lineWidth=1,r.fillStyle=g?o.colorDark:o.colorLight,r.fillRect(f,d,n,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,h),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,h)}this._bIsPainted=!0},i.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},i.prototype.isPainted=function(){return this._bIsPainted},i.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},i.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},i}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,r=this._el,o=t.getModuleCount(),i=Math.floor(e.width/o),n=Math.floor(e.height/o),a=['<table style="border:0;border-collapse:collapse;">'],s=0;o>s;s++){a.push("<tr>");for(var h=0;o>h;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+i+"px;height:"+n+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var u=r.childNodes[0],l=(e.width-u.offsetWidth)/2,g=(e.height-u.offsetHeight)/2;l>0&&g>0&&(u.style.margin=g+"px "+l+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(_=m),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new _(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(t){this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=l}();