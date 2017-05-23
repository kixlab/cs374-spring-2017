#!/usr/bin/python

# This script runs server side to collect data submitted by game.html
# On courses, user "www" will run this script, so it needs write access to the
# "data" folder. Accomplish this by executing something like "fs setacl ./data www write"

import cgi
import datetime
import json
import os

def main():
    print "Content-type: application/json"
    print
    print

    if not os.path.isdir("./data"):
        os.mkdir("./data")

    remote_ip = os.environ.get("REMOTE_ADDR")
    if remote_ip is None:
        print json.dumps({"success":"false","message":"Didn't get remote ip"})
        return

    data = cgi.FieldStorage().getvalue("data", None)
    if data is None or not isinstance(data,str):
        print json.dumps({"success":"false","message":"Didn't get data"})
        return

    now = str(datetime.datetime.now())
    with open("./data/{0}-{1}.json".format(remote_ip,now),"w") as fp:
        fp.write(data)

    print json.dumps({"success":"true"})


if __name__ == "__main__":
	main()
