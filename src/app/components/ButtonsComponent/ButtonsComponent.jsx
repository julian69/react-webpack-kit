import React from "react";
// import Highlight from "react-highlight";

export class Buttons extends React.Component {

    addCSS(cssCode){

        const head = document.head || document.getElementsByTagName("head")[0],
            style = document.createElement("style");

        style.type = "text/css";
        if(style.styleSheet){
            style.styleSheet.cssText = cssCode;
        } else {
            style.appendChild(document.createTextNode(cssCode));
        }

        head.appendChild(style);
    }

    addJS(jsCode) {
        var s = document.createElement("script");

        s.type = "text/javascript";
        s.innerText = jsCode;
        document.getElementsByTagName("head")[0].appendChild(s);
    }

    render (){
        const outsideContent = "<h2 id=\"buttons-options\">Buttons</h2>";

        const snippetContent = `<button type="button" aria-label="Test button" tabindex="1" class="button success">Succes</button>
								<button type="button" aria-label="Test button" class="button warning">Warning</button>
								<button type="button" aria-label="Test button" class="button danger">Danger</button>`;

        const cssContent =`.button {
										display: inline-block;
										position: relative;
										overflow: hidden;
										text-decoration: none;
										cursor: default;
										color: #fff;
										outline: 0
									}

									.warning{
											background: #FDD835;
									}

									.danger{
											background: #EF5350;
									}

									.success{
										background: #26A69A;
									}

									.button::before {
										position: absolute;
										top: 0;
										left: 0;
										width: 100%;
										height: 100%;
										content: '';
										background-image: radial-gradient(
										circle closest-side,
										rgba(255,255,255,.25) 99%,
										rgba(0,0,0,0) 100%
									);
										background-repeat: no-repeat;
										transform: scale(5);
										opacity: 0;
										transition: .75s ease-out transform, .25s .5s ease-in opacity;
										transform-origin: inherit;
										background-position: inherit;
									}

									.button:active::before {
										transition: none;
										opacity: 1;
										transform: scale(0);
									}
									.button {
										font: 100%/1.5 Arial;
										border: none;
										padding: .5em 1em;
										vertical-align:middle;
									}`;	

        const jsContent = `document.body.addEventListener('mousedown', function (e) {
										var target = e.target,
										style = target.style;

										if (target.classList.contains('button')) {
												style.backgroundPositionX = -target.clientWidth / 2 + e.layerX + 'px';
												style.backgroundPositionY = -target.clientHeight / 2 + e.layerY + 'px';
												style.transformOrigin = e.layerX + 'px ' + e.layerY + 'px';
										}
									});`;
					
        this.addCSS(cssContent);
        this.addJS(jsContent);
		
        return (
            <div id="buttons-component">

                <div dangerouslySetInnerHTML={{ __html: outsideContent }} />
                <div dangerouslySetInnerHTML={{ __html: snippetContent }} />
									
            </div>
        );
    }
}

/* 
	<Highlight className="html">
				{this.snippetContent}
</Highlight>

<h3>CSS</h3>
<Highlight className="css">
			{this.cssContent}
</Highlight>

<h3>JS</h3>
<Highlight className="javascript">
			{this.jsContent}
</Highlight>*/
