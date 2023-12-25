var Grid;(()=>{"use strict";var t={801:(t,e,n)=>{n.d(e,{Cell:()=>i});class i{_content;fillState;openState;accessState;onContentChange;constructor({content:t,fillState:e,openState:n,accessState:i,onContentChange:f}={}){this._content=t,this.onContentChange=f||(()=>{}),this.fillState=e||s.EMPTY,this.openState=n||r.ALL,this.accessState=i||o.FREE}clear(){this.fillState=s.EMPTY,this.openState=r.ALL,this.accessState=o.FREE}get content(){return this._content}copy(t){this._content=t._content,this.fillState=t.fillState,this.openState=t.openState,this.accessState=t.accessState,this.onContentChange=t.onContentChange}static copyTo(t,e){e._content=t._content,e.fillState=t.fillState,e.openState=t.openState,e.accessState=t.accessState,e.onContentChange=t.onContentChange}set content(t){this.onContentChange(this,t),this._content=t}}var r,o,s;!function(t){t[t.NONE=0]="NONE",t[t.TOP=1]="TOP",t[t.RIGHT=2]="RIGHT",t[t.BOTTOM=4]="BOTTOM",t[t.LEFT=8]="LEFT",t[t.TOP_RIGHT=16]="TOP_RIGHT",t[t.TOP_LEFT=32]="TOP_LEFT",t[t.BOTTOM_RIGHT=64]="BOTTOM_RIGHT",t[t.BOTTOM_LEFT=128]="BOTTOM_LEFT",t[t.ALL=255]="ALL"}(r||(r={})),function(t){t[t.FREE=0]="FREE",t[t.BLOCKED=1]="BLOCKED",t[t.VISITED=2]="VISITED"}(o||(o={})),function(t){t[t.EMPTY=0]="EMPTY",t[t.FILLED=1]="FILLED",t[t.FULL=2]="FULL"}(s||(s={}))},19:(t,e,n)=>{function i(t,e,n){return t*n+e}n.d(e,{rowColToIndex:()=>i})}},e={};function n(i){var r=e[i];if(void 0!==r)return r.exports;var o=e[i]={exports:{}};return t[i](o,o.exports,n),o.exports}n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var i={};(()=>{n.r(i),n.d(i,{Grid:()=>r});var t=n(801),e=n(19);class r{_dimensions;_buffer;constructor({dimensions:t,filler:e}){this._dimensions=t,this._buffer=void 0!==e?r.getBufferFromFiller(this._dimensions,e,this):r.getEmptyBuffer(this._dimensions)}overrideWith(e){const n=new t.Cell;for(let t=0;t<this._buffer.length;++t)e.tryGetCellByIndex(t,n)&&this._buffer[t].copy(n)}get width(){return this._dimensions.width}get height(){return this._dimensions.height}get buffer(){return this._buffer}*[Symbol.iterator](){for(let t=0;t<this._buffer.length;++t)yield this._buffer[t]}forEach(t){for(let e=0;e<this._buffer.length;++e)t(this._buffer[e],e,this.buffer)}tryGetCellByIndex(t,e){return!!this._buffer[t]&&(e.copy(this._buffer[t]),!0)}tryGetCell(t,e,n){return!!this.getCell(t,e)&&(n.copy(this.getCell(t,e)),!0)}setCell(t,n,i){return this._buffer[(0,e.rowColToIndex)(n,t,this.width)]=i}getCell(t,n){return this._buffer[(0,e.rowColToIndex)(n,t,this.width)]}copy(t){this._dimensions=t._dimensions,this._buffer=r.getEmptyBuffer(t._dimensions);for(let e=0;e<t._buffer.length;++e)this.buffer[e]=t._buffer[e]}static copyTo(t,e){e._dimensions=t._dimensions,e._buffer=r.getEmptyBuffer(t._dimensions);for(let n=0;n<t._buffer.length;++n)e._buffer[n]=t._buffer[n]}static getEmptyBuffer(e){return[...Array(e.width*e.height)].map((()=>new t.Cell))}static getBufferFromFiller(t,e,n){return[...Array(t.width*t.height)].map(((t,i)=>e(i,n)))}}})(),Grid=i})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OUQsS0FBS2dCLFFBQVdrRCxDQUMzRCxDQUVPLE9BQUFGLENBQVNGLEVBQVdDLEdBQ3pCLE9BQU8vRCxLQUFLNEMsU0FBUSxJQUFBL0IsZUFBZWtELEVBQUdELEVBQUc5RCxLQUFLZ0IsT0FDaEQsQ0FFTyxJQUFBUixDQUFNMkQsR0FDWG5FLEtBQUsyQyxZQUFjd0IsRUFBUXhCLFlBQzNCM0MsS0FBSzRDLFFBQVVGLEVBQUtNLGVBQW1CbUIsRUFBUXhCLGFBRS9DLElBQU0sSUFBSVMsRUFBSSxFQUFHQSxFQUFJZSxFQUFRdkIsUUFBUVMsU0FBVUQsRUFDN0NwRCxLQUFLd0QsT0FBT0osR0FBS2UsRUFBUXZCLFFBQVFRLEVBRXJDLENBRU8sYUFBTzFDLENBQVdDLEVBQXNCd0QsR0FDN0NBLEVBQVF4QixZQUFjaEMsRUFBWWdDLFlBQ2xDd0IsRUFBUXZCLFFBQVVGLEVBQUtNLGVBQW1CckMsRUFBWWdDLGFBRXRELElBQU0sSUFBSVMsRUFBSSxFQUFHQSxFQUFJekMsRUFBWWlDLFFBQVFTLFNBQVVELEVBQ2pEZSxFQUFRdkIsUUFBUVEsR0FBS3pDLEVBQVlpQyxRQUFRUSxFQUU3QyxDQUVPLHFCQUFPSixDQUFtQkgsR0FDL0IsTUFBTyxJQUFJdUIsTUFBT3ZCLEVBQVc3QixNQUFRNkIsRUFBV1UsU0FBVWMsS0FBSyxJQUFNLElBQUksRUFBQTdFLE1BQzNFLENBRU8sMEJBQU91RCxDQUF3QkYsRUFBd0JDLEVBQStCSSxHQUMzRixNQUFPLElBQUlrQixNQUFPdkIsRUFBVzdCLE1BQVE2QixFQUFXVSxTQUFVYyxLQUFLLENBQUVDLEVBQUdWLElBQVdkLEVBQVFjLEVBQU9WLElBQ2hHLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DZWxsLnRzIiwid2VicGFjazovLy8uL01hdGhUb29scy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9HcmlkLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDZWxsPFQ+IGltcGxlbWVudHMgSUNlbGwge1xyXG4gIHByaXZhdGUgX2NvbnRlbnQ/OiBUO1xyXG5cclxuICBwdWJsaWMgZmlsbFN0YXRlOiBDZWxsRmlsbFN0YXRlO1xyXG4gIHB1YmxpYyBvcGVuU3RhdGU6IENlbGxPcGVuU3RhdGU7XHJcbiAgcHVibGljIGFjY2Vzc1N0YXRlOiBDZWxsQWNjZXNzU3RhdGU7XHJcblxyXG4gIHB1YmxpYyBvbkNvbnRlbnRDaGFuZ2U6ICggY2VsbDogQ2VsbDxUPiwgbmV3Q29udGVudDogVCB8IHVuZGVmaW5lZCApID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCB7IGNvbnRlbnQsIGZpbGxTdGF0ZSwgb3BlblN0YXRlLCBhY2Nlc3NTdGF0ZSwgb25Db250ZW50Q2hhbmdlIH06IHsgY29udGVudD86IFQ7IGZpbGxTdGF0ZT86IENlbGxGaWxsU3RhdGU7IG9wZW5TdGF0ZT86IENlbGxPcGVuU3RhdGU7IGFjY2Vzc1N0YXRlPzogQ2VsbEFjY2Vzc1N0YXRlOyBvbkNvbnRlbnRDaGFuZ2U/OiAoIGNlbGw6IENlbGw8VD4sIG5ld0NvbnRlbnQ6IFQgfCB1bmRlZmluZWQgKSA9PiB2b2lkOyB9ID0ge30gKSB7XHJcbiAgICB0aGlzLl9jb250ZW50ID0gY29udGVudDtcclxuXHJcbiAgICB0aGlzLm9uQ29udGVudENoYW5nZSA9IG9uQ29udGVudENoYW5nZSB8fCAoICgpID0+IHsgfSApO1xyXG4gICAgdGhpcy5maWxsU3RhdGUgPSBmaWxsU3RhdGUgfHwgQ2VsbEZpbGxTdGF0ZS5FTVBUWTtcclxuICAgIHRoaXMub3BlblN0YXRlID0gb3BlblN0YXRlIHx8IENlbGxPcGVuU3RhdGUuQUxMO1xyXG4gICAgdGhpcy5hY2Nlc3NTdGF0ZSA9IGFjY2Vzc1N0YXRlIHx8IENlbGxBY2Nlc3NTdGF0ZS5GUkVFO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5maWxsU3RhdGUgPSBDZWxsRmlsbFN0YXRlLkVNUFRZO1xyXG4gICAgdGhpcy5vcGVuU3RhdGUgPSBDZWxsT3BlblN0YXRlLkFMTDtcclxuICAgIHRoaXMuYWNjZXNzU3RhdGUgPSBDZWxsQWNjZXNzU3RhdGUuRlJFRTtcclxuICB9XHJcblxyXG4gIGdldCBjb250ZW50KCk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY29weSggbmV3Q2VsbDogQ2VsbDxUPiApIHtcclxuICAgIHRoaXMuX2NvbnRlbnQgPSBuZXdDZWxsLl9jb250ZW50O1xyXG4gICAgdGhpcy5maWxsU3RhdGUgPSBuZXdDZWxsLmZpbGxTdGF0ZTtcclxuICAgIHRoaXMub3BlblN0YXRlID0gbmV3Q2VsbC5vcGVuU3RhdGU7XHJcbiAgICB0aGlzLmFjY2Vzc1N0YXRlID0gbmV3Q2VsbC5hY2Nlc3NTdGF0ZTtcclxuICAgIHRoaXMub25Db250ZW50Q2hhbmdlID0gbmV3Q2VsbC5vbkNvbnRlbnRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhdGljIGNvcHlUbzxUPiggcmVwbGFjZVdpdGg6IENlbGw8VD4sIG5ld0NlbGw6IENlbGw8VD4gKSB7XHJcbiAgICBuZXdDZWxsLl9jb250ZW50ID0gcmVwbGFjZVdpdGguX2NvbnRlbnQ7XHJcbiAgICBuZXdDZWxsLmZpbGxTdGF0ZSA9IHJlcGxhY2VXaXRoLmZpbGxTdGF0ZTtcclxuICAgIG5ld0NlbGwub3BlblN0YXRlID0gcmVwbGFjZVdpdGgub3BlblN0YXRlO1xyXG4gICAgbmV3Q2VsbC5hY2Nlc3NTdGF0ZSA9IHJlcGxhY2VXaXRoLmFjY2Vzc1N0YXRlO1xyXG4gICAgbmV3Q2VsbC5vbkNvbnRlbnRDaGFuZ2UgPSByZXBsYWNlV2l0aC5vbkNvbnRlbnRDaGFuZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgY29udGVudCggbmV3Q29udGVudDogVCB8IHVuZGVmaW5lZCApIHtcclxuICAgIHRoaXMub25Db250ZW50Q2hhbmdlKCB0aGlzLCBuZXdDb250ZW50ICk7XHJcblxyXG4gICAgdGhpcy5fY29udGVudCA9IG5ld0NvbnRlbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW50ZXJmYWNlIElDZWxsIHtcclxuICBmaWxsU3RhdGU6IENlbGxGaWxsU3RhdGU7XHJcbiAgb3BlblN0YXRlOiBDZWxsT3BlblN0YXRlO1xyXG4gIGFjY2Vzc1N0YXRlOiBDZWxsQWNjZXNzU3RhdGU7XHJcbn1cclxuXHJcblxyXG4vLy9BZGljaW9uYW5kbyBtw7psdGlwbG9zIHZhbG9yZXNcclxuLy8vICAgbGV0IHRvcFJpZ2h0ID0gQ2VsbE9wZW5TdGF0ZS5UT1AgfCBDZWxsT3BlblN0YXRlLlJJR0hUXHJcbi8vLyAgICh0b3BSaWdodCAmIENlbGxPcGVuU3RhdGUuVE9QKSA9PT0gQ2VsbE9wZW5TdGF0ZS5UT1BcclxuLy8vICAgICAodG9wUmlnaHQgJiBDZWxsT3BlblN0YXRlLlJJR0hUKSA9PT0gQ2VsbE9wZW5TdGF0ZS5UT1BcclxuLy8vQWRpY2lvbmFuZG8gdW0gdmFsb3IgZGVwb2lzIGRlIGF0cmlidWlyXHJcbi8vLyAgIHRvcFJpZ2h0IHw9IENlbGxPcGVuU3RhdGUuTEVGVFxyXG4vLy8gICAgICh0b3BSaWdodCAmIENlbGxPcGVuU3RhdGUuUklHSFQpID09PSBDZWxsT3BlblN0YXRlLkxFRlRcclxuLy8vUmVtb3ZlbmRvIHVtIHZhbG9yIGRlcG9pcyBkZSBhdHJpYnVpclxyXG4vLy8gICB0b3BSaWdodCAmPSB+Q2VsbE9wZW5TdGF0ZS5SSUdIVFxyXG4vLy8gICAgICh0b3BSaWdodCAmIENlbGxPcGVuU3RhdGUuUklHSFQpICE9PSBDZWxsT3BlblN0YXRlLlJJR0hUXHJcbmV4cG9ydCBlbnVtIENlbGxPcGVuU3RhdGUge1xyXG4gIE5PTkUgPSAwLFxyXG4gIFRPUCA9IDEgPDwgMCxcclxuICBSSUdIVCA9IDEgPDwgMSxcclxuICBCT1RUT00gPSAxIDw8IDIsXHJcbiAgTEVGVCA9IDEgPDwgMyxcclxuICBUT1BfUklHSFQgPSAxIDw8IDQsXHJcbiAgVE9QX0xFRlQgPSAxIDw8IDUsXHJcbiAgQk9UVE9NX1JJR0hUID0gMSA8PCA2LFxyXG4gIEJPVFRPTV9MRUZUID0gMSA8PCA3LFxyXG4gIEFMTCA9IH4oIH4wIDw8IDggKVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDZWxsQWNjZXNzU3RhdGUgeyBGUkVFLCBCTE9DS0VELCBWSVNJVEVEIH1cclxuXHJcbmV4cG9ydCBlbnVtIENlbGxGaWxsU3RhdGUgeyBFTVBUWSwgRklMTEVELCBGVUxMIH0iLCJleHBvcnQgY29uc3QgcmVnZXhOdW1iZXJQYXR0ZXJuID0gLy0/XFxkK1xcLj9cXGQqL2c7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50MkQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9ucyB7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4VG9Sb3coIGluZGV4OiBudW1iZXIsIGdyaWRXaWR0aDogbnVtYmVyICkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKCBpbmRleCAvIGdyaWRXaWR0aCApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhUb0NvbCggaW5kZXg6IG51bWJlciwgZ3JpZFdpZHRoOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIGluZGV4ICUgZ3JpZFdpZHRoO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcm93Q29sVG9JbmRleCggcm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCB3aWR0aDogbnVtYmVyICkge1xyXG4gIHJldHVybiAoIHJvdyAqIHdpZHRoICkgKyBjb2w7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVycCggbWluOiBudW1iZXIsIG1heDogbnVtYmVyLCBhbW91bnQ6IG51bWJlciApOiBudW1iZXIge1xyXG4gIHJldHVybiAoIDEgLSBhbW91bnQgKSAqIG1pbiArIGFtb3VudCAqIG1heDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmVyc2VMZXJwKCBhOiBudW1iZXIsIGI6IG51bWJlciwgdmFsOiBudW1iZXIgKTogbnVtYmVyIHtcclxuICByZXR1cm4gKCB2YWwgLSBhICkgLyAoIGIgLSBhICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1hcCggaW5NaW46IG51bWJlciwgaW5NYXg6IG51bWJlciwgb3V0TWluOiBudW1iZXIsIG91dE1heDogbnVtYmVyLCB2YWw6IG51bWJlciApOiBudW1iZXIge1xyXG4gIHJldHVybiBsZXJwKCBvdXRNaW4sIG91dE1heCwgaW52ZXJzZUxlcnAoIGluTWluLCBpbk1heCwgdmFsICkgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludEV4Y2x1c2l2ZSggbWluOiBudW1iZXIsIG1heDogbnVtYmVyICkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKSArIG1pbiApO1xyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnRJbmNsdXNpdmUoIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlciApIHtcclxuICBtaW4gPSBNYXRoLmNlaWwoIG1pbiApO1xyXG4gIG1heCA9IE1hdGguZmxvb3IoIG1heCApO1xyXG4gIHJldHVybiBNYXRoLmZsb29yKCBNYXRoLnJhbmRvbSgpICogKCBtYXggLSBtaW4gKyAxICkgKSArIG1pbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUZyb21BcnJheTxUPiggYXJyOiBBcnJheTxUPiApIHtcclxuICByZXR1cm4gYXJyW2dldFJhbmRvbUludEV4Y2x1c2l2ZSggMCwgYXJyLmxlbmd0aCApXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKCBudW06IG51bWJlciA9IDAsIG1pbjogbnVtYmVyID0gMCwgbWF4OiBudW1iZXIgPSAxMDAgKTogbnVtYmVyIHtcclxuICByZXR1cm4gTWF0aC5tYXgoIG1pbiwgTWF0aC5taW4oIG51bSwgbWF4ICkgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbnV0ZXNUb01pbGxpc2Vjb25kcyggbXM6IG51bWJlciApIHtcclxuICByZXR1cm4gbXMgKiA2MDAwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbGxpc2Vjb25kc1RvTWludXRlcyggbXM6IG51bWJlciApIHtcclxuICByZXR1cm4gbXMgLyA2MDAwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1pbGxpc2Vjb25kc1RvSG91cnMoIG1zOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIG1zIC8gMy42ZSs2O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWlsbGlzZWNvbmRzVG9EYXlzKCBtczogbnVtYmVyICkge1xyXG4gIHJldHVybiBtcyAvIDguNjRlKzc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZWdhYnl0ZVRvQnl0ZSggbWI6IG51bWJlciApIHtcclxuICByZXR1cm4gbWIgKiAxMDI0ICogMTAyNDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJ5dGVUb01lZ2FieXRlKCBiOiBudW1iZXIgKSB7XHJcbiAgcmV0dXJuIGIgLyAxMDI0IC8gMTAyNDtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgQ2VsbCB9IGZyb20gJy4vQ2VsbCc7XHJcbmltcG9ydCB7IERpbWVuc2lvbnMsIHJvd0NvbFRvSW5kZXggfSBmcm9tICcuL01hdGhUb29scyc7XHJcblxyXG5leHBvcnQgdHlwZSBHcmlkRmlsbGVyRnVuY3Rpb248VD4gPSAoIGluZGV4OiBudW1iZXIsIGdyaWQ/OiBHcmlkPFQ+ICkgPT4gQ2VsbDxUPjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmlkPFQ+IHtcclxuICBwcml2YXRlIF9kaW1lbnNpb25zOiBEaW1lbnNpb25zO1xyXG4gIHByaXZhdGUgX2J1ZmZlcjogQ2VsbDxUPltdO1xyXG5cclxuICBjb25zdHJ1Y3RvciggeyBkaW1lbnNpb25zLCBmaWxsZXIgfTogeyBkaW1lbnNpb25zOiBEaW1lbnNpb25zOyBmaWxsZXI/OiBHcmlkRmlsbGVyRnVuY3Rpb248VD47IH0gKSB7XHJcbiAgICB0aGlzLl9kaW1lbnNpb25zID0gZGltZW5zaW9ucztcclxuXHJcbiAgICB0aGlzLl9idWZmZXIgPSBmaWxsZXIgIT09IHVuZGVmaW5lZFxyXG4gICAgICA/IEdyaWQuZ2V0QnVmZmVyRnJvbUZpbGxlcjxUPiggdGhpcy5fZGltZW5zaW9ucywgZmlsbGVyLCB0aGlzIClcclxuICAgICAgOiBHcmlkLmdldEVtcHR5QnVmZmVyPFQ+KCB0aGlzLl9kaW1lbnNpb25zICk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZVdpdGgoIGdyaWQ6IEdyaWQ8VD4gKTogdm9pZCB7XHJcbiAgICBjb25zdCBvdXQ6IENlbGw8VD4gPSBuZXcgQ2VsbDxUPigpO1xyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgdGhpcy5fYnVmZmVyLmxlbmd0aDsgKytpICkge1xyXG4gICAgICBpZiAoIGdyaWQudHJ5R2V0Q2VsbEJ5SW5kZXgoIGksIG91dCApICkge1xyXG4gICAgICAgIHRoaXMuX2J1ZmZlcltpXS5jb3B5KCBvdXQgKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGltZW5zaW9ucy53aWR0aDtcclxuICB9XHJcblxyXG4gIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zLmhlaWdodDtcclxuICB9XHJcblxyXG4gIGdldCBidWZmZXIoKTogQ2VsbDxUPltdIHtcclxuICAgIHJldHVybiB0aGlzLl9idWZmZXI7XHJcbiAgfVxyXG5cclxuICAqW1N5bWJvbC5pdGVyYXRvcl0oKSB7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9idWZmZXIubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgIHlpZWxkIHRoaXMuX2J1ZmZlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBmb3JFYWNoKCBjYWxsYmFja2ZuOiAoIHZhbHVlOiBDZWxsPFQ+LCBpbmRleDogbnVtYmVyLCBhcnI6IENlbGw8VD5bXSApID0+IHZvaWQgKSB7XHJcbiAgICBmb3IgKCBsZXQgaSA9IDA7IGkgPCB0aGlzLl9idWZmZXIubGVuZ3RoOyArK2kgKSB7XHJcbiAgICAgIGNhbGxiYWNrZm4oIHRoaXMuX2J1ZmZlcltpXSwgaSwgdGhpcy5idWZmZXIgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyB0cnlHZXRDZWxsQnlJbmRleCggaW5kZXg6IG51bWJlciwgb3V0OiBDZWxsPFQ+ICk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCAhdGhpcy5fYnVmZmVyW2luZGV4XSApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb3V0LmNvcHkoIHRoaXMuX2J1ZmZlcltpbmRleF0gKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgdHJ5R2V0Q2VsbCggeDogbnVtYmVyLCB5OiBudW1iZXIsIG91dDogQ2VsbDxUPiApOiBib29sZWFuIHtcclxuICAgIGlmICggIXRoaXMuZ2V0Q2VsbCggeCwgeSApICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvdXQuY29weSggdGhpcy5nZXRDZWxsKCB4LCB5ICkgKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2VsbCggeDogbnVtYmVyLCB5OiBudW1iZXIsIHZhbDogQ2VsbDxUPiApOiBDZWxsPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9idWZmZXJbcm93Q29sVG9JbmRleCggeSwgeCwgdGhpcy53aWR0aCApXSA9IHZhbDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRDZWxsKCB4OiBudW1iZXIsIHk6IG51bWJlciApOiBDZWxsPFQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9idWZmZXJbcm93Q29sVG9JbmRleCggeSwgeCwgdGhpcy53aWR0aCApXTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb3B5KCBuZXdHcmlkOiBHcmlkPFQ+ICkge1xyXG4gICAgdGhpcy5fZGltZW5zaW9ucyA9IG5ld0dyaWQuX2RpbWVuc2lvbnM7XHJcbiAgICB0aGlzLl9idWZmZXIgPSBHcmlkLmdldEVtcHR5QnVmZmVyPFQ+KCBuZXdHcmlkLl9kaW1lbnNpb25zICk7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgbmV3R3JpZC5fYnVmZmVyLmxlbmd0aDsgKytpICkge1xyXG4gICAgICB0aGlzLmJ1ZmZlcltpXSA9IG5ld0dyaWQuX2J1ZmZlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgY29weVRvPFQ+KCByZXBsYWNlV2l0aDogR3JpZDxUPiwgbmV3R3JpZDogR3JpZDxUPiApIHtcclxuICAgIG5ld0dyaWQuX2RpbWVuc2lvbnMgPSByZXBsYWNlV2l0aC5fZGltZW5zaW9ucztcclxuICAgIG5ld0dyaWQuX2J1ZmZlciA9IEdyaWQuZ2V0RW1wdHlCdWZmZXI8VD4oIHJlcGxhY2VXaXRoLl9kaW1lbnNpb25zICk7XHJcblxyXG4gICAgZm9yICggbGV0IGkgPSAwOyBpIDwgcmVwbGFjZVdpdGguX2J1ZmZlci5sZW5ndGg7ICsraSApIHtcclxuICAgICAgbmV3R3JpZC5fYnVmZmVyW2ldID0gcmVwbGFjZVdpdGguX2J1ZmZlcltpXTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2V0RW1wdHlCdWZmZXI8VD4oIGRpbWVuc2lvbnM6IERpbWVuc2lvbnMgKTogQ2VsbDxUPltdIHtcclxuICAgIHJldHVybiBbLi4uQXJyYXkoIGRpbWVuc2lvbnMud2lkdGggKiBkaW1lbnNpb25zLmhlaWdodCApXS5tYXAoICgpID0+IG5ldyBDZWxsPFQ+KCkgKVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRCdWZmZXJGcm9tRmlsbGVyPFQ+KCBkaW1lbnNpb25zOiBEaW1lbnNpb25zLCBmaWxsZXI6IEdyaWRGaWxsZXJGdW5jdGlvbjxUPiwgZ3JpZD86IEdyaWQ8VD4gKTogQ2VsbDxUPltdIHtcclxuICAgIHJldHVybiBbLi4uQXJyYXkoIGRpbWVuc2lvbnMud2lkdGggKiBkaW1lbnNpb25zLmhlaWdodCApXS5tYXAoICggdiwgaW5kZXggKSA9PiBmaWxsZXIoIGluZGV4LCBncmlkICkgKTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQ2VsbCIsIl9jb250ZW50IiwiZmlsbFN0YXRlIiwib3BlblN0YXRlIiwiYWNjZXNzU3RhdGUiLCJvbkNvbnRlbnRDaGFuZ2UiLCJjb25zdHJ1Y3RvciIsImNvbnRlbnQiLCJ0aGlzIiwiQ2VsbEZpbGxTdGF0ZSIsIkVNUFRZIiwiQ2VsbE9wZW5TdGF0ZSIsIkFMTCIsIkNlbGxBY2Nlc3NTdGF0ZSIsIkZSRUUiLCJjbGVhciIsImNvcHkiLCJuZXdDZWxsIiwiY29weVRvIiwicmVwbGFjZVdpdGgiLCJuZXdDb250ZW50Iiwicm93Q29sVG9JbmRleCIsInJvdyIsImNvbCIsIndpZHRoIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiZXhwb3J0cyIsIm1vZHVsZSIsIl9fd2VicGFja19tb2R1bGVzX18iLCJkIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJHcmlkIiwiX2RpbWVuc2lvbnMiLCJfYnVmZmVyIiwiZGltZW5zaW9ucyIsImZpbGxlciIsImdldEJ1ZmZlckZyb21GaWxsZXIiLCJnZXRFbXB0eUJ1ZmZlciIsIm92ZXJyaWRlV2l0aCIsImdyaWQiLCJvdXQiLCJpIiwibGVuZ3RoIiwidHJ5R2V0Q2VsbEJ5SW5kZXgiLCJoZWlnaHQiLCJidWZmZXIiLCJpdGVyYXRvciIsImZvckVhY2giLCJjYWxsYmFja2ZuIiwiaW5kZXgiLCJ0cnlHZXRDZWxsIiwieCIsInkiLCJnZXRDZWxsIiwic2V0Q2VsbCIsInZhbCIsIm5ld0dyaWQiLCJBcnJheSIsIm1hcCIsInYiXSwic291cmNlUm9vdCI6IiJ9