function replaceText(text,textarea)
{if(typeof(textarea.caretPos)!="undefined"&&textarea.createTextRange)
{var caretPos=textarea.caretPos;caretPos.text=caretPos.text.charAt(caretPos.text.length-1)==' '?text+' ':text;caretPos.select();}
else if(typeof(textarea.selectionStart)!="undefined")
{var begin=textarea.value.substr(0,textarea.selectionStart);var end=textarea.value.substr(textarea.selectionEnd);var scrollPos=textarea.scrollTop;textarea.value=begin+text+end;if(textarea.setSelectionRange)
{textarea.focus();textarea.setSelectionRange(begin.length+text.length,begin.length+text.length);}
textarea.scrollTop=scrollPos;}
else
{textarea.value+=text;textarea.focus(textarea.value.length-1);}}