function updown(s) {
	s = s.value.toLowerCase();
	var last = s.length - 1;
	var result = "";
	for (var i = last; i >= 0; --i) {
		result += rotateThis(s.charAt(i))
	}

	document.theForm.resultf.value = result; 
}

function rotateThis(c) {
	switch (c) {
		case  'a':
		d = '\u0250';
		break;

		case 'b':
		d = 'q';
		break;

		case 'c':
		d = '\u0254'  ;
		break;

		case 'd':
		d = 'p';
		break;

		case 'e':
		d = '\u01DD';
		break;

		case 'f':
		d = '\u025F' ;
		break;

		case 'g':
		d = 'b';
		break;

		case 'h':
		d = '\u0265';
		break;

		case 'i':
		d = '\u0131';
		break;

		case 'j':
		d = '\u027E';
		break;

		case 'k':
		d = '\u029E';
		break;

		case 'l':
		d = '\u05DF';
		break;

		case 'm':
		d = '\u026F';
		break;

		case 'n':
		d = 'u';
		break;

		case 'o':
		d = 'o';
		break;

		case 'p':
		d = 'd';
		break;

		case 'q':
		d = 'b';
		break;

		case 'r':
		d = '\u0279';
		break;

		case 's':
		d = 's';
		break;

		case 't':
		d = '\u0287';
		break;

		case 'u':
		d = 'n';
		break;

		case 'v':
		d = '\u028C';
		break;

		case 'w':
		d = '\u028D';
		break;

		case 'x':
		d = 'x';
		break;

		case 'y':
		d = '\u028E';
		break;

		case 'z':
		d = 'z';
		break;

		case '[':
		d = ']';
		break;

		case ']':
		d = '[';
		break;

		case '(':
		d = ')';
		break;

		case ')':
		d = '(';
		break;

		case '{':
		d = '}';
		break;

		case '}':
		d = '{';
		break;

		case '?':
		d = '\u00BF'  ;
		break;

		case '\u00BF':
		d = '?';
		break;

		case '!':
		d = '\u00A1';
		break;

		case "\'":
		d = ',';
		break;

		case ',':
		d = "\'";
		break;

		case '.':
		d = '\u02D9';
		break;

		case '_':
		d = '\u203E';
		break;

		case ';':
		d = '\u061B';
		break;

		case '9':
		d = '6';
		break;

		case '6':
		d = '9';
		break;

		default:
		d = c;

	}
	return d;
}