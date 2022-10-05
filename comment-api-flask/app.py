from crypt import methods
from pydoc import resolve
import dataAccess
from email.mime import application
from flask import Flask
from flask import json
from flask_cors import CORS, cross_origin
from flask import request
import sys
import os

app = Flask(__name__)
cors = CORS(app, resources={r"/": {"origins": "*"}})

@cross_origin(origin='*',headers=['Content-Type','Access-Control-Allow-Origin'])
@app.route("/getComments",methods=['GET'])
def renderComments():
    # url = request.args.get("url",default = "*",type = str)
    # TODOS renderComments based on args only, now we want to implement add functions first
    comments = dataAccess.readComments("upvote",3)[:10]
    response = app.response_class(
        json.dumps(comments,default=str),
        status=200,
        mimetype='application/json'
    )
    # to allow cross origin when tested on local server
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@app.route("/addComments", methods=["GET","POST"])
def addComments():
    # Post a json to server
    content_type = request.headers.get('Content-Type')
    if (content_type == 'application/json'):
        data = request.get_json()
    else:
        return 'Content-Type not supported!'
    commentContent = data ["commentContent"]
    userid = data ["userid"]
    post = dataAccess.addComment(userid,commentContent)
    response = app.response_class(
        json.dumps(post,default=str),
        status=200,
        mimetype='application/json'
    )
    return response

@app.route("/addUrl",methods=["POST"])
def addUrl():
    pass

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)