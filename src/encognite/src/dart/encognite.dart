import 'dart:js' as js;
import 'dart:convert';

void en_ascii(String str) {
  var encoded = ASCII.encode(str);
  return encoded;
}

main() {
  js.context['en_ascii'] = en_ascii;
}
