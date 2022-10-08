from http import client
from xml.etree.ElementTree import XML
from flask import Flask
import pymongo
from pymongo import MongoClient
from dataClass.Comment import Comment
import datetime
import functools

cluster = MongoClient('' ,connect=False)

def addComments(data_entries):
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    print("connected to add",cluster,collection)
    for post in data_entries:
        collection.insert_one(post)

def addComment(userid, content, ip):
    post = {}
    post["userid"] = userid
    post["content"] = content
    post["ip"] = ip  
    post["upvote"] = 0
    post["date"] = str(datetime.datetime.now()).split(".")[0]
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    print("connected to add",cluster,collection)
    collection.insert_one(post)
    return post

def readComments(col = None,val = None):
    db = cluster["WebpageCommentDatabase"]
    collection = db["CommentContent"]
    # print("connected to read",cluster,collection)
    if not col:
        x = collection.find()
    else:
        x = collection.find({col: val})
    res = []
    for data in x:
        res.append(data)
    print("Read Successful with ",len(res)," entries")
    def comp(a,b):
        if a["date"] > b["date"]:
            return 1
        elif a["date"] < b["date"]:
            return -1
        else:
            return 0
    res.sort(key=functools.cmp_to_key(comp),reverse=True)
    return res [:10]

def makeComments():
    cs = [Comment(str(id),"2022-10-03","Hello from comment",3) for id in range(10)]
    dataAll = []
    for c in cs:
        data = {
            "userid":c.userId,
            "date":c.date, 
            "content":c.content,
            "upvote":c.upvote,
            }
        dataAll.append(data)
    return dataAll
