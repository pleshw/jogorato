var ColorRGBA;(()=>{"use strict";var t={19:(t,r,e)=>{function i(t=0,r=0,e=100){return Math.max(r,Math.min(t,e))}e.d(r,{clamp:()=>i})}},r={};function e(i){var a=r[i];if(void 0!==a)return a.exports;var s=r[i]={exports:{}};return t[i](s,s.exports,e),s.exports}e.d=(t,r)=>{for(var i in r)e.o(r,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:r[i]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{e.r(i),e.d(i,{ColorRGBA:()=>r});var t=e(19);class r{r;g;b;a;constructor(r,e,i,a=1){this.r=(0,t.clamp)(r,0,255),this.g=(0,t.clamp)(e,0,255),this.b=(0,t.clamp)(i,0,255),this.a=(0,t.clamp)(a,0,255)}toString(){return`${this.r}, ${this.g}, ${this.b}, ${this.a}`}toStringWithoutAlpha(){return`${this.r}, ${this.g}, ${this.b}`}asArray({noAlpha:t=!1}={}){return t?[this.r,this.g,this.b]:[this.r,this.g,this.b,this.a]}getCopy(){return new r(this.r,this.g,this.b,this.a)}static increaseSaturation(r,e){e/=100;const i=Math.max(...r.asArray({noAlpha:!0})),a=r.getCopy();return a.r=Math.floor((0,t.clamp)(r.r===i?r.r+r.r*e:r.r-r.r*e,0,255)),a.g=Math.floor((0,t.clamp)(r.g===i?r.g+r.g*e:r.g-r.g*e,0,255)),a.b=Math.floor((0,t.clamp)(r.b===i?r.b+r.b*e:r.b-r.b*e,0,255)),a}static getUnique(t,e=!0){return t.filter(((t,r,e)=>e.findIndex((r=>JSON.stringify(t)===JSON.stringify(r)))===r)).filter((t=>!e||r.isValid(t)&&t.a>0))}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b,yield this.a}equals(t){return this.r===t.r&&this.g===t.g&&this.b===t.b&&this.a===t.a}static isValid(t){return!("number"!=typeof t.r||Number.isNaN(t.r)||"number"!=typeof t.g||Number.isNaN(t.g)||"number"!=typeof t.b||Number.isNaN(t.b)||"number"!=typeof t.a||Number.isNaN(t.a))}static get BLACK(){return new r(0,0,0)}static get NULL(){return new r(0,0,0,0)}}})(),ColorRGBA=i})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBV0YsRUFBTVYsRUFBTVUsRUFBTVYsRUFBSVcsRUFBZUQsRUFBTVYsRUFBTVUsRUFBTVYsRUFBSVcsRUFBYyxFQUFHLE1BRTdIRSxDQUNULENBRUEsZ0JBQU9FLENBQVdDLEVBQWtCQyxHQUFtQyxHQUNyRSxPQUFPRCxFQUNKRSxRQUFRLENBQUVDLEVBQUdDLEVBQUduQixJQUFPQSxFQUFFb0IsV0FBV0MsR0FBUUMsS0FBS0MsVUFBV0wsS0FBUUksS0FBS0MsVUFBV0YsT0FBYUYsSUFDakdGLFFBQVFPLElBQU1SLEdBQTZCbkIsRUFBVTRCLFFBQVNELElBQU9BLEVBQUV4QixFQUFJLEdBQ2hGLENBRUEsRUFBRU4sT0FBT2dDLGtCQUNEeEIsS0FBS1QsUUFDTFMsS0FBS0osUUFDTEksS0FBS0gsUUFDTEcsS0FBS0YsQ0FDYixDQUVBLE1BQUEyQixDQUFRQyxHQUNOLE9BQU8xQixLQUFLVCxJQUFNbUMsRUFBT25DLEdBQ3BCUyxLQUFLSixJQUFNOEIsRUFBTzlCLEdBQ2xCSSxLQUFLSCxJQUFNNkIsRUFBTzdCLEdBQ2xCRyxLQUFLRixJQUFNNEIsRUFBTzVCLENBQ3pCLENBRUEsY0FBT3lCLENBQVNoQixHQUNkLFFBQTBCLGlCQUFaQSxFQUFNaEIsR0FBbUJvQyxPQUFPQyxNQUFPckIsRUFBTWhCLElBQ25DLGlCQUFaZ0IsRUFBTVgsR0FBbUIrQixPQUFPQyxNQUFPckIsRUFBTVgsSUFDakMsaUJBQVpXLEVBQU1WLEdBQW1COEIsT0FBT0MsTUFBT3JCLEVBQU1WLElBQ2pDLGlCQUFaVSxFQUFNVCxHQUFtQjZCLE9BQU9DLE1BQU9yQixFQUFNVCxHQUMzRCxDQUVBLGdCQUFXK0IsR0FDVCxPQUFPLElBQUlsQyxFQUFXLEVBQUcsRUFBRyxFQUM5QixDQUVBLGVBQVdtQyxHQUNULE9BQU8sSUFBSW5DLEVBQVcsRUFBRyxFQUFHLEVBQUcsRUFDakMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL01hdGhUb29scy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9Db2xvclJHQkEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlZ2V4TnVtYmVyUGF0dGVybiA9IC8tP1xcZCtcXC4/XFxkKi9nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludDJEIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERpbWVuc2lvbnMge1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmRleFRvUm93KCBpbmRleDogbnVtYmVyLCBncmlkV2lkdGg6IG51bWJlciApIHtcclxuICByZXR1cm4gTWF0aC5mbG9vciggaW5kZXggLyBncmlkV2lkdGggKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4VG9Db2woIGluZGV4OiBudW1iZXIsIGdyaWRXaWR0aDogbnVtYmVyICkge1xyXG4gIHJldHVybiBpbmRleCAlIGdyaWRXaWR0aDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJvd0NvbFRvSW5kZXgoIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgd2lkdGg6IG51bWJlciApIHtcclxuICByZXR1cm4gKCByb3cgKiB3aWR0aCApICsgY29sO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciwgYW1vdW50OiBudW1iZXIgKTogbnVtYmVyIHtcclxuICByZXR1cm4gKCAxIC0gYW1vdW50ICkgKiBtaW4gKyBhbW91bnQgKiBtYXg7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZlcnNlTGVycCggYTogbnVtYmVyLCBiOiBudW1iZXIsIHZhbDogbnVtYmVyICk6IG51bWJlciB7XHJcbiAgcmV0dXJuICggdmFsIC0gYSApIC8gKCBiIC0gYSApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVtYXAoIGluTWluOiBudW1iZXIsIGluTWF4OiBudW1iZXIsIG91dE1pbjogbnVtYmVyLCBvdXRNYXg6IG51bWJlciwgdmFsOiBudW1iZXIgKTogbnVtYmVyIHtcclxuICByZXR1cm4gbGVycCggb3V0TWluLCBvdXRNYXgsIGludmVyc2VMZXJwKCBpbk1pbiwgaW5NYXgsIHZhbCApICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRFeGNsdXNpdmUoIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciApIHtcclxuICByZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4IC0gbWluICkgKyBtaW4gKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50SW5jbHVzaXZlKCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIgKSB7XHJcbiAgbWluID0gTWF0aC5jZWlsKCBtaW4gKTtcclxuICBtYXggPSBNYXRoLmZsb29yKCBtYXggKTtcclxuICByZXR1cm4gTWF0aC5mbG9vciggTWF0aC5yYW5kb20oKSAqICggbWF4IC0gbWluICsgMSApICkgKyBtaW47XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Gcm9tQXJyYXk8VD4oIGFycjogQXJyYXk8VD4gKSB7XHJcbiAgcmV0dXJuIGFycltnZXRSYW5kb21JbnRFeGNsdXNpdmUoIDAsIGFyci5sZW5ndGggKV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGFtcCggbnVtOiBudW1iZXIgPSAwLCBtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMTAwICk6IG51bWJlciB7XHJcbiAgcmV0dXJuIE1hdGgubWF4KCBtaW4sIE1hdGgubWluKCBudW0sIG1heCApICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaW51dGVzVG9NaWxsaXNlY29uZHMoIG1zOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIG1zICogNjAwMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWxsaXNlY29uZHNUb01pbnV0ZXMoIG1zOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIG1zIC8gNjAwMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtaWxsaXNlY29uZHNUb0hvdXJzKCBtczogbnVtYmVyICkge1xyXG4gIHJldHVybiBtcyAvIDMuNmUrNjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbGxpc2Vjb25kc1RvRGF5cyggbXM6IG51bWJlciApIHtcclxuICByZXR1cm4gbXMgLyA4LjY0ZSs3O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVnYWJ5dGVUb0J5dGUoIG1iOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIG1iICogMTAyNCAqIDEwMjQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBieXRlVG9NZWdhYnl0ZSggYjogbnVtYmVyICkge1xyXG4gIHJldHVybiBiIC8gMTAyNCAvIDEwMjQ7XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNsYW1wIH0gZnJvbSAnLi9NYXRoVG9vbHMnO1xyXG5pbXBvcnQgeyBDb21wYXJhYmxlIH0gZnJvbSAnLi90eXBlcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sb3JSR0JBIGltcGxlbWVudHMgQ29tcGFyYWJsZTxDb2xvclJHQkE+IHtcclxuICBwdWJsaWMgcjogbnVtYmVyO1xyXG4gIHB1YmxpYyBnOiBudW1iZXI7XHJcbiAgcHVibGljIGI6IG51bWJlcjtcclxuICBwdWJsaWMgYTogbnVtYmVyO1xyXG5cclxuICBjb25zdHJ1Y3RvciggcjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMSApIHtcclxuICAgIHRoaXMuciA9IGNsYW1wKCByLCAwLCAyNTUgKTtcclxuICAgIHRoaXMuZyA9IGNsYW1wKCBnLCAwLCAyNTUgKTtcclxuICAgIHRoaXMuYiA9IGNsYW1wKCBiLCAwLCAyNTUgKTtcclxuICAgIHRoaXMuYSA9IGNsYW1wKCBhLCAwLCAyNTUgKTtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7IHRoaXMuciB9LCAkeyB0aGlzLmcgfSwgJHsgdGhpcy5iIH0sICR7IHRoaXMuYSB9YDtcclxuICB9XHJcblxyXG4gIHRvU3RyaW5nV2l0aG91dEFscGhhKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gYCR7IHRoaXMuciB9LCAkeyB0aGlzLmcgfSwgJHsgdGhpcy5iIH1gO1xyXG4gIH1cclxuXHJcbiAgYXNBcnJheSggeyBub0FscGhhID0gZmFsc2UgfTogeyBub0FscGhhPzogYm9vbGVhbjsgfSA9IHt9ICk6IG51bWJlcltdIHtcclxuICAgIGlmICggbm9BbHBoYSApIHtcclxuICAgICAgcmV0dXJuIFt0aGlzLnIsIHRoaXMuZywgdGhpcy5iXTtcclxuICAgIH1cclxuICAgIHJldHVybiBbdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hXTtcclxuICB9XHJcblxyXG4gIGdldENvcHkoKSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yUkdCQSggdGhpcy5yLCB0aGlzLmcsIHRoaXMuYiwgdGhpcy5hICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgaW5jcmVhc2VTYXR1cmF0aW9uKCBjb2xvcjogQ29sb3JSR0JBLCBwZXJjZW50YWdlOiBudW1iZXIgKSB7XHJcbiAgICBwZXJjZW50YWdlID0gcGVyY2VudGFnZSAvIDEwMDtcclxuXHJcbiAgICBjb25zdCBtYXhWYWx1ZSA9IE1hdGgubWF4KCAuLi5jb2xvci5hc0FycmF5KCB7IG5vQWxwaGE6IHRydWUgfSApICk7XHJcbiAgICBjb25zdCBjb3B5Q29sb3IgPSBjb2xvci5nZXRDb3B5KCk7XHJcblxyXG4gICAgY29weUNvbG9yLnIgPSBNYXRoLmZsb29yKCBjbGFtcCggY29sb3IuciA9PT0gbWF4VmFsdWUgPyBjb2xvci5yICsgKCBjb2xvci5yICogcGVyY2VudGFnZSApIDogY29sb3IuciAtICggY29sb3IuciAqIHBlcmNlbnRhZ2UgKSwgMCwgMjU1ICkgKTtcclxuICAgIGNvcHlDb2xvci5nID0gTWF0aC5mbG9vciggY2xhbXAoIGNvbG9yLmcgPT09IG1heFZhbHVlID8gY29sb3IuZyArICggY29sb3IuZyAqIHBlcmNlbnRhZ2UgKSA6IGNvbG9yLmcgLSAoIGNvbG9yLmcgKiBwZXJjZW50YWdlICksIDAsIDI1NSApICk7XHJcbiAgICBjb3B5Q29sb3IuYiA9IE1hdGguZmxvb3IoIGNsYW1wKCBjb2xvci5iID09PSBtYXhWYWx1ZSA/IGNvbG9yLmIgKyAoIGNvbG9yLmIgKiBwZXJjZW50YWdlICkgOiBjb2xvci5iIC0gKCBjb2xvci5iICogcGVyY2VudGFnZSApLCAwLCAyNTUgKSApO1xyXG5cclxuICAgIHJldHVybiBjb3B5Q29sb3I7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0VW5pcXVlKCBhcnI6IENvbG9yUkdCQVtdLCByZW1vdmVUcmFuc3BhcmVudFBpeGVsczogYm9vbGVhbiA9IHRydWUgKSB7XHJcbiAgICByZXR1cm4gYXJyXHJcbiAgICAgIC5maWx0ZXIoICggdiwgaSwgYSApID0+IGEuZmluZEluZGV4KCB2MiA9PiAoIEpTT04uc3RyaW5naWZ5KCB2ICkgPT09IEpTT04uc3RyaW5naWZ5KCB2MiApICkgKSA9PT0gaSApXHJcbiAgICAgIC5maWx0ZXIoIGMgPT4gIXJlbW92ZVRyYW5zcGFyZW50UGl4ZWxzIHx8ICggQ29sb3JSR0JBLmlzVmFsaWQoIGMgKSAmJiBjLmEgPiAwICkgKTtcclxuICB9XHJcblxyXG4gICpbU3ltYm9sLml0ZXJhdG9yXSgpIHtcclxuICAgIHlpZWxkIHRoaXMucjtcclxuICAgIHlpZWxkIHRoaXMuZztcclxuICAgIHlpZWxkIHRoaXMuYjtcclxuICAgIHlpZWxkIHRoaXMuYTtcclxuICB9XHJcblxyXG4gIGVxdWFscyggY29sb3IyOiBDb2xvclJHQkEgKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5yID09PSBjb2xvcjIuclxyXG4gICAgICAmJiB0aGlzLmcgPT09IGNvbG9yMi5nXHJcbiAgICAgICYmIHRoaXMuYiA9PT0gY29sb3IyLmJcclxuICAgICAgJiYgdGhpcy5hID09PSBjb2xvcjIuYTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBpc1ZhbGlkKCBjb2xvcjogQ29sb3JSR0JBICk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGVvZiBjb2xvci5yID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKCBjb2xvci5yIClcclxuICAgICAgJiYgdHlwZW9mIGNvbG9yLmcgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4oIGNvbG9yLmcgKVxyXG4gICAgICAmJiB0eXBlb2YgY29sb3IuYiA9PT0gJ251bWJlcicgJiYgIU51bWJlci5pc05hTiggY29sb3IuYiApXHJcbiAgICAgICYmIHR5cGVvZiBjb2xvci5hID09PSAnbnVtYmVyJyAmJiAhTnVtYmVyLmlzTmFOKCBjb2xvci5hICk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgZ2V0IEJMQUNLKCk6IENvbG9yUkdCQSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yUkdCQSggMCwgMCwgMCApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGdldCBOVUxMKCk6IENvbG9yUkdCQSB7XHJcbiAgICByZXR1cm4gbmV3IENvbG9yUkdCQSggMCwgMCwgMCwgMCApO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsiY2xhbXAiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJDb2xvclJHQkEiLCJnIiwiYiIsImEiLCJjb25zdHJ1Y3RvciIsInRoaXMiLCJ0b1N0cmluZyIsInRvU3RyaW5nV2l0aG91dEFscGhhIiwiYXNBcnJheSIsIm5vQWxwaGEiLCJnZXRDb3B5IiwiaW5jcmVhc2VTYXR1cmF0aW9uIiwiY29sb3IiLCJwZXJjZW50YWdlIiwibWF4VmFsdWUiLCJjb3B5Q29sb3IiLCJmbG9vciIsImdldFVuaXF1ZSIsImFyciIsInJlbW92ZVRyYW5zcGFyZW50UGl4ZWxzIiwiZmlsdGVyIiwidiIsImkiLCJmaW5kSW5kZXgiLCJ2MiIsIkpTT04iLCJzdHJpbmdpZnkiLCJjIiwiaXNWYWxpZCIsIml0ZXJhdG9yIiwiZXF1YWxzIiwiY29sb3IyIiwiTnVtYmVyIiwiaXNOYU4iLCJCTEFDSyIsIk5VTEwiXSwic291cmNlUm9vdCI6IiJ9