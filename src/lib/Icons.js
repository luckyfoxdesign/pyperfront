export let icFile = `
<svg width="16" height="16" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M446.575 0H65.425C29.349 0 0 29.35 0 65.426V446.575C0 482.65 29.349 512 65.425 512H446.575C482.651 512 512 482.65 512 446.574V65.426C512 29.35 482.651 0 446.575 0ZM481.842 446.575C481.842 466.022 466.021 481.842 446.575 481.842H65.425C45.978 481.842 30.157 466.021 30.157 446.575V391.568L129.412 307.117C133.034 304.035 138.318 304.006 141.974 307.042L204.148 358.67C210.143 363.647 218.943 363.239 224.452 357.724L372.181 209.77C374.851 207.095 377.964 206.835 379.589 206.918C381.209 207.001 384.284 207.579 386.667 210.514L481.843 327.704V446.575H481.842ZM481.842 279.865L410.076 191.499C402.959 182.735 392.41 177.377 381.134 176.798C369.866 176.228 358.817 180.47 350.84 188.46L212.832 326.681L161.242 283.842C146.283 271.42 124.679 271.549 109.869 284.15L30.157 351.972V65.426C30.157 45.979 45.978 30.158 65.425 30.158H446.575C466.022 30.158 481.842 45.979 481.842 65.426V279.865Z" fill="black"/>
<path d="M161.174 62.9951C121.079 62.9951 88.461 95.6151 88.461 135.708C88.461 175.802 121.08 208.421 161.174 208.421C201.268 208.421 233.887 175.802 233.887 135.708C233.887 95.6141 201.269 62.9951 161.174 62.9951ZM161.174 178.264C137.708 178.264 118.618 159.173 118.618 135.708C118.618 112.242 137.708 93.1521 161.174 93.1521C184.64 93.1521 203.73 112.243 203.73 135.708C203.73 159.173 184.64 178.264 161.174 178.264Z" fill="black"/>
</svg>
`;

export let icParagraph = `
<svg width="16px" height="16px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
		<rect x="2.392" y="439.172" width="507.586" height="72.828"/>
		<rect x="2.392" y="293.517" width="507.586" height="72.828"/>
		<rect x="256.177" y="145.655" width="253.793" height="72.828"/>
		<rect x="256.177" width="253.793" height="72.828"/>
		<path d="M126.455,2.207H72.227L2.022,220.69h50.792l12.244-44.138h68.568l12.401,44.138h50.792L126.455,2.207z M76.264,139.034 l22.559-79.448h0.892l22.707,79.448H76.264z"/>
</svg>
`;

export let icH2 = `
<svg
width="16px"
height="16px"
xmlns="http://www.w3.org/2000/svg"
x="0px"
y="0px"
viewBox="0 0 512 512"
style="enable-background:new 0 0 512 512;"
xml:space="preserve"
>
<polygon
  points="17.575,0 17.575,83.413 139.81,83.413 139.81,469.701 248.566,469.701 248.566,83.413 371.761,83.413 371.761,0"
/>
<polygon
  points="442.605,469.6 442.605,278.389 334.253,294.574 334.253,332.982 386.068,332.982 386.068,469.6 334.454,469.6 334.454,512 494.425,512 494.425,469.6"
/>
</svg>
`;

export function icClose(w, h) {
  w = w || "16px";
  h = h || "16px";
  return `
  <svg height="${h}" width="${w}" viewBox="0 0 329 329" xmlns="http://www.w3.org/2000/svg">
  <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"/>
</svg>
  `;
}

export function icEdit(w, h) {
  w = w || "16px";
  h = h || "16px";
  return `
	<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 383.947 383.947" xml:space="preserve">
	<polygon points="0,303.947 0,383.947 80,383.947 316.053,147.893 236.053,67.893"/>
	<path d="M377.707,56.053L327.893,6.24c-8.32-8.32-21.867-8.32-30.187,0l-39.04,39.04l80,80l39.04-39.04C386.027,77.92,386.027,64.373,377.707,56.053z"/>
</svg>
	`;
}

