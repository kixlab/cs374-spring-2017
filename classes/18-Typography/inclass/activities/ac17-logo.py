#!/usr/bin/python
print "Content-type:text/html\r\n\r\n"
import cookielib
import sys, cgi, re

def main():
  # Get CGI formkey value
  cgiForm = cgi.FieldStorage()
  if cgiForm.has_key('project'):
    project = cgiForm['project'].value
  else:
    print "Provide project name!"
    sys.exit(1)
  
  if cgiForm.has_key('font'):
    font = cgiForm['font'].value
  else:
    print "Provide font name!"
    sys.exit(1)

  print "<html><head><link href='http://fonts.googleapis.com/css?family=" + font + "' rel='stylesheet' type='text/css'>"
  fontName = re.sub(":.*", "", font)
  fontName = re.sub("\+", " ", fontName).title()
  print "<style> body { font-size: 120; font-family: '" + fontName + "';</style></head>"
  print "<body>" + project + "</body></html>"

if __name__ == "__main__":
  main()
