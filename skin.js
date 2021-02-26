// Garden Gnome Software - Skin
// Pano2VR 6.1.8/17956
// Filename: zdy.ggsk
// Generated 2021-02-26T21:30:23

function pano2vrSkin(player,base) {
	player.addVariable('vis_thumbnail_menu', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip', 2, true);
	player.addVariable('opt_thumbnail_menu_tooltip_1', 2, true);
	player.addVariable('vis_thumbnail_menu_1', 2, true);
	player.addVariable('vis_video_file', 2, false);
	player.addVariable('vis_video_youtube', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._container_1=document.createElement('div');
		el.ggId="Container 1";
		el.ggDx=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 172px;';
		hs+='height : 86px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 454px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._button_1=document.createElement('div');
		els=me._button_1__img=document.createElement('img');
		els.className='ggskin ggskin_button_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 201px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_1.onclick=function (e) {
			player.changeFovLog(-1,true);
				player.playSound("7","1");
		}
		me._button_1.onmouseover=function (e) {
			me._button_1.style[domTransition]='none';
			me._button_1.ggParameter.sx=1.1;me._button_1.ggParameter.sy=1.1;
			me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
		}
		me._button_1.onmouseout=function (e) {
			me._button_1.style[domTransition]='none';
			me._button_1.ggParameter.sx=1;me._button_1.ggParameter.sy=1;
			me._button_1.style[domTransform]=parameterToTransform(me._button_1.ggParameter);
		}
		me._button_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_1);
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 64px;';
		hs+='position : absolute;';
		hs+='top : 59px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.changeTiltLog(-1,true);
				player.playSound("7","1");
		}
		me._button_2.onmouseover=function (e) {
			me._button_2.style[domTransition]='none';
			me._button_2.ggParameter.sx=1.1;me._button_2.ggParameter.sy=1.1;
			me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
		}
		me._button_2.onmouseout=function (e) {
			me._button_2.style[domTransition]='none';
			me._button_2.ggParameter.sx=1;me._button_2.ggParameter.sy=1;
			me._button_2.style[domTransform]=parameterToTransform(me._button_2.ggParameter);
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_2);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 111px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.changePanLog(1,true);
				player.playSound("7","1");
		}
		me._button_3.onmouseover=function (e) {
			me._button_3.style[domTransition]='none';
			me._button_3.ggParameter.sx=1.1;me._button_3.ggParameter.sy=1.1;
			me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
		}
		me._button_3.onmouseout=function (e) {
			me._button_3.style[domTransition]='none';
			me._button_3.ggParameter.sx=1;me._button_3.ggParameter.sy=1;
			me._button_3.style[domTransform]=parameterToTransform(me._button_3.ggParameter);
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_3);
		el=me._button_4=document.createElement('div');
		els=me._button_4__img=document.createElement('img');
		els.className='ggskin ggskin_button_4';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 155px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_4.onclick=function (e) {
			player.changePanLog(-1,true);
				player.playSound("7","1");
		}
		me._button_4.onmouseover=function (e) {
			me._button_4.style[domTransition]='none';
			me._button_4.ggParameter.sx=1.1;me._button_4.ggParameter.sy=1.1;
			me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
		}
		me._button_4.onmouseout=function (e) {
			me._button_4.style[domTransition]='none';
			me._button_4.ggParameter.sx=1;me._button_4.ggParameter.sy=1;
			me._button_4.style[domTransform]=parameterToTransform(me._button_4.ggParameter);
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_4);
		el=me._button_5=document.createElement('div');
		els=me._button_5__img=document.createElement('img');
		els.className='ggskin ggskin_button_5';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 247px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_5.onclick=function (e) {
			player.changeFovLog(1,true);
				player.playSound("7","1");
		}
		me._button_5.onmouseover=function (e) {
			me._button_5.style[domTransition]='none';
			me._button_5.ggParameter.sx=1.1;me._button_5.ggParameter.sy=1.1;
			me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
		}
		me._button_5.onmouseout=function (e) {
			me._button_5.style[domTransition]='none';
			me._button_5.ggParameter.sx=1;me._button_5.ggParameter.sy=1;
			me._button_5.style[domTransform]=parameterToTransform(me._button_5.ggParameter);
		}
		me._button_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_5);
		el=me._button_6=document.createElement('div');
		els=me._button_6__img=document.createElement('img');
		els.className='ggskin ggskin_button_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 18px;';
		hs+='position : absolute;';
		hs+='top : 60px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_6.onclick=function (e) {
			player.changeTiltLog(1,true);
				player.playSound("7","1");
		}
		me._button_6.onmouseover=function (e) {
			me._button_6.style[domTransition]='none';
			me._button_6.ggParameter.sx=1.1;me._button_6.ggParameter.sy=1.1;
			me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
		}
		me._button_6.onmouseout=function (e) {
			me._button_6.style[domTransition]='none';
			me._button_6.ggParameter.sx=1;me._button_6.ggParameter.sy=1;
			me._button_6.style[domTransform]=parameterToTransform(me._button_6.ggParameter);
		}
		me._button_6.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_6);
		el=me._button_7=document.createElement('div');
		els=me._button_7__img=document.createElement('img');
		els.className='ggskin ggskin_button_7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 389px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_7.onclick=function (e) {
			player.changeViewMode(0);
			me._button_7.style[domTransition]='none';
			me._button_7.style.visibility='hidden';
			me._button_7.ggVisible=false;
			me._button_10.style[domTransition]='none';
			me._button_10.style.visibility=(Number(me._button_10.style.opacity)>0||!me._button_10.style.opacity)?'inherit':'hidden';
			me._button_10.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_7.onmouseover=function (e) {
			me._button_7.style[domTransition]='none';
			me._button_7.ggParameter.sx=1.1;me._button_7.ggParameter.sy=1.1;
			me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
		}
		me._button_7.onmouseout=function (e) {
			me._button_7.style[domTransition]='none';
			me._button_7.ggParameter.sx=1;me._button_7.ggParameter.sy=1;
			me._button_7.style[domTransform]=parameterToTransform(me._button_7.ggParameter);
		}
		me._button_7.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_7);
		el=me._button_8=document.createElement('div');
		els=me._button_8__img=document.createElement('img');
		els.className='ggskin ggskin_button_8';
		hs='data:image/png;base64,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'+
			'9/Kg7ytHqUcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 431px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_8.onclick=function (e) {
			player.enterFullscreen();
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility='hidden';
			me._button_8.ggVisible=false;
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility=(Number(me._button_9.style.opacity)>0||!me._button_9.style.opacity)?'inherit':'hidden';
			me._button_9.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_8.onmouseover=function (e) {
			me._button_8.style[domTransition]='none';
			me._button_8.ggParameter.sx=1.1;me._button_8.ggParameter.sy=1.1;
			me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
		}
		me._button_8.onmouseout=function (e) {
			me._button_8.style[domTransition]='none';
			me._button_8.ggParameter.sx=1;me._button_8.ggParameter.sy=1;
			me._button_8.style[domTransform]=parameterToTransform(me._button_8.ggParameter);
		}
		me._button_8.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_8);
		el=me._button_9=document.createElement('div');
		els=me._button_9__img=document.createElement('img');
		els.className='ggskin ggskin_button_9';
		hs='data:image/png;base64,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'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 431px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_9.onclick=function (e) {
			player.exitFullscreen();
			me._button_9.style[domTransition]='none';
			me._button_9.style.visibility='hidden';
			me._button_9.ggVisible=false;
			me._button_8.style[domTransition]='none';
			me._button_8.style.visibility=(Number(me._button_8.style.opacity)>0||!me._button_8.style.opacity)?'inherit':'hidden';
			me._button_8.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_9.onmouseover=function (e) {
			me._button_9.style[domTransition]='none';
			me._button_9.ggParameter.sx=1.1;me._button_9.ggParameter.sy=1.1;
			me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
		}
		me._button_9.onmouseout=function (e) {
			me._button_9.style[domTransition]='none';
			me._button_9.ggParameter.sx=1;me._button_9.ggParameter.sy=1;
			me._button_9.style[domTransform]=parameterToTransform(me._button_9.ggParameter);
		}
		me._button_9.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_9);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 389px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.changeViewMode(1);
			me._button_10.style[domTransition]='none';
			me._button_10.style.visibility='hidden';
			me._button_10.ggVisible=false;
			me._button_7.style[domTransition]='none';
			me._button_7.style.visibility=(Number(me._button_7.style.opacity)>0||!me._button_7.style.opacity)?'inherit':'hidden';
			me._button_7.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_10.onmouseover=function (e) {
			me._button_10.style[domTransition]='none';
			me._button_10.ggParameter.sx=1.1;me._button_10.ggParameter.sy=1.1;
			me._button_10.style[domTransform]=parameterToTransform(me._button_10.ggParameter);
		}
		me._button_10.onmouseout=function (e) {
			me._button_10.style[domTransition]='none';
			me._button_10.ggParameter.sx=1;me._button_10.ggParameter.sy=1;
			me._button_10.style[domTransform]=parameterToTransform(me._button_10.ggParameter);
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_10);
		el=me._button_11=document.createElement('div');
		els=me._button_11__img=document.createElement('img');
		els.className='ggskin ggskin_button_11';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 11";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 295px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_11.onclick=function (e) {
				player.pauseSound("_background");
			me._button_11.style[domTransition]='none';
			me._button_11.style.visibility='hidden';
			me._button_11.ggVisible=false;
			me._button_12.style[domTransition]='none';
			me._button_12.style.visibility=(Number(me._button_12.style.opacity)>0||!me._button_12.style.opacity)?'inherit':'hidden';
			me._button_12.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_11.onmouseover=function (e) {
			me._button_11.style[domTransition]='none';
			me._button_11.ggParameter.sx=1.1;me._button_11.ggParameter.sy=1.1;
			me._button_11.style[domTransform]=parameterToTransform(me._button_11.ggParameter);
		}
		me._button_11.onmouseout=function (e) {
			me._button_11.style[domTransition]='none';
			me._button_11.ggParameter.sx=1;me._button_11.ggParameter.sy=1;
			me._button_11.style[domTransform]=parameterToTransform(me._button_11.ggParameter);
		}
		me._button_11.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_11);
		el=me._button_12=document.createElement('div');
		els=me._button_12__img=document.createElement('img');
		els.className='ggskin ggskin_button_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 295px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_12.onclick=function (e) {
				player.playSound("_background","1");
			me._button_12.style[domTransition]='none';
			me._button_12.style.visibility='hidden';
			me._button_12.ggVisible=false;
			me._button_11.style[domTransition]='none';
			me._button_11.style.visibility=(Number(me._button_11.style.opacity)>0||!me._button_11.style.opacity)?'inherit':'hidden';
			me._button_11.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_12.onmouseover=function (e) {
			me._button_12.style[domTransition]='none';
			me._button_12.ggParameter.sx=1.1;me._button_12.ggParameter.sy=1.1;
			me._button_12.style[domTransform]=parameterToTransform(me._button_12.ggParameter);
		}
		me._button_12.onmouseout=function (e) {
			me._button_12.style[domTransition]='none';
			me._button_12.ggParameter.sx=1;me._button_12.ggParameter.sy=1;
			me._button_12.style[domTransform]=parameterToTransform(me._button_12.ggParameter);
		}
		me._button_12.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_12);
		el=me._button_13=document.createElement('div');
		els=me._button_13__img=document.createElement('img');
		els.className='ggskin ggskin_button_13';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 13";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 341px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_13.onclick=function (e) {
			player.startAutorotate("0.05","4.99","0.99");
			me._button_13.style[domTransition]='none';
			me._button_13.style.visibility='hidden';
			me._button_13.ggVisible=false;
			me._button_14.style[domTransition]='none';
			me._button_14.style.visibility=(Number(me._button_14.style.opacity)>0||!me._button_14.style.opacity)?'inherit':'hidden';
			me._button_14.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_13.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_13);
		el=me._button_14=document.createElement('div');
		els=me._button_14__img=document.createElement('img');
		els.className='ggskin ggskin_button_14';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 14";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 341px;';
		hs+='position : absolute;';
		hs+='top : 58px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_14.onclick=function (e) {
			player.stopAutorotate();
			me._button_14.style[domTransition]='none';
			me._button_14.style.visibility='hidden';
			me._button_14.ggVisible=false;
			me._button_13.style[domTransition]='none';
			me._button_13.style.visibility=(Number(me._button_13.style.opacity)>0||!me._button_13.style.opacity)?'inherit':'hidden';
			me._button_13.ggVisible=true;
				player.playSound("7","1");
		}
		me._button_14.onmouseover=function (e) {
			me._button_14.style[domTransition]='none';
			me._button_14.ggParameter.sx=1.1;me._button_14.ggParameter.sy=1.1;
			me._button_14.style[domTransform]=parameterToTransform(me._button_14.ggParameter);
		}
		me._button_14.onmouseout=function (e) {
			me._button_14.style[domTransition]='none';
			me._button_14.ggParameter.sx=1;me._button_14.ggParameter.sy=1;
			me._button_14.style[domTransform]=parameterToTransform(me._button_14.ggParameter);
		}
		me._button_14.ggUpdatePosition=function (useTransition) {
		}
		me._container_1.appendChild(me._button_14);
		me.divSkin.appendChild(me._container_1);
		el=me._container_2=document.createElement('div');
		el.ggId="Container 2";
		el.ggDx=-1;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 243px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 331px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 15px;';
		hs+='border-radius : 15px;';
		hs+='border : 3px solid #434343;';
		hs+='cursor : default;';
		hs+='height : 27px;';
		hs+='left : 35px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : inherit;';
		hs+='width : 263px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._rectangle_2);
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 10px;';
		hs+='border-radius : 10px;';
		hs+='background : #5c5c5c;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 24px;';
		hs+='left : 40px;';
		hs+='position : absolute;';
		hs+='top : 67px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='0% 50%';
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._rectangle_1);
		el=me._text_2=document.createElement('div');
		els=me._text_2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 23px;';
		hs+='left : 115px;';
		hs+='position : absolute;';
		hs+='top : 39px;';
		hs+='visibility : inherit;';
		hs+='width : 103px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 103px;';
		hs+='height: 23px;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='font-size: 16px;';
		hs+='font-weight: 700;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		els.innerHTML="Loading\u2026";
		el.appendChild(els);
		me._text_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_2.ggUpdatePosition=function (useTransition) {
		}
		me._container_2.appendChild(me._text_2);
		me.divSkin.appendChild(me._container_2);
		el=me._thumbnail=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="thumbnail";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 23px;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._thumbnail.onclick=function (e) {
			player.setVariableValue('vis_thumbnail_menu_1', !player.getVariableValue('vis_thumbnail_menu_1'));
				player.playSound("7","1");
		}
		me._thumbnail.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._thumbnail_hide_button_show=document.createElement('div');
		els=me._thumbnail_hide_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGQ9Ik02NSw4LjlDMzQsOC45LDguOSwzNCw4LjksNjVTMzQsMTIxLjEsNjUsMTIxLjFjMzEsMCw1Ni4xLTI1LjEsNTYuMS01Ni4xUzk2LDguOSw2NSw4Ljl6IE01NS40LDU3LjgmI3hhOyYjeDk7JiN4OTtjMC0xLjMsMS4xLTIuNCwyLjUtMi40aDEwLjRMNTUuNCw2OC4zVjU3Ljh6IE0yNy44LDcyLjJWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuM2MxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuMyYjeGE7JiN4OTsmI3g5O2MwLDEuMy0xLjEsMi40LTIuNSwyLjRIMzAuM0MyOC45LDc0LjYsMjcuOCw3My41LDI3LjgsNzIu'+
			'MnogTTMyLjgsMTAwLjRjLTAuNCwwLTAuOC0wLjEtMS4xLTAuNGwtMS43LTEuN2MtMC42LTAuNi0wLjYtMS42LDAtMi4yJiN4YTsmI3g5OyYjeDk7bDY2LTY2YzAuMy0wLjMsMC43LTAuNCwxLjEtMC40YzAuNCwwLDAuOCwwLjEsMS4xLDAuNGwxLjcsMS43YzAuNiwwLjYsMC42LDEuNiwwLDIuMmwtNjYsNjZDMzMuNiwxMDAuMywzMy4yLDEwMC40LDMyLjgsMTAwLjR6JiN4YTsmI3g5OyYjeDk7IE03NC42LDcyLjJjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDYxLjlsMTIuNy0xMi43TDc0LjYsNzIuMkw3NC42LDcyLjJ6IE0xMDIuMiw3Mi4yYzAsMS4zLTEuMSwyLjQtMi41LDIuNEg4NS41JiN4YTsmI3'+
			'g5OyYjeDk7Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjRWNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjRDMTAyLjIsNTcuOCwxMDIuMiw3Mi4yLDEwMi4yLDcyLjJ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zJiN4YTsmI3g5OyYjeDk7YzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgz'+
			'MC4zQzI4LjksNzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiYjeGE7JiN4OTsmI3g5O0MzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjImI3'+
			'hhOyYjeDk7JiN4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCYjeGE7JiN4OTsmI3g5O0MxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnogTTU1LjQsNTcuOGMwLTEuMywxLjEtMi40LDIuNS0yLjRoMTAuNEw1NS40LDY4LjNWNTcuOHogTTI3LjgsNzIuMlY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNCYjeGE7JiN4OTsmI3g5O2gxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEgzMC4zQzI4Ljks'+
			'NzQuNiwyNy44LDczLjUsMjcuOCw3Mi4yeiBNMzIuOCwxMDAuNGMtMC40LDAtMC44LTAuMS0xLjEtMC40JiN4YTsmI3g5OyYjeDk7bC0xLjctMS43Yy0wLjYtMC42LTAuNi0xLjYsMC0yLjJsNjYtNjZjMC4zLTAuMywwLjctMC40LDEuMS0wLjRjMC40LDAsMC44LDAuMSwxLjEsMC40bDEuNywxLjdjMC42LDAuNiwwLjYsMS42LDAsMi4ybC02Niw2NiYjeGE7JiN4OTsmI3g5O0MzMy42LDEwMC4zLDMzLjIsMTAwLjQsMzIuOCwxMDAuNHogTTc0LjYsNzIuMmMwLDEuMy0xLjEsMi40LTIuNSwyLjRINjEuOWwxMi43LTEyLjdMNzQuNiw3Mi4yTDc0LjYsNzIuMnogTTEwMi4yLDcyLjImI3hhOyYjeDk7Ji'+
			'N4OTtjMCwxLjMtMS4xLDIuNC0yLjUsMi40SDg1LjVjLTEuNCwwLTIuNS0xLjEtMi41LTIuNFY1Ny44YzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNCYjeGE7JiN4OTsmI3g5O0MxMDIuMiw1Ny44LDEwMi4yLDcyLjIsMTAyLjIsNzIuMnoiIGZpbGw9IiNGRkZGRkYiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._thumbnail_hide_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_hide_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iMCAwIDEzMCAxMzAiIGlkPSJMYXllcl8xIiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMzAgMTMwOyIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIi'+
			'B5PSIwcHgiPgogPGcgaWQ9IkxheWVyXzFfMV8iPgogIDxwYXRoIGQ9Ik02NSwyLjZDMzAuNiwyLjYsMi42LDMwLjYsMi42LDY1czI3LjksNjIuNCw2Mi40LDYyLjRjMzQuNCwwLDYyLjQtMjcuOSw2Mi40LTYyLjRTOTkuNCwyLjYsNjUsMi42eiBNNTQuMyw1Ny4xJiN4YTsmI3g5OyYjeDk7YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkmI3hhOyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQu'+
			'NCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjVsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNCYjeGE7JiN4OTsmI3g5O2w3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjNDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6JiN4YTsmI3g5OyYjeDk7IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0'+
			'g4Ny44JiN4YTsmI3g5OyYjeDk7Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjdDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMl8xXyI+CiAgPHBhdGggZD0iTTU0LjMsNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTEuNkw1NC4zLDY4LjdWNTcuMXogTTIzLjcsNzIuOVY1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44JiN4YTsmI3g5OyYjeDk7YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwy'+
			'LjctMi43LDIuN0gyNi40QzI0LjksNzUuNywyMy43LDc0LjQsMjMuNyw3Mi45eiBNMjkuMywxMDQuNGMtMC40LDAtMC45LTAuMi0xLjItMC41JiN4YTsmI3g5OyYjeDk7bC0xLjgtMS44Yy0wLjctMC43LTAuNy0xLjcsMC0yLjRsNzMuMy03My4zYzAuMy0wLjMsMC44LTAuNSwxLjItMC41czAuOSwwLjIsMS4yLDAuNWwxLjgsMS44YzAuNywwLjcsMC43LDEuNywwLDIuNGwtNzMuMyw3My4zJiN4YTsmI3g5OyYjeDk7QzMwLjEsMTA0LjIsMjkuNywxMDQuNCwyOS4zLDEwNC40eiBNNzUuNyw3Mi45YzAsMS41LTEuMiwyLjctMi43LDIuN0g2MS41bDE0LjEtMTQuMUw3NS43LDcyLjlMNzUuNyw3Mi45ei'+
			'BNMTA2LjMsNzIuOSYjeGE7JiN4OTsmI3g5O2MwLDEuNS0xLjIsMi43LTIuNywyLjdIODcuOGMtMS41LDAtMi43LTEuMi0yLjctMi43VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43JiN4YTsmI3g5OyYjeDk7QzEwNi4zLDU3LjEsMTA2LjMsNzIuOSwxMDYuMyw3Mi45eiBNNTQuMyw1Ny4xYzAtMS41LDEuMi0yLjcsMi43LTIuN2gxMS42TDU0LjMsNjguN1Y1Ny4xeiBNMjMuNyw3Mi45VjU3LjFjMC0xLjUsMS4yLTIuNywyLjctMi43JiN4YTsmI3g5OyYjeDk7aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcs'+
			'Mi43SDI2LjRDMjQuOSw3NS43LDIzLjcsNzQuNCwyMy43LDcyLjl6IE0yOS4zLDEwNC40Yy0wLjQsMC0wLjktMC4yLTEuMi0wLjUmI3hhOyYjeDk7JiN4OTtsLTEuOC0xLjhjLTAuNy0wLjctMC43LTEuNywwLTIuNGw3My4zLTczLjNjMC4zLTAuMywwLjgtMC41LDEuMi0wLjVzMC45LDAuMiwxLjIsMC41bDEuOCwxLjhjMC43LDAuNywwLjcsMS43LDAsMi40bC03My4zLDczLjMmI3hhOyYjeDk7JiN4OTtDMzAuMSwxMDQuMiwyOS43LDEwNC40LDI5LjMsMTA0LjR6IE03NS43LDcyLjljMCwxLjUtMS4yLDIuNy0yLjcsMi43SDYxLjVsMTQuMS0xNC4xTDc1LjcsNzIuOUw3NS43LDcyLjl6IE0xMDYuMy'+
			'w3Mi45JiN4YTsmI3g5OyYjeDk7YzAsMS41LTEuMiwyLjctMi43LDIuN0g4Ny44Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjdWNTcuMWMwLTEuNSwxLjItMi43LDIuNy0yLjdoMTUuOGMxLjUsMCwyLjcsMS4yLDIuNywyLjcmI3hhOyYjeDk7JiN4OTtDMTA2LjMsNTcuMSwxMDYuMyw3Mi45LDEwNi4zLDcyLjl6IiBmaWxsPSIjRkZGRkZGIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_hide_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_hide_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_hide_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_hide_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_hide_button_show.style[domTransition]='opacity 0s';
				if (me._thumbnail_hide_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_hide_button_show.style.visibility="hidden";
					me._thumbnail_hide_button_show.style.opacity=0;
				}
				else {
					me._thumbnail_hide_button_show.style.visibility=me._thumbnail_hide_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_hide_button_show.style.opacity=1;
				}
			}
		}
		me._thumbnail_hide_button_show.onmouseover=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='hidden';
			me._thumbnail_hide_button_show__imgo.style.visibility='inherit';
		}
		me._thumbnail_hide_button_show.onmouseout=function (e) {
			me._thumbnail_hide_button_show__img.style.visibility='inherit';
			me._thumbnail_hide_button_show__imgo.style.visibility='hidden';
		}
		me._thumbnail_hide_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_hide_button_show);
		el=me._thumbnail_show_button_show=document.createElement('div');
		els=me._thumbnail_show_button_show__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMTguOSwzOTdjMC0zMS0yNS4xLTU2LjEtNTYuMS01Ni4xYy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFzMjUuMSw1Ni4xLDU2LjEsNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNDQsNDUzLjEtMTE4LjksNDI4LTExOC45LDM5N3ogTS0yMDkuNyw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7djE0LjNjMCwxLjMtMS4xLDIuNC0yLjUsMi40TC0yMDkuNyw0MDYuNkwtMjA5LjcsNDA2LjZ6IE0tMTgyLjEsNDA2LjZj'+
			'LTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuM2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zYzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiBNLTE1NC41LDQwNi42Yy0xLjQsMC0yLjUtMS4xLTIuNS0yLjR2LTE0LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuM2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTE1NC41LDQwNi42eiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9Ik'+
			'xheWVyXzIiPgogIDxnPgogICA8Zz4KICAgIDxwYXRoIGQ9Ik0tMTU0LjUsNDA2LjZjLTEuNCwwLTIuNS0xLjEtMi41LTIuNHYtMTQuM2MwLTEuMywxLjEtMi40LDIuNS0yLjRoMTQuMmMxLjQsMCwyLjUsMS4xLDIuNSwyLjR2MTQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTsmI3g5O2MwLDEuMy0xLjEsMi40LTIuNSwyLjRMLTE1NC41LDQwNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0xODIuMSw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4yYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMTgyLjEsNDA2LjZMLTE4Mi4xLDQwNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICAgPHBhdGggZD0iTS0yMDkuNyw0MDYuNmMtMS40LDAtMi41LTEuMS0yLjUtMi40di0xNC4zYzAtMS4zLDEuMS0yLjQsMi41LTIuNGgxNC4zYzEuNCwwLDIuNSwxLjEsMi41LDIuNHYxNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMS4zLTEuMSwyLjQtMi41LDIuNEwtMjA5LjcsNDA2LjZMLTIwOS43LDQwNi42eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._thumbnail_show_button_show__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._thumbnail_show_button_show__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xMTIuNiwzOTdjMC0zNC40LTI3LjktNjIuNC02Mi40LTYyLjRjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40czI3LjksNjIuNCw2Mi40LDYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTQwLjYsNDU5LjQtMTEyLjYsNDMxLjQtMTEyLjYsMzk3eiBNLTIxMy42LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUsMCwyLjcsMS4yLDIuNywyLjd2MTUuOWMwLDEuNS0xLjIsMi43LTIuNywyLjdMLTIxMy42LDQwNy42TC0yMTMuNiw0MDcuNnogTS0xODIu'+
			'OSw0MDcuNmMtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjljMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6IE0tMTUyLjIsNDA3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45YzAsMS41LTEuMiwyLjctMi43LDIuN0wtMTUyLjIsNDA3LjZ6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+Ci'+
			'A8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxnPgogICAgPHBhdGggZD0iTS0xNTIuMiw0MDcuNmMtMS41LDAtMi43LTEuMi0yLjctMi43di0xNS45YzAtMS41LDEuMi0yLjcsMi43LTIuN2gxNS44YzEuNSwwLDIuNywxLjIsMi43LDIuN3YxNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5OyYjeDk7YzAsMS41LTEuMiwyLjctMi43LDIuN0wtMTUyLjIsNDA3LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTE4Mi45LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkmI3hk'+
			'OyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0xODIuOSw0MDcuNkwtMTgyLjksNDA3LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgICA8cGF0aCBkPSJNLTIxMy42LDQwNy42Yy0xLjUsMC0yLjctMS4yLTIuNy0yLjd2LTE1LjljMC0xLjUsMS4yLTIuNywyLjctMi43aDE1LjhjMS41LDAsMi43LDEuMiwyLjcsMi43djE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7JiN4OTtjMCwxLjUtMS4yLDIuNy0yLjcsMi43TC0yMTMuNiw0MDcuNkwtMjEzLjYsNDA3LjZ6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._thumbnail_show_button_show__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="thumbnail_show_button_show";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_show_button_show.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_show_button_show.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_show_button_show.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_show_button_show.style[domTransition]='opacity 0s';
				if (me._thumbnail_show_button_show.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_show_button_show.style.visibility=me._thumbnail_show_button_show.ggVisible?'inherit':'hidden';
					me._thumbnail_show_button_show.style.opacity=1;
				}
				else {
					me._thumbnail_show_button_show.style.visibility="hidden";
					me._thumbnail_show_button_show.style.opacity=0;
				}
			}
		}
		me._thumbnail_show_button_show.onmouseover=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='hidden';
			me._thumbnail_show_button_show__imgo.style.visibility='inherit';
		}
		me._thumbnail_show_button_show.onmouseout=function (e) {
			me._thumbnail_show_button_show__img.style.visibility='inherit';
			me._thumbnail_show_button_show__imgo.style.visibility='hidden';
		}
		me._thumbnail_show_button_show.ggUpdatePosition=function (useTransition) {
		}
		me._thumbnail.appendChild(me._thumbnail_show_button_show);
		me.divSkin.appendChild(me._thumbnail);
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(73,73,73,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 63px;';
		hs+='cursor : default;';
		hs+='height : 87px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('vis_thumbnail_menu_1') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_3.style[domTransition]='opacity 0s';
				if (me._rectangle_3.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.style.opacity=0;
				}
				else {
					me._rectangle_3.style.visibility=me._rectangle_3.ggVisible?'inherit':'hidden';
					me._rectangle_3.style.opacity=1;
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_menu=document.createElement('div');
		els=me._thumbnail_menu__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		hs ='';
		hs+='height : 73px;';
		hs+='left : 50%;';
		hs+='margin-left : -57.5px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 115px;';
		hs+="";
		els.setAttribute('style',hs);
		me._thumbnail_menu.ggScrollByX = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosX = (me._thumbnail_menu__horScrollFg.offsetLeft + diffX);
			me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
			me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
		}
		me._thumbnail_menu.ggScrollByXSmooth = function(diffX) {
			if(!me._thumbnail_menu.ggHorScrollVisible || diffX == 0 || me._thumbnail_menu.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._thumbnail_menu.ggScrollPosX >= me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth)) {
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._thumbnail_menu.ggScrollPosX <= 0)) {
					me._thumbnail_menu.ggScrollPosX = Math.max(me._thumbnail_menu.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
			me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + me._thumbnail_menu.ggContentLeftOffset + 'px';
			me._thumbnail_menu.ggScrollPosXPercent = (me._thumbnail_menu__horScrollFg.offsetLeft / me._thumbnail_menu__horScrollBg.offsetWidth);
			}, 10);
		}
		me._thumbnail_menu.ggScrollByY = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			me._thumbnail_menu.ggScrollPosY = (me._thumbnail_menu__vertScrollFg.offsetTop + diffY);
			me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
			me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
		}
		me._thumbnail_menu.ggScrollByYSmooth = function(diffY) {
			if(!me._thumbnail_menu.ggVertScrollVisible || diffY == 0 || me._thumbnail_menu.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._thumbnail_menu.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._thumbnail_menu.ggScrollPosY >= me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight)) {
					me._thumbnail_menu.ggScrollPosY = Math.min(me._thumbnail_menu.ggScrollPosY, me._thumbnail_menu__vertScrollBg.offsetHeight - me._thumbnail_menu__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._thumbnail_menu.ggScrollPosY <= 0)) {
					me._thumbnail_menu.ggScrollPosY = Math.max(me._thumbnail_menu.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._thumbnail_menu__vertScrollFg.style.top = me._thumbnail_menu.ggScrollPosY + 'px';
			me._thumbnail_menu__content.style.top = -(Math.round(me._thumbnail_menu.ggScrollPosY / me._thumbnail_menu.ggVPercentVisible)) + me._thumbnail_menu.ggContentTopOffset + 'px';
			me._thumbnail_menu.ggScrollPosYPercent = (me._thumbnail_menu__vertScrollFg.offsetTop / me._thumbnail_menu__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._thumbnail_menu.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._thumbnail_menu.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._thumbnail_menu.offsetWidth - (me._thumbnail_menu.ggVertScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu.ggScrollByXSmooth(diffX);
				}
			}
			if (me._thumbnail_menu.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._thumbnail_menu.offsetHeight - (me._thumbnail_menu.ggHorScrollVisible ? 15 : 0))) * me._thumbnail_menu.ggVPercentVisible);
					me._thumbnail_menu.ggScrollByYSmooth(diffY);
				}
			}
		}
		els.ontouchstart = function(e) {
			e = e || window.event;
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			me._thumbnail_menu.ggDragLastY = t[0].clientY;
			me._thumbnail_menu__content.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggDragInertiaY *= 0.65;
					me._thumbnail_menu.ggScrollByX(-me._thumbnail_menu.ggDragInertiaX);
					me._thumbnail_menu.ggScrollByY(-me._thumbnail_menu.ggDragInertiaY);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0 && Math.abs(me._thumbnail_menu.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				me._thumbnail_menu__content.ontouchend = null;
				me._thumbnail_menu__content.ontouchmove = null;
			}
			me._thumbnail_menu__content.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				var diffY = t[0].clientY - me._thumbnail_menu.ggDragLastY;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragInertiaY = diffY;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggDragLastY = t[0].clientY;
				me._thumbnail_menu.ggScrollByX(-diffX);
				me._thumbnail_menu.ggScrollByY(-diffY);
			}
		}
		elHorScrollBg = me._thumbnail_menu__horScrollBg = document.createElement('div');
		el.appendChild(elHorScrollBg);
		elHorScrollBg.setAttribute('style', 'position: absolute; left: 0px; bottom: 0px; visibility: hidden; width: 384px; height: 15px; background-color: rgba(0,0,0,0.392157); pointer-events: auto;');
		elHorScrollBg.className='ggskin ggskin_scrollarea_hscrollbg';
		elHorScrollFg = me._thumbnail_menu__horScrollFg = document.createElement('div');
		elHorScrollBg.appendChild(elHorScrollFg);
		elHorScrollFg.className='ggskin ggskin_scrollarea_hscrollfg';
		elHorScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 384px; height: 15px; background-color: rgba(0,0,0,1); pointer-events: auto;');
		me._thumbnail_menu.ggScrollPosX = 0;
		me._thumbnail_menu.ggScrollPosXPercent = 0.0;
		elHorScrollFg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._thumbnail_menu.ggDragLastX = e.clientX;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffX = e.clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = e.clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._thumbnail_menu.ggDragLastX = t[0].clientX;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._thumbnail_menu.ggDragInertiaX *= 0.65;
					me._thumbnail_menu.ggScrollByX(me._thumbnail_menu.ggDragInertiaX);
					if (Math.abs(me._thumbnail_menu.ggDragInertiaX) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 50);
				document.ontouchend = null;
				document.ontouchmove = null;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffX = t[0].clientX - me._thumbnail_menu.ggDragLastX;
				me._thumbnail_menu.ggDragInertiaX = diffX;
				me._thumbnail_menu.ggDragLastX = t[0].clientX;
				me._thumbnail_menu.ggScrollByX(diffX);
			}
		}
		elHorScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if (e.offsetX < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		elHorScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._thumbnail_menu__horScrollBg.getBoundingClientRect();
			var diffX = me._thumbnail_menu.ggScrollWidth;
			if ((t[0].clientX - rect.left) < me._thumbnail_menu.ggScrollPosX) {
				diffX = diffX * -1;
			}
			me._thumbnail_menu.ggScrollByXSmooth(diffX);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaX);
			me._thumbnail_menu.ggScrollByXSmooth(20 * wheelDelta);
		});
		elCornerBg = me._thumbnail_menu__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 15px; height: 15px; background-color: rgba(255,255,255,1);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="thumbnail_menu";
		el.ggDx=0.16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='bottom : -15px;';
		hs+='height : 84px;';
		hs+='left : -10000px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 60%;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_menu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
			}
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none') {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				var contentWidth = maxX - minX;
				var contentHeight = maxY - minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.width = contentWidth + 'px';
				this.ggContent.style.height = contentHeight + 'px';
				var containerWidth = offsetWidthWithScale;
				if (this.ggVertScrollVisible) containerWidth -= 15;
				if (contentWidth < containerWidth) {
					this.ggContent.style.left = '50%';
					this.ggContent.style.marginLeft = ((contentWidth/-2) - (this.ggVertScrollVisible ? (15/2) : 0)) + 'px';
				}
				else {
					this.ggContent.style.left = this.ggContentLeftOffset + 'px';
					this.ggContent.style.marginLeft = '0px';
				}
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if (contentWidth > Math.ceil(offsetWidthWithScale)) {
					me._thumbnail_menu__horScrollBg.style.visibility = 'inherit';
					me._thumbnail_menu__horScrollFg.style.visibility = 'inherit';
					me._thumbnail_menu.ggHorScrollVisible = true;
				} else {
					me._thumbnail_menu__horScrollBg.style.visibility = 'hidden';
					me._thumbnail_menu__horScrollFg.style.visibility = 'hidden';
					me._thumbnail_menu.ggHorScrollVisible = false;
				}
				if(me._thumbnail_menu.ggHorScrollVisible) {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight - 15;
					if (me._thumbnail_menu.ggVertScrollVisible) {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth - 15;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width - me._thumbnail_menu__horScrollBg.getBoundingClientRect().height;
					} else {
						me._thumbnail_menu.ggAvailableWidth = me._thumbnail_menu.offsetWidth;
						me._thumbnail_menu.ggAvailableWidthWithScale = me._thumbnail_menu.getBoundingClientRect().width;
					}
					me._thumbnail_menu__horScrollBg.style.width = me._thumbnail_menu.ggAvailableWidth + 'px';
					me._thumbnail_menu.ggHPercentVisible = contentWidth != 0 ? me._thumbnail_menu.ggAvailableWidthWithScale / contentWidth : 0.0;
					if (me._thumbnail_menu.ggHPercentVisible > 1.0) me._thumbnail_menu.ggHPercentVisible = 1.0;
					me._thumbnail_menu.ggScrollWidth = Math.round(me._thumbnail_menu__horScrollBg.offsetWidth * me._thumbnail_menu.ggHPercentVisible);
					me._thumbnail_menu__horScrollFg.style.width = me._thumbnail_menu.ggScrollWidth + 'px';
					me._thumbnail_menu.ggScrollPosX = me._thumbnail_menu.ggScrollPosXPercent * me._thumbnail_menu.ggAvailableWidth;
					me._thumbnail_menu.ggScrollPosX = Math.min(me._thumbnail_menu.ggScrollPosX, me._thumbnail_menu__horScrollBg.offsetWidth - me._thumbnail_menu__horScrollFg.offsetWidth);
					me._thumbnail_menu__horScrollFg.style.left = me._thumbnail_menu.ggScrollPosX + 'px';
					if (me._thumbnail_menu.ggHPercentVisible < 1.0) {
						me._thumbnail_menu__content.style.left = -(Math.round(me._thumbnail_menu.ggScrollPosX / me._thumbnail_menu.ggHPercentVisible)) + this.ggContentLeftOffset + 'px';
					}
				} else {
					me._thumbnail_menu.ggAvailableHeight = me._thumbnail_menu.offsetHeight;
					me._thumbnail_menu.ggScrollPosX = 0;
					me._thumbnail_menu.ggScrollPosXPercent = 0.0;
				}
				if(horScrollWasVisible != me._thumbnail_menu.ggHorScrollVisible || vertScrollWasVisible != me._thumbnail_menu.ggVertScrollVisible) {
					me.updateSize(me._thumbnail_menu);
					me._thumbnail_menu.ggUpdatePosition();
				}
			}
		}
		el=me._thumbnail_cloner=document.createElement('div');
		el.ggNumRepeat = 1;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggWidth = 96;
		el.ggHeight = 62;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggInstances = [];
		me._thumbnail_cloner.callChildLogicBlocks_changenode = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_mouseover = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_active = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_active && me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_active.logicBlock_bordercolor();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._checkmark_tick && me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible) {
						me._thumbnail_cloner.ggInstances[i]._checkmark_tick.logicBlock_visible();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_1 = function(){
			if(me._thumbnail_cloner.ggInstances) {
				var i;
				for(i = 0; i < me._thumbnail_cloner.ggInstances.length; i++) {
					if (me._thumbnail_cloner.ggInstances[i]._thumbnail_title && me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha) {
						me._thumbnail_cloner.ggInstances[i]._thumbnail_title.logicBlock_alpha();
					}
				}
			}
		}
		el.ggUpdate = function(filter) {
			if(me._thumbnail_cloner.ggUpdating == true) return;
			me._thumbnail_cloner.ggUpdating = true;
			var el=me._thumbnail_cloner;
			var curNumRows = 0;
			curNumRows = el.ggNumRepeat;
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) )) {
				me._thumbnail_cloner.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			for (var i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) == -1) passed = false;
					}
				}
				if (passed) {
				var parameter={};
				parameter.top=(row * me._thumbnail_cloner.ggHeight) + 'px';
				parameter.left=(column * me._thumbnail_cloner.ggWidth) + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_thumbnail_cloner_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					row = 0;
					column++;
					el.ggNumCols++;
				}
				}
			}
			me._thumbnail_cloner.callChildLogicBlocks_changenode();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_mouseover();
			me._thumbnail_cloner.callChildLogicBlocks_active();
			me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes();
			me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged();
			me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_1();
			me._thumbnail_cloner.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._thumbnail_cloner.parentNode.classList.contains('ggskin_subelement') && me._thumbnail_cloner.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._thumbnail_cloner.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggId="thumbnail_cloner";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 96px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=player.getCurrentNode();
			for(var i=0; i<me._thumbnail_cloner.childNodes.length; i++) {
				var child=me._thumbnail_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							p.ggScrollIntoView(childOffX, childOffY, child.clientWidth, child.clientHeight);
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		me._thumbnail_cloner.ggUpdatePosition=function (useTransition) {
				me._thumbnail_cloner.ggUpdate();
		}
		me._thumbnail_cloner.ggNodeChange=function () {
			me._thumbnail_cloner.ggUpdateConditionNodeChange();
		}
		me._thumbnail_menu__content.appendChild(me._thumbnail_cloner);
		me._rectangle_3.appendChild(me._thumbnail_menu);
		me.divSkin.appendChild(me._rectangle_3);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 211px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 228px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_3.onmouseover=function (e) {
			if (player.transitionsDisabled) {
				me._container_3.style[domTransition]='none';
			} else {
				me._container_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_3.ggParameter.rx=-236;me._container_3.ggParameter.ry=0;
			me._container_3.style[domTransform]=parameterToTransform(me._container_3.ggParameter);
		}
		me._container_3.onmouseout=function (e) {
			if (player.transitionsDisabled) {
				me._container_3.style[domTransition]='none';
			} else {
				me._container_3.style[domTransition]='all 1000ms ease-out 0ms';
			}
			me._container_3.ggParameter.rx=0;me._container_3.ggParameter.ry=0;
			me._container_3.style[domTransform]=parameterToTransform(me._container_3.ggParameter);
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs=basePath + 'images/image_2.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 211px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 167px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_11=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 90px;';
		hs+='position : absolute;';
		hs+='top : 133px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_11.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_11.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._marker_11);
		el=me._marker_10=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 78px;';
		hs+='position : absolute;';
		hs+='top : 89px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_10.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_10.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._marker_10);
		el=me._marker_1=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 67px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_1.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_2.appendChild(me._marker_1);
		me._container_3.appendChild(me._image_2);
		me.divSkin.appendChild(me._container_3);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 2400px;';
		hs+='left : -1199px;';
		hs+='position : absolute;';
		hs+='top : -983px;';
		hs+='visibility : inherit;';
		hs+='width : 3200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggDx=-79;
		el.ggDy=16;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 418px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 412px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._container_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		el=me._seekbar_1=document.createElement('div');
		me._seekbar_1__playhead=document.createElement('div');
		me._seekbar_1.mediaEl = null;
		el.ggId="Seekbar 1";
		el.ggDx=-10;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 11px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 135px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._seekbar_1.connectToMediaEl = function() {
			var disableSeekbar = function() {
				me._seekbar_1__playhead.style.visibility = 'hidden';
				me._seekbar_1.style.background = '#ffffff';
				me._seekbar_1.ggConnected = false;
			}
			if (me._seekbar_1.mediaEl != null) {
				me._seekbar_1.mediaEl.removeEventListener('progress', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.removeEventListener('canplay', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.removeEventListener('timeupdate', me._seekbar_1.updatePlayback);
				if (me._seekbar_1.ggActivate) {
					me._seekbar_1.mediaEl.removeEventListener('play', me._seekbar_1.ggActivate);
				}
				if (me._seekbar_1.ggDeactivate) {
					me._seekbar_1.mediaEl.removeEventListener('ended', me._seekbar_1.ggDeactivate);
					me._seekbar_1.mediaEl.removeEventListener('pause', me._seekbar_1.ggDeactivate);
				}
				if (me._seekbar_1.ggMediaEnded) {
					me._seekbar_1.mediaEl.removeEventListener('ended', me._seekbar_1.ggMediaEnded);
				}
			}
			me._seekbar_1.mediaEl = player.getMediaObject('Video 1');
			if (me._seekbar_1.mediaEl != null) {
				me._seekbar_1__playhead.style.visibility = 'inherit';
				me._seekbar_1__playhead.style.left = '-3px';
				me._seekbar_1.mediaEl.addEventListener('progress', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.addEventListener('canplay', me._seekbar_1.updatePlayback);
				me._seekbar_1.mediaEl.addEventListener('timeupdate', me._seekbar_1.updatePlayback);
				if (me._seekbar_1.ggActivate) {
					me._seekbar_1.mediaEl.addEventListener('play', me._seekbar_1.ggActivate);
				}
				if (me._seekbar_1.ggDeactivate) {
					me._seekbar_1.mediaEl.addEventListener('ended', me._seekbar_1.ggDeactivate);
					me._seekbar_1.mediaEl.addEventListener('pause', me._seekbar_1.ggDeactivate);
				}
				if (me._seekbar_1.ggMediaEnded) {
					me._seekbar_1.mediaEl.addEventListener('ended', me._seekbar_1.ggMediaEnded);
				}
			me._seekbar_1.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements('Video 1');
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._seekbar_1.updatePlayback = function() {
			if (!me._seekbar_1.ggConnected) return;
			if (me._seekbar_1.mediaEl != null) {
				if (me._seekbar_1.mediaEl.readyState) {
					var percent = me._seekbar_1.mediaEl.currentTime / me._seekbar_1.mediaEl.duration;
					var playheadpos = Math.round((me._seekbar_1.clientWidth - 2 * 3 + 1) * percent);
					playheadpos += -3;
					me._seekbar_1__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._seekbar_1.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, #808080 0%, #808080 ' + currPos + '%';
					for (var i = 0; i < me._seekbar_1.mediaEl.buffered.length; i++) {
						var rangeStart = Math.round((me._seekbar_1.mediaEl.buffered.start(i) / me._seekbar_1.mediaEl.duration) * 100.0);
						var rangeEnd = Math.ceil((me._seekbar_1.mediaEl.buffered.end(i) / me._seekbar_1.mediaEl.duration) * 100.0);
						if (rangeEnd > currPos) {
							if (rangeStart < currPos) {
								gradientString += ', #c0c0c0 ' + currPos + '%';
							} else {
								gradientString += ', #ffffff ' + currPos + '%, #ffffff ' + rangeStart + '%';
								gradientString += ', #c0c0c0 ' + rangeStart + '%';
							}
								gradientString += ', #c0c0c0 ' + rangeEnd + '%';
							currPos = rangeEnd;
						}
					}
					if (currPos < 100) {
						gradientString += ', #ffffff ' + currPos + '%';
					}
					gradientString += ')';
					me._seekbar_1.style.background = gradientString;
				}
			}
		}
		me._seekbar_1.appendChild(me._seekbar_1__playhead);
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 3px;';
		hs+=cssPrefix + 'border-radius: 3px;';
		var hs_playhead = 'height: 11px;';
		hs_playhead += 'width: 11px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -3px;';
		hs_playhead += 'top: 0px;';
		hs_playhead += 'border-radius: 6;';
		hs_playhead += cssPrefix + 'border-radius: 6px;';
		hs_playhead += 'background-color: rgba(255,0,0,1);';
		hs_playhead += 'pointer-events: none;';
		me._seekbar_1.setAttribute('style', hs);
		me._seekbar_1__playhead.setAttribute('style', hs_playhead);
		me._seekbar_1.ggIsActive=function() {
			if (me._seekbar_1.mediaEl != null) {
				return (me._seekbar_1.mediaEl.paused == false && me._seekbar_1.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._seekbar_1.onmousedown=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.onmousemove=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.ontouchend=function (e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type == 'touchend') {
				if (me._seekbar_1.mediaEl != null) {
					var eventXPos;
					if(e.type == 'touchend') eventXPos = e.layerX; else eventXPos = e.offsetX;
					var seekpos = (eventXPos / me._seekbar_1.clientWidth) * me._seekbar_1.mediaEl.duration;
					me._seekbar_1.mediaEl.currentTime = seekpos;
				}
			}
		}
		me._seekbar_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._seekbar_1.ggNodeChange=function () {
			me._seekbar_1.connectToMediaEl();
		}
		me._container_4.appendChild(me._seekbar_1);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xNzEuMiwzOTguNmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xNjkuOSwzOTYuMy0xNjkuOSwzOTcuNy0xNzEuMiwzOTguNnogTS0xMzcuMSwzOTguNmwtMjguNCwxOS44Yy0xLjMsMC45LTIu'+
			'MywwLjMtMi4zLTEuMnYtNDAuNGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzUuOCwzOTYuMy0xMzUuOCwzOTcuNy0xMzcuMSwzOTguNnoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjcuOCwzNzYuOGMwLTEuNSwxLTIuMSwyLjMtMS4ybDI4LjQsMTkuOGMxLjMsMC45LDEuMywyLjMsMCwzLjJsLTI4LjQsMTkuOGMtMS4zLDAuOS0yLjMsMC4zLTIuMy0xLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjM3Ni44eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwMS'+
			'44LDM3Ni44YzAtMS41LDEtMi4xLDIuMy0xLjJsMjguNCwxOS44YzEuMywwLjksMS4zLDIuMywwLDMuMmwtMjguNCwxOS44Yy0xLjMsMC45LTIuMywwLjMtMi4zLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwMS44LDM3Ni44TC0yMDEuOCwzNzYuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE3MC44LDM5OC44bC0zMS41LDIyYy0xLjQsMS0yLjYsMC40LTIuNi0xLjN2LTQ0LjljMC0xLjcsMS4xLTIuMywyLjYtMS4zbDMxLjUsMjImI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTY5LjMsMzk2LjItMTY5LjMsMzk3LjgtMTcwLjgsMzk4Ljh6IE0tMTMyLjksMzk4LjhsLTMxLjUsMjJjLTEuNCwxLTIu'+
			'NiwwLjQtMi42LTEuM3YtNDQuOWMwLTEuNywxLjItMi4zLDIuNi0xLjNsMzEuNSwyMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMzEuNSwzOTYuMi0xMzEuNSwzOTcuOC0xMzIuOSwzOTguOHoiIGZpbGw9IiMwMDAwMDAiLz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNjcsMzc0LjVjMC0xLjcsMS4yLTIuMywyLjYtMS4zbDMxLjUsMjJjMS40LDEsMS40LDIuNiwwLDMuNmwtMzEuNSwyMmMtMS40LDEtMi42LDAuNC0yLjYtMS4zVjM3NC41eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTIwNC44LDM3NC41YzAtMS43LDEuMi0yLjMsMi42LTEuM2wzMS'+
			'41LDIyYzEuNCwxLDEuNCwyLjYsMCwzLjZsLTMxLjUsMjJjLTEuNCwxLTIuNiwwLjQtMi42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTIwNC44LDM3NC41TC0yMDQuOCwzNzQuNXoiIGZpbGw9IiNGRkZGRkYiLz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggDx=117;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_1.ggApiPlayer.playVideo();
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					me._video_1.ggApiPlayer.play();
				}
			} else {
				player.playSound("Video 1","1");
			}
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._pano_next);
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzQwLjljLTMxLDAtNTYuMSwyNS4xLTU2LjEsNTYuMWMwLDMxLDI1LjEsNTYuMSw1Ni4xLDU2LjFzNTYuMS0yNS4xLDU2LjEtNTYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xODIuMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMtMC45LDIuMy0wLjMsMi4zLDEuMkwtMTgyLjIsNDE3LjJMLTE4Mi4yLDQxNy4yeiBNLTE0OC4yLDQxNy4yYzAsMS41LTEsMi4xLTIuMywx'+
			'LjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsMjguNC0xOS44YzEuMy0wLjksMi4zLTAuMywyLjMsMS4yVjQxNy4yeiIgZmlsbD0iIzAwMDAwMCIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzIiPgogIDxnPgogICA8cGF0aCBkPSJNLTE4Mi4yLDQxNy4yYzAsMS41LTEsMi4xLTIuMywxLjJsLTI4LjQtMTkuOGMtMS4zLTAuOS0xLjMtMi4zLDAtMy4ybDI4LjQtMTkuOGMxLjMtMC45LDIuMy0wLjMsMi4zLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Mi4yLDQxNy4yTC0xODIuMiw0MTcuMnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgPHBhdG'+
			'ggZD0iTS0xNDguMiw0MTcuMmMwLDEuNS0xLDIuMS0yLjMsMS4ybC0yOC40LTE5LjhjLTEuMy0wLjktMS4zLTIuMywwLTMuMmwyOC40LTE5LjhjMS4zLTAuOSwyLjMtMC4zLDIuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7VjQxNy4yeiIgZmlsbD0iI0ZGRkZGRiIvPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPHBhdGggZD0iTS0xNzUsMzM0LjZjLTM0LjQsMC02Mi40LDI3LjktNjIuNCw2Mi40YzAsMzQuNCwyNy45LDYyLjQsNjIuNCw2Mi40czYyLjQtMjcuOSw2Mi40LTYyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTE4Myw0MTkuNGMwLDEuNy0xLjIsMi4zLTIuNiwxLjNsLTMxLjUtMjJjLTEuNC0xLTEuNC0yLjYsMC0zLjZsMzEuNS0yMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNC0xLDIuNi0wLjQsMi42LDEuM0wtMTgzLDQxOS40TC0xODMsNDE5LjR6IE0tMTQ1LjIsNDE5LjRjMCwxLjctMS4yLDIuMy0yLjYsMS4z'+
			'bC0zMS41LTIyYy0xLjQtMS0xLjQtMi42LDAtMy42bDMxLjUtMjImI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjQtMSwyLjYtMC40LDIuNiwxLjNWNDE5LjR6IiBmaWxsPSIjMDAwMDAwIi8+CiA8L2c+CiA8ZyBpZD0iTGF5ZXJfMiI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTgzLDQxOS40YzAsMS43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtMLTE4Myw0MTkuNEwtMTgzLDQxOS40eiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBkPSJNLTE0NS4yLDQxOS40YzAsMS'+
			'43LTEuMiwyLjMtMi42LDEuM2wtMzEuNS0yMmMtMS40LTEtMS40LTIuNiwwLTMuNmwzMS41LTIyYzEuNC0xLDIuNi0wLjQsMi42LDEuM1Y0MTkuNHomI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggDx=82;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : -1px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			if (me._video_1.ggApiPlayer) {
				if (me._video_1.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._video_1.ggApiPlayer.pauseVideo();
					};
					if (me._video_1.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._video_1.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._video_1.ggApiPlayerType == 'vimeo') {
					me._video_1.ggApiPlayer.pause();
				}
			} else {
				player.pauseSound("Video 1");
			}
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._pano_prev);
		el=me._video_1=document.createElement('div');
		me._video_1.seekbars = [];
		me._video_1.seekbars.push('Seekbar 1');
		me._video_1.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._video_1.seekbars.length; i++) {
					var seekbar = me.findElements(me._video_1.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].connectToMediaEl();
				}
			}
			while (me._video_1.hasChildNodes()) {
				me._video_1.removeChild(me._video_1.lastChild);
			}
			if (me._video_1__vid) {
				me._video_1__vid.pause();
			}
			if(media == '') {
				notifySeekbars();
			if (me._video_1.ggVideoNotLoaded ==false && me._video_1.ggDeactivate) { me._video_1.ggDeactivate(); }
				me._video_1.ggVideoNotLoaded = true;
			var mediaObj = player.getMediaObject('video_1');
			if (mediaObj) {
				mediaObj.autoplay = false;
			}
				return;
			}
			me._video_1.ggVideoNotLoaded = false;
			me._video_1__vid=document.createElement('video');
			me._video_1__vid.className='ggskin ggskin_video';
			me._video_1__vid.setAttribute('width', '100%');
			me._video_1__vid.setAttribute('height', '100%');
			me._video_1__source=document.createElement('source');
			me._video_1__source.setAttribute('src', media);
			me._video_1__vid.setAttribute('playsinline', 'playsinline');
			me._video_1__vid.setAttribute('style', ';');
			me._video_1__vid.appendChild(me._video_1__source);
			me._video_1.appendChild(me._video_1__vid);
			var videoEl = player.registerVideoElement('Video 1', me._video_1__vid);
			videoEl.autoplay = false;
			notifySeekbars();
			me._video_1.ggVideoSource = media;
		}
		el.ggId="Video 1";
		el.ggDx=-6;
		el.ggParameter={ rx:0,ry:0,a:0,sx:3,sy:3 };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 50%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -14px;';
		hs+='visibility : inherit;';
		hs+='width : 80%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._video_1.ggIsActive=function() {
			if (me._video_1__vid != null) {
				return (me._video_1__vid.paused == false && me._video_1__vid.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._video_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._container_4.appendChild(me._video_1);
		me._container_5.appendChild(me._container_4);
		el=me._external_1=document.createElement('div');
		els=me._external_1__img=document.createElement('img');
		els.className='ggskin ggskin_external';
		els.setAttribute('style','position: absolute;-webkit-user-drag:none;pointer-events:none;;');
		els.onload=function() {me._external_1.ggUpdatePosition();}
		el.ggText=basePath + "";
		els.setAttribute('src', el.ggText);
		els['ondragstart']=function() { return false; };
		hs ='';
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="External 1";
		el.ggDx=6.34;
		el.ggDy=15.81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_external ";
		el.ggType='external';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 26.4583%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 21.875%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._external_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._external_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=((this.ggDx * pw)/100.0 + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=((this.ggDy * ph)/100.0 + ph/2 - h/2) + 'px';
			}
			var parentWidth = me._external_1.clientWidth;
			var parentHeight = me._external_1.clientHeight;
			var img = me._external_1__img;
			var aspectRatioDiv = me._external_1.clientWidth / me._external_1.clientHeight;
			var aspectRatioImg = img.naturalWidth / img.naturalHeight;
			if (img.naturalWidth < parentWidth) parentWidth = img.naturalWidth;
			if (img.naturalHeight < parentHeight) parentHeight = img.naturalHeight;
			var currentWidth,currentHeight;
			if (aspectRatioDiv > aspectRatioImg) {
				currentWidth = parentWidth;
				currentHeight = parentWidth / aspectRatioImg;
				img.style.width=parentWidth + 'px';
				img.style.height='';
			} else {
				currentHeight = parentHeight;
				currentWidth = parentHeight * aspectRatioImg;
				img.style.width='';
				img.style.height=parentHeight + 'px';
			};
			img.style.left='50%';
			img.style.marginLeft='-' + currentWidth/2 + 'px';
			img.style.top='50%';
			img.style.marginTop='-' + currentHeight/2 + 'px';
		}
		me._container_5.appendChild(me._external_1);
		el=me._button_17=document.createElement('div');
		els=me._button_17__img=document.createElement('img');
		els.className='ggskin ggskin_button_17';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 17";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 1420px;';
		hs+='top : 1012px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_17.onclick=function (e) {
			me._button_17.style[domTransition]='none';
			me._button_17.style.visibility='hidden';
			me._button_17.ggVisible=false;
			me._external_1.ggSubElement.src='';
			me._external_1.style[domTransition]='none';
			me._external_1.style.visibility='hidden';
			me._external_1.ggVisible=false;
			me._container_4.style[domTransition]='none';
			me._container_4.style.visibility='hidden';
			me._container_4.ggVisible=false;
			me._rectangle_4.style[domTransition]='none';
			me._rectangle_4.style.visibility='hidden';
			me._rectangle_4.ggVisible=false;
		}
		me._button_17.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me._button_17);
		el=me._rectangle_4=document.createElement('div');
		el.ggId="Rectangle 4";
		el.ggDx=6292;
		el.ggDy=4787;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(39,39,39,0.588235);';
		hs+='border : 2px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 500%;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 500%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rectangle_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._container_5.appendChild(me._rectangle_4);
		me.divSkin.appendChild(me._container_5);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=3600000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 108px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		me._button_9.style[domTransition]='none';
		me._button_9.style.visibility='hidden';
		me._button_9.ggVisible=false;
		me._button_10.style[domTransition]='none';
		me._button_10.style.visibility='hidden';
		me._button_10.ggVisible=false;
		me._button_12.style[domTransition]='none';
		me._button_12.style.visibility='hidden';
		me._button_12.ggVisible=false;
		me._button_14.style[domTransition]='none';
		me._button_14.style.visibility='hidden';
		me._button_14.ggVisible=false;
		var clonedNormalElement = new SkinElement_button_15_Class(this,me._marker_11);
		me._marker_11__normal = clonedNormalElement._button_15;
		me._marker_11__normal.style.visibility='inherit';
		me._marker_11__normal.style.left='0px';
		me._marker_11__normal.style.top='0px';
		me._marker_11.ggMarkerNormal=me._marker_11__normal;
		me._marker_11.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_button_16_Class(this,me._marker_11);
		me._marker_11__active= clonedActiveElement._button_16;
		me._marker_11__active.style.visibility='hidden';
		me._marker_11__active.style.left='0px';
		me._marker_11__active.style.top='0px';
		me._marker_11.ggMarkerActive=me._marker_11__active;
		me._marker_11.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_11.firstChild) {
			me._marker_11.insertBefore(me._marker_11__active,me._marker_11.firstChild);
		} else {
			me._marker_11.appendChild(me._marker_11__active);
		}
		if (me._marker_11.firstChild) {
			me._marker_11.insertBefore(me._marker_11__normal,me._marker_11.firstChild);
		} else {
			me._marker_11.appendChild(me._marker_11__normal);
		}
		for (var i = 0; i < me._marker_11.childNodes.length; i++) {
			me._marker_11.ggMarkerInstances.push(me._marker_11.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_button_15_Class(this,me._marker_10);
		me._marker_10__normal = clonedNormalElement._button_15;
		me._marker_10__normal.style.visibility='inherit';
		me._marker_10__normal.style.left='0px';
		me._marker_10__normal.style.top='0px';
		me._marker_10.ggMarkerNormal=me._marker_10__normal;
		me._marker_10.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_button_16_Class(this,me._marker_10);
		me._marker_10__active= clonedActiveElement._button_16;
		me._marker_10__active.style.visibility='hidden';
		me._marker_10__active.style.left='0px';
		me._marker_10__active.style.top='0px';
		me._marker_10.ggMarkerActive=me._marker_10__active;
		me._marker_10.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_10.firstChild) {
			me._marker_10.insertBefore(me._marker_10__active,me._marker_10.firstChild);
		} else {
			me._marker_10.appendChild(me._marker_10__active);
		}
		if (me._marker_10.firstChild) {
			me._marker_10.insertBefore(me._marker_10__normal,me._marker_10.firstChild);
		} else {
			me._marker_10.appendChild(me._marker_10__normal);
		}
		for (var i = 0; i < me._marker_10.childNodes.length; i++) {
			me._marker_10.ggMarkerInstances.push(me._marker_10.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_button_15_Class(this,me._marker_1);
		me._marker_1__normal = clonedNormalElement._button_15;
		me._marker_1__normal.style.visibility='inherit';
		me._marker_1__normal.style.left='0px';
		me._marker_1__normal.style.top='0px';
		me._marker_1.ggMarkerNormal=me._marker_1__normal;
		me._marker_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_button_16_Class(this,me._marker_1);
		me._marker_1__active= clonedActiveElement._button_16;
		me._marker_1__active.style.visibility='hidden';
		me._marker_1__active.style.left='0px';
		me._marker_1__active.style.top='0px';
		me._marker_1.ggMarkerActive=me._marker_1__active;
		me._marker_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__active,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__active);
		}
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__normal,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__normal);
		}
		for (var i = 0; i < me._marker_1.childNodes.length; i++) {
			me._marker_1.ggMarkerInstances.push(me._marker_1.childNodes[i]);
		}
		me._video_1.ggInitMedia('https://cloud.video.taobao.com//play/u/705956171/p/1/e/6/t/1/286155376146.mp4');
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._container_2.style[domTransition]='none';
			me._container_2.style.visibility=(Number(me._container_2.style.opacity)>0||!me._container_2.style.opacity)?'inherit':'hidden';
			me._container_2.ggVisible=true;
			me._thumbnail_cloner.ggUpdate();
		});
		player.addListener('imagesready', function() {
			me._container_2.style[domTransition]='none';
			me._container_2.style.visibility='hidden';
			me._container_2.ggVisible=false;
			me._thumbnail_menu.ggUpdatePosition();
			me._timer_1.ggTimestamp=me.ggCurrentTime;
			me._timer_1.ggTimeout=1000;
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._rectangle_1.ggParameter) {
			hs+=parameterToTransform(me._rectangle_1.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._rectangle_1.style[domTransform]=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 354px;';
		hs+='position : absolute;';
		hs+='top : 171px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
				player.playSound("5","1");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 59px;';
		hs+='left : -28px;';
		hs+='position : absolute;';
		hs+='top : -63px;';
		hs+='visibility : inherit;';
		hs+='width : 59px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot_1.appendChild(me._image_1);
		me.__div = me._hotspot_1;
	};
	function SkinHotspotClass_ht_video_file(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_video_file=document.createElement('div');
		el.ggId="ht_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 1299px;';
		hs+='position : absolute;';
		hs+='top : 1025px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_file.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_video_file.onclick=function (e) {
			skin._external_1.style[domTransition]='none';
			skin._external_1.style.visibility=(Number(skin._external_1.style.opacity)>0||!skin._external_1.style.opacity)?'inherit':'hidden';
			skin._external_1.ggVisible=true;
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin._external_1.ggText=basePath + me.hotspot.url;
			skin._external_1.ggSubElement.style.width = '0px';
			skin._external_1.ggSubElement.style.height = '0px';
			skin._external_1.ggSubElement.src='';
			skin._external_1.ggSubElement.src=skin._external_1.ggText;
			skin._rectangle_4.style[domTransition]='none';
			skin._rectangle_4.style.visibility=(Number(skin._rectangle_4.style.opacity)>0||!skin._rectangle_4.style.opacity)?'inherit':'hidden';
			skin._rectangle_4.ggVisible=true;
			skin._button_17.style[domTransition]='none';
			skin._button_17.style.visibility=(Number(skin._button_17.style.opacity)>0||!skin._button_17.style.opacity)?'inherit':'hidden';
			skin._button_17.ggVisible=true;
			skin._container_4.style[domTransition]='none';
			skin._container_4.style.visibility=(Number(skin._container_4.style.opacity)>0||!skin._container_4.style.opacity)?'inherit':'hidden';
			skin._container_4.ggVisible=true;
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_video_file.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_video_video_file=document.createElement('div');
		els=me._ht_video_video_file__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDM0MC45Yy0zMSwwLTU2LjEsMjUuMS01Ni4xLDU2LjFjMCwzMSwyNS4xLDU2LjEsNTYuMSw1Ni4xczU2LjEtMjUuMSw1Ni4xLTU2LjEmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xMTguOSwzNjYtMTQ0LDM0MC45LTE3NSwzNDAuOXogTS0xMzkuNCw0MjEuN2MwLDEuMy0xLDIuMy0yLjMsMi4zaC02Ni43Yy0xLjMsMC0yLjMtMS0yLjMtMi4zdi00OS40YzAtMS4zLDEtMi4zLDIuMy0yLjNoNjYuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtjMS4zLDAsMi4zLDEsMi4zLDIuM1Y0MjEuN3oiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBh'+
			'dGggZD0iTS0xNzguNCw0MDVsMTAuOC03LjVjMC43LTAuNSwwLjctMS4zLDAtMS44bC0xMC44LTcuNWMtMC43LTAuNS0xLjMtMC4yLTEuMywwLjd2MTUuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTE3OS43LDQwNS4yLTE3OS4xLDQwNS41LTE3OC40LDQwNXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMDYuNSw0MTUuMWg2Mi40di0zNi4xaC02Mi40VjQxNS4xeiBNLTE3NSwzODIuMWM4LDAsMTQuNCw2LjUsMTQuNCwxNC40YzAsOC02LjUsMTQuNC0xNC40LDE0LjQmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Yy04LDAtMTQuNC02LjUtMTQuNC0xNC40Qy0xODkuNCwzODguNi'+
			'0xODMsMzgyLjEtMTc1LDM4Mi4xeiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xNDEuNywzNzBoLTY2LjdjLTEuMywwLTIuMywxLTIuMywyLjN2NDkuNGMwLDEuMywxLDIuMywyLjMsMi4zaDY2LjdjMS4zLDAsMi4zLTEsMi4zLTIuM3YtNDkuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzOS40LDM3MS0xNDAuNCwzNzAtMTQxLjcsMzcweiBNLTE0NC4yLDQxNS4xaC02Mi40di0zNi4xaDYyLjRDLTE0NC4yLDM3OC45LTE0NC4yLDQxNS4xLTE0NC4yLDQxNS4xeiIgZmlsbD0iI0ZGRkZGRiIvPgogICA8cGF0aCBk'+
			'PSJNLTE3NSw0MTFjOCwwLDE0LjQtNi41LDE0LjQtMTQuNGMwLTgtNi41LTE0LjQtMTQuNC0xNC40Yy04LDAtMTQuNCw2LjUtMTQuNCwxNC40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTg5LjQsNDA0LjUtMTgzLDQxMS0xNzUsNDExeiBNLTE3OS43LDM4OC44YzAtMC44LDAuNi0xLjEsMS4zLTAuN2wxMC44LDcuNWMwLjcsMC41LDAuNywxLjMsMCwxLjhsLTEwLjgsNy41JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtMC43LDAuNS0xLjMsMC4yLTEuMy0wLjdWMzg4Ljh6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_file__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._ht_video_video_file__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIGJhc2VQcm9maWxlPSJ0aW55IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHk9IjBweCI+CiA8ZyBpZD0iTG'+
			'F5ZXJfMV8xXyI+CiAgPGc+CiAgIDxwYXRoIGQ9Ik0tMTc1LDMzNC42Yy0zNC40LDAtNjIuNCwyNy45LTYyLjQsNjIuNGMwLDM0LjQsMjcuOSw2Mi40LDYyLjQsNjIuNHM2Mi40LTI3LjksNjIuNC02Mi40JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O0MtMTEyLjYsMzYyLjYtMTQwLjYsMzM0LjYtMTc1LDMzNC42eiBNLTEzNS40LDQyNC40YzAsMS40LTEuMSwyLjYtMi42LDIuNkgtMjEyYy0xLjQsMC0yLjYtMS4xLTIuNi0yLjZ2LTU0LjkmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7YzAtMS40LDEuMS0yLjYsMi42LTIuNmg3NC4xYzEuNCwwLDIuNiwxLjEsMi42LDIuNlY0MjQuNHoiIGZpbGw9IiMw'+
			'MDAwMDAiLz4KICAgPHBhdGggZD0iTS0xNzguOCw0MDUuOWwxMi04LjRjMC44LTAuNSwwLjgtMS40LDAtMS45bC0xMi04LjRjLTAuOC0wLjUtMS40LTAuMi0xLjQsMC43djE3LjMmI3hkOyYjeGE7JiN4OTsmI3g5OyYjeDk7Qy0xODAuMiw0MDYuMS0xNzkuNiw0MDYuNC0xNzguOCw0MDUuOXoiIGZpbGw9IiMwMDAwMDAiLz4KICAgPHBhdGggZD0iTS0yMTAsNDE3LjFoNjkuM3YtNDAuMkgtMjEwVjQxNy4xeiBNLTE3NSwzODAuNWM4LjksMCwxNiw3LjIsMTYsMTZjMCw4LjktNy4yLDE2LTE2LDE2JiN4ZDsmI3hhOyYjeDk7JiN4OTsmI3g5O2MtOC45LDAtMTYtNy4yLTE2LTE2Qy0xOTEsMzg3LjctMT'+
			'gzLjksMzgwLjUtMTc1LDM4MC41eiIgZmlsbD0iIzAwMDAwMCIvPgogIDwvZz4KIDwvZz4KIDxnIGlkPSJMYXllcl8yIj4KICA8Zz4KICAgPHBhdGggZD0iTS0xMzgsMzY3SC0yMTJjLTEuNCwwLTIuNiwxLjEtMi42LDIuNnY1NC45YzAsMS40LDEuMSwyLjYsMi42LDIuNmg3NC4xYzEuNCwwLDIuNi0xLjEsMi42LTIuNnYtNTQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTtDLTEzNS40LDM2OC4xLTEzNi42LDM2Ny0xMzgsMzY3eiBNLTE0MC43LDQxNy4xSC0yMTB2LTQwLjJoNjkuM0MtMTQwLjcsMzc2LjktMTQwLjcsNDE3LjEtMTQwLjcsNDE3LjF6IiBmaWxsPSIjRkZGRkZGIi8+CiAgIDxwYXRo'+
			'IGQ9Ik0tMTc1LDQxMi42YzguOSwwLDE2LTcuMiwxNi0xNmMwLTguOS03LjItMTYtMTYtMTZjLTguOSwwLTE2LDcuMi0xNiwxNkMtMTkxLDQwNS40LTE4My45LDQxMi42LTE3NSw0MTIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7JiN4OTt6IE0tMTgwLjIsMzg3LjljMC0wLjksMC42LTEuMywxLjQtMC43bDEyLDguNGMwLjgsMC41LDAuOCwxLjQsMCwxLjlsLTEyLDguNGMtMC44LDAuNS0xLjQsMC4yLTEuNC0wLjdWMzg3Ljl6IiBmaWxsPSIjRkZGRkZGIi8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._ht_video_video_file__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="ht_video_video_file";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -16px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_video_video_file.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_video_video_file.onmouseover=function (e) {
			me._ht_video_video_file__img.style.visibility='hidden';
			me._ht_video_video_file__imgo.style.visibility='inherit';
		}
		me._ht_video_video_file.onmouseout=function (e) {
			me._ht_video_video_file__img.style.visibility='inherit';
			me._ht_video_video_file__imgo.style.visibility='hidden';
		}
		me._ht_video_video_file.ggUpdatePosition=function (useTransition) {
		}
		me._ht_video_file.appendChild(me._ht_video_video_file);
		me.__div = me._ht_video_file;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
			hotspot.skinid = 'ht_video_file';
			hsinst = new SkinHotspotClass_ht_video_file(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		if(hotspotTemplates['ht_video_file']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_video_file'].length; i++) {
				hotspotTemplates['ht_video_file'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_button_16_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._button_16=document.createElement('div');
		els=me._button_16__img=document.createElement('img');
		els.className='ggskin ggskin_button_16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACmElEQVRIiZWVTUhUURTHf3eeOq40B3IIMcRFC8HwAxeJ0SIXrqagoAGpli2shaK4aB0YY7rIRbWLECYoqJFAkJAIEQw/UHATiCAizWJMMJnRnrfFnMk7b+57TX+4cO555/z/536dp/AgW3XbnFYC14H7wFUgKv4fwFfgNfAZOCkkVB+/K+JTAeRR4DFwFzjnLUTwE3gDPBHREpEKn8Qo8BK4IfMNYFbBJoCGFqAPaAUeAReBB6ZIyQqM6iuASeAhcAxMhXESg6er6S4ViQB805nMZKi9Poc7InFVwBQwCPw2VxGyVN8D3BN7Kkz1aErvNvaq6HQtlQu1VC70quh0Su82hqkeFWIkp8dLZhO4BdQAG2GcREpvtzuoJBAHLsmIO6hkSm+3h3ESsoU1kh'+
			'soUAN0iT07fLqWdlBDQLOlkGYHNTR8upYGZsXXJRyBAucBFGx2qLoI0GkhL6CzQ9VFCocvuYECIYvvf1CS7yXLyUBDy4rezwDLAYTLK3o/I9e2KN9P4BBIi903Hmqrd9ETwJaFfMtFT4yH2urJvwkk9zBI4BewLnZrDnckpppWXXQcSALfZSRddDymmlblLbRKzrpw+ApA/kZkxR7IkR2LqYadeZ3uP+Ck+4CT7nmd7o+php0c2TFgQGKznN2mv7C95FrgI3DNiAtqFQV8Id9aDuDsJfs1uzvkO2XYskIbcuQ77luTHPyv5AzwqUxyJHbG9qFIwFA+Ap4Ce2WQ70nskYejVMCDJeA5oANitMQs+QWUCHgqeAHMBQjMSYwtF/AcsgnjwK8A74ELnpA98t1z0Y8cyus7i8AzwDV8rvgW/5XsK+Cp6BWQMuYp8dlii+C7'+
			'RQUYW3UZ+CD2TaSlBJGD/0/fhnUgYdhl4Q8khM/bJmq0DAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 98px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_16.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._button_16.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_button_15_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._button_15=document.createElement('div');
		els=me._button_15__img=document.createElement('img');
		els.className='ggskin ggskin_button_15';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACsklEQVRIiZWVT0gUcRTHPzPspoi4IvgnaUNEOqwayOAhUTp0EQkKOrSwWKfoYB0SxEPnwFiyQx76cwpZ2A5BaYkgHUREEFZBcy/RImyoLSIu2rLb6kyHfZuzszPT9oUfvN+b977f9/v3RsGCN7Gr5qkXuAbcBQaAZvH/BJaAt8AXIF9MuKctlvApLuTNwGNgGKi3FiI4BKaBJyJaJuJxSGwGXgE3ZL4JzCsKcQDDIAAMAt3AQ+AicN8sUrYCU/Ue4DnwAPgNTHm8avjT9NfUhfb6BoAficOD68NdTSd5fUzizgFTwCPgxLwK1ab6fuCO2FO1vqrxeGzP39HVGKmu8S5X13iXO7oaI/HYnr/WVzUuxEhOv5XMTuAWUAdserxqeG0p2aOqShQIApdkBF'+
			'VVia4tJXs8XjUsW1gnua4CdUCv2PNzka2UqiqjQLtNIe2qqozORbZSwLz4eoXDVaARQFGIt7b5GgDNhrwIrbXN11A8fMl1FVBtfP+DsnwrWU4GhkFgZzt9AMRcCGM72+kDubYl+U4Cx0BK7MGhUGeTrhuTQMKGPKHrxuRQqLOJwptAco/dBH4BG2J3n+T1MW3Av67rRhCIAt9kRHXdCGoD/nV5C92SsyEcjgJQuBFZsUeO0rmJgNaSTMT3Q9lMvi+byfd9j++HAlpL8iidmwBGJDbL2W36C7uX7AM+AubG5NYqilik0FrScPaSnZrdbQqdsspmhXbIUei478zk4HwlZ4HPFZIjsbN2H0oETMoZ4CmwWwH5rsRmLBzlAhasAi8AwyXGkJhVp4AyAUsFL4EFF4EFibHLBSyHbIbpwK8A74HzlpBdCt1zxYkcKus7K8Az'+
			'4NTkOxXfyr+SHQUsFb0GZkzzGfHZxZbAcYuKMG3VZeCD2DeRluJGDs4/fTtsAGGTXRH+ABo13N5JLz9dAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 15";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 70px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_15.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._button_15.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinCloner_thumbnail_cloner_Class(nodeId, parentScope,ggParent,parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.__div=document.createElement('div');
		me.__div.setAttribute('style','position: absolute;width: 96px; height: 62px; visibility: inherit; overflow: visible;');
		me.__div.style.left=parameter.left;
		me.__div.style.top=parameter.top;
		me.__div.ggIsActive = function() {
			return player.getCurrentNode()==me.ggNodeId;
		}
		me.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		el=me._thumbnail_nodeimage=document.createElement('div');
		els=me._thumbnail_nodeimage__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/thumbnail_nodeimage_" + nodeId + ".jpg");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="thumbnail_nodeImage";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.58 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 90px;';
		hs+='left : -24px;';
		hs+='position : absolute;';
		hs+='top : -16px;';
		hs+='visibility : inherit;';
		hs+='width : 140px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._thumbnail_nodeimage.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._thumbnail_nodeimage.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._thumbnail_nodeimage);
		el=me._checkmark_tick=document.createElement('div');
		els=me._checkmark_tick__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHg9IjBweCIgdmlld0JveD0iLTI0MCAzMzIgMTMwIDEzMCIgaWQ9IkxheWVyXzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgLTI0MCAzMzIgMTMwIDEzMDsiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMT'+
			'k5OS94bGluayIgeT0iMHB4Ij4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMDAwMDAwO30mI3hkOwoJLnN0MXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8ZyBpZD0iTGF5ZXJfMV8xXyIvPgogPGcgaWQ9IkxheWVyXzIiPgogIDxwYXRoIGQ9Ik0tMTIyLjEsMzQxLjVoLTEwNS44Yy0xLjQsMC0yLjYsMS4xLTIuNiwyLjZ2MTA1LjhjMCwxLjQsMS4xLDIuNiwyLjYsMi42aDEwNS44YzEuNCwwLDIuNi0xLjEsMi42LTIuNlYzNDQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Qy0xMTkuNiwzNDIuNy0xMjAuNywzNDEuNS0xMjIuMSwzNDEuNXogTS0xMzIuOCwzODEu'+
			'N2wtNTAuOCw1MC44Yy0wLjMsMC4zLTAuOCwwLjUtMS4yLDAuNWMtMC41LDAtMC45LTAuMS0xLjMtMC41bC0zMS43LTMxLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNy0wLjctMS43LDAtMi40bDEyLjUtMTIuNWMwLjctMC43LDEuNy0wLjcsMi40LDBsMTgsMThsMzcuMS0zNy4xYzAuNy0wLjcsMS43LTAuNywyLjQsMGwxMi41LDEyLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0MtMTMyLjEsMzc5LjktMTMyLjEsMzgxLTEzMi44LDM4MS43eiIgY2xhc3M9InN0MCIvPgogIDxwYXRoIGQ9Ik0tMTQ3LjcsMzY2LjhsLTM3LjEsMzcuMWwtMTgtMThjLTAuNy0wLjctMS43LTAuNy0yLjQsMGwtMTIuNS'+
			'wxMi41Yy0wLjcsMC43LTAuNywxLjcsMCwyLjRsMzEuNywzMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMywwLjgsMC41LDEuMywwLjVjMC40LDAsMC45LTAuMiwxLjItMC41bDUwLjgtNTAuOWMwLjctMC43LDAuNy0xLjcsMC0yLjRsLTEyLjUtMTIuNUMtMTQ1LjksMzY2LjEtMTQ3LDM2Ni4xLTE0Ny43LDM2Ni44eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me._checkmark_tick__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="checkmark_tick";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 19px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 19px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._checkmark_tick.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._checkmark_tick.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.nodeVisited(me._checkmark_tick.ggElementNodeId()) == true)) || 
				((me._checkmark_tick.ggIsActive() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._checkmark_tick.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._checkmark_tick.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._checkmark_tick.style[domTransition]='';
				if (me._checkmark_tick.ggCurrentLogicStateVisible == 0) {
					me._checkmark_tick.style.visibility=(Number(me._checkmark_tick.style.opacity)>0||!me._checkmark_tick.style.opacity)?'inherit':'hidden';
					me._checkmark_tick.ggVisible=true;
				}
				else {
					me._checkmark_tick.style.visibility="hidden";
					me._checkmark_tick.ggVisible=false;
				}
			}
		}
		me._checkmark_tick.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me._checkmark_tick);
		el=me._thumbnail_active=document.createElement('div');
		el.ggId="thumbnail active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._thumbnail_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_active.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((me._thumbnail_active.ggIsActive() == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else if (
				((me.elementMouseOver['thumbnail_active'] == true))
			)
			{
				newLogicStateBorderColor = 1;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._thumbnail_active.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._thumbnail_active.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._thumbnail_active.style[domTransition]='border-color 0s';
				if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 0) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else if (me._thumbnail_active.ggCurrentLogicStateBorderColor == 1) {
					me._thumbnail_active.style.borderColor="rgba(192,192,192,1)";
				}
				else {
					me._thumbnail_active.style.borderColor="rgba(0,0,0,1)";
				}
			}
		}
		me._thumbnail_active.onclick=function (e) {
			if (
				(
					((me._thumbnail_active.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
				player.playSound("7","1");
		}
		me._thumbnail_active.onmouseover=function (e) {
			me.elementMouseOver['thumbnail_active']=true;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.onmouseout=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ontouchend=function (e) {
			me.elementMouseOver['thumbnail_active']=false;
			me._thumbnail_title.logicBlock_alpha();
			me._thumbnail_active.logicBlock_bordercolor();
		}
		me._thumbnail_active.ggUpdatePosition=function (useTransition) {
		}
		el=me._thumbnail_title=document.createElement('div');
		els=me._thumbnail_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="thumbnail_title";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 51px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 85px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 85px;';
		hs+='height: 51px;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.784314);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML=me.ggUserdata.title;
		el.appendChild(els);
		me._thumbnail_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._thumbnail_title.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['thumbnail_active'] == true)) && 
				((me.ggUserdata.title != "")) && 
				((player.getVariableValue('opt_thumbnail_menu_tooltip_1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._thumbnail_title.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._thumbnail_title.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._thumbnail_title.style[domTransition]='opacity 500ms ease 0ms';
				if (me._thumbnail_title.ggCurrentLogicStateAlpha == 0) {
					me._thumbnail_title.style.visibility=me._thumbnail_title.ggVisible?'inherit':'hidden';
					me._thumbnail_title.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._thumbnail_title.style.opacity == 0.0) { me._thumbnail_title.style.visibility="hidden"; } }, 505);
					me._thumbnail_title.style.opacity=0;
				}
			}
		}
		me._thumbnail_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._thumbnail_active.appendChild(me._thumbnail_title);
		me.__div.appendChild(me._thumbnail_active);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._thumbnail_hide_button_show.logicBlock_alpha();
	me._thumbnail_show_button_show.logicBlock_alpha();
	me._rectangle_3.logicBlock_alpha();
	player.addListener('changenode', function(args) { me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._rectangle_3.logicBlock_alpha(); });
	player.addListener('varchanged_vis_thumbnail_menu_1', function(args) { me._thumbnail_hide_button_show.logicBlock_alpha();me._thumbnail_show_button_show.logicBlock_alpha();me._rectangle_3.logicBlock_alpha(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changenode(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._thumbnail_cloner.callChildLogicBlocks_mouseover(); });
	player.addListener('changenode', function(args) { me._thumbnail_cloner.callChildLogicBlocks_active(); });
	player.addListener('changevisitednodes', function(args) { me._thumbnail_cloner.callChildLogicBlocks_changevisitednodes(); });
	player.addListener('activehotspotchanged', function(args) { me._thumbnail_cloner.callChildLogicBlocks_activehotspotchanged(); });
	player.addListener('varchanged_opt_thumbnail_menu_tooltip_1', function(args) { me._thumbnail_cloner.callChildLogicBlocks_varchanged_opt_thumbnail_menu_tooltip_1(); });
	me.skinTimerEvent();
};