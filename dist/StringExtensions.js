var StringExtensions;(()=>{"use strict";String.prototype.isNullOrEmpty=function(){return"string"!=typeof this&&!this&&""!==this},String.prototype.truncate=function(t,r="..."){return(this.length>t?this.substring(0,t)+r:this).toString()},String.prototype.removeAccents=function(){return this.normalize("NFD").replace(/[\u0300-\u036f]/g,"")},String.prototype.capitalizeFirstLetter=function(){return"string"!=typeof this?"":this.charAt(0).toUpperCase()+this.substring(1)},String.prototype.zeroBefore=function(){return this.padStart(2,"0")},StringExtensions={}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RyaW5nRXh0ZW5zaW9ucy5qcyIsIm1hcHBpbmdzIjoid0NBU0FBLE9BQU9DLFVBQVVDLGNBQWdCLFdBQy9CLE1BQXVCLGlCQUFUQyxPQUFzQkEsTUFBaUIsS0FBVEEsSUFDOUMsRUFFQUgsT0FBT0MsVUFBVUcsU0FBVyxTQUFXQyxFQUFhQyxFQUFvQixPQUN0RSxPQUFTSCxLQUFLSSxPQUFTRixFQUFNRixLQUFLSyxVQUFXLEVBQUdILEdBQVFDLEVBQVlILE1BQU9NLFVBQzdFLEVBRUFULE9BQU9DLFVBQVVTLGNBQWdCLFdBQy9CLE9BQU9QLEtBQUtRLFVBQVcsT0FBUUMsUUFBUyxtQkFBb0IsR0FDOUQsRUFFQVosT0FBT0MsVUFBVVksc0JBQXdCLFdBQ3ZDLE1BQXFCLGlCQUFUVixLQUNILEdBR0ZBLEtBQUtXLE9BQVEsR0FBSUMsY0FBZ0JaLEtBQUtLLFVBQVcsRUFDMUQsRUFFQVIsT0FBT0MsVUFBVWUsV0FBYSxXQUM1QixPQUFPYixLQUFLYyxTQUFVLEVBQUcsSUFDM0IsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1N0cmluZ0V4dGVuc2lvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmludGVyZmFjZSBTdHJpbmcge1xyXG4gIHRydW5jYXRlKCBtYXg6IG51bWJlciwgZGVjb3JhdG9yOiBzdHJpbmcgKTogc3RyaW5nO1xyXG4gIHJlbW92ZUFjY2VudHMoKTogc3RyaW5nO1xyXG4gIGNhcGl0YWxpemVGaXJzdExldHRlcigpOiBzdHJpbmc7XHJcbiAgemVyb0JlZm9yZSgpOiBzdHJpbmc7XHJcbiAgaXNOdWxsT3JFbXB0eSgpOiBib29sZWFuO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmlzTnVsbE9yRW1wdHkgPSBmdW5jdGlvbiAoKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIHR5cGVvZiB0aGlzICE9PSAnc3RyaW5nJyAmJiAhdGhpcyAmJiB0aGlzICE9PSAnJztcclxufTtcclxuXHJcblN0cmluZy5wcm90b3R5cGUudHJ1bmNhdGUgPSBmdW5jdGlvbiAoIG1heDogbnVtYmVyLCBkZWNvcmF0b3I6IHN0cmluZyA9ICcuLi4nICk6IHN0cmluZyB7XHJcbiAgcmV0dXJuICggdGhpcy5sZW5ndGggPiBtYXggPyB0aGlzLnN1YnN0cmluZyggMCwgbWF4ICkgKyBkZWNvcmF0b3IgOiB0aGlzICkudG9TdHJpbmcoKTtcclxufTtcclxuXHJcblN0cmluZy5wcm90b3R5cGUucmVtb3ZlQWNjZW50cyA9IGZ1bmN0aW9uICgpIHtcclxuICByZXR1cm4gdGhpcy5ub3JtYWxpemUoICdORkQnICkucmVwbGFjZSggL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIgKTtcclxufVxyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5jYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSBmdW5jdGlvbiAoKTogc3RyaW5nIHtcclxuICBpZiAoIHR5cGVvZiB0aGlzICE9PSAnc3RyaW5nJyApIHtcclxuICAgIHJldHVybiAnJztcclxuICB9XHJcblxyXG4gIHJldHVybiB0aGlzLmNoYXJBdCggMCApLnRvVXBwZXJDYXNlKCkgKyB0aGlzLnN1YnN0cmluZyggMSApO1xyXG59XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnplcm9CZWZvcmUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgcmV0dXJuIHRoaXMucGFkU3RhcnQoIDIsICcwJyApO1xyXG59Il0sIm5hbWVzIjpbIlN0cmluZyIsInByb3RvdHlwZSIsImlzTnVsbE9yRW1wdHkiLCJ0aGlzIiwidHJ1bmNhdGUiLCJtYXgiLCJkZWNvcmF0b3IiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJ0b1N0cmluZyIsInJlbW92ZUFjY2VudHMiLCJub3JtYWxpemUiLCJyZXBsYWNlIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ6ZXJvQmVmb3JlIiwicGFkU3RhcnQiXSwic291cmNlUm9vdCI6IiJ9