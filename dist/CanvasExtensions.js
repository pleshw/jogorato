var CanvasExtensions;(()=>{"use strict";CanvasRenderingContext2D.prototype.extensionFunction=function(t,e,n,r,o,s,i,l,a){var h,d=(t=(t=t.replace(/[\n]/g," \n ")).replace(/\r/g,"")).split(/[ ]+/),x=this.measureText(" ").width,g=[],p=0,f=0;g[p]={},g[p].Words=[];let u=0;for(;u<d.length;){var W=d[u];if("\n"==W)g[p].EndParagraph=!0,f=0,g[++p]={},g[p].Words=[],u++;else if((h={}).l=this.measureText(W).width,0===f){for(;h.l>r;)W=W.slice(0,W.length-1),h.l=this.measureText(W).width;if(""===W)return;h.word=W,g[p].Words.push(h),f=h.l,W!=d[u]?d[u]=d[u].slice(W.length,d[u].length):u++}else f+x+h.l>r?(g[p].EndParagraph=!1,f=0,g[++p]={},g[p].Words=[]):(h.word=W,g[p].Words.push(h),f+=x+h.l,u++)}0===f&&g[p].pop(),g[p].EndParagraph=!0;for(var c,v=l*g.length;v>o;)g.pop(),v=l*g.length;c="bottom"==i?n+o-v+l:"center"==i?n+o/2-v/2+l:n+l;var T=this.textAlign;for(var C in this.textAlign="left",g){var w,E,k=0;for(h in g[C].Words)k+=g[C].Words[h].l;for(h in"center"==s?(E=x,w=e+r/2-(k+x*(g[C].Words.length-1))/2):"justify"!=s||g[C].EndParagraph?"right"==s?(w=e+r-(k+x*(g[C].Words.length-1)),E=x):(w=e,E=x):(w=e,E=(r-k)/(g[C].Words.length-1)),g[C].Words)"fillText"==a?this.fillText(g[C].Words[h].word,w,c):"strokeText"==a&&this.strokeText(g[C].Words[h].word,w,c),w+=g[C].Words[h].l+E;c+=l}this.textAlign=T},CanvasRenderingContext2D.prototype.extensionFillText=function(t,e,n,r,o,s,i,l){this.extensionFunction(t,e,n,r,o,i,s,l,"fillText")},CanvasRenderingContext2D.prototype.extensionStrokeText=function(t,e,n,r,o,s,i,l){this.extensionFunction(t,e,n,r,o,i,s,l,"strokeText")},CanvasExtensions={}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0FBSWIsTUFBTUUsT0FBUyxJQVE3Q0wsRUFBTWdCLEdBQUliLE1BQ1QsWUFBTlosRUFDSE0sS0FBS3VCLFNBQVVwQixFQUFNZ0IsR0FBSWIsTUFBTVgsR0FBSWMsS0FBTVcsRUFBSUwsR0FDN0IsY0FBTnJCLEdBQ1ZNLEtBQUt3QixXQUFZckIsRUFBTWdCLEdBQUliLE1BQU1YLEdBQUljLEtBQU1XLEVBQUlMLEdBRWpESyxHQUFNakIsRUFBTWdCLEdBQUliLE1BQU1YLEdBQUlnQixFQUFJVSxFQUVoQ04sR0FBTXRCLEMsQ0FFUk8sS0FBS2tCLFVBQVlELENBQ25CLEVBR0FsQyx5QkFBeUJDLFVBQVV5QyxrQkFBb0IsU0FBV3ZDLEVBQWNDLEVBQVdDLEVBQVdDLEVBQVdDLEVBQVdFLEVBQWdCRCxFQUFnQkUsR0FDMUpPLEtBQUtmLGtCQUFtQkMsRUFBTUMsRUFBR0MsRUFBR0MsRUFBR0MsRUFBR0MsRUFBUUMsRUFBUUMsRUFBWSxXQUN4RSxFQUVBVix5QkFBeUJDLFVBQVUwQyxvQkFBc0IsU0FBV3hDLEVBQWNDLEVBQVdDLEVBQVdDLEVBQVdDLEVBQVdFLEVBQWdCRCxFQUFnQkUsR0FDNUpPLEtBQUtmLGtCQUFtQkMsRUFBTUMsRUFBR0MsRUFBR0MsRUFBR0MsRUFBR0MsRUFBUUMsRUFBUUMsRUFBWSxhQUN4RSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vQ2FudmFzRXh0ZW5zaW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW50ZXJmYWNlIENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB7XHJcbiAgZXh0ZW5zaW9uRnVuY3Rpb24oIHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBoQWxpZ246IHN0cmluZywgdkFsaWduOiBzdHJpbmcsIGxpbmVIZWlnaHQ6IG51bWJlciwgZm46IHN0cmluZyApOiB2b2lkO1xyXG4gIGV4dGVuc2lvbkZpbGxUZXh0KCB0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgdkFsaWduOiBzdHJpbmcsIGhBbGlnbjogc3RyaW5nLCBsaW5lSGVpZ2h0OiBudW1iZXIgKTogdm9pZDtcclxuICBleHRlbnNpb25TdHJva2VUZXh0KCB0ZXh0OiBzdHJpbmcsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgdkFsaWduOiBzdHJpbmcsIGhBbGlnbjogc3RyaW5nLCBsaW5lSGVpZ2h0OiBudW1iZXIgKTogdm9pZDtcclxufVxyXG5cclxuQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELnByb3RvdHlwZS5leHRlbnNpb25GdW5jdGlvbiA9IGZ1bmN0aW9uICggdGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGhBbGlnbjogc3RyaW5nLCB2QWxpZ246IHN0cmluZywgbGluZUhlaWdodDogbnVtYmVyLCBmbjogc3RyaW5nICkge1xyXG4gIHRleHQgPSB0ZXh0LnJlcGxhY2UoIC9bXFxuXS9nLCBcIiBcXG4gXCIgKTtcclxuICB0ZXh0ID0gdGV4dC5yZXBsYWNlKCAvXFxyL2csIFwiXCIgKTtcclxuICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KCAvWyBdKy8gKTtcclxuICB2YXIgc3AgPSB0aGlzLm1lYXN1cmVUZXh0KCAnICcgKS53aWR0aDtcclxuICB2YXIgbGluZXM6IGFueVtdID0gW107XHJcbiAgdmFyIGFjdHVhbExpbmUgPSAwO1xyXG4gIHZhciBhY3R1YWxTaXplID0gMDtcclxuICB2YXIgd286IGFueTtcclxuICBsaW5lc1thY3R1YWxMaW5lXSA9IHt9O1xyXG4gIGxpbmVzW2FjdHVhbExpbmVdLldvcmRzID0gW107XHJcbiAgbGV0IGkgPSAwO1xyXG4gIHdoaWxlICggaSA8IHdvcmRzLmxlbmd0aCApIHtcclxuICAgIHZhciB3b3JkID0gd29yZHNbaV07XHJcbiAgICBpZiAoIHdvcmQgPT0gXCJcXG5cIiApIHtcclxuICAgICAgbGluZXNbYWN0dWFsTGluZV0uRW5kUGFyYWdyYXBoID0gdHJ1ZTtcclxuICAgICAgYWN0dWFsTGluZSsrO1xyXG4gICAgICBhY3R1YWxTaXplID0gMDtcclxuICAgICAgbGluZXNbYWN0dWFsTGluZV0gPSB7fTtcclxuICAgICAgbGluZXNbYWN0dWFsTGluZV0uV29yZHMgPSBbXTtcclxuICAgICAgaSsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd28gPSB7fTtcclxuICAgICAgd28ubCA9IHRoaXMubWVhc3VyZVRleHQoIHdvcmQgKS53aWR0aDtcclxuICAgICAgaWYgKCBhY3R1YWxTaXplID09PSAwICkge1xyXG4gICAgICAgIHdoaWxlICggd28ubCA+IHcgKSB7XHJcbiAgICAgICAgICB3b3JkID0gd29yZC5zbGljZSggMCwgd29yZC5sZW5ndGggLSAxICk7XHJcbiAgICAgICAgICB3by5sID0gdGhpcy5tZWFzdXJlVGV4dCggd29yZCApLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIHdvcmQgPT09IFwiXCIgKSByZXR1cm47IC8vIEkgY2FuJ3QgZmlsbCBhIHNpbmdsZSBjaGFyYWN0ZXJcclxuICAgICAgICB3by53b3JkID0gd29yZDtcclxuICAgICAgICBsaW5lc1thY3R1YWxMaW5lXS5Xb3Jkcy5wdXNoKCB3byApO1xyXG4gICAgICAgIGFjdHVhbFNpemUgPSB3by5sO1xyXG4gICAgICAgIGlmICggd29yZCAhPSB3b3Jkc1tpXSApIHtcclxuICAgICAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0uc2xpY2UoIHdvcmQubGVuZ3RoLCB3b3Jkc1tpXS5sZW5ndGggKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIGFjdHVhbFNpemUgKyBzcCArIHdvLmwgPiB3ICkge1xyXG4gICAgICAgICAgbGluZXNbYWN0dWFsTGluZV0uRW5kUGFyYWdyYXBoID0gZmFsc2U7XHJcbiAgICAgICAgICBhY3R1YWxMaW5lKys7XHJcbiAgICAgICAgICBhY3R1YWxTaXplID0gMDtcclxuICAgICAgICAgIGxpbmVzW2FjdHVhbExpbmVdID0ge307XHJcbiAgICAgICAgICBsaW5lc1thY3R1YWxMaW5lXS5Xb3JkcyA9IFtdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB3by53b3JkID0gd29yZDtcclxuICAgICAgICAgIGxpbmVzW2FjdHVhbExpbmVdLldvcmRzLnB1c2goIHdvICk7XHJcbiAgICAgICAgICBhY3R1YWxTaXplICs9IHNwICsgd28ubDtcclxuICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaWYgKCBhY3R1YWxTaXplID09PSAwICkgbGluZXNbYWN0dWFsTGluZV0ucG9wKCk7XHJcbiAgbGluZXNbYWN0dWFsTGluZV0uRW5kUGFyYWdyYXBoID0gdHJ1ZTtcclxuXHJcbiAgdmFyIHRvdGFsSCA9IGxpbmVIZWlnaHQgKiBsaW5lcy5sZW5ndGg7XHJcbiAgd2hpbGUgKCB0b3RhbEggPiBoICkge1xyXG4gICAgbGluZXMucG9wKCk7XHJcbiAgICB0b3RhbEggPSBsaW5lSGVpZ2h0ICogbGluZXMubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgdmFyIHl5O1xyXG4gIGlmICggdkFsaWduID09IFwiYm90dG9tXCIgKSB7XHJcbiAgICB5eSA9IHkgKyBoIC0gdG90YWxIICsgbGluZUhlaWdodDtcclxuICB9IGVsc2UgaWYgKCB2QWxpZ24gPT0gXCJjZW50ZXJcIiApIHtcclxuICAgIHl5ID0geSArIGggLyAyIC0gdG90YWxIIC8gMiArIGxpbmVIZWlnaHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHl5ID0geSArIGxpbmVIZWlnaHQ7XHJcbiAgfVxyXG5cclxuICB2YXIgb2xkVGV4dEFsaWduID0gdGhpcy50ZXh0QWxpZ247XHJcbiAgdGhpcy50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuXHJcbiAgZm9yICggdmFyIGxpIGluIGxpbmVzICkge1xyXG4gICAgdmFyIHRvdGFsTGVuZ3RoID0gMDtcclxuICAgIHZhciB4eCwgdXNwO1xyXG4gICAgZm9yICggd28gaW4gbGluZXNbbGldLldvcmRzICkgdG90YWxMZW5ndGggKz0gbGluZXNbbGldLldvcmRzW3dvXS5sO1xyXG4gICAgaWYgKCBoQWxpZ24gPT0gXCJjZW50ZXJcIiApIHtcclxuICAgICAgdXNwID0gc3A7XHJcbiAgICAgIHh4ID0geCArIHcgLyAyIC0gKCB0b3RhbExlbmd0aCArIHNwICogKCBsaW5lc1tsaV0uV29yZHMubGVuZ3RoIC0gMSApICkgLyAyO1xyXG4gICAgfSBlbHNlIGlmICggKCBoQWxpZ24gPT0gXCJqdXN0aWZ5XCIgKSAmJiAoICFsaW5lc1tsaV0uRW5kUGFyYWdyYXBoICkgKSB7XHJcbiAgICAgIHh4ID0geDtcclxuICAgICAgdXNwID0gKCB3IC0gdG90YWxMZW5ndGggKSAvICggbGluZXNbbGldLldvcmRzLmxlbmd0aCAtIDEgKTtcclxuICAgIH0gZWxzZSBpZiAoIGhBbGlnbiA9PSBcInJpZ2h0XCIgKSB7XHJcbiAgICAgIHh4ID0geCArIHcgLSAoIHRvdGFsTGVuZ3RoICsgc3AgKiAoIGxpbmVzW2xpXS5Xb3Jkcy5sZW5ndGggLSAxICkgKTtcclxuICAgICAgdXNwID0gc3A7XHJcbiAgICB9IGVsc2UgeyAvLyBsZWZ0XHJcbiAgICAgIHh4ID0geDtcclxuICAgICAgdXNwID0gc3A7XHJcbiAgICB9XHJcbiAgICBmb3IgKCB3byBpbiBsaW5lc1tsaV0uV29yZHMgKSB7XHJcbiAgICAgIGlmICggZm4gPT0gXCJmaWxsVGV4dFwiICkge1xyXG4gICAgICAgIHRoaXMuZmlsbFRleHQoIGxpbmVzW2xpXS5Xb3Jkc1t3b10ud29yZCwgeHgsIHl5ICk7XHJcbiAgICAgIH0gZWxzZSBpZiAoIGZuID09IFwic3Ryb2tlVGV4dFwiICkge1xyXG4gICAgICAgIHRoaXMuc3Ryb2tlVGV4dCggbGluZXNbbGldLldvcmRzW3dvXS53b3JkLCB4eCwgeXkgKTtcclxuICAgICAgfVxyXG4gICAgICB4eCArPSBsaW5lc1tsaV0uV29yZHNbd29dLmwgKyB1c3A7XHJcbiAgICB9XHJcbiAgICB5eSArPSBsaW5lSGVpZ2h0O1xyXG4gIH1cclxuICB0aGlzLnRleHRBbGlnbiA9IG9sZFRleHRBbGlnbjtcclxufVxyXG4gIDtcclxuXHJcbkNhbnZhc1JlbmRlcmluZ0NvbnRleHQyRC5wcm90b3R5cGUuZXh0ZW5zaW9uRmlsbFRleHQgPSBmdW5jdGlvbiAoIHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCB2QWxpZ246IHN0cmluZywgaEFsaWduOiBzdHJpbmcsIGxpbmVIZWlnaHQ6IG51bWJlciApIHtcclxuICB0aGlzLmV4dGVuc2lvbkZ1bmN0aW9uKCB0ZXh0LCB4LCB5LCB3LCBoLCBoQWxpZ24sIHZBbGlnbiwgbGluZUhlaWdodCwgXCJmaWxsVGV4dFwiICk7XHJcbn07XHJcblxyXG5DYW52YXNSZW5kZXJpbmdDb250ZXh0MkQucHJvdG90eXBlLmV4dGVuc2lvblN0cm9rZVRleHQgPSBmdW5jdGlvbiAoIHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCB2QWxpZ246IHN0cmluZywgaEFsaWduOiBzdHJpbmcsIGxpbmVIZWlnaHQ6IG51bWJlciApIHtcclxuICB0aGlzLmV4dGVuc2lvbkZ1bmN0aW9uKCB0ZXh0LCB4LCB5LCB3LCBoLCBoQWxpZ24sIHZBbGlnbiwgbGluZUhlaWdodCwgXCJzdHJva2VUZXh0XCIgKTtcclxufTsiXSwibmFtZXMiOlsiQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIiwicHJvdG90eXBlIiwiZXh0ZW5zaW9uRnVuY3Rpb24iLCJ0ZXh0IiwieCIsInkiLCJ3IiwiaCIsImhBbGlnbiIsInZBbGlnbiIsImxpbmVIZWlnaHQiLCJmbiIsIndvIiwid29yZHMiLCJyZXBsYWNlIiwic3BsaXQiLCJzcCIsInRoaXMiLCJtZWFzdXJlVGV4dCIsIndpZHRoIiwibGluZXMiLCJhY3R1YWxMaW5lIiwiYWN0dWFsU2l6ZSIsIldvcmRzIiwiaSIsImxlbmd0aCIsIndvcmQiLCJFbmRQYXJhZ3JhcGgiLCJsIiwic2xpY2UiLCJwdXNoIiwicG9wIiwieXkiLCJ0b3RhbEgiLCJvbGRUZXh0QWxpZ24iLCJ0ZXh0QWxpZ24iLCJsaSIsInh4IiwidXNwIiwidG90YWxMZW5ndGgiLCJmaWxsVGV4dCIsInN0cm9rZVRleHQiLCJleHRlbnNpb25GaWxsVGV4dCIsImV4dGVuc2lvblN0cm9rZVRleHQiXSwic291cmNlUm9vdCI6IiJ9