export function icDelete(w, h) {
  w = w || "16px";
  h = h || "16px";
  return `
	<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
		<path d="M436,60h-90V45c0-24.813-20.187-45-45-45h-90c-24.813,0-45,20.187-45,45v15H76c-24.813,0-45,20.187-45,45v30
			c0,8.284,6.716,15,15,15h16.183L88.57,470.945c0.003,0.043,0.007,0.086,0.011,0.129C90.703,494.406,109.97,512,133.396,512
			h245.207c23.427,0,42.693-17.594,44.815-40.926c0.004-0.043,0.008-0.086,0.011-0.129L449.817,150H466c8.284,0,15-6.716,15-15v-30
			C481,80.187,460.813,60,436,60z M196,45c0-8.271,6.729-15,15-15h90c8.271,0,15,6.729,15,15v15H196V45z M393.537,468.408
			c-0.729,7.753-7.142,13.592-14.934,13.592H133.396c-7.792,0-14.204-5.839-14.934-13.592L92.284,150h327.432L393.537,468.408z
			 M451,120h-15H76H61v-15c0-8.271,6.729-15,15-15h105h150h105c8.271,0,15,6.729,15,15V120z"/>
		<path d="M256,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C271,186.716,264.284,180,256,180z"/>
		<path d="M346,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C361,186.716,354.284,180,346,180z"/>
		<path d="M166,180c-8.284,0-15,6.716-15,15v212c0,8.284,6.716,15,15,15s15-6.716,15-15V195C181,186.716,174.284,180,166,180z"/>
</svg>
	`;
}

export function icLogout(w, h) {
  w = w || "16px";
  h = h || "16px";
  return `
	<svg width="${w}" height="${h}" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
	<g clip-path="url(#clip0)">
	<path d="M319.997 277.336C308.2 277.336 298.665 286.894 298.665 298.668V384.003C298.665 395.756 289.106 405.334 277.329 405.334H213.33V85.3377C213.33 67.1192 201.724 50.842 184.275 44.7835L177.959 42.6702H277.329C289.106 42.6702 298.665 52.2482 298.665 64.0059V128.005C298.665 139.779 308.2 149.337 319.997 149.337C331.793 149.337 341.328 139.779 341.328 128.005V64.0059C341.328 28.7211 312.614 0.0065918 277.329 0.0065918H47.9995C47.187 0.0065918 46.5073 0.36987 45.7183 0.475337C44.6909 0.389401 43.7105 0.0065918 42.6675 0.0065918C19.1365 0.0065918 0 19.1392 0 42.6702V426.666C0 444.885 11.6053 461.162 29.0544 467.22L157.44 510.017C161.791 511.361 166.119 512.001 170.666 512.001C194.197 512.001 213.33 492.865 213.33 469.334V448.002H277.329C312.614 448.002 341.328 419.287 341.328 384.003V298.668C341.328 286.894 331.793 277.336 319.997 277.336V277.336Z" fill="black"/>
	<path d="M505.745 198.255L420.41 112.923C414.312 106.822 405.136 104.986 397.16 108.291C389.203 111.599 383.996 119.384 383.996 128.005V192.005H298.665C286.888 192.005 277.329 201.559 277.329 213.336C277.329 225.114 286.888 234.668 298.665 234.668H383.996V298.668C383.996 307.289 389.203 315.074 397.16 318.382C405.136 321.687 414.312 319.851 420.41 313.753L505.745 228.418C514.084 220.079 514.084 206.594 505.745 198.255V198.255Z" fill="black"/>
	</g>
	<defs>
	<clipPath id="clip0">
	<rect width="512" height="512" fill="white"/>
	</clipPath>
	</defs>
	</svg>
	`;
}